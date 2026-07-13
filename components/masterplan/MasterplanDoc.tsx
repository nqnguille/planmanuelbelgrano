'use client'

import { motion, useScroll } from 'framer-motion'
import { type CSSProperties, type ReactNode } from 'react'
import { useLang } from '@/lib/i18n'

/* ============================================================
   PLAN MANUEL BELGRANO — MASTERPLAN (rediseño "documento")
   Sigue al pie la estructura del Documento-Llave para YPF.
   Estética: white-paper editorial premium, base papel claro,
   números de capítulo dorados, tablas finas, cortes full-bleed.
   ============================================================ */

const INK = '#071A38'
const DUSK = '#0E2A52'
const PAPER = '#FAF8F1'
const CREAM = '#F3F1E7'
const GOLD = '#F2B544'
const GREEN = '#5BC46A'
const GREEN_DK = '#2F8F3A'
const CELESTE = '#2F6FB0'
const LINE = 'rgba(7,26,56,0.13)'
const MUTED = 'rgba(7,26,56,0.66)'
const FAINT = 'rgba(7,26,56,0.5)'

/* Contacto (mismo destino que el gate). */
const MEET_URL = 'https://calendar.app.google/PBcbPHeEvsxKNR4X8'
const WHATSAPP_URL = 'https://wa.me/5492994229436?text=' + encodeURIComponent('Hola, quiero conversar sobre el Plan Manuel Belgrano.')

