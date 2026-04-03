"""
pinturasmohabot.py
──────────────────
Genera un artículo de blog diario para pinturasmoha.es.
- Texto:    DeepSeek API (barato, calidad GPT-4)
- Imágenes: Unsplash API (gratis, fotos reales de pintura)
- Commit/push: GitHub Actions (no este script)

Secrets de GitHub necesarios:
    DEEPSEEK_API_KEY    → platform.deepseek.com
    UNSPLASH_ACCESS_KEY → unsplash.com/developers (gratis)

Dependencias:
    pip install requests Pillow
"""

import os
import io
import datetime
import requests
from PIL import Image

# ── CONFIGURACIÓN ──────────────────────────────────────────────────────────────
DEEPSEEK_API_KEY    = os.environ.get("DEEPSEEK_API_KEY", "")
UNSPLASH_ACCESS_KEY = os.environ.get("UNSPLASH_ACCESS_KEY", "")

REPO_ROOT   = os.path.dirname(os.path.abspath(__file__))
CONTENT_DIR = os.path.join(REPO_ROOT, "src", "content", "blog")
IMAGES_DIR  = os.path.join(REPO_ROOT, "public", "images", "blog")

DEEPSEEK_URL = "https://api.deepseek.com/chat/completions"
UNSPLASH_URL = "https://api.unsplash.com/search/photos"

# ── TEMAS ──────────────────────────────────────────────────────────────────────
TOPICS = [
    ("Cómo eliminar el gotelé sin hacer obra: técnica húmeda paso a paso",       "wall texture plastering spatula"),
    ("Tendencias en colores de pintura para el hogar en 2025",                   "interior wall paint color modern"),
    ("Cómo tratar y pintar paredes con humedades",                               "damp wall moisture paint repair"),
    ("Diferencias entre pintura plástica, vinílica y acrílica",                  "paint cans hardware store"),
    ("Cuándo y cómo pintar la fachada exterior de una vivienda",                 "house exterior facade painting"),
    ("Cómo elegir el color perfecto para cada habitación",                       "color swatches paint samples wall"),
    ("Preparación de superficies antes de pintar: la clave del resultado final", "painter preparing wall sanding"),
    ("Pintura de puertas y carpintería: lacado profesional",                     "painting door white lacquer brush"),
    ("Cómo pintar un techo correctamente sin marcas",                            "painter ceiling roller white paint"),
    ("Errores más comunes al pintar tú mismo y cómo evitarlos",                  "diy painting roller wall mistakes"),
    ("Pintura antihumedad: cuándo usarla y cómo aplicarla",                      "damp proof paint waterproof wall"),
    ("Colores que hacen los espacios más grandes y luminosos",                   "bright white modern living room"),
    ("Cómo pintar un piso completo: planificación y orden de trabajo",           "painter interior renovation flat"),
    ("Acabados de pintura: mate, satinado o brillo, cuál elegir",               "paint finish matte gloss roller"),
    ("Pintura de exteriores en verano: consejos para el clima mediterráneo",     "exterior house painting sunny day"),
]

# ── SYSTEM PROMPT ──────────────────────────────────────────────────────────────
SYSTEM_PROMPT = """Eres un redactor SEO experto en pintura y decoración de viviendas en España.
Escribes para 'Pinturas Moha', empresa de pintura profesional en Alaquàs, Valencia.

Normas:
- Idioma: Castellano de España (imprimación, rodapiés, gotelé, pladur, pintura plástica)
- Tono: Profesional, técnico pero cercano, con autoridad y experiencia real
- Longitud: Mínimo 600 palabras
- Estructura: Introducción, 3-4 subtítulos H2 (##), conclusión con consejo de mantenimiento
- SEO: palabras clave naturales sobre pintura de viviendas en Valencia
- NO menciones precios concretos
- SÍ menciona que Pinturas Moha ofrece presupuesto gratuito en Alaquàs y Valencia"""

