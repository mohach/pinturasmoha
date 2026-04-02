// All images verified from Unsplash search results — painting/decorating specific
// URL format: https://images.unsplash.com/photo-{ID}
export const posts = [
  {
    slug: "elegir-color-habitacion",
    cat: "Consejos",
    title: "Cómo elegir el color perfecto para cada habitación",
    excerpt: "La orientación, la luz y el uso del espacio determinan qué color funcionará mejor. Los criterios que uso en cada proyecto para acertar siempre.",
    date: "Enero 2025",
    readTime: "6 min",
    // Yoann Siloine — white paint roller, close up, LiDVw7tZPfY
    img: "https://images.unsplash.com/photo-1516562309708-05f3b2b2c238?w=900&h=500&q=80&fit=crop&auto=format",
    imgAlt: "Rodillo de pintura blanco — elección de color para paredes",
  },
  {
    slug: "quitar-gotele-sin-obra",
    cat: "Técnicas",
    title: "Cómo eliminar el gotelé sin obra ni polvo",
    excerpt: "El método húmedo es la forma más eficiente de eliminar el gotelé. Paso a paso, sin convertir tu casa en una obra.",
    date: "Febrero 2025",
    readTime: "7 min",
    // Ernys — man painting a wall with paint roller, 57ldq9age5U
    img: "https://images.unsplash.com/photo-1717427124543-c2e21d6df04e?w=900&h=500&q=80&fit=crop&auto=format",
    imgAlt: "Pintor aplicando pintura con rodillo en pared blanca",
  },
  {
    slug: "cuando-pintar-fachada",
    cat: "Exterior",
    title: "Cuándo es el mejor momento para pintar la fachada",
    excerpt: "La temperatura, la humedad y la lluvia influyen decisivamente en el resultado. Los meses ideales para fachadas en Valencia.",
    date: "Marzo 2025",
    readTime: "5 min",
    // Andrew Itaga — person using paint roller on wall, rMVjOX8nm2U
    img: "https://images.unsplash.com/photo-1693941854562-0caed79aa8c0?w=900&h=500&q=80&fit=crop&auto=format",
    imgAlt: "Pintor usando rodillo para pintar pared exterior",
  },
  {
    slug: "pintura-plastica-vs-vinilica",
    cat: "Materiales",
    title: "Pintura plástica vs vinílica: cuál elegir",
    excerpt: "Plástica, vinílica, satinada, mate… Las diferencias reales y cuándo usar cada tipo.",
    date: "Abril 2025",
    readTime: "5 min",
    // henry perks — tin of white paint with red brush, dw5fYCa8kFs
    img: "https://images.unsplash.com/photo-1622024483694-31b7e5e2e7de?w=900&h=500&q=80&fit=crop&auto=format",
    imgAlt: "Bote de pintura blanca con brocha — materiales de pintura profesional",
  },
  {
    slug: "tendencias-color-2025",
    cat: "Inspiración",
    title: "Tendencias en colores para el hogar en 2025",
    excerpt: "Tonos tierra, verde salvia y azul noche dominan este año. Las paletas más demandadas y cómo incorporarlas.",
    date: "Mayo 2025",
    readTime: "6 min",
    // Loewe Technology — living room green walls white sofa, oNemjsGty0E
    img: "https://images.unsplash.com/photo-1679066534282-4a2e25fb4bc8?w=900&h=500&q=80&fit=crop&auto=format",
    imgAlt: "Salón moderno con paredes verdes y sofá blanco — tendencias 2025",
  },
  {
    slug: "errores-pintar-tu-mismo",
    cat: "Bricolaje",
    title: "5 errores que cometes cuando pintas tú mismo",
    excerpt: "No preparar la superficie, saltarse la imprimación, comprar pintura barata… Los fallos más comunes y cómo evitarlos.",
    date: "Junio 2025",
    readTime: "5 min",
    // Theme Photos — blue paint roller on white wall, Cl-OpYWFFm0
    img: "https://images.unsplash.com/photo-1562259920-8e99e3b3cc93?w=900&h=500&q=80&fit=crop&auto=format",
    imgAlt: "Rodillo azul aplicando pintura en pared blanca — errores al pintar",
  },
];