const serif: CSSProperties = { fontFamily: 'var(--font-garamond), "EB Garamond", serif', fontWeight: 400 }
const sans: CSSProperties = { fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif' }

/* ============================================================
   COPY — todas las strings visibles, bilingüe ES / EN.
   Las claves son idénticas en ambos idiomas.
   ============================================================ */

const COPY = {
  es: {
    /* portada */
    cover_confidential: 'Documento confidencial · Junio 2026',
    cover_title: 'Plan Manuel Belgrano',
    cover_subtitle: 'Una propuesta para YPF — para revisión legal y técnica.',
    cover_issuer_label: 'Emisor',
    cover_issuer: 'Flora Cáñamo Neuquino SRL · Guillermo Sandoval',
    cover_recipient_label: 'Destinatario',
    cover_recipient: 'Equipo legal y técnico de YPF S.A.',
    cover_contents: 'Contenido',
    toc: [
      'El momento', 'La solución', 'Encaje con YPF', 'El pedido',
      'Tres fases', 'El carbono', 'Quiénes lo hacen', 'Oportunidad ampliada',
      'Encuadre legal', 'Riesgos', 'Por qué ahora',
    ] as readonly string[],

    /* resumen ejecutivo */
    resumen_eyebrow: 'Resumen ejecutivo',
    resumen_lead: 'Tres resultados de una misma cadena de valor.',
    resumen_cards: [
      ['Vivienda', 'accesible, aislante y de rápida ejecución, con materia prima y mano de obra locales.'],
      ['Empleo', 'de absorción para la mano de obra que hoy llega a Vaca Muerta y queda afuera.'],
      ['Carbono', 'removido, almacenado de forma durable y certificado — un activo nuevo para YPF.'],
    ] as readonly (readonly [string, string])[],
    resumen_body: (
      <>
        El Plan Manuel Belgrano responde a dos problemas reales y actuales en el mismo territorio
        donde YPF opera: la falta de vivienda y de empleo de absorción en la zona de Vaca Muerta,
        y la parálisis de la industria del cáñamo argentino. Los transforma en una plataforma
        productiva. Se propone a YPF una vinculación en la que{' '}
        <Strong>YPF habilita y ancla el proyecto sin operarlo</Strong>: aporta su peso
        institucional, financia por etapas el inicio y queda como titular único del carbono.
        Flora y su consorcio ejecutan. La primera etapa —un{' '}
        <Strong>benchmark de validación de bajo costo, previsto para octubre de 2026</Strong>—
        abre un camino por etapas hacia la escala, sin comprometer un proyecto de gran porte
        desde el inicio.
      </>
    ),

    /* clippings */
    clippings: [
      { medium: 'Río Negro', date: 'jun 2026', quote: 'Neuquén va a tener, en 30 años, 1 millón y medio de personas.', who: 'Federico Sturzenegger · Ministro de Desregulación' },
      { medium: 'Infobae', date: '18 jun', quote: 'No se vengan con la familia.', who: 'Fernando Banderet · Intendente de Añelo', alarm: true },
      { medium: 'Infobae', date: 'jun 2026', quote: 'No nos sobra trabajo. Para trabajar en Vaca Muerta hay que formarse.', who: 'Rolando Figueroa · Gobernador de Neuquén' },
      { medium: 'LM Neuquén', date: 'may 2026', quote: 'Contratan empresas de afuera para obras que podrían hacer las empresas locales.', who: 'UOCRA Neuquén · +100 sin trabajo', alarm: true },
    ] as readonly { medium: string; date: string; quote: string; who: string; alarm?: boolean }[],

    /* cadena */
    cadena: [
      'Semilla', 'Cultivo', 'Cosecha', 'Decortización',
      'Mezclado', 'Hempcrete', 'Construcción', 'Vivienda',
    ] as readonly string[],

    /* specs */
    specs: [
      { v: '0,06–0,12', u: 'W/mK · conductividad', d: 'Aislación superior — mejor desempeño térmico en el frío patagónico.' },
      { v: 'Clase A', u: 'al fuego', d: 'Material incombustible, apto para entornos operativos.' },
      { v: '+500', u: 'años de vida útil', d: 'Norma europea EN 16101, probado en más de 50 países.' },
      { v: '>90%', u: 'de la planta aprovechada', d: 'Hempcrete + biochar: economía circular, sin desperdicio.' },
    ] as readonly { v: string; u: string; d: string }[],

    /* 1 · el momento */
    s1_eyebrow: 'El momento',
    s1_title: 'Problemas reales que se pueden aliviar',
    s1_dek: 'Neuquén atraviesa tensiones concretas, documentadas en la prensa de junio de 2026, que el Plan Manuel Belgrano contribuye a descomprimir.',
    s1_bullets: [
      <>El <Strong>déficit habitacional</Strong> de la zona ronda el 60%, con los alquileres más caros del país.</>,
      <>Buena parte del <Strong>empleo lo toman empresas de fuera</Strong> de la provincia y la mano de obra local queda afuera.</>,
      <>Añelo, epicentro del yacimiento, <Strong>creció más del 140%</Strong> y no tiene cómo alojar ni dar servicios a quienes llegan.</>,
      <>En paralelo, la <Strong>industria del cáñamo está frenada</Strong>: un desajuste regulatorio entre organismos dejó sin cobertura a cientos de productores.</>,
    ] as readonly ReactNode[],
    s1_statement: (
      <>
        Todos comparten una raíz: un potencial productivo que no encuentra quién lo ordene y lo
        ponga en marcha. Cada una de estas presiones podría descomprimirse si YPF se suma al plan.
      </>
    ),

    /* 2 · la solución */
    s2_eyebrow: 'La solución',
    s2_title: 'De la semilla a la llave',
    s2_dek: 'Flora cultiva cáñamo industrial (Cannabis sativa L., THC < 1%) y aprovecha la planta de forma casi integral, en dos productos cuyo destino almacena el carbono de forma durable.',
    s2_products: [
      { t: 'Hempcrete', d: 'Material de construcción de base biológica para ladrillos y bloques de vivienda accesible, aislante y de rápida ejecución. Es una tecnología probada en más de 50 países, con norma europea EN 16101. En Argentina casi no se usa: el proyecto la trae y la adapta.' },
      { t: 'Biochar', d: 'A partir de los residuos de la planta (pirólisis), un material que fija el carbono de forma durable —siglos— y mejora el suelo. Es la segunda línea de carbono del proyecto, de la misma hectárea.' },
    ] as readonly { t: string; d: string }[],
    s2_statement_by: 'El diferencial que pone en valor el carbono',
    s2_statement: (
      <>
        Lo que distingue a esta cadena es almacenar el carbono de forma durable: el biochar lo
        retiene por siglos y el hempcrete, durante toda la vida de la construcción.
      </>
    ),
    s2_body: (
      <>
        <Strong>Dónde está la innovación.</Strong> No en el material —ya probado en el mundo—
        sino en la <Strong>integración</Strong>: producirlo a escala en Argentina, con medición
        y certificación del carbono, validando la genética adaptada al territorio y conectándolo
        con la vivienda que la zona necesita. La vivienda tracciona la producción; el carbono es
        la consecuencia certificable.
      </>
    ),
    s2_label_chain: 'De la semilla a la llave · ocho pasos',
    s2_label_specs: 'El material, en números',

    /* 3 · encaje con YPF */
    s3_eyebrow: 'Convergencia con los objetivos de YPF',
    s3_title: 'Dónde podría sumar',
    s3_dek: 'Los objetivos que YPF ya hizo públicos para Vaca Muerta presentan puntos de convergencia con esta iniciativa. Se señalan, como hipótesis de trabajo, aportes posibles a cada uno.',
    s3_table_head: ['Objetivo público de YPF', 'Aporte posible del Plan Manuel Belgrano'] as readonly string[],
    s3_table_rows: [
      ['Sostener la licencia social para operar en Neuquén', 'Empleo local de absorción y vivienda accesible en las comunidades donde YPF opera'],
      ['Avanzar en su agenda de descarbonización', 'Una vía de remoción biológica de carbono, complementaria a la reducción de emisiones, en su propio territorio'],
      ['Construir activos de largo plazo', 'Créditos de carbono propios, generados y verificados, en lugar de adquiridos a terceros'],
      ['Liderar el desarrollo productivo de Vaca Muerta', 'Ser el catalizador que ayuda a ordenar y poner en marcha una nueva industria nacional'],
    ] as readonly (readonly string[])[],
    s3_body: (
      <>
        El proyecto no busca superponerse a ninguna unidad de YPF: <Strong>aporta en un área que
        hoy no tiene cobertura</Strong> —vivienda y empleo de absorción ligados a un activo
        ambiental—, sin pedirle que opere fuera de su núcleo.
      </>
    ),

    /* 4 · el pedido */
    s4_eyebrow: 'El pedido a YPF',
    s4_title: 'Habilitar, no operar',
    s4_dek: (
      <>
        Flora y su consorcio aportan el proyecto, el equipo, la tierra, las licencias y la
        tecnología —todo, excepto el capital—. YPF aporta lo que solo YPF puede aportar.
      </>
    ),
    s4_items: [
      { n: '01', t: 'Peso institucional', d: 'Por su escala y su carácter estratégico, YPF puede ayudar a ordenar y destrabar la articulación entre los organismos (ARICCAME, INASE y las áreas provinciales) que hoy frena al sector. No es capital: es institucionalidad.' },
      { n: '02', t: 'Financiamiento por etapas, contra hitos', d: 'YPF financia el inicio —el benchmark de validación—, con desembolsos atados a hitos verificables. Es un compromiso acotado y por etapas, no el de un proyecto a escala desde el primer día.' },
      { n: '03', t: 'Socio fundador y titular del carbono', d: 'A cambio, YPF queda como co-fundador del programa y titular único de todos los créditos de carbono que genere —hempcrete y biochar—. La preferencia es sobre el carbono, no sobre el territorio: el proyecto sigue siendo una plataforma abierta para la economía regional.' },
    ] as readonly { n: string; t: string; d: string }[],

    /* 5 · tres fases */
    s5_eyebrow: 'El plan en tres fases',
    s5_title: 'Primero validar, después escalar',
    s5_dek: 'El proyecto no salta a la escala a ciegas. Avanza por etapas, cada una habilitando la siguiente.',
    s5_table_head: ['Fase', 'Objeto', 'Resultado'] as readonly string[],
    s5_table_rows: [
      [<><Strong>Fase 1 — Benchmark</Strong><br /><span style={{ color: CELESTE, fontSize: '0.78rem' }}>octubre 2026</span></>, 'Dos ensayos científicos simultáneos (Neuquén y Mendoza) con genéticas nacionales e internacionales', 'La genética campeona por territorio. Ya produce biomasa para los primeros materiales.'],
      [<><Strong>Fase 2 — Reproducción</Strong></>, 'Multiplicación de la semilla de la genética seleccionada', 'Volumen de semilla para escalar'],
      [<><Strong>Fase 3 — Escala</Strong></>, 'Cultivo a escala', 'Producción plena: material, vivienda y el activo de carbono a escala'],
    ] as readonly (readonly ReactNode[])[],
    s5_callout: (
      <>
        <Strong>Lo que YPF financia ahora es solo la Fase 1.</Strong> Es la apuesta de menor
        riesgo y mayor simbolismo: validar la genética y producir el primer material, con un
        camino claro —y opcional— hacia la escala. Una posibilidad de alto valor es un{' '}
        <Strong>concurso nacional de genética de cáñamo</Strong>, articulado con INASE y
        ARICCAME, que ayude a construir la base genética soberana argentina —hoy incipiente—
        con YPF como catalizador institucional.
      </>
    ),

    /* 6 · el carbono */
    s6_eyebrow: 'El carbono',
    s6_title: 'Medición, verificación y titularidad única',
    s6_dek: 'La integridad del activo de carbono es la condición central para su defensa legal, y el proyecto la resuelve desde el diseño de la cadena, antes que por contrato.',
    s6_statement_by: 'Integración de la cadena = sin doble contabilidad',
    s6_statement: (
      <>
        Al controlar toda la cadena —semilla, cultivo, material, construcción y residuos—, el
        carbono tiene un único hilo de custodia, trazable de punta a punta. Se cuenta una sola vez
        y se atribuye a un solo titular.
      </>
    ),
    s6_label_layers: 'Tres capas de validación',
    s6_table1_head: ['Capa', 'Responsable', 'Estándar'] as readonly string[],
    s6_table1_rows: [
      ['Medición y trazabilidad (MRV)', 'Sistema propio (a desarrollar)', 'Trazabilidad digital de cultivos en tiempo real'],
      ['Certificación del carbono', <Strong>EcoGaia</Strong>, 'Verra / Gold Standard (internacional)'],
      ['Material y sistema constructivo', <Strong>INTI</Strong>, 'Certificación nacional (a desarrollar)'],
    ] as readonly (readonly ReactNode[])[],
    s6_body1: (
      <>
        El proyecto contempla el desarrollo de un <Strong>sistema propio de medición y
        verificación (MRV)</Strong>, con trazabilidad digital del cultivo en tiempo real. La
        certificación del carbono —de hempcrete y biochar— estaría a cargo de <Strong>EcoGaia</Strong>,
        bajo estándares internacionales.
      </>
    ),
    s6_body2: (
      <>
        <Strong>Titularidad.</Strong> Cada tonelada se registra una sola vez, con número de serie
        único en un registro público internacional, y se retira a nombre de un único titular:
        {' '}<Strong color={GREEN_DK}>YPF</Strong>. El acuerdo excluye expresamente el reclamo del
        mismo crédito por parte de cualquier otro actor de la cadena.
      </>
    ),
    s6_label_asset: 'El activo de carbono — estimaciones de referencia',
    s6_table2_head: ['Escenario de precio', 'USD/tCO₂e', 'Ingreso anual de referencia *'] as readonly string[],
    s6_table2_rows: [
      ['Mercado voluntario · nature-based', 'USD 30', 'USD 1,2 M'],
      ['Remoción durable · mercado premium', 'USD 75', 'USD 3,0 M'],
      ['Remoción durable · biochar (BCR–Puro)', 'USD 164', 'USD 6,6 M'],
    ] as readonly (readonly string[])[],
    s6_footnote: '* Cifras ilustrativas, a validar en el benchmark. Estimación sobre 4.000 ha y un volumen conservador de 10 t CO₂/ha/año. Los montos, precios y superficies son materia de negociación y no forman parte de la propuesta.',

    /* 7 · quiénes lo hacen */
    s7_eyebrow: 'Quiénes lo hacen',
    s7_title: 'Un integrador y sus partners',
    s7_dek: 'La ejecución no recae en una sola persona: se apoya en partners institucionales con licencias, experiencia y capacidad operativa ya probadas.',
    s7_label_partners: 'Partners institucionales',
    s7_partners: [
      { t: 'Fundación GEN', s: 'Ejecuta el cultivo · licencia agrícola', d: 'Titular de la licencia agrícola. Aporta la maquinaria, el conocimiento agronómico y la capacidad operativa para ejecutar el cultivo y el benchmark. Lidera el Proyecto Coirón, primer antecedente de cáñamo industrial de Neuquén (con apoyo del Centro PyME-ADENEU).' },
      { t: 'EcoGaia', s: 'Certifica el carbono', d: 'Desarrolladora y certificadora argentina de créditos de carbono: ciclo completo bajo Verra y Gold Standard. Ya opera biochar y agricultura regenerativa en Argentina, con experiencia en cáñamo en Canadá. Acuerdo en instancia de firma.' },
      { t: 'Planificación territorial', s: 'Dimensión comunitaria', d: 'Consultora especializada en desarrollo territorial participativo, para la dimensión comunitaria y urbana de la iniciativa.' },
    ] as readonly { t: string; s: string; d: string }[],
    s7_body: (
      <>
        En esencia, lo que se propone a YPF es una participación de etapa temprana junto a un
        proyecto que ya reúne los activos clave —tierra, licencias, partners y capacidad
        operativa—. Flora y sus partners aportan ese conjunto; el capital del inicio lo
        acompañaría YPF.
      </>
    ),

    /* 8 · oportunidad ampliada */
    s8_eyebrow: 'La oportunidad ampliada',
    s8_title: 'Una industria interrumpida hace 230 años.',
    s8_body: 'El primer paso es acotado y de bajo riesgo, pero lo que abre es grande. Cultivar cáñamo a escala reactiva una cadena de la que se desprenden múltiples industrias —alimentos, textil, bioplásticos, papel, cosmética—: un motor de empleo y desarrollo regional, con YPF como catalizador.',
    s8_quote: 'Manuel Belgrano ya proponía en 1796 el cultivo del lino y del cáñamo como camino de valor agregado y trabajo para el país. La prohibición lo interrumpió; el marco vigente vuelve a habilitarlo.',
    s8_note: 'Esta dimensión es el horizonte que la inversión desbloquea, no el pedido central: el foco de la propuesta sigue siendo la cadena hempcrete–biochar y su carbono.',

    /* 9 · encuadre legal */
    s9_eyebrow: 'Encuadre legal y regulatorio',
    s9_title: 'Marco vigente, de alcance nacional',
    s9_dek: 'El cáñamo industrial cuenta en Argentina con un marco normativo vigente y de alcance nacional.',
    s9_table_head: ['Norma', 'Qué establece'] as readonly string[],
    s9_table_rows: [
      [<Strong>Ley 27.669 (2022)</Strong>, 'Crea la ARICCAME como autoridad de aplicación de la industria del cáñamo'],
      [<Strong>Decreto 883/2022</Strong>, 'Habilita cultivo, procesamiento y comercialización de cáñamo industrial con THC < 1%'],
      [<Strong>Licencias ARICCAME</Strong>, 'La licencia agrícola (cultivo) la posee Fundación GEN, socio ejecutor; la industrial está en gestión por Flora'],
    ] as readonly (readonly ReactNode[])[],
    s9_box_label: 'Sociedad operadora',
    s9_box_body: (
      <>
        Flora Cáñamo Neuquino SRL fue constituida en enero de 2025; su inscripción se completa en
        la jurisdicción de la Ciudad Autónoma de Buenos Aires, con el objeto social ajustado al
        marco de cáñamo industrial (Ley 27.669).
      </>
    ),

    /* 10 · riesgos */
    s10_eyebrow: 'Riesgos',
    s10_title: 'Y cómo se gestionan',
    s10_table_head: ['Riesgo', 'Cómo se gestiona'] as readonly string[],
    s10_table_rows: [
      ['Marco regulatorio del sector', 'Marco nacional vigente (Ley 27.669/ARICCAME). El rol de YPF como catalizador institucional ayuda a ordenar la articulación entre organismos.'],
      ['Doble contabilidad del carbono', 'Integración de la cadena (custodia única) + registro serializado + titular único (YPF).'],
      ['Reputación / greenwashing', 'Remoción real y de almacenamiento durable, fijada físicamente; comunicación basada únicamente en datos certificados por terceros.'],
      ['Riesgo operativo (cultivo)', 'Dos ecorregiones en paralelo; medición temprana mediante el sistema de MRV propio; ejecución a cargo de un socio con licencia, maquinaria y experiencia (Fundación GEN).'],
      ['Escala', 'Plan por etapas: la escala solo se aborda tras validar la genética.'],
      ['Responsabilidad / ejecución', 'Asignación por contrato dentro del consorcio; financiamiento de YPF por etapas contra hitos verificables.'],
    ] as readonly (readonly string[])[],

    /* 11 · por qué ahora + cierre */
    s11_eyebrow: 'Por qué ahora',
    s11_title: 'Valor agregado en origen.',
    s11_body: (
      <>
        Hoy convergen una necesidad social urgente —empleo y vivienda en Añelo—, una industria
        nacional que espera quién la ordene, y la posibilidad de construir un activo ambiental
        soberano. Transformar parte de la riqueza de Vaca Muerta en desarrollo, empleo y arraigo,
        en el mismo territorio — <Strong color={CREAM}>a partir del petróleo, no en su lugar.</Strong>
      </>
    ),
    s11_vision_eyebrow: 'La visión',
    s11_vision_title: 'Ciudades de cáñamo, de punta a punta del país.',
    s11_vision_body: (
      <>
        Imaginemos el país que esto construye: barrios y ciudades enteras levantadas con la misma
        planta que Manuel Belgrano soñó hace más de dos siglos —dando trabajo, techo y futuro a
        cada argentino dispuesto a ganárselo—. La cuenca que hoy le da energía al país puede darle,
        además, un modelo: convertir <Strong color={CREAM}>Vaca Muerta en Vaca Verde</Strong>.
        Riqueza que se queda, que regenera y que nos da orgullo.
      </>
    ),
    s11_belgrano_pre: 'Belgrano ',
    s11_belgrano_em: 'tenía razón.',
    s11_belgrano_sub: 'Doscientos treinta años después, su sueño vuelve a ser el plan más moderno que tenemos.',
    s11_cta_meet: 'Agendar una reunión',
    s11_cta_whatsapp: 'Escribinos por WhatsApp',
    s11_footer: 'Flora Cáñamo Neuquino SRL · Junio 2026 · Documento confidencial',
  },

  en: {
    /* cover */
    cover_confidential: 'Confidential document · June 2026',
    cover_title: 'Plan Manuel Belgrano',
    cover_subtitle: 'A proposal for YPF — for legal and technical review.',
    cover_issuer_label: 'Issuer',
    cover_issuer: 'Flora Cáñamo Neuquino SRL · Guillermo Sandoval',
    cover_recipient_label: 'Recipient',
    cover_recipient: 'YPF S.A. legal and technical team',
    cover_contents: 'Contents',
    toc: [
      'The moment', 'The solution', 'Fit with YPF', 'The ask',
      'Three phases', 'The carbon', 'Who delivers it', 'The broader opportunity',
      'Legal framework', 'Risks', 'Why now',
    ] as readonly string[],

    /* executive summary */
    resumen_eyebrow: 'Executive summary',
    resumen_lead: 'Three outcomes from a single value chain.',
    resumen_cards: [
      ['Housing', 'affordable, well-insulated and quick to build, with local raw materials and labor.'],
      ['Employment', 'absorption jobs for the workforce that today arrives at Vaca Muerta and is left out.'],
      ['Carbon', 'removed, durably stored and certified — a new asset for YPF.'],
    ] as readonly (readonly [string, string])[],
    resumen_body: (
      <>
        The Manuel Belgrano Plan responds to two real and present problems in the very territory
        where YPF operates: the lack of housing and of absorption employment in the Vaca Muerta
        region, and the paralysis of Argentina&apos;s hemp industry. It turns them into a productive
        platform. We propose to YPF a partnership in which{' '}
        <Strong>YPF enables and anchors the project without operating it</Strong>: it lends its
        institutional weight, finances the start in stages and remains the sole holder of the carbon.
        Flora and its consortium execute. The first stage —a{' '}
        <Strong>low-cost validation benchmark, planned for October 2026</Strong>—
        opens a staged path toward scale, without committing to a large-scale project
        from the outset.
      </>
    ),

    /* clippings */
    clippings: [
      { medium: 'Río Negro', date: 'Jun 2026', quote: 'In 30 years, Neuquén will have one and a half million people.', who: 'Federico Sturzenegger · Minister of Deregulation' },
      { medium: 'Infobae', date: 'Jun 18', quote: 'Don\'t come with your family.', who: 'Fernando Banderet · Mayor of Añelo', alarm: true },
      { medium: 'Infobae', date: 'Jun 2026', quote: 'We don\'t have jobs to spare. To work in Vaca Muerta, you have to be trained.', who: 'Rolando Figueroa · Governor of Neuquén' },
      { medium: 'LM Neuquén', date: 'May 2026', quote: 'They hire outside companies for work that local firms could do.', who: 'UOCRA Neuquén · 100+ out of work', alarm: true },
    ] as readonly { medium: string; date: string; quote: string; who: string; alarm?: boolean }[],

    /* chain */
    cadena: [
      'Seed', 'Cultivation', 'Harvest', 'Decortication',
      'Mixing', 'Hempcrete', 'Construction', 'Housing',
    ] as readonly string[],

    /* specs */
    specs: [
      { v: '0.06–0.12', u: 'W/mK · conductivity', d: 'Superior insulation — better thermal performance in the Patagonian cold.' },
      { v: 'Class A', u: 'fire rating', d: 'Non-combustible material, suitable for operational environments.' },
      { v: '+500', u: 'years of service life', d: 'European standard EN 16101, proven in more than 50 countries.' },
      { v: '>90%', u: 'of the plant used', d: 'Hempcrete + biochar: circular economy, zero waste.' },
    ] as readonly { v: string; u: string; d: string }[],

    /* 1 · the moment */
    s1_eyebrow: 'The moment',
    s1_title: 'Real problems, ready to ease',
    s1_dek: 'Neuquén is facing concrete tensions, documented in the June 2026 press, that the Manuel Belgrano Plan helps to ease.',
    s1_bullets: [
      <>The region&apos;s <Strong>housing deficit</Strong> is around 60%, with the most expensive rents in the country.</>,
      <>A large share of the <Strong>jobs goes to companies from outside</Strong> the province, and local labor is left out.</>,
      <>Añelo, the epicenter of the field, <Strong>grew by more than 140%</Strong> and has no way to house or serve those who arrive.</>,
      <>In parallel, the <Strong>hemp industry is stalled</Strong>: a regulatory mismatch between agencies left hundreds of producers without coverage.</>,
    ] as readonly ReactNode[],
    s1_statement: (
      <>
        They all share one root: a productive potential that finds no one to organize it and
        set it in motion. Each of these pressures could ease if YPF joins the plan.
      </>
    ),

    /* 2 · the solution */
    s2_eyebrow: 'The solution',
    s2_title: 'From seed to key',
    s2_dek: 'Flora grows industrial hemp (Cannabis sativa L., THC < 1%) and uses almost the entire plant, in two products whose end use stores the carbon durably.',
    s2_products: [
      { t: 'Hempcrete', d: 'A bio-based construction material for bricks and blocks for affordable, well-insulated and quick-to-build housing. It is a technology proven in more than 50 countries, with European standard EN 16101. In Argentina it is barely used: the project brings it in and adapts it.' },
      { t: 'Biochar', d: 'Made from the plant\'s residues (pyrolysis), a material that locks carbon durably —for centuries— and improves the soil. It is the project\'s second carbon line, from the same hectare.' },
    ] as readonly { t: string; d: string }[],
    s2_statement_by: 'The differentiator that gives the carbon its value',
    s2_statement: (
      <>
        What sets this chain apart is storing the carbon durably: biochar holds it for
        centuries, and hempcrete for the entire life of the building.
      </>
    ),
    s2_body: (
      <>
        <Strong>Where the innovation lies.</Strong> Not in the material —already proven worldwide—
        but in the <Strong>integration</Strong>: producing it at scale in Argentina, with carbon
        measurement and certification, validating the genetics adapted to the territory and connecting it
        with the housing the region needs. Housing drives production; carbon is
        the certifiable consequence.
      </>
    ),
    s2_label_chain: 'From seed to key · eight steps',
    s2_label_specs: 'The material, in numbers',

    /* 3 · fit with YPF */
    s3_eyebrow: 'Convergence with YPF\'s objectives',
    s3_title: 'Where it could add value',
    s3_dek: 'The objectives YPF has already made public for Vaca Muerta show points of convergence with this initiative. We outline, as a working hypothesis, possible contributions to each of them.',
    s3_table_head: ['YPF\'s public objective', 'Possible contribution of the Manuel Belgrano Plan'] as readonly string[],
    s3_table_rows: [
      ['Sustain the social license to operate in Neuquén', 'Local absorption employment and affordable housing in the communities where YPF operates'],
      ['Advance its decarbonization agenda', 'A pathway for biological carbon removal, complementary to emissions reduction, in its own territory'],
      ['Build long-term assets', 'Its own carbon credits, generated and verified, rather than purchased from third parties'],
      ['Lead the productive development of Vaca Muerta', 'Be the catalyst that helps organize and launch a new national industry'],
    ] as readonly (readonly string[])[],
    s3_body: (
      <>
        The project does not seek to overlap with any YPF unit: <Strong>it contributes in an area
        that today has no coverage</Strong> —housing and absorption employment tied to an
        environmental asset—, without asking it to operate outside its core.
      </>
    ),

    /* 4 · the ask */
    s4_eyebrow: 'The ask of YPF',
    s4_title: 'Enable, not operate',
    s4_dek: (
      <>
        Flora and its consortium provide the project, the team, the land, the licenses and the
        technology —everything, except the capital—. YPF provides what only YPF can provide.
      </>
    ),
    s4_items: [
      { n: '01', t: 'Institutional weight', d: 'Given its scale and strategic character, YPF can help organize and unblock the coordination among the agencies (ARICCAME, INASE and the provincial bodies) that today holds the sector back. It is not capital: it is institutional standing.' },
      { n: '02', t: 'Staged financing, against milestones', d: 'YPF finances the start —the validation benchmark—, with disbursements tied to verifiable milestones. It is a bounded, staged commitment, not that of a full-scale project from day one.' },
      { n: '03', t: 'Founding partner and carbon holder', d: 'In return, YPF becomes a founding partner of the program and the sole holder of all carbon credits it generates —hempcrete and biochar—. The preference is over the carbon, not over the territory: the project remains an open platform for the regional economy.' },
    ] as readonly { n: string; t: string; d: string }[],

    /* 5 · three phases */
    s5_eyebrow: 'The plan in three phases',
    s5_title: 'Validate first, then scale',
    s5_dek: 'The project does not leap to scale blindly. It advances in stages, each enabling the next.',
    s5_table_head: ['Phase', 'Focus', 'Outcome'] as readonly string[],
    s5_table_rows: [
      [<><Strong>Phase 1 — Benchmark</Strong><br /><span style={{ color: CELESTE, fontSize: '0.78rem' }}>October 2026</span></>, 'Two simultaneous scientific trials (Neuquén and Mendoza) with national and international genetics', 'The winning genetics for each territory, already producing biomass for the first materials.'],
      [<><Strong>Phase 2 — Reproduction</Strong></>, 'Multiplication of the seed of the selected genetics', 'Seed volume to scale'],
      [<><Strong>Phase 3 — Scale</Strong></>, 'Cultivation at scale', 'Full production: material, housing and the carbon asset at scale'],
    ] as readonly (readonly ReactNode[])[],
    s5_callout: (
      <>
        <Strong>What YPF finances now is only Phase 1.</Strong> It is the bet with the lowest
        risk and the highest symbolism: validate the genetics and produce the first material, with a
        clear —and optional— path toward scale. A high-value possibility is a{' '}
        <Strong>national hemp genetics competition</Strong>, coordinated with INASE and
        ARICCAME, that helps build Argentina&apos;s sovereign genetic base —still nascent today—
        with YPF as institutional catalyst.
      </>
    ),

    /* 6 · the carbon */
    s6_eyebrow: 'The carbon',
    s6_title: 'Measurement, verification and sole ownership',
    s6_dek: 'The integrity of the carbon asset is the central condition for its legal defensibility, and the project resolves it through chain design, ahead of any contract clause.',
    s6_statement_by: 'Chain integration = no double counting',
    s6_statement: (
      <>
        By controlling the entire chain —seed, cultivation, material, construction and residues—, the
        carbon has a single chain of custody, traceable from one end to the other. It is counted once
        and attributed to a single holder.
      </>
    ),
    s6_label_layers: 'Three layers of validation',
    s6_table1_head: ['Layer', 'Owner', 'Standard'] as readonly string[],
    s6_table1_rows: [
      ['Measurement and traceability (MRV)', 'Proprietary system (to be developed)', 'Real-time digital crop traceability'],
      ['Carbon certification', <Strong>EcoGaia</Strong>, 'Verra / Gold Standard (international)'],
      ['Material and construction system', <Strong>INTI</Strong>, 'National certification (to be developed)'],
    ] as readonly (readonly ReactNode[])[],
    s6_body1: (
      <>
        The project envisions developing a <Strong>proprietary measurement and
        verification (MRV) system</Strong>, with real-time digital traceability of the crop. The
        carbon certification —for hempcrete and biochar— would be handled by <Strong>EcoGaia</Strong>,
        under international standards.
      </>
    ),
    s6_body2: (
      <>
        <Strong>Ownership.</Strong> Each tonne is registered only once, with a unique serial
        number in an international public registry, and retired in the name of a single holder:
        {' '}<Strong color={GREEN_DK}>YPF</Strong>. The agreement expressly excludes any claim to the
        same credit by any other actor in the chain.
      </>
    ),
    s6_label_asset: 'The carbon asset — reference estimates',
    s6_table2_head: ['Price scenario', 'USD/tCO₂e', 'Reference annual revenue *'] as readonly string[],
    s6_table2_rows: [
      ['Voluntary market · nature-based', 'USD 30', 'USD 1.2 M'],
      ['Durable removal · premium market', 'USD 75', 'USD 3.0 M'],
      ['Durable removal · biochar (BCR–Puro)', 'USD 164', 'USD 6.6 M'],
    ] as readonly (readonly string[])[],
    s6_footnote: '* Illustrative figures, to be validated in the benchmark. Estimate over 4,000 ha and a conservative volume of 10 t CO₂/ha/year. The amounts, prices and areas are subject to negotiation and are not part of the proposal.',

    /* 7 · who delivers it */
    s7_eyebrow: 'Who delivers it',
    s7_title: 'An integrator and its partners',
    s7_dek: 'Execution does not rest on a single person: it leans on institutional partners with licenses, experience and operational capacity already proven.',
    s7_label_partners: 'Institutional partners',
    s7_partners: [
      { t: 'Fundación GEN', s: 'Executes the cultivation · agricultural license', d: 'Holder of the agricultural license. It provides the machinery, the agronomic know-how and the operational capacity to execute the cultivation and the benchmark. It leads the Coirón Project, the first industrial hemp precedent in Neuquén (with support from Centro PyME-ADENEU).' },
      { t: 'EcoGaia', s: 'Certifies the carbon', d: 'An Argentine developer and certifier of carbon credits: full cycle under Verra and Gold Standard. It already operates biochar and regenerative agriculture in Argentina, with hemp experience in Canada. Agreement at the signing stage.' },
      { t: 'Territorial planning', s: 'Community dimension', d: 'A consultancy specialized in participatory territorial development, for the community and urban dimension of the initiative.' },
    ] as readonly { t: string; s: string; d: string }[],
    s7_body: (
      <>
        In essence, what we propose to YPF is an early-stage participation alongside a
        project that already brings together the key assets —land, licenses, partners and
        operational capacity—. Flora and its partners provide that set; the start-up capital
        would come from YPF.
      </>
    ),

    /* 8 · the broader opportunity */
    s8_eyebrow: 'The broader opportunity',
    s8_title: 'An industry interrupted 230 years ago.',
    s8_body: 'The first step is bounded and low-risk, but what it opens is large. Growing hemp at scale revives a chain from which multiple industries branch off —food, textiles, bioplastics, paper, cosmetics—: an engine of employment and regional development, with YPF as the catalyst.',
    s8_quote: 'As early as 1796, Manuel Belgrano proposed the cultivation of flax and hemp as a path to added value and work for the country. Prohibition interrupted it; the current framework enables it once again.',
    s8_note: 'This dimension is the horizon that the investment unlocks, not the central ask: the focus of the proposal remains the hempcrete–biochar chain and its carbon.',

    /* 9 · legal framework */
    s9_eyebrow: 'Legal and regulatory framework',
    s9_title: 'A framework in force, national in scope',
    s9_dek: 'Industrial hemp in Argentina has a regulatory framework that is in force and national in scope.',
    s9_table_head: ['Regulation', 'What it establishes'] as readonly string[],
    s9_table_rows: [
      [<Strong>Law 27,669 (2022)</Strong>, 'Creates ARICCAME as the enforcement authority for the hemp industry'],
      [<Strong>Decree 883/2022</Strong>, 'Authorizes cultivation, processing and marketing of industrial hemp with THC < 1%'],
      [<Strong>ARICCAME licenses</Strong>, 'The agricultural license (cultivation) is held by Fundación GEN, the executing partner; the industrial one is being processed by Flora'],
    ] as readonly (readonly ReactNode[])[],
    s9_box_label: 'Operating company',
    s9_box_body: (
      <>
        Flora Cáñamo Neuquino SRL was incorporated in January 2025; its registration is being
        completed in the jurisdiction of the Autonomous City of Buenos Aires, with its corporate
        purpose aligned to the industrial hemp framework (Law 27,669).
      </>
    ),

    /* 10 · risks */
    s10_eyebrow: 'Risks',
    s10_title: 'And how they are managed',
    s10_table_head: ['Risk', 'How it is managed'] as readonly string[],
    s10_table_rows: [
      ['Sector regulatory framework', 'National framework in force (Law 27,669/ARICCAME). YPF\'s role as institutional catalyst helps organize the coordination among agencies.'],
      ['Double counting of carbon', 'Chain integration (single custody) + serialized registry + sole holder (YPF).'],
      ['Reputation / greenwashing', 'Real, durably stored removal, physically locked in; communication based solely on data certified by third parties.'],
      ['Operational risk (cultivation)', 'Two ecoregions in parallel; early measurement via the proprietary MRV system; execution led by a partner with license, machinery and experience (Fundación GEN).'],
      ['Scale', 'Staged plan: scale is only addressed after validating the genetics.'],
      ['Liability / execution', 'Allocation by contract within the consortium; staged YPF financing against verifiable milestones.'],
    ] as readonly (readonly string[])[],

    /* 11 · why now + closing */
    s11_eyebrow: 'Why now',
    s11_title: 'Value added at the source.',
    s11_body: (
      <>
        Today, an urgent social need —employment and housing in Añelo—, a national
        industry waiting for someone to organize it, and the chance to build a sovereign
        environmental asset all converge. This turns part of Vaca Muerta&apos;s wealth into development,
        employment and roots, in the same territory — <Strong color={CREAM}>building on oil, not in its place.</Strong>
      </>
    ),
    s11_vision_eyebrow: 'The vision',
    s11_vision_title: 'Hemp cities, from one end of the country to the other.',
    s11_vision_body: (
      <>
        Imagine the country this builds: entire neighborhoods and cities raised with the same
        plant Manuel Belgrano dreamed of more than two centuries ago —giving work, shelter and a future to
        every Argentine willing to earn it—. The basin that today powers the country can also give it
        a model: turning <Strong color={CREAM}>Vaca Muerta into Vaca Verde</Strong>.
        Wealth that stays, that regenerates and that makes us proud.
      </>
    ),
    s11_belgrano_pre: 'Belgrano ',
    s11_belgrano_em: 'was right.',
    s11_belgrano_sub: 'Two hundred and thirty years later, his dream is once again the most modern plan we have.',
    s11_cta_meet: 'Schedule a meeting',
    s11_cta_whatsapp: 'Message us on WhatsApp',
    s11_footer: 'Flora Cáñamo Neuquino SRL · June 2026 · Confidential document',
  },
} as const

/* ---------- primitivas ---------- */

function Reveal({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

function Doc({ children, id, bg = PAPER }: { children: ReactNode; id?: string; bg?: string }) {
  return (
    <section id={id} style={{ background: bg, padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)' }}>
      <div style={{ maxWidth: '1020px', margin: '0 auto' }}>{children}</div>
    </section>
  )
}

function Eyebrow({ children, color = CELESTE }: { children: ReactNode; color?: string }) {
  return (
    <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color, margin: '0 0 0.7rem 0', fontWeight: 500 }}>
      {children}
    </p>
  )
}

function Chapter({ id, num, eyebrow, title, dek }: { id: string; num: string; eyebrow?: string; title: ReactNode; dek?: ReactNode }) {
  return (
    <Reveal>
      <header id={id} style={{ marginBottom: '2.75rem', scrollMarginTop: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(1rem, 2.5vw, 1.75rem)' }}>
          <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: GOLD, lineHeight: 0.8, flexShrink: 0 }}>{num}</span>
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', lineHeight: 1.08, color: INK, margin: 0 }}>{title}</h2>
          </div>
        </div>
        {dek && (
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', lineHeight: 1.6, color: MUTED, margin: '1.4rem 0 0', maxWidth: '64ch' }}>{dek}</p>
        )}
        <div style={{ height: '1px', background: LINE, marginTop: '1.9rem' }} />
      </header>
    </Reveal>
  )
}

function P({ children, max = '68ch', style }: { children: ReactNode; max?: string; style?: CSSProperties }) {
  return (
    <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.15vw, 1.06rem)', lineHeight: 1.8, color: 'rgba(7,26,56,0.82)', maxWidth: max, margin: '0 0 1.25rem 0', ...style }}>
      {children}
    </p>
  )
}

function Strong({ children, color = INK }: { children: ReactNode; color?: string }) {
  return <strong style={{ fontWeight: 600, color }}>{children}</strong>
}

function DocTable({ head, rows, emphFirst = true }: { head: readonly string[]; rows: readonly (readonly ReactNode[])[]; emphFirst?: boolean }) {
  return (
    <div style={{ overflowX: 'auto', margin: '0.5rem 0 0.5rem' }}>
      <table className="mp-doc-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: head.length > 2 ? '640px' : '480px' }}>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: FAINT, textAlign: 'left', fontWeight: 600, padding: '0 1.25rem 0.85rem 0', borderBottom: `1px solid rgba(7,26,56,0.28)`, width: i === 0 && head.length === 2 ? '38%' : undefined }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((cell, ci) => (
                <td key={ci} data-label={ci === 0 ? '' : head[ci]} style={{
                  ...sans,
                  fontWeight: ci === 0 && emphFirst ? 500 : 300,
                  fontSize: ci === 0 && emphFirst ? '0.92rem' : '0.88rem',
                  lineHeight: 1.6,
                  color: ci === 0 && emphFirst ? INK : 'rgba(7,26,56,0.74)',
                  padding: '1rem 1.25rem 1rem 0',
                  borderBottom: '1px solid rgba(7,26,56,0.1)',
                  verticalAlign: 'top',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Statement({ children, by }: { children: ReactNode; by?: string }) {
  return (
    <Reveal>
      <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', margin: '0.5rem 0 2rem', maxWidth: '40rem' }}>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)', lineHeight: 1.26, color: INK, margin: 0 }}>{children}</p>
        {by && <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: FAINT, margin: '1rem 0 0' }}>{by}</p>}
      </div>
    </Reveal>
  )
}

function Label({ children }: { children: ReactNode }) {
  return <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, margin: '2.75rem 0 1.25rem' }}>{children}</p>
}

