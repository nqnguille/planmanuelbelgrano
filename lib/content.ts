export const CONTENT = {
  nav: {
    logo: 'Plan Manuel Belgrano',
    tag: 'Cáñamo Industrial',
    links: ['El Plan', 'La Planta', 'El Piloto', 'Visión 2035'],
    cta: 'Contacto',
    lang: ['ES', 'EN'],
  },

  hero: {
    eyebrow: 'Horacio, esto es para vos.',
    headline: ['Vaca Muerta', 'ya la hiciste.'],
    sub: 'Ahora viene Vaca Verde.',
    body: 'Cáñamo industrial en Patagonia. Primera mover advantage. Retorno real. Y encima hace bien.',
    cta: 'Ver los números',
    // Swap this URL with the Belgrano video from Gemini when disponible
    videoId: 'OMDRiSLpQuA',
  },

  challenge: {
    label: '02 · La Oportunidad',
    headline: 'El mercado global de biomateriales crece al 15% anual. Nadie lo domina todavía.',
    body: 'El primer jugador de escala captura el 70% del valor. En Vaca Muerta lo entendiste antes que todos. Acá hay otra ventana.',
    cards: [
      {
        number: '€9,2M',
        title: 'Portafolio de créditos de carbono',
        body: 'Proyección acumulada al 2030. Certificados en mercados internacionales. Desde las primeras hectáreas.',
      },
      {
        number: '4.000',
        title: 'Hectáreas disponibles',
        body: 'Canal Mari Menuco, Neuquén. Infraestructura de Vaca Muerta al lado. Logística resuelta.',
      },
      {
        number: '8–15',
        title: 'Toneladas de CO₂ por hectárea por año',
        body: 'Captura verificable, certificable y vendible. No compensación — activo real con precio de mercado.',
      },
    ],
  },

  thesis: {
    label: '03 · La Tesis',
    teaser: 'Si hubieras podido minar Bitcoin en 2010,\n¿cuánto habrías invertido?',
    headline: 'En cada generación, un recurso cambió el tablero. El que llegó primero ganó.',
    body: 'Ferrocarriles, petróleo, shale. Siempre el mismo patrón: ventaja natural + decisión estratégica temprana = escala dominante.',
    timeline: [
      { year: '1880', title: 'Ferrocarriles', body: 'Conectaron un país. Primera mover gana todo.' },
      { year: '1907', title: 'Petróleo', body: 'YPF nació de ver antes que nadie.' },
      { year: '2010', title: 'Vaca Muerta', body: 'Vos lo apostaste cuando nadie creía.', accent: false },
      { year: '2026', title: 'Cáñamo Industrial', body: 'La misma lógica. Una ventana que se cierra.', accent: true },
    ],
  },

  plant: {
    label: '04 · La Planta',
    headline: 'Una planta.\nCuatro mercados.',
    body: 'El cáñamo industrial es versátil, regenerativo y extraordinariamente eficiente. De una misma biomasa nacen soluciones para los desafíos del presente y del futuro.',
    markets: [
      {
        icon: 'CO₂',
        category: 'Carbono',
        metric: '15 t/ha',
        metricLabel: 'CO₂ capturado',
        title: 'Captura CO₂ y regenera suelos',
        body: 'La planta más eficiente del planeta para secuestrar carbono y mejorar la calidad del suelo.',
      },
      {
        icon: '▣',
        category: 'Materiales',
        metric: '3-4 t/ha',
        metricLabel: 'fibra',
        title: 'Fibras para construcción y más',
        body: 'Textiles, bioplásticos, papeles, materiales de construcción de alta performance.',
      },
      {
        icon: '⚡',
        category: 'Energía',
        metric: '8–12 MWh/ha',
        metricLabel: 'potencial energético',
        title: 'Biomasa de alto valor energético',
        body: 'Biomasa aprovechable en cada etapa del proceso. Bajo consumo hídrico.',
      },
      {
        icon: '◉',
        category: 'Alimentación',
        metric: '20–30%',
        metricLabel: 'proteína',
        title: 'Proteína vegetal completa',
        body: 'Alimento completo y balanceado. Alta demanda global creciente.',
      },
    ],
  },

  masterplan: {
    label: '05 · El Masterplan',
    headline: 'De la semilla\na la industria.',
    sub: 'Valor en cada etapa.',
    tagline: 'No exportamos materia prima. Construimos una industria.',
    nodes: [
      { id: 'semilla', label: 'Semilla', desc: 'Variedades certificadas' },
      { id: 'campo', label: 'Campo', desc: 'Cultivo extensivo' },
      { id: 'cosecha', label: 'Cosecha', desc: 'Proceso eficiente' },
      { id: 'fibra', label: 'Fibra', desc: 'Decortización industrial' },
      { id: 'biorefineria', label: 'Biorefinería', desc: 'Transformación integral' },
      { id: 'materiales', label: 'Materiales', desc: 'Hempcrete, textiles' },
      { id: 'viviendas', label: 'Viviendas', desc: 'Construcción federal' },
      { id: 'carbono', label: 'Carbono', desc: 'Créditos certificados' },
    ],
  },

  pilot: {
    label: '06 · El Piloto',
    headline: 'Empezar donde ya existe\ncapacidad de ejecución.',
    body: 'Integrar el cáñamo a la infraestructura y al know-how de Vaca Muerta permite escalar más rápido, con menor riesgo y mayor impacto federal.',
    advantages: [
      'Infraestructura energética',
      'Logística y conectividad',
      'Capital humano y servicios',
      'Cercanía a mercados',
    ],
    location: 'Añelo, Neuquén',
    locationSub: 'Corazón de Vaca Muerta',
  },

  opportunity: {
    label: '07 · Por qué YPF',
    headline: 'Esta industria necesita quien ya sabe construir a escala federal.',
    body: 'No es greenwashing. No es cumplimiento. Es la siguiente plataforma industrial argentina, y YPF tiene todo para ser el primer mover.',
    features: [
      {
        title: 'Infraestructura ya desplegada',
        body: 'Añelo tiene energía, logística, capital humano y servicios. Todo lo que un proyecto agroindustrial de escala necesita para arrancar en meses, no años.',
      },
      {
        title: 'Primer mover advantage real',
        body: 'El mercado global de créditos de carbono de alta integridad vale US$50B en 2030. Nadie en Argentina tiene escala todavía. La ventana está abierta.',
      },
      {
        title: 'Retorno económico concreto',
        body: 'Portafolio de €9,2M en créditos certificados al 2030. Más fibra, materiales y biomasa. No compensación de ESG — activos exportables con precio de mercado.',
      },
      {
        title: 'Escala desde el día uno',
        body: 'YPF puede pasar de piloto a 100.000 hectáreas con la misma lógica que escaló Vaca Muerta: infraestructura existente, operación federal, know-how propio.',
      },
    ],
  },

  vision: {
    label: '08 · Visión 2035',
    headline: 'Argentina\nProductiva.\nSoberana.\nPróspera.\nSostenible.',
    sub: 'Un país que transforma sus recursos naturales en bienestar para su gente.',
    // Swap with Gemini video when available
    bgImage: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EpWXW9qhLTZowUY0tYkwH2OXOb/hf_20260608_054938_e59da2e1-928e-4d7b-98a3-1c410169a99c.png',
    stats: [
      { target: 100000, label: 'Hectáreas cultivadas', suffix: '' },
      { target: 100000, label: 'Viviendas sustentables', suffix: '' },
      { target: 100000, label: 'Empleos directos e indirectos', suffix: '' },
      { target: 1000000, label: 'Toneladas CO₂ capturadas por año', suffix: '' },
    ],
    extra: 'Industria Federal\nde Alto Valor',
  },

  continuity: {
    label: '09 · Una Lógica que Argentina ya conoce',
    headline: 'Inspirado en una lógica que Argentina ya conoce.\nPara construir la próxima.',
    tableHeaders: ['', 'Agro', 'Hidrocarburos', 'Industria Federal de Alto Valor'],
    tableRows: [
      ['Plataforma', 'Suelo', 'Vaca Muerta', 'Cáñamo Industrial'],
      ['Recurso', 'Tierra', 'Petróleo', 'Biomasa'],
      ['Lógica', 'Exportar commodities', 'Extraer y exportar', 'De semilla a industria completa'],
      ['Impacto', 'Divisas', 'Energía + divisas', 'Triple impacto: ambiental, social, económico'],
    ],
    footer: 'Las grandes transformaciones nacionales comienzan cuando una materia prima se convierte en una plataforma industrial.',
  },

  cta: {
    body: 'Vaca Muerta tardó diez años en convencer a todos. Vos lo viste en dos.\nEste es ese momento. Solo que esta vez la plataforma crece.',
    headline: 'Horacio, sumate.',
    cta: 'Hablemos',
    ctaHref: 'mailto:guillermo@ancestra.ar',
    signature: 'Guillermo Sandoval',
    signatureSub: 'Fundador, Flora Cáñamo Neuquino SRL',
  },
}