export const postBodies = {
  "elegir-color-habitacion": `<h2>El color lo cambia todo</h2>
<p>Elegir el color de una habitación es probablemente la decisión más importante de cualquier reforma. Un color equivocado puede hacer que un espacio parezca más pequeño, más oscuro o simplemente incómodo. Con los criterios correctos, sin embargo, acertar es mucho más sencillo de lo que parece.</p>
<p>Después de años pintando en Valencia, he aprendido que el color ideal no es solo cuestión de gusto personal: depende de la orientación de la habitación, la luz natural disponible, el tamaño del espacio y el uso que se le va a dar.</p>
<h2>La orientación importa más de lo que crees</h2>
<p>Las habitaciones orientadas al norte reciben luz fría y tenue. En estos casos, los tonos cálidos como el blanco roto, el beige o los amarillos suaves compensan esa frialdad. Las habitaciones al sur reciben mucha luz directa; aquí puedes permitirte tonos más frescos: azules suaves, verdes grisáceos o lavandas.</p>
<div class="art-tip"><strong>Truco pro:</strong> Antes de comprar la pintura, pon una muestra en la pared y obsérvala a distintas horas del día. El color cambia radicalmente según la luz.</div>
<h2>La regla del 60-30-10</h2>
<p>Divide los colores del espacio en tres proporciones: <strong>60%</strong> el color dominante (paredes y suelo), <strong>30%</strong> el secundario (muebles y textiles grandes), y <strong>10%</strong> el acento (cojines, cuadros, objetos pequeños). Garantiza un equilibrio visual naturalmente armonioso.</p>
<h2>Por habitación</h2>
<h3>Salón</h3>
<p>Los tonos tierra como terracota suave, beige tostado o gris cálido funcionan muy bien. El verde salvia es actualmente uno de los más demandados: transmite calma y conecta con la naturaleza.</p>
<h3>Dormitorio</h3>
<p>Para dormir bien necesitas colores que bajen el ritmo: azules medios, verdes grisáceos y lavandas suaves. Evita el rojo, el naranja intenso o el amarillo brillante.</p>
<h3>Cocina y baños</h3>
<p>Opta siempre por pinturas con <strong>acabado satinado o semi-brillo</strong>: más resistentes a la humedad y más fáciles de limpiar.</p>
<div class="art-tip"><strong>Consejo final:</strong> Si te da miedo un color atrevido, prueba primero con una pared de acento. Si convence, extiendes. Si no, solo has pintado una pared.</div>`,

  "quitar-gotele-sin-obra": `<h2>El gotelé: el gran enemigo del hogar moderno</h2>
<p>Si tienes un piso construido entre los años 70 y los 90, lo más probable es que tus paredes estén cubiertas de gotelé. La buena noticia: quitarlo es posible sin picar las paredes ni hacer una obra mayor.</p>
<h2>El método húmedo</h2>
<p>El truco consiste en humedecer el gotelé antes de trabajarlo. Cuando la textura absorbe agua, se ablanda y es mucho más fácil de desprender sin generar polvo fino.</p>
<h3>Materiales necesarios</h3>
<ul>
<li>Esponja grande o pulverizador de agua</li>
<li>Espátula ancha de al menos 40 cm</li>
<li>Masilla de acabado o pasta de alisado</li>
<li>Lija de grano 120 y grano 180</li>
<li>Imprimación selladora</li>
</ul>
<h3>El proceso paso a paso</h3>
<p><strong>1. Protege la zona.</strong> Cubre suelo y muebles con plásticos.</p>
<p><strong>2. Humedece la pared.</strong> Moja unos 2 m² y espera 10–15 minutos.</p>
<p><strong>3. Raspa con la espátula.</strong> Movimientos horizontales firmes hasta reducir el relieve al máximo.</p>
<div class="art-tip"><strong>Clave:</strong> No dejes que la zona se seque mientras trabajas. Si el gotelé vuelve a endurecerse, humedécelo de nuevo.</div>
<p><strong>4. Pasta de alisado.</strong> Una capa fina en movimientos cruzados para rellenar huecos.</p>
<p><strong>5. Lija y repasa.</strong> Grano 120 al secar, segunda capa si hace falta, finaliza con grano 180.</p>
<p><strong>6. Imprimación y pintura.</strong> Selladora antes de pintar para adhesión uniforme.</p>`,

  "cuando-pintar-fachada": `<h2>Pintar en exterior no es como pintar dentro</h2>
<p>La pintura exterior está completamente expuesta al clima. Temperatura, humedad, viento y lluvia son factores determinantes en el resultado final.</p>
<h2>Las condiciones ideales</h2>
<ul>
<li><strong>Temperatura:</strong> entre 10 °C y 30 °C.</li>
<li><strong>Humedad relativa:</strong> por debajo del 85%.</li>
<li><strong>Sin lluvia:</strong> ni durante la aplicación ni en las 24–48 horas siguientes.</li>
<li><strong>Sin sol directo:</strong> seca la pintura antes de que pueda adherirse bien.</li>
</ul>
<h2>Los mejores meses en Valencia</h2>
<h3>Primavera (marzo–mayo) — Ideal</h3>
<p>Temperaturas suaves, baja probabilidad de lluvia, ausencia del calor extremo. Las noches frescas favorecen un secado progresivo. La mejor época sin duda.</p>
<h3>Otoño (septiembre–noviembre) — Muy recomendable</h3>
<p>Casi tan bueno como la primavera. Temperaturas en descenso, menos sol directo y humedad manejable.</p>
<h3>Verano (junio–agosto) — Con precauciones</h3>
<p>Solo en horarios extremos: 7–11 h o 17–20 h. El calor al mediodía es el mayor enemigo.</p>
<h3>Invierno (diciembre–febrero) — Evitar</h3>
<p>Bajas temperaturas, lluvia frecuente y alta humedad. Solo en urgencias con pinturas especiales.</p>
<div class="art-tip"><strong>Consejo:</strong> Revisa el parte meteorológico varios días antes. En Valencia el tiempo puede cambiar rápidamente.</div>`,

  "pintura-plastica-vs-vinilica": `<h2>La jungla de las pinturas</h2>
<p>Entrar en la sección de pinturas de una ferretería puede ser abrumador. Te explico las diferencias que realmente importan.</p>
<h2>Pintura plástica</h2>
<p>La más común en interiores residenciales. Contiene resinas de PVA que le dan durabilidad y lavabilidad. Precio asequible, buena cobertura en pocas manos, acabado mate muy popular en salones y dormitorios.</p>
<h2>Pintura vinílica</h2>
<p>Contiene resinas de vinilo: mayor flexibilidad y resistencia a la humedad. Ideal para cocinas, baños y fachadas. Mayor durabilidad, coste algo superior.</p>
<div class="art-tip"><strong>Mi recomendación:</strong> Para la mayoría de habitaciones, una plástica de buena marca es más que suficiente. Reserva la vinílica para cocinas, baños y exterior.</div>
<h2>El acabado importa tanto como el tipo</h2>
<h3>Mate</h3>
<p>Absorbe la luz, disimula imperfecciones. Ideal para dormitorios y salones. El menos resistente al lavado.</p>
<h3>Satinado</h3>
<p>Ligero brillo, más resistente y fácil de limpiar. Mi favorito para cocinas, baños, pasillos e infantiles.</p>
<h3>Brillo</h3>
<p>Muy resistente pero acusa todas las imperfecciones. Solo para puertas, marcos y rodapiés.</p>`,

  "tendencias-color-2025": `<h2>El color como protagonista</h2>
<p>En 2025 la tendencia es clara: espacios que conectan con la naturaleza, la calidez y el bienestar. Atrás quedaron los blancos puros y los grises fríos.</p>
<h2>Los colores protagonistas</h2>
<h3>Verde salvia y verde musgo</h3>
<p>El verde en todas sus variantes terrosas es el color del momento. El verde salvia —grisáceo y desaturado— es especialmente versátil: salones, dormitorios, incluso cocinas. Transmite calma y sofisticación discreta.</p>
<h3>Terracota y ocre</h3>
<p>Los tonos tierra siguen muy demandados. La terracota encaja perfectamente con el clima mediterráneo.</p>
<div class="art-tip"><strong>Combinación ganadora:</strong> Terracota suave en la pared, muebles de madera clara, textiles en blanco roto.</div>
<h3>Azul noche e índigo</h3>
<p>Un azul oscuro y profundo en la pared del fondo crea una atmósfera elegante y envolvente. Contrasta perfectamente con dorados y maderas oscuras.</p>
<h3>Blanco roto y crema</h3>
<p>El blanco puro está perdiendo terreno frente a blancos cálidos: marfil, crema, hueso. Más acogedores sin perder luminosidad.</p>
<h2>Cómo aplicar sin miedo</h2>
<p>Empieza con una pared de acento. Observa durante una semana. Si convence, extiendes. Si no, solo has pintado una pared.</p>`,

  "errores-pintar-tu-mismo": `<h2>Pintar parece fácil… hasta que no lo es</h2>
<p>No hay nada malo en querer pintar tu casa tú mismo. Sin embargo, hay errores muy comunes que arruinan el resultado.</p>
<h2>Error 1: No preparar bien la superficie</h2>
<p>El error más común y el más costoso. Si la pared tiene grietas, agujeros o pintura vieja que se desprende, la nueva pintura tendrá los mismos problemas en semanas. Limpia, repara, deja secar y lija antes de pintar.</p>
<h2>Error 2: Saltarse la imprimación</h2>
<p>La imprimación garantiza adhesión correcta, cobertura en menos manos y mayor durabilidad. Especialmente importante en yeso nuevo, superficies porosas o al cambiar de oscuro a claro.</p>
<div class="art-tip"><strong>Regla de oro:</strong> Si dudas entre imprimar o no, imprime siempre.</div>
<h2>Error 3: Comprar pintura barata</h2>
<p>Las pinturas de precio muy bajo tienen poca proporción de pigmento y resina. Con una buena marca cubrirás en dos manos lo que con una barata necesitas cuatro.</p>
<h2>Error 4: Usar el rodillo equivocado</h2>
<p>Paredes lisas: pelo corto (6–9 mm). Paredes rugosas: pelo largo (12–18 mm). Los rodillos baratos sueltan pelusa en la pintura.</p>
<h2>Error 5: No proteger lo que no se pinta</h2>
<p>Una buena cinta de carrocero y plásticos de protección son inversiones mínimas que evitan horas de limpieza posterior. Retira la cinta siempre mientras la pintura aún está húmeda.</p>`,
};