/* ---------- datos derivados de imágenes (no traducibles) ---------- */

const CADENA_IMG = ['01-semilla', '02-cultivo', '03-cosecha', '04-decorticacion', '05-mezclado', '06-material', '07-construccion', '08-vivienda'] as const

/* ---------- barra de progreso ---------- */

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '2px', background: GOLD, transformOrigin: '0%', scaleX: scrollYProgress, zIndex: 100 }} />
  )
}

/* ---------- portada ---------- */

const TOC_IDS = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11'] as const

function Cover() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <section style={{ position: 'relative', minHeight: '100svh', background: INK, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <img src="/hero/relato/etapa1.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.22 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,26,56,0.7), rgba(7,26,56,0.94))' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1020px', margin: '0 auto', padding: 'clamp(5rem, 12vw, 8rem) clamp(1.5rem, 6vw, 5rem)', width: '100%' }}>
        <Reveal>
          <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 1.75rem' }}>
            {t.cover_confidential}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(3rem, 9vw, 6.5rem)', lineHeight: 1, color: CREAM, margin: '0 0 1.5rem' }}>
            {t.cover_title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1.05rem, 1.7vw, 1.4rem)', lineHeight: 1.5, color: 'rgba(243,241,231,0.72)', maxWidth: '40ch', margin: '0 0 2.75rem' }}>
            {t.cover_subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 2.5rem', borderTop: '1px solid rgba(243,241,231,0.16)', borderBottom: '1px solid rgba(243,241,231,0.16)', padding: '1.25rem 0', maxWidth: '44rem' }}>
            <span style={{ ...sans, fontSize: '0.8rem', color: 'rgba(243,241,231,0.6)' }}><span style={{ color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.6rem', marginRight: '0.6em' }}>{t.cover_issuer_label}</span>{t.cover_issuer}</span>
            <span style={{ ...sans, fontSize: '0.8rem', color: 'rgba(243,241,231,0.6)' }}><span style={{ color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.6rem', marginRight: '0.6em' }}>{t.cover_recipient_label}</span>{t.cover_recipient}</span>
          </div>
        </Reveal>

        {/* Índice */}
        <Reveal delay={0.4}>
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(242,181,68,0.7)', margin: '3rem 0 1.1rem' }}>{t.cover_contents}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem 2rem' }}>
            {TOC_IDS.map((id, i) => (
              <a key={id} href={`#${id}`} style={{ ...sans, fontSize: '0.86rem', color: 'rgba(243,241,231,0.7)', textDecoration: 'none', display: 'flex', gap: '0.85rem', padding: '0.4rem 0', borderBottom: '1px solid rgba(243,241,231,0.07)' }}>
                <span style={{ ...serif, fontStyle: 'italic', color: 'rgba(242,181,68,0.8)', minWidth: '1.6rem' }}>{String(i + 1).padStart(2, '0')}</span>
                {t.toc[i]}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- resumen ejecutivo ---------- */

function Resumen() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc bg={CREAM} id="resumen">
      <Reveal>
        <Eyebrow>{t.resumen_eyebrow}</Eyebrow>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 3.4vw, 3rem)', lineHeight: 1.24, color: INK, margin: '0 0 2.5rem', maxWidth: '24ch' }}>
          {t.resumen_lead}
        </p>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: LINE, border: `1px solid ${LINE}`, marginBottom: '2.5rem' }}>
        {t.resumen_cards.map(([title, d], i) => (
          <Reveal key={title} delay={0.06 * i}>
            <div style={{ background: CREAM, padding: 'clamp(1.5rem, 2.5vw, 2rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: GREEN_DK, margin: '0 0 0.6rem' }}>{title}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.6, color: MUTED, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <P max="74ch" style={{ marginBottom: 0 }}>
          {t.resumen_body}
        </P>
      </Reveal>
    </Doc>
  )
}

/* ---------- 1 · el momento ---------- */

function S1() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc id="s1">
      <Chapter id="s1-h" num="01" eyebrow={t.s1_eyebrow} title={t.s1_title} dek={t.s1_dek} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(232px, 1fr))', gap: '0.7rem', marginBottom: '2.5rem' }}>
        {t.clippings.map((c, i) => (
          <Reveal key={c.quote} delay={0.05 * i}>
            <article style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `2px solid ${c.alarm ? '#B4301C' : 'rgba(7,26,56,0.5)'}`, padding: '0.8rem 1rem 0.9rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(7,26,56,0.1)', paddingBottom: '0.35rem' }}>
                <span style={{ ...serif, fontWeight: 600, fontSize: '0.74rem', color: INK }}>{c.medium}</span>
                <span style={{ ...sans, fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: FAINT }}>{c.date}</span>
              </div>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: '0.88rem', lineHeight: 1.3, color: INK, margin: 0 }}>“{c.quote}”</p>
              <p style={{ ...sans, fontSize: '0.55rem', letterSpacing: '0.03em', color: FAINT, margin: 'auto 0 0', lineHeight: 1.4 }}>{c.who}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.25rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', maxWidth: '74ch' }}>
          {t.s1_bullets.map((b, i) => (
            <li key={i} style={{ ...sans, fontWeight: 300, fontSize: '0.98rem', lineHeight: 1.65, color: 'rgba(7,26,56,0.82)', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: '0.05em', color: GOLD, ...serif, fontStyle: 'italic' }}>—</span>{b}
            </li>
          ))}
        </ul>
      </Reveal>

      <Statement>
        {t.s1_statement}
      </Statement>
    </Doc>
  )
}

/* ---------- 2 · la solución ---------- */

function S2() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc bg={CREAM} id="s2">
      <Chapter id="s2-h" num="02" eyebrow={t.s2_eyebrow} title={t.s2_title} dek={t.s2_dek} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem, 2.5vw, 1.75rem)', marginBottom: '2.5rem' }}>
        {t.s2_products.map((c, i) => (
          <Reveal key={c.t} delay={0.08 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `2px solid ${GREEN}`, padding: 'clamp(1.6rem, 3vw, 2.2rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', color: INK, margin: '0 0 0.85rem' }}>{c.t}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.7, color: MUTED, margin: 0 }}>{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Statement by={t.s2_statement_by}>
        {t.s2_statement}
      </Statement>

      <Reveal>
        <P max="74ch">
          {t.s2_body}
        </P>
      </Reveal>

      {/* cadena de imágenes reciclada */}
      <Label>{t.s2_label_chain}</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.5rem' }}>
        {CADENA_IMG.map((img, i) => {
          const name = t.cadena[i]
          return (
            <Reveal key={img} delay={0.04 * i}>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', border: `1px solid ${LINE}` }}>
                <img src={`/cadena/${img}.jpg`} alt={name} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,26,56,0.9), transparent 55%)' }} />
                <span style={{ position: 'absolute', left: '0.5rem', bottom: '0.45rem', ...sans, fontSize: '0.62rem', fontWeight: 600, color: CREAM }}>{name}</span>
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* specs */}
      <Label>{t.s2_label_specs}</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1px', background: LINE, border: `1px solid ${LINE}` }}>
        {t.specs.map((s, i) => (
          <Reveal key={s.u} delay={0.05 * i}>
            <div style={{ background: CREAM, padding: '1.5rem 1.4rem', height: '100%' }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', color: GREEN_DK, margin: '0 0 0.15rem', lineHeight: 1 }}>{s.v}</p>
              <p style={{ ...sans, fontSize: '0.56rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CELESTE, margin: '0 0 0.6rem' }}>{s.u}</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.74rem', lineHeight: 1.55, color: MUTED, margin: 0 }}>{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Doc>
  )
}

/* ---------- 3 · encaje con YPF ---------- */

function S3() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc id="s3">
      <Chapter id="s3-h" num="03" eyebrow={t.s3_eyebrow} title={t.s3_title} dek={t.s3_dek} />
      <Reveal>
        <DocTable
          head={t.s3_table_head}
          rows={t.s3_table_rows}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <P max="72ch" style={{ marginTop: '2rem', marginBottom: 0 }}>
          {t.s3_body}
        </P>
      </Reveal>
    </Doc>
  )
}

/* ---------- 4 · el pedido ---------- */

function S4() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc bg={DUSK} id="s4">
      <Reveal>
        <header id="s4-h" style={{ marginBottom: '2.75rem', scrollMarginTop: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(1rem, 2.5vw, 1.75rem)' }}>
            <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: GOLD, lineHeight: 0.8 }}>04</span>
            <div>
              <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, margin: '0 0 0.7rem', fontWeight: 500 }}>{t.s4_eyebrow}</p>
              <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', lineHeight: 1.08, color: CREAM, margin: 0 }}>{t.s4_title}</h2>
            </div>
          </div>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', lineHeight: 1.6, color: 'rgba(243,241,231,0.7)', margin: '1.4rem 0 0', maxWidth: '66ch' }}>
            {t.s4_dek}
          </p>
          <div style={{ height: '1px', background: 'rgba(243,241,231,0.16)', marginTop: '1.9rem' }} />
        </header>
      </Reveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(242,181,68,0.2)', border: '1px solid rgba(242,181,68,0.2)' }}>
        {t.s4_items.map((it, i) => (
          <Reveal key={it.n} delay={0.08 * i}>
            <div style={{ background: DUSK, padding: 'clamp(1.5rem, 3vw, 2.25rem)', display: 'flex', gap: 'clamp(1.25rem, 3vw, 2.5rem)', alignItems: 'flex-start' }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'rgba(242,181,68,0.6)', lineHeight: 1, minWidth: '2.5rem' }}>{it.n}</span>
              <div>
                <h3 style={{ ...sans, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', fontWeight: 600, color: CREAM, margin: '0 0 0.6rem', letterSpacing: '0.01em' }}>{it.t}</h3>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.62)', margin: 0, maxWidth: '70ch' }}>{it.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Doc>
  )
}

/* ---------- 5 · tres fases ---------- */

function S5() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc id="s5">
      <Chapter id="s5-h" num="05" eyebrow={t.s5_eyebrow} title={t.s5_title} dek={t.s5_dek} />
      <Reveal>
        <DocTable
          head={t.s5_table_head}
          rows={t.s5_table_rows}
          emphFirst={false}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div style={{ background: CREAM, border: `1px solid ${LINE}`, borderLeft: `3px solid ${GOLD}`, padding: 'clamp(1.5rem, 3vw, 2rem)', marginTop: '2rem' }}>
          <P max="74ch" style={{ marginBottom: 0 }}>
            {t.s5_callout}
          </P>
        </div>
      </Reveal>
    </Doc>
  )
}

/* ---------- 6 · el carbono ---------- */

function S6() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc bg={CREAM} id="s6">
      <Chapter id="s6-h" num="06" eyebrow={t.s6_eyebrow} title={t.s6_title} dek={t.s6_dek} />

      <Statement by={t.s6_statement_by}>
        {t.s6_statement}
      </Statement>

      <Label>{t.s6_label_layers}</Label>
      <Reveal>
        <DocTable
          head={t.s6_table1_head}
          rows={t.s6_table1_rows}
        />
      </Reveal>

      <Reveal delay={0.1}>
        <P max="74ch" style={{ marginTop: '2rem' }}>
          {t.s6_body1}
        </P>
      </Reveal>
      <Reveal delay={0.16}>
        <P max="74ch" style={{ marginBottom: 0 }}>
          {t.s6_body2}
        </P>
      </Reveal>

      <Label>{t.s6_label_asset}</Label>
      <Reveal>
        <DocTable
          head={t.s6_table2_head}
          rows={t.s6_table2_rows}
          emphFirst={false}
        />
      </Reveal>
      <Reveal delay={0.08}>
        <p style={{ ...sans, fontSize: '0.7rem', lineHeight: 1.6, color: FAINT, marginTop: '0.85rem', maxWidth: '74ch' }}>
          {t.s6_footnote}
        </p>
      </Reveal>
    </Doc>
  )
}

/* ---------- 7 · quiénes lo hacen ---------- */

function S7() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc id="s7">
      <Chapter id="s7-h" num="07" eyebrow={t.s7_eyebrow} title={t.s7_title} dek={t.s7_dek} />

      <Label>{t.s7_label_partners}</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1rem, 2vw, 1.4rem)' }}>
        {t.s7_partners.map((c, i) => (
          <Reveal key={c.t} delay={0.07 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `2px solid ${CELESTE}`, padding: 'clamp(1.4rem, 2.5vw, 1.9rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', color: INK, margin: '0 0 0.2rem' }}>{c.t}</h3>
              <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CELESTE, margin: '0 0 0.8rem' }}>{c.s}</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <P max="74ch" style={{ marginTop: '2.5rem', marginBottom: 0 }}>
          {t.s7_body}
        </P>
      </Reveal>
    </Doc>
  )
}

