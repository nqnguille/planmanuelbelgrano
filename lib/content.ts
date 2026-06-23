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
    headline: 'YPF lleva GNL a Europa. Europa exige huella de carbono. El que no la certifica compite solo por precio.',
    body: 'CS3D obliga desde 2025–2027. Sin certificación de carbono, el GNL argentino es commodity. Mismo precio que Qatar, Australia y EEUU. La diferencia entre GNL premium y GNL genérico: USD 2–5/MMBtu. Por cargo típico: USD 7–17M adicionales. Eso es lo que está en juego por contrato.',
    cards: [
      {
        number: 'Regulación',
        title: 'CS3D entra en vigor',
        body: 'La Corporate Sustainability Due Diligence Directive de la UE exige trazabilidad de huella de carbono en toda la cadena. No es optional. Es requisito de acceso al mercado premium europeo.',
      },
      {
        number: 'Premio',
        title: 'USD 2–5/MMBtu de upside',
        body: 'GNL certificado bajo carbono cotiza con prima sobre el spot. Por cargo estándar de 3,4 M MMBtu: entre USD 7M y USD 17M de ingreso adicional por embarque.',
      },
      {
        number: 'Inversión',
        title: 'USD 265.000–300.000',
        body: 'Costo total del benchmark + piloto de certificación. Payback: 6 semanas de operación a escala plena. La relación costo–retorno no tiene precedente en la historia de YPF.',
      },
    ],
  },

  thesis: {
    label: '03 · La Tesis',
    teaser: 'Si se hubiera podido certificar el GNL como bajo carbono en 2023,\n¿cuánto se habría dejado sobre la mesa?',
    headline: 'Cada generación tiene una ventana de primer mover. Esta es la de YPF.',
    body: 'El que llegó primero ganó. Ferrocarriles, petróleo, shale. Siempre el mismo patrón: ventaja natural + decisión estratégica temprana = escala dominante. El cáñamo industrial es la plataforma de compensación con la mejor relación costo–permanencia disponible hoy. Argentina tiene los recursos. Decreto 883/2022 lo desreguló. La ventana está abierta.',
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
        body: 'Captura #2 global. Fijación #3 en hempcrete. Fijación #4 en biochar. El offset con mejor relación costo–permanencia está en Neuquén.',
        accent: true,
      },
    ],
  },

  plant: {
    label: '04 · La Planta',
    headline: 'Ranking independiente.\nCaptura #2 global.\nFijación #3 y #4 combinadas.',
    body: 'Benchmarking de Gemini sobre todos los mecanismos de remoción de carbono a escala global. El cáñamo industrial ocupa la "intersección crítica" del mercado: biomasa de alta tasa fotosintética (captura) + hempcrete y biochar (fijación permanente). Punto óptimo de rentabilidad y permanencia. Los créditos forestales quedaron en #10.',
    markets: [
      {
        icon: 'lock',
        category: 'Captura #2 Global',
        metric: '10–15 t CO₂/ha/año',
        metricLabel: 'fotosíntesis terrestre de alta tasa',
        title: 'La naturaleza hace el trabajo pesado',
        body: 'Costo energético casi cero. Sin infraestructura industrial adicional. El cultivo captura más CO₂ por hectárea que cualquier árbol. Solo la fotosíntesis marina de microalgas le gana en velocidad.',
      },
      {
        icon: 'split',
        category: 'Fijación #3 Global',
        metric: '75–165 kg CO₂/m³',
        metricLabel: 'mineralización ex situ permanente',
        title: 'Hempcrete: siglos de carbono bloqueado',
        body: 'Permanencia de siglos a milenios. Clase A resistencia al fuego. Cada muro es un activo de carbono certificable y exportable. No es compensación: es fijación física verificable.',
      },
      {
        icon: 'house',
        category: 'Fijación #4 Global',
        metric: 'USD 164/t',
        metricLabel: 'Puro.earth — certificado EBC',
        title: 'Biochar: 500 a 1.000+ años de permanencia',
        body: 'Pirólisis de residuos de cáñamo → biochar de alta estabilidad. Compradores: Microsoft, Shell, Google. El residuo del proceso se convierte en el activo de mayor permanencia del portafolio.',
      },
      {
        icon: 'globe',
        category: 'vs. Créditos Forestales',
        metric: '#10 global',
        metricLabel: 'vulnerabilidad muy alta por incendios',
        title: 'No todos los créditos son iguales',
        body: 'Los créditos forestales clásicos quedaron en puesto #10: décadas de permanencia, vulnerabilidad extrema. YPF no debería respaldar su reputación regulatoria en activos que se queman.',
      },
    ],
    metrics: [
      { value: '#2 Captura', label: 'Ranking global independiente (Gemini)' },
      { value: '75–165 kg/m³', label: 'CO₂ fijado en hempcrete' },
      { value: 'USD 164/t', label: 'Biochar certificado EBC (Puro.earth)' },
      { value: 'Clase A', label: 'Resistencia al fuego — hempcrete' },
    ],
  },

  masterplan: {
    label: '05 · El Masterplan',
    headline: 'De la semilla\na la industria.',
    sub: 'Hempcrete y Biochar. Valor en cada etapa.',
    tagline: 'No exportamos materia prima. Construimos dos industrias. Cero residuos.',
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
    label: 'Benchmark · Fase 1',
    headline: 'Dos provincias,\ndos microclimas,\nun benchmark simultáneo.',
    body: 'El benchmark corre en paralelo: 4.000 hectáreas en Valle de Uco (Mendoza) y 4.000 en Canal Mari Menuco (Neuquén). Dos ecorregiones distintas, mismo protocolo experimental. El objetivo: identificar la variedad campeona por región, validar rendimiento de captura bajo condiciones reales y construir el activo de datos que respalda la certificación ante registros internacionales (Verra, Gold Standard).',
    advantages: [
      'Valle de Uco, Mendoza — clima templado irrigado, marco regulatorio Ley 9617',
      'Canal Mari Menuco, Neuquén — clima árido patagónico, infraestructura Vaca Muerta',
      'Protocolo DBCA con hasta 30 variedades por región',
      'Convenio universitario UNCuyo + UNCo — validación científica certificable',
    ],
    location: 'Mendoza · Neuquén',
    locationSub: 'Benchmark federal en paralelo',
  },

  asset: {
    label: '07 · El Activo',
    headline: 'YPF no compra\ncréditos de carbono.\nLos produce.',
    body: 'BNEF proyecta un mercado de créditos de alta integridad con potencial de hasta USD 1 trillion hacia 2037. La CS3D no espera ese mercado: ya está activa. YPF tiene la mayor plataforma de activos carbonizables de Argentina. Lo que falta es la plataforma que los activa. Decreto 883/2022 ya despejó el camino regulatorio — Milei lo firmó, el mercado lo está esperando.',
    table: [
      { concept: 'Captura por hectárea', value: '10–15 t CO₂/año', source: 'Ranking independiente Gemini — Captura #2 global' },
      { concept: 'Precio de referencia O&G NetZero', value: 'USD 40–80/tCO₂e', source: 'WBCSD 2024' },
      { concept: 'Valor Fase 1 · 4.000 ha', value: '~USD 2,2M/año', source: 'Proyección Flora Cáñamo Neuquino' },
      { concept: 'Fijación en hempcrete · Fijación #3 global', value: '75–165 kg CO₂/m³', source: 'Arehart et al. 2020 / EIHA' },
      { concept: 'Escala completa Neuquén · 50.000 ha', value: '~USD 27,5M/año', source: 'Proyección Flora Cáñamo Neuquino' },
    ],
    note: 'Premio GNL bajo carbono (CS3D): USD 2–5/MMBtu. Por cargo típico 3,4 M MMBtu: USD 7–17M adicionales. Inversión requerida: USD 265.000–300.000. Payback: 6 semanas de operación plena.',
    tagline: 'Una obligación regulatoria europea convertida en ventaja competitiva argentina.',
  },

  opportunity: {
    label: '08 · La Oportunidad',
    headline: '¿Qué industria argentina de escala global todavía no tiene dueño?',
    body: 'Una ventana de tiempo. Una ventaja natural. Una decisión estratégica temprana.',
    features: [
      {
        title: 'La desregulación ya está hecha',
        body: 'Decreto 883/2022. El sector privado ejecuta — el Estado no regala nada. La LLA celebra esto: libre mercado, ventaja competitiva basada en recursos naturales únicos, sin subsidios ni greenwashing ESG.',
      },
      {
        title: 'Primer mover advantage real',
        body: 'BNEF proyecta un mercado de créditos de alta integridad con potencial de hasta USD 1 trillion hacia 2037. Nadie en Argentina tiene escala todavía. La ventana no va a estar abierta para siempre.',
      },
      {
        title: 'Infraestructura ya desplegada',
        body: 'Añelo tiene energía, logística, capital humano y servicios. Todo lo que un proyecto agroindustrial de escala necesita para arrancar en meses, no años. La misma base que escaló Vaca Muerta.',
      },
      {
        title: 'Retorno verificable desde el día uno',
        body: 'Premio GNL: USD 7–17M por cargo. Créditos propios: USD 2,2M/año en Fase 1. Biochar (USD 164/t, compradores: Microsoft, Shell, Google). Activos financieros con precio de mercado — no compensación de ESG.',
      },
    ],
  },

  vision: {
    label: 'Visión 2035',
    headline: 'Sturzenegger ve llegar\nun millón de personas.\nNosotros les construimos la ciudad.',
    sub: 'Un millón de neuquinos necesita viviendas, empleo e industria limpia. El Plan Manuel Belgrano es la columna vertebral de ese crecimiento: hempcrete para construir con materiales que fijan carbono mientras se usan, biochar para la segunda línea de valor, créditos certificados para financiar la transición. De la semilla a la llave, empleo técnico en cada eslabón. Una economía donde el edificio es el activo de carbono.',
    bgImage: 'https://d8j0ntlcm91z4.cloudfront.net/user_3EpWXW9qhLTZowUY0tYkwH2OXOb/hf_20260608_054938_e59da2e1-928e-4d7b-98a3-1c410169a99c.png',
    stats: [
      { target: 50000, label: 'Empleos directos en escala plena', suffix: '' },
      { target: 100000, label: 'Viviendas hempcrete al 2035', suffix: '' },
      { target: 500000, label: 'Toneladas CO₂ fijadas por año', suffix: '' },
      { target: 27, label: 'Millones USD/año en créditos (escala Neuquén)', suffix: 'M' },
    ],
    extra: 'De semilla a llave.\nLa cadena de valor más larga del agro argentino.',
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
    sturzeneggerQuote: 'A Neuquén se van a venir a vivir un millón de personas.',
    sturzeneggerAttr: 'Federico Sturzenegger · Ministro de Desregulación · 2025',
    eyebrow: 'El proyecto que lo hace posible',
    headline: 'Belgrano lo soñó.\nSturzenegger lo ve venir.\nNosotros tendemos el puente.',
    body: 'Hempcrete para construir las viviendas. Créditos de carbono para que YPF acceda al mercado GNL premium de Europa. Biochar con compradores confirmados: Microsoft, Shell, Google. Empleo técnico y permanente en cada eslabón de la cadena. El Plan Manuel Belgrano no es un proyecto de cáñamo. Es la infraestructura productiva que convierte la visión de un millón de neuquinos en realidad industrial — y la que convierte una obligación regulatoria europea en ventaja competitiva argentina.',
    cta: 'Agendar reunión',
    ctaHref: 'mailto:contacto@planmanuelbelgrano.com.ar',
    signature: 'Manuel Belgrano tenía razón.',
    signatureSub: 'Guillermo Sandoval, Fundador — Flora Cáñamo Neuquino SRL · Neuquén, Patagonia Argentina',
    contactEmail: 'contacto@planmanuelbelgrano.com.ar',
    contactWhatsApp: '+54 299 422 9436',
  },
}
