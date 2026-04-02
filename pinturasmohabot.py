"""
pinturasmohabot.py
──────────────────
Genera un artículo de blog diario para pinturasmoha.es usando Gemini.
Guarda el .md en src/content/blog/ y las imágenes en public/images/blog/.
El commit y push lo gestiona GitHub Actions (no este script).

Dependencias:
    pip install google-genai gitpython Pillow
"""

import os
import io
import re
import datetime
from google import genai
from google.genai import types
from PIL import Image

# ── CONFIGURACIÓN ──────────────────────────────────────────────────────────────
# La API key se lee desde variable de entorno (GitHub Secret: GEMINI_API_KEY)
API_KEY = os.environ.get("GEMINI_API_KEY", "")

# Rutas relativas al repo — funciona tanto en GitHub Actions como en local
REPO_ROOT   = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(REPO_ROOT, "src", "content", "blog")
IMAGES_DIR  = os.path.join(REPO_ROOT, "public", "images", "blog")

# ── PROMPTS ────────────────────────────────────────────────────────────────────
SYSTEM_PROMPT = """
Eres un redactor SEO experto en el sector de la pintura y decoración de viviendas en España.
Escribes para 'Pinturas Moha', empresa de pintura profesional en Alaquàs, Valencia.

Normas obligatorias:
- Idioma: Castellano de España estrictamente (imprimación, rodapiés, gotelé, pladur, pintura plástica, etc.)
- Tono: Profesional, técnico pero cercano, con autoridad y experiencia real
- Longitud: Mínimo 600 palabras
- Estructura: Introducción, 3-4 subtítulos H2, conclusión con consejo de mantenimiento
- SEO: Incluye palabras clave naturales relacionadas con pintura de viviendas en Valencia
- NO menciones precios concretos
- SÍ puedes mencionar que Pinturas Moha ofrece presupuesto gratuito en Valencia
"""

TOPICS = [
    "Cómo eliminar el gotelé sin hacer obra: técnica húmeda paso a paso",
    "Tendencias en colores de pintura para el hogar en 2025",
    "Cómo tratar y pintar paredes con humedades",
    "Diferencias entre pintura plástica, vinílica y acrílica",
    "Cuándo y cómo pintar la fachada exterior de una vivienda",
    "Cómo elegir el color perfecto para cada habitación",
    "Preparación de superficies antes de pintar: la clave del resultado final",
    "Pintura de puertas y carpintería: lacado profesional en casa",
    "Cómo pintar un techo correctamente sin marcas ni manchas",
    "Errores más comunes al pintar tú mismo y cómo evitarlos",
    "Pintura antihumedad: cuándo usarla y cómo aplicarla",
    "Colores que hacen los espacios más grandes y luminosos",
    "Cómo pintar un piso completo: planificación y orden de trabajo",
    "Acabados de pintura: mate, satinado o brillo, cuál elegir",
    "Pintura de exteriores en verano: consejos para el clima mediterráneo",
]

# ── CLIENTE GEMINI ─────────────────────────────────────────────────────────────
def get_client():
    if not API_KEY:
        raise ValueError("GEMINI_API_KEY no está definida en las variables de entorno.")
    return genai.Client(api_key=API_KEY)

# ── GENERAR ARTÍCULO ───────────────────────────────────────────────────────────
def generate_article(client, topic: str) -> tuple[str, str, list[str]]:
    """
    Genera el artículo y devuelve (titulo, cuerpo_markdown, lista_prompts_imagen).
    """
    print(f"✍️  Generando artículo: {topic}")

    prompt = f"""{SYSTEM_PROMPT}

Escribe un artículo completo en Markdown sobre el siguiente tema:
"{topic}"

Formato obligatorio:
1. Primera línea: el título del artículo (sin # delante, solo el texto)
2. Línea en blanco
3. El cuerpo del artículo en Markdown con subtítulos H2 (##)

Al final del artículo añade exactamente esta línea:
IMAGE_PROMPTS_START
Luego 2 descripciones de imagen en inglés (una por línea), realistas y relacionadas con el artículo.
Cada descripción debe empezar con "- "
"""

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt,
    )

    text = response.text.strip()

    # Split at image prompts marker
    if "IMAGE_PROMPTS_START" in text:
        article_part, prompts_part = text.split("IMAGE_PROMPTS_START", 1)
    else:
        article_part = text
        prompts_part = ""

    lines = article_part.strip().split("\n")

    # First non-empty line is the title
    title = ""
    body_lines = []
    found_title = False
    for line in lines:
        stripped = line.strip().lstrip("#").strip()
        if not found_title and stripped:
            title = stripped
            found_title = True
        elif found_title:
            body_lines.append(line)

    body = "\n".join(body_lines).strip()

    # Extract image prompts
    image_prompts = []
    for line in prompts_part.strip().split("\n"):
        clean = line.strip().lstrip("- ").strip()
        if len(clean) > 10:
            image_prompts.append(clean)

    return title, body, image_prompts[:2]