/* ---------- 8 · oportunidad ampliada (corte full-bleed) ---------- */

function S8() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <section id="s8" style={{ position: 'relative', overflow: 'hidden', background: DUSK }}>
      <img src="/hero/vision-city.jpg" alt="Ciudad de cáñamo en la estepa patagónica" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.34 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,26,56,0.62), rgba(7,26,56,0.9))' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1020px', margin: '0 auto', padding: 'clamp(4.5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <Reveal>
          <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: GOLD, lineHeight: 0.8 }}>08</span>
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, margin: '1.25rem 0 0.7rem', fontWeight: 500 }}>{t.s8_eyebrow}</p>
          <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.06, color: CREAM, margin: '0 0 1.75rem', maxWidth: '18ch' }}>
            {t.s8_title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', lineHeight: 1.75, color: 'rgba(243,241,231,0.74)', maxWidth: '66ch', margin: '0 0 1.5rem' }}>
            {t.s8_body}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', maxWidth: '44rem' }}>
            <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)', lineHeight: 1.34, color: CREAM, margin: 0 }}>
              {t.s8_quote}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <p style={{ ...sans, fontWeight: 300, fontSize: '0.78rem', fontStyle: 'italic', lineHeight: 1.6, color: 'rgba(243,241,231,0.5)', maxWidth: '62ch', marginTop: '2rem' }}>
            {t.s8_note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 9 · encuadre legal ---------- */

function S9() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc id="s9">
      <Chapter id="s9-h" num="09" eyebrow={t.s9_eyebrow} title={t.s9_title} dek={t.s9_dek} />
      <Reveal>
        <DocTable
          head={t.s9_table_head}
          rows={t.s9_table_rows}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div style={{ background: CREAM, border: `1px solid ${LINE}`, padding: 'clamp(1.5rem, 3vw, 2rem)', marginTop: '2rem' }}>
          <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: CELESTE, margin: '0 0 0.75rem', fontWeight: 600 }}>{t.s9_box_label}</p>
          <P max="74ch" style={{ marginBottom: 0 }}>
            {t.s9_box_body}
          </P>
        </div>
      </Reveal>
    </Doc>
  )
}

