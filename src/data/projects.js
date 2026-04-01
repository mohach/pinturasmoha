// Base URL for all photos (direct from pinturasmoha.es uploads)
const BASE = 'https://pinturasmoha.es/wp-content/uploads/2025/12';

export const projects = [
  {
    slug: "piso-en-alaquas",
    title: "Pintura de Piso en Alaquàs",
    location: "Alaquàs, Valencia",
    year: "2025",
    duration: "2 días",
    surface: "Recibidor + comedor",
    services: ["Pintura interior"],
    excerpt: "Recibidor y comedor pintados con tres manos de blanco mate de alta calidad. El cliente buscaba luminosidad y un acabado moderno.",

    // Hero = best "after" shot
    imgMain: `${BASE}/IMG-20251207-WA0005.jpg`,

    // Before photos
    before: [
      {
        src: `${BASE}/IMG-20251207-WA0004-576x1024.jpg`,
        alt: "Recibidor antes de pintar — colores fuertes",
      },
    ],

    // After photos
    after: [
      {
        src: `${BASE}/IMG_20251207_163351-1024x766.jpg`,
        alt: "Comedor después — blanco mate uniforme",
      },
      {
        src: `${BASE}/IMG-20251207-WA0005-1024x766.jpg`,
        alt: "Resultado final recibidor pintado en blanco",
      },
      {
        src: `${BASE}/IMG-20251207-WA0003-766x1024.jpg`,
        alt: "Detalle acabado pintura blanco mate",
      },
    ],

    description: `En este piso realicé un trabajo de pintura en el recibidor y el comedor, situado en la calle Alcoi de Alaquàs. El recibidor estaba pintado con colores fuertes y el comedor en azul suave. El cliente buscaba un cambio total para ganar luminosidad y un acabado más moderno.

Preparé correctamente las superficies y apliqué tres manos de pintura blanca mate de alta calidad en paredes y techos, logrando una cobertura uniforme y eliminando por completo los colores anteriores. El acabado mate aporta un aspecto limpio, luminoso y elegante.

El resultado final es un recibidor y un comedor más claros y acogedores, con un trabajo cuidado al detalle y la vivienda limpia al finalizar.`,
  },

  {
    slug: "piso-en-torrent",
    title: "Piso en Torrent",
    location: "Torrent, Valencia",
    year: "2020",
    duration: "1 semana",
    surface: "Piso completo + puertas",
    services: ["Pintura interior", "Lacado de puertas"],
    excerpt: "Piso completo pintado de blanco con tres manos. Puertas lijadas, imprimadas y lacadas en gris. Resultado luminoso y moderno.",

    // Hero = best "after" shot
    imgMain: `${BASE}/IMG_20201010_154758-scaled.jpg`,

    // Before photos
    before: [
      {
        src: `${BASE}/IMG_20200924_111000-768x1024.jpg`,
        alt: "Habitación antes — paredes de colores",
      },
      {
        src: `${BASE}/IMG_20200924_111016-768x1024.jpg`,
        alt: "Pasillo antes de pintar",
      },
      {
        src: `${BASE}/IMG_20200924_110950-768x1024.jpg`,
        alt: "Otra estancia antes — color original",
      },
    ],

    // After photos
    after: [
      {
        src: `${BASE}/IMG_20201010_154837-768x1024.jpg`,
        alt: "Resultado final — blanco luminoso",
      },
      {
        src: `${BASE}/IMG_20201010_154758-1-768x1024.jpg`,
        alt: "Pasillo después — paredes blancas uniformes",
      },
      {
        src: `${BASE}/IMG_20201010_154751-768x1024.jpg`,
        alt: "Habitación después — acabado impecable",
      },
      {
        src: `${BASE}/IMG_20201002_135308-768x1024.jpg`,
        alt: "Puerta lacada en gris — acabado liso",
      },
      {
        src: `${BASE}/IMG_20201001_120311-768x1024.jpg`,
        alt: "Detalle lacado puerta gris moderno",
      },
      {
        src: `${BASE}/IMG_20201001_120246-768x1024.jpg`,
        alt: "Puerta interior lacada en gris resistente",
      },
      {
        src: `${BASE}/IMG_20201001_120217-768x1024.jpg`,
        alt: "Vista general piso renovado en Torrent",
      },
    ],

    description: `Pintura de piso completo en Torrent. Este piso estaba con paredes de colores y lo pinté todo de blanco, aplicando tres manos para que quedara uniforme y luminoso.

Las puertas las lijé, di una mano de imprimación y después dos manos de pintura esmalte/laca gris, logrando un acabado liso, resistente y moderno.

Me aseguré de que todo quedara limpio y cuidado, dejando el piso listo para entrar a vivir.`,
  },
];