# ── GENERAR IMÁGENES ───────────────────────────────────────────────────────────
def generate_images(client, prompts: list[str], slug: str) -> list[str]:
    """
    Genera imágenes con Gemini y las guarda en public/images/blog/.
    Devuelve lista de rutas públicas /images/blog/{filename}.
    """
    os.makedirs(IMAGES_DIR, exist_ok=True)
    saved = []

    for i, prompt in enumerate(prompts):
        print(f"🎨 Generando imagen {i + 1}: {prompt[:60]}...")
        try:
            res = client.models.generate_content(
                model="gemini-2.0-flash-exp-image-generation",
                contents=f"Professional, realistic photo for a painting services blog post: {prompt}. Style: clean, bright, professional.",
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE", "TEXT"]
                ),
            )
            for part in res.candidates[0].content.parts:
                if hasattr(part, "inline_data") and part.inline_data:
                    img = Image.open(io.BytesIO(part.inline_data.data))
                    filename = f"{slug}-{i}.png"
                    filepath = os.path.join(IMAGES_DIR, filename)
                    img.save(filepath, "PNG", optimize=True)
                    saved.append(f"/images/blog/{filename}")
                    print(f"   ✅ Imagen guardada: {filepath}")
                    break
        except Exception as e:
            print(f"   ⚠️  Imagen {i + 1} fallida: {e}")

    return saved


# ── GUARDAR MARKDOWN ───────────────────────────────────────────────────────────
def save_markdown(slug: str, title: str, description: str, body: str,
                  image_path: str, date: datetime.date) -> str:
    """
    Escribe el archivo .md con frontmatter en src/content/blog/.
    """
    os.makedirs(CONTENT_DIR, exist_ok=True)

    # Sanitize title and description for YAML (escape quotes)
    safe_title = title.replace('"', '\\"')
    safe_desc  = description.replace('"', '\\"')

    frontmatter = f"""---
title: "{safe_title}"
date: {date.isoformat()}
description: "{safe_desc}"
image: "{image_path}"
author: "Moha"
tags: ["pintura", "Valencia", "consejos"]
---
"""

    filepath = os.path.join(CONTENT_DIR, f"{slug}.md")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(frontmatter)
        f.write("\n")
        f.write(body)

    print(f"📄 Artículo guardado: {filepath}")
    return filepath


# ── MAIN ───────────────────────────────────────────────────────────────────────
def run():
    today = datetime.date.today()
    slug  = f"pintura-{today.strftime('%Y-%m-%d')}"

    # Check if today's post already exists
    existing = os.path.join(CONTENT_DIR, f"{slug}.md")
    if os.path.exists(existing):
        print(f"ℹ️  Ya existe un artículo para hoy: {existing}")
        return

    client = get_client()

    # Pick topic based on day of year so it rotates
    topic = TOPICS[today.timetuple().tm_yday % len(TOPICS)]

    # 1. Generate article
    title, body, img_prompts = generate_article(client, topic)
    print(f"   Título: {title}")

    # 2. Generate images
    image_paths = generate_images(client, img_prompts, slug)
    header_image = image_paths[0] if image_paths else ""

    # 3. Build short description from first paragraph of body
    first_para = ""
    for line in body.split("\n"):
        clean = line.strip()
        if clean and not clean.startswith("#"):
            first_para = clean[:160]
            break
    description = first_para or topic

    # 4. Save markdown
    save_markdown(
        slug=slug,
        title=title,
        description=description,
        body=body,
        image_path=header_image,
        date=today,
    )

    print("✅ Artículo listo. GitHub Actions hará el commit y push.")


if __name__ == "__main__":
    run()