/* ---------- 10 · riesgos ---------- */

function S10() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <Doc bg={CREAM} id="s10">
      <Chapter id="s10-h" num="10" eyebrow={t.s10_eyebrow} title={t.s10_title} />
      <Reveal>
        <DocTable
          head={t.s10_table_head}
          rows={t.s10_table_rows}
        />
      </Reveal>
    </Doc>
  )
}

/* ---------- 11 · por qué ahora + cierre ---------- */

function S11() {
  const { lang } = useLang()
  const t = COPY[lang]
  return (
    <>
      {/* cierre práctico — por qué ahora + MOU */}
      <section id="s11" style={{ background: INK, padding: 'clamp(4.5rem, 10vw, 7rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '1020px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: GOLD, lineHeight: 0.8 }}>11</span>
            <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, margin: '1.25rem 0 0.7rem', fontWeight: 500 }}>{t.s11_eyebrow}</p>
            <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.08, color: CREAM, margin: '0 0 1.75rem', maxWidth: '20ch' }}>
              {t.s11_title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', lineHeight: 1.78, color: 'rgba(243,241,231,0.74)', maxWidth: '64ch', margin: '0 0 3rem' }}>
              {t.s11_body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL cinematográfico — Vaca Muerta → Vaca Verde */}
      <section style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden', background: INK, display: 'flex', alignItems: 'flex-end' }}>
        <video
          src="/hero/relato_vivo.mp4"
          poster="/hero/vaca-verde.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,26,56,0.2) 0%, rgba(7,26,56,0.5) 48%, rgba(7,26,56,0.94) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1020px', margin: '0 auto', padding: 'clamp(4rem, 12vw, 9rem) clamp(1.5rem, 6vw, 5rem) clamp(2.5rem, 6vw, 4rem)', width: '100%' }}>
          <Reveal>
            <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 1rem', fontWeight: 500 }}>{t.s11_vision_eyebrow}</p>
            <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: 1.02, color: CREAM, margin: '0 0 1.75rem', maxWidth: '16ch' }}>
              {t.s11_vision_title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.45vw, 1.22rem)', lineHeight: 1.78, color: 'rgba(243,241,231,0.82)', maxWidth: '60ch', margin: '0 0 2.75rem' }}>
              {t.s11_vision_body}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1, color: CREAM, margin: '0 0 1rem' }}>
              {t.s11_belgrano_pre}<span style={{ color: GREEN }}>{t.s11_belgrano_em}</span>
            </h3>
            <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(243,241,231,0.6)', maxWidth: '50ch', margin: 0 }}>
              {t.s11_belgrano_sub}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginTop: 'clamp(2.25rem, 5vw, 3rem)' }}>
              <a
                href={MEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.55rem', justifyContent: 'center',
                  padding: '0.9rem 1.9rem', background: 'transparent',
                  border: '1px solid rgba(242,181,68,0.6)', color: GOLD,
                  ...sans, fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600,
                  textDecoration: 'none', cursor: 'pointer',
                }}
              >
                {t.s11_cta_meet}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center',
                  padding: '0.9rem 1.9rem', background: 'rgba(91,196,106,0.14)',
                  border: `1px solid ${GREEN}`, color: GREEN,
                  ...sans, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
                  textDecoration: 'none', cursor: 'pointer',
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-3.2 4.4c-.15 0-.4.06-.6.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.93 2.36.11.15 1.6 2.55 3.95 3.47 1.95.77 2.35.62 2.77.58.42-.04 1.36-.55 1.55-1.09.19-.54.19-1 .13-1.09-.06-.1-.21-.15-.44-.27-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.51.12-.15.23-.59.75-.72.9-.13.15-.27.17-.5.06-.23-.12-.96-.36-1.83-1.13-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.47.1-.1.23-.27.34-.4.11-.14.15-.23.23-.39.08-.15.04-.29-.02-.4-.06-.12-.5-1.25-.7-1.71-.18-.44-.37-.38-.5-.39h-.44Z" />
                </svg>
                {t.s11_cta_whatsapp}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p style={{ ...sans, fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.4)', marginTop: 'clamp(2.5rem, 6vw, 4rem)' }}>
              {t.s11_footer}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ---------- ensamblado ---------- */

export function MasterplanDoc({ showCover = true }: { showCover?: boolean }) {
  return (
    <main style={{ background: PAPER }}>
      {showCover && <ProgressBar />}
      {showCover && <Cover />}
      <Resumen />
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5 />
      <S6 />
      <S7 />
      <S8 />
      <S9 />
      <S10 />
      <S11 />
    </main>
  )
}