# ── DEEPSEEK: GENERAR ARTÍCULO ─────────────────────────────────────────────────
def generate_article(topic: str) -> tuple[str, str]:
    """
    Llama a DeepSeek y devuelve (titulo, cuerpo_markdown).
    """
    if not DEEPSEEK_API_KEY:
        raise ValueError("DEEPSEEK_API_KEY no está definida.")

    print(f"✍️  Generando artículo sobre: {topic}")

    user_prompt = f"""Escribe un artículo completo en Markdown sobre:
"{topic}"

Formato obligatorio:
1. Primera línea: el título del artículo (sin # delante, solo el texto)
2. Línea en blanco
3. Cuerpo del artículo con subtítulos H2 (##)

No añadas nada más antes del título."""

    payload = {
        "model": "deepseek-chat",
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user",   "content": user_prompt},
        ],
        "temperature": 0.7,
        "max_tokens":  2000,
    }

    headers = {
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}",
        "Content-Type":  "application/json",
    }

    response = requests.post(DEEPSEEK_URL, json=payload, headers=headers, timeout=60)
    response.raise_for_status()

    text = response.json()["choices"][0]["message"]["content"].strip()

    # First non-empty line = title, rest = body
    lines = text.split("\n")
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
    print(f"   ✅ Título: {title}")
    return title, body


# ── UNSPLASH: DESCARGAR IMAGEN ─────────────────────────────────────────────────
def download_image(query: str, slug: str) -> str:
    """
    Busca en Unsplash con `query`, descarga la primera foto y la guarda.
    Devuelve la ruta pública /images/blog/{slug}-0.jpg o "" si falla.
    """
    if not UNSPLASH_ACCESS_KEY:
        print("   ⚠️  UNSPLASH_ACCESS_KEY no definida — sin imagen.")
        return ""

    print(f"🖼️  Buscando imagen: {query}")

    try:
        params = {
            "query":       query,
            "per_page":    3,
            "orientation": "landscape",
            "content_filter": "high",
        }
        headers = {"Authorization": f"Client-ID {UNSPLASH_ACCESS_KEY}"}

        res = requests.get(UNSPLASH_URL, params=params, headers=headers, timeout=15)
        res.raise_for_status()
        results = res.json().get("results", [])

        if not results:
            print("   ⚠️  Sin resultados en Unsplash.")
            return ""

        # Pick first result
        photo     = results[0]
        image_url = photo["urls"]["regular"]  # ~1080px wide
        alt_text  = photo.get("alt_description", query)

        # Download the image
        img_res = requests.get(image_url, timeout=30)
        img_res.raise_for_status()

        # Save as JPEG
        os.makedirs(IMAGES_DIR, exist_ok=True)
        filename = f"{slug}-0.jpg"
        filepath = os.path.join(IMAGES_DIR, filename)

        img = Image.open(io.BytesIO(img_res.content))
        img = img.convert("RGB")
        img.save(filepath, "JPEG", quality=85, optimize=True)

        print(f"   ✅ Imagen guardada: {filepath}")
        return f"/images/blog/{filename}"

    except Exception as e:
        print(f"   ⚠️  Error descargando imagen: {e}")
        return ""


# ── GUARDAR MARKDOWN ───────────────────────────────────────────────────────────
def save_markdown(slug: str, title: str, description: str,
                  body: str, image_path: str, date: datetime.date) -> str:
    os.makedirs(CONTENT_DIR, exist_ok=True)

    safe_title = title.replace('"', '\\"')
    safe_desc  = description.replace('"', '\\"')

    content = f"""---
title: "{safe_title}"
date: {date.isoformat()}
description: "{safe_desc}"
image: "{image_path}"
author: "Moha"
tags: ["pintura", "Valencia", "consejos"]
---

{body}
"""

    filepath = os.path.join(CONTENT_DIR, f"{slug}.md")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"📄 Artículo guardado: {filepath}")
    return filepath


# ── MAIN ───────────────────────────────────────────────────────────────────────
def run():
    today = datetime.date.today()
    slug  = f"pintura-{today.strftime('%Y-%m-%d')}"

    # Skip if today's post already exists
    if os.path.exists(os.path.join(CONTENT_DIR, f"{slug}.md")):
        print(f"ℹ️  Ya existe el artículo de hoy: {slug}.md")
        return

    # Pick topic by day of year — rotates through all topics
    topic, img_query = TOPICS[today.timetuple().tm_yday % len(TOPICS)]

    # 1. Generate article text with DeepSeek
    title, body = generate_article(topic)

    # 2. Download image from Unsplash
    image_path = download_image(img_query, slug)

    # 3. Build short description from first body paragraph
    description = ""
    for line in body.split("\n"):
        clean = line.strip()
        if clean and not clean.startswith("#"):
            description = clean[:160]
            break
    if not description:
        description = topic

    # 4. Save markdown file
    save_markdown(
        slug=slug,
        title=title,
        description=description,
        body=body,
        image_path=image_path,
        date=today,
    )

    print("✅ Listo. GitHub Actions hará el commit y push automáticamente.")


if __name__ == "__main__":
    run()
