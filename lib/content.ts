export const CONTENT = {
  nav: {
    logo: 'Plan Manuel Belgrano',
    tag: 'Cáñamo Industrial',
    links: ['El Desafío', 'La Planta', 'El Piloto', 'Visión 2035'],
    cta: 'Contacto',
    lang: ['ES', 'EN'],
  },

  challenge: {
    label: '02 · El Desafío',
    headline: 'Argentina encontró petróleo. Ahora necesita encontrar su próxima plataforma industrial.',
    body: 'Necesitamos más industrias de escala global. Con ventaja competitiva sustentable y federal. Que generen desarrollo real y prosperidad duradera. Que dejen más de lo que toman.',
    cards: [
      {
        number: 'Escala',
        title: 'Global y federal',
        body: 'Una industria que no concentre el valor en pocas manos. Que llegue a toda la Argentina y compita en mercados internacionales.',
      },
      {
        number: 'Ventaja',
        title: 'Natural y sustentable',
        body: 'Una ventaja competitiva que no se agote. Que mejore el recurso en lugar de consumirlo. Que genere activos reales.',
      },
      {
        number: 'Impacto',
        title: 'Que deje más de lo que toma',
        body: 'Desarrollo real y prosperidad duradera. Una plataforma que transforme recursos en bienestar para la gente.',
      },
    ],
  },

  thesis: {
    label: '03 · La Tesis',
    teaser: 'Si hubieras podido minar Bitcoin en 2010,\n¿cuánto habrías invertido?',
    headline: 'En cada generación, un recurso cambió el tablero.',
    body: 'El que llegó primero ganó. Ferrocarriles, petróleo, shale. Siempre el mismo patrón: ventaja natural + decisión estratégica temprana = escala dominante.',
    timeline: [
      {
        year: '1880',
        title: 'Ferrocarriles',
        body: 'Conectaron un país. Abrieron mercados. Primer mover ganó todo.',
        accent: false,
      },
      {
        year: '1907',
        title: 'Petróleo',
        body: 'Impulsó nuestra energía y nuestra industria. YPF nació de ver antes.',
        accent: false,
      },
      {
        year: '2010',
        title: 'Vaca Muerta',
        body: 'Convirtió Argentina en una potencia energética. Una apuesta temprana que transformó todo.',
        accent: false,
      },
      {
        year: '2030+',
        title: 'Cáñamo Industrial',
        body: 'Puede convertir Argentina en una potencia biológica. La ventana está abierta.',
        accent: true,
      },
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
        metric: '8–15 t/ha',
        metricLabel: 'CO₂ capturado por año',
        title: 'Captura CO₂ y regenera suelos',
        body: 'Secuestra carbono y mejora la calidad del suelo. Créditos verificables, certificables y vendibles en mercados internacionales.',
      },
      {
        icon: '▣',
        category: 'Materiales',
        metric: '3–4 t/ha',
        metricLabel: 'fibra industrial',
        title: 'Fibras para construcción y más',
        body: 'Hempcrete, textiles, bioplásticos, papeles. Materiales de alta performance para la construcción sostenible.',
      },
      {
        icon: '⚡',
        category: 'Energía',
        metric: '68–82 MWh/ha',
        metricLabel: 'energía bruta de biomasa',
        title: 'Biomasa de alto valor energético',
        body: 'Bajo consumo hídrico. Entre 68 y 82 MWh de energía bruta por hectárea, aprovechable en cada etapa del proceso productivo.',
      },
      {
        icon: '◉',
        category: 'Alimentación',
        metric: '25–50%',
        metricLabel: 'proteína según procesamiento',
        title: 'Proteína vegetal completa',
        body: 'Proteínas de alta digestibilidad (88%), aceites y alimentos de alto valor nutricional. Alta demanda global creciente.',
      },
    ],
    metrics: [
      { value: '15 t/ha', label: 'biomasa total' },
      { value: '3–4 t/ha', label: 'fibra industrial' },
      { value: 'Alta demanda', label: 'global creciente' },
      { value: 'Bajo consumo', label: 'hídrico' },
    ],
  },

  masterplan: {
    label: '05 · El Masterplan',
    headline: 'De la semilla\na la industria.',
    sub: 'Valor en cada etapa.',
    tagline: 'No exportamos materia prima. Construimos una industria.',
    nodes: [
      { id: 'semilla', label: 'Semilla', desc: 'Variedades certificadas' },
      { id: 'cultivo', label: 'Cultivo', desc: 'Extensivo, bajo riesgo' },
      { id: 'cosecha', label: 'Cosecha', desc: 'Proceso eficiente' },
      { id: 'procesamiento', label: 'Procesamiento', desc: 'Decortización' },
      { id: 'fibra', label: 'Fibra', desc: 'Industrial premium' },
      { id: 'materiales', label: 'Materiales', desc: 'Hempcrete, textiles' },
      { id: 'construccion', label: 'Construcción', desc: 'Viviendas federales' },
      { id: 'carbono', label: 'Carbono', desc: 'Créditos certificados' },
    ],
  },

  pilot: {
    label: '06 · El Piloto',
    headline: 'Empezar donde ya existe\ncapacidad de ejecución.',
    body: 'Integrar el cáñamo a la infraestructura y al know-how de Vaca Muerta permite escalar más rápido, con menor riesgo y mayor impacto federal.',
    advantages: [
      'Infraestructura energética disponible',
      'Logística y conectividad resuelta',
      'Capital humano y servicios en territorio',
      'Cercanía a mercados de exportación',
    ],
    location: 'Añelo, Neuquén',
    locationSub: 'Corazón de Vaca Muerta',
  },

  asset: {
    label: '07 · El Activo',
    headline: 'YPF no compra\ncréditos de carbono.\nLos produce.',
    body: 'BNEF proyecta un mercado de créditos de alta integridad con potencial de hasta USD 1 trillion hacia 2037. YPF ya tiene la mayor plataforma de activos carbonizables de Argentina. Lo que falta es la plataforma que los active.',
    table: [
      { concept: 'Captura por hectárea', value: '8–12 t CO₂/año', source: 'British Hemp Alliance / BHA' },
      { concept: 'Precio de referencia sectorial', value: 'USD 40–80/tCO₂e', source: 'WBCSD 2024 — rango O&G NetZero' },
      { concept: 'Valor Fase 1 · 4.000 ha', value: '~USD 2,2M/año', source: 'Proyección Flora Cáñamo' },
      { concept: 'Fijación en hempcrete', value: '75–165 kg CO₂/m³', source: 'Arehart et al. 2020 / EIHA' },
    ],
    note: 'Alineado con YPF Bio, la estrategia SAF y los contratos LNG europeos que exigen certificación de huella de carbono (CS3D).',
    tagline: 'Una obligación regulatoria convertida en activo exportable.',
  },

  opportunity: {
    label: '08 · La Oportunidad',
    headline: '¿Qué industria argentina de escala global todavía no tiene dueño?',
    body: 'Una ventana de tiempo. Una ventaja natural. Una decisión estratégica temprana.',
    features: [
      {
        title: 'Infraestructura ya desplegada',
        body: 'Añelo tiene energía, logística, capital humano y servicios. Todo lo que un proyecto agroindustrial de escala necesita para arrancar en meses, no años.',
      },
      {
        title: 'Primer mover advantage real',
        body: 'BNEF proyecta un mercado de créditos de alta integridad con potencial de hasta USD 1 trillion hacia 2037. Nadie en Argentina tiene escala todavía. La ventana está abierta.',
      },
      {
        title: 'Retorno económico verificado',
        body: 'Portafolio de créditos certificados al 2030. Más fibra, materiales y biomasa. Activos financieros con precio de mercado — no compensación de ESG.',
      },
      {
        title: 'La misma lógica que escaló Vaca Muerta',
        body: 'Pasar de piloto a escala federal con infraestructura existente, operación distribuida y know-how propio. El modelo ya lo conocen.',
      },
    ],
  },

  vision: {
    label: '08 · Visión 2035',
    headline: 'Argentina Productiva.\nSoberana. Próspera.\nSostenible.',
    sub: 'Un país que transforma sus recursos naturales en bienestar para su gente.',
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
      ['Impacto', 'Potencia alimentaria', 'Potencia energética', 'Potencia biológica'],
    ],
    footer: '"Las grandes transformaciones nacionales comienzan cuando una materia prima se convierte en una plataforma industrial." — Manuel Belgrano, 1809',
  },

  cta: {
    eyebrow: 'El momento es ahora',
    headline: 'La decisión es nuestra.',
    body: 'Este plan es una invitación a construir juntos la próxima gran industria argentina.',
    cta: 'Agendar reunión',
    ctaHref: 'mailto:contacto@planmanuelbelgrano.com.ar',
    signature: 'Manuel Belgrano',
    signatureSub: 'Guillermo Sandoval, Fundador — Flora Cáñamo Neuquino SRL · Neuquén, Patagonia Argentina',
    contactEmail: 'contacto@planmanuelbelgrano.com.ar',
    contactWhatsApp: '+54 299 422 9436',
  },
}
