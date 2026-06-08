export const CONTENT = {
  nav: {
    logo: 'Plan Manuel Belgrano',
    tag: 'Cáñamo Industrial',
    links: ['El Plan', 'La Planta', 'El Piloto', 'Visión 2035'],
    cta: 'Contacto',
    lang: ['ES', 'EN'],
  },

  hero: {
    headline: ['De Vaca Muerta', 'a Vaca Verde.'],
    sub: 'La próxima plataforma industrial argentina no se extrae.\nSe cultiva.',
    body: 'Un masterplan para capturar carbono, construir viviendas, generar empleo y desarrollar una nueva industria federal basada en cáñamo industrial.',
    cta: 'Explorar el Plan',
    // Swap this URL with the Belgrano video from Gemini when disponible
    videoId: 'OMDRiSLpQuA',
  },

  challenge: {
    label: '02 · El Desafío',
    headline: 'Argentina encontró petróleo. Ahora necesita encontrar su próxima plataforma industrial.',
    body: 'En cada generación, una materia prima cambió el destino del país. La pregunta no es si habrá una próxima. La pregunta es si Argentina llegará preparada.',
    cards: [
      {
        number: '1',
        title: 'Nueva Industria Federal',
        body: 'Un recurso renovable con potencial de escala global, cultivable en todo el país.',
      },
      {
        number: '2',
        title: 'Activos Ambientales Propios',
        body: 'Argentina puede producir sus propios créditos de carbono en lugar de comprarlos.',
      },
      {
        number: '3',
        title: 'Soberanía Productiva',
        body: 'De la semilla al producto final. Una cadena de valor completa en territorio argentino.',
      },
    ],
  },

  thesis: {
    label: '03 · La Tesis',
    teaser: 'Si hubieras podido minar Bitcoin en 2010,\n¿cuánto habrías invertido?',
    headline: 'Necesitamos industrias de escala global con ventaja competitiva sustentable y federal.',
    body: 'Que generen desarrollo real y prosperidad duradera. Que dejen más de lo que toman.',
    timeline: [
      { year: '1880', title: 'Ferrocarriles', body: 'Conectaron un país.' },
      { year: '1907', title: 'Petróleo', body: 'Impulsaron la energía y la industria.' },
      { year: '2010', title: 'Vaca Muerta', body: 'Convirtió Argentina en potencia energética.' },
      { year: '2030+', title: 'Cáñamo Industrial', body: 'Puede convertirla en potencia biológica.', accent: true },
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
    label: '07 · La Oportunidad',
    headline: '¿Qué industria argentina de escala global todavía no tiene dueño?',
    body: 'Una ventana de tiempo. Una ventaja natural. Una decisión estratégica. Una oportunidad que no vuelve a repetirse.',
    features: [
      { title: 'Ventana de tiempo', body: 'El mercado global de biomateriales crece al 15% anual. El primer jugador de escala captura el 70% del valor.' },
      { title: 'Ventaja natural', body: 'Patagonia tiene las condiciones climáticas, agua y tierra para ser la región productora más eficiente del hemisferio sur.' },
      { title: 'Decisión estratégica', body: 'YPF tiene la infraestructura, el capital humano y la experiencia operativa para escalar esta industria en años, no décadas.' },
      { title: 'Impacto triple', body: 'Ambiental: captura de carbono. Social: vivienda y empleo. Económico: nueva exportación de alto valor agregado.' },
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
    body: 'Las grandes transformaciones nacionales comienzan cuando una materia prima se convierte en una plataforma industrial.\nEl momento es ahora. La decisión es nuestra.',
    headline: 'Este plan es una invitación a construir juntos la primera gran industria argentina.',
    cta: 'Construyamos el Futuro',
    signature: 'Manuel Belgrano',
  },
}
