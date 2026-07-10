'use client'

/* ============================================================
   PLAN MANUEL BELGRANO — MASTERPLAN UNIVERSAL (jul 2026)
   Un solo masterplan para cualquier lector — industria, Estado,
   ciencia, inversores. Sin destinatario nombrado.
   Columna vertebral: la planificación de Carmen Caro Solís
   (5 programas + modelo de madurez de 6 etapas × 5 dimensiones
   con gates). Apertura: "Vaca Muerta → Vaca Verde".
   Estética: white-paper Soberana (papel claro, dorado, navy).
   Bilingüe ES / EN (useLang).
   ============================================================ */

import { motion, useScroll } from 'framer-motion'
import { type CSSProperties, type ReactNode } from 'react'
import { useLang } from '@/lib/i18n'

const INK = '#071A38'
const DUSK = '#0E2A52'
const PAPER = '#FAF8F1'
const CREAM = '#F3F1E7'
const GOLD = '#F2B544'
const GREEN = '#5BC46A'
const GREEN_DK = '#2F8F3A'
const CELESTE = '#2F6FB0'
const LINE = 'rgba(7,26,56,0.13)'
const LINE_D = 'rgba(243,241,231,0.16)'
const MUTED = 'rgba(7,26,56,0.66)'
const FAINT = 'rgba(7,26,56,0.5)'
const CREAM_MUTED = 'rgba(243,241,231,0.72)'
const CREAM_FAINT = 'rgba(243,241,231,0.5)'

const MEET_URL = 'https://calendar.app.google/PBcbPHeEvsxKNR4X8'
const WHATSAPP_URL = 'https://wa.me/5492994229436?text=' + encodeURIComponent('Hola, quiero conversar sobre el Plan Manuel Belgrano.')

const serif: CSSProperties = { fontFamily: 'var(--font-garamond), "EB Garamond", serif', fontWeight: 400 }
const sans: CSSProperties = { fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif' }

/* ---------- texto enriquecido: **negrita** ---------- */
function rich(s: string, boldColor?: string): ReactNode {
  const parts = s.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <strong key={i} style={{ fontWeight: 600, color: boldColor ?? 'inherit' }}>{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  )
}

/* ============================================================
   COPY — bilingüe ES / EN, strings puras + rich()
   ============================================================ */

const TXT = {
  es: {
    confidential: 'Documento confidencial · Julio 2026',
    doc_title: 'Plan Manuel Belgrano',
    doc_subtitle: 'El masterplan de una nueva industria argentina.',
    issuer_label: 'Emisor',
    issuer: 'Flora Cáñamo Neuquino SRL · Guillermo Sandoval',
    scope_label: 'Alcance',
    scope: 'Neuquén · Argentina',

    /* la visión */
    vision_k: 'La visión',
    vision_lead: 'Podemos convertir Vaca Muerta en Vaca Verde.',
    vision_body:
      'Debajo de Neuquén está la energía que hoy mueve al país. En la superficie hay tierra, agua y sol para producir lo que puede sostenerlo para siempre. La provincia tiene un potencial estimado de **160.000 hectáreas para poner bajo riego**; el cáñamo industrial es el cultivo que convierte esa superficie en vivienda, trabajo y una industria nueva. **Vaca Muerta no es eterna — lo que construyamos con lo que genera puede serlo.**',
    vision_cards: [
      ['Vivienda', 'accesible, aislante y de rápida ejecución, con materia prima y mano de obra locales.'],
      ['Empleo', 'de la semilla a la llave: cultivo, industria y construcción — trabajo local en cada eslabón de la cadena.'],
      ['Industria', 'una cadena de valor agregado en origen, que multiplica empresas regionales y exporta.'],
    ],

    /* 01 · el momento */
    s1_k: 'El momento',
    s1_t: 'Problemas reales que se pueden aliviar',
    s1_d: 'Neuquén atraviesa tensiones concretas, documentadas en la prensa, que el Plan Manuel Belgrano contribuye a descomprimir.',
    clippings: [
      { medium: 'Río Negro', date: 'jun 2026', quote: 'Neuquén va a tener, en 30 años, 1 millón y medio de personas.', who: 'Federico Sturzenegger · Ministro de Desregulación', alarm: false },
      { medium: 'Infobae', date: '18 jun', quote: 'No se vengan con la familia.', who: 'Fernando Banderet · Intendente de Añelo', alarm: true },
      { medium: 'Infobae', date: 'jun 2026', quote: 'No nos sobra trabajo. Para trabajar en Vaca Muerta hay que formarse.', who: 'Rolando Figueroa · Gobernador de Neuquén', alarm: false },
      { medium: 'LM Neuquén', date: 'may 2026', quote: 'Contratan empresas de afuera para obras que podrían hacer las empresas locales.', who: 'UOCRA Neuquén · +100 sin trabajo', alarm: true },
    ],
    s1_bullets: [
      'El **déficit habitacional** de la zona ronda el 60%, con los alquileres más caros del país.',
      'Buena parte del **empleo lo toman empresas de fuera** de la provincia y la mano de obra local queda afuera.',
      'Añelo, epicentro del yacimiento, **creció más del 140%** y no tiene cómo alojar ni dar servicios a quienes llegan.',
      'En paralelo, la **industria del cáñamo está frenada**: un desajuste regulatorio entre organismos dejó sin cobertura a cientos de productores.',
    ],
    s1_statement: 'Todos comparten una raíz: un potencial productivo que espera ser ordenado y puesto en marcha. Este plan existe para eso.',

    /* 02 · la planta */
    s2_k: 'El cultivo',
    s2_t: 'Una planta, dos materiales, casi sin desperdicio',
    s2_d: 'Cáñamo industrial (Cannabis sativa L., THC < 0,3%): un cultivo agrícola de ciclo corto, rústico y de bajo requerimiento hídrico, regulado por la Ley 27.669. De la misma hectárea salen el material de construcción y el mejorador de suelos.',
    s2_products: [
      ['Hempcrete', 'Material de construcción de base biológica para ladrillos y bloques de vivienda accesible, aislante y de rápida ejecución. Tecnología probada en más de 50 países, con norma europea EN 16101. En Argentina casi no se usa: el plan la trae y la adapta.'],
      ['Biochar', 'A partir de los residuos de la planta (pirólisis), un material que fija el carbono de forma durable —siglos— y mejora el suelo. La segunda línea de valor de la misma hectárea.'],
    ],
    s2_statement_by: 'La lógica de la cadena',
    s2_statement: 'La vivienda tracciona la producción; el carbono es la consecuencia certificable.',
    s2_body:
      '**Dónde está la innovación.** No en el material —ya probado en el mundo— sino en la **integración**: producirlo a escala en Argentina, con medición y certificación del carbono, validando la genética adaptada a cada territorio y conectándolo con la vivienda que la zona necesita.',
    s2_label_chain: 'De la semilla a la llave · ocho pasos',
    cadena: ['Semilla', 'Cultivo', 'Cosecha', 'Decortización', 'Mezclado', 'Hempcrete', 'Construcción', 'Vivienda'],
    s2_label_specs: 'El material, en números',
    specs: [
      ['0,06–0,12', 'W/mK · conductividad', 'Aislación superior — mejor desempeño térmico en el frío patagónico.'],
      ['Clase A', 'al fuego', 'Material incombustible, apto para entornos operativos.'],
      ['+500', 'años de vida útil', 'Norma europea EN 16101, probado en más de 50 países.'],
      ['>90%', 'de la planta aprovechada', 'Hempcrete + biochar: economía circular, sin desperdicio.'],
    ],

    /* 03 · los cinco programas */
    s3_k: 'El plan',
    s3_t: 'Cinco programas, una plataforma',
    s3_d: 'El Plan Manuel Belgrano se organiza en cinco programas que avanzan en paralelo. Cada uno genera evidencia, producto o capacidad que los demás usan: juntos forman una plataforma de desarrollo regenerativo.',
    programas: [
      {
        l: 'A', t: 'Ciencia, evidencia y validación',
        o: 'Generar la evidencia científica, técnica y económica que valide el cáñamo como solución ambiental, constructiva y productiva.',
        p: ['Certificación de captura de carbono', 'Análisis de ciclo de vida de materiales y viviendas', 'Estudios de desempeño térmico', 'Estudios económicos'],
        w: 'EcoGaia · INTI',
      },
      {
        l: 'B', t: 'Desarrollo industrial y productivo',
        o: 'Desarrollar una cadena de valor competitiva capaz de producir materiales, generar actividad económica y abastecer mercados emergentes.',
        p: ['Genéticas optimizadas y producción de semillas', 'Producción de biomasa y cañamiza', 'Ladrillos y bloques de cáñamo (Flora Bricks · Flora Blocks)', 'Desarrollo de binders, estandarización y proveedores'],
        w: 'Fundación GEN · Flora · INTI',
      },
      {
        l: 'C', t: 'Vivienda y hábitat',
        o: 'Demostrar la viabilidad técnica, económica y social de soluciones habitacionales de cáñamo que mejoren la calidad de vida y reduzcan la huella del sector.',
        p: ['Vivienda demostrativa', 'Vivienda social modular', 'Manuales constructivos', 'Modelos de implementación municipal'],
        w: 'Flora · Red Protierra',
      },
      {
        l: 'D', t: 'Empleo y capital humano',
        o: 'Generar capacidades laborales y empleo de calidad en toda la cadena de valor del cáñamo.',
        p: ['Capacitación en producción de materiales', 'Capacitación en construcción con cáñamo', 'Academia de empleo y certificación de competencias', 'Inserción laboral'],
        w: 'Consorcio',
      },
      {
        l: 'E', t: 'Mercado, financiamiento y escalamiento',
        o: 'Crear los mecanismos de mercado y financiamiento que sostengan y escalen el ecosistema del cáñamo.',
        p: ['Créditos de carbono', 'Modelos de negocio', 'Fondos de inversión de impacto', 'Estrategias de adopción'],
        w: 'Flora · EcoGaia',
      },
    ],

    /* 04 · el método */
    s4_k: 'El método',
    s4_t: 'Seis etapas, cinco dimensiones, un gate por vez',
    s4_d: 'El plan avanza con la disciplina de un programa de inversión: seis etapas de madurez, evaluadas en paralelo en cinco dimensiones. Entre etapa y etapa hay un gate — una decisión que solo se toma con la evidencia de la etapa anterior.',
    etapas: [
      ['0', 'Formulación', 'Definir el proyecto, las prestaciones objetivo y el camino de validación.'],
      ['1', 'Viabilidad', 'Probar que es viable: prototipos, habilitaciones, interés real de clientes y financiamiento.'],
      ['2', 'Piloto', 'Producir el material con desempeño reproducible y ensayarlo en laboratorio acreditado.'],
      ['3', 'Demostración', 'Construir vivienda demostrativa real, iniciar la certificación técnica y validar el sistema en uso.'],
      ['4', 'Escalamiento', 'Industrializar: planta, control de calidad, certificaciones completas y comercialización a escala.'],
      ['5', 'Plataforma territorial', 'Replicar el modelo en nuevos territorios: tecnología, alianzas y financiamiento transferibles.'],
    ],
    s4_label_dims: 'Las cinco dimensiones — evaluadas en paralelo en cada etapa',
    dims: ['Técnica', 'Regulatoria', 'Comercial', 'Financiera', 'Institucional'],
    s4_dims_body:
      'Cada etapa se aprueba en las cinco dimensiones a la vez: un producto excelente sin habilitación no pasa el gate; una demanda enorme sin unidad económica, tampoco. El plan define indicadores verificables para cada dimensión en cada etapa.',
    s4_statement: 'El capital entra por etapas y solo avanza con evidencia.',
    s4_statement_by: 'La regla del plan',

    /* 05 · la invitación */
    s5_k: 'La invitación',
    s5_t: 'Tres asientos en la mesa fundadora',
    s5_d: 'El plan no pide subsidios ni organismos nuevos. Pide socios fundadores que ocupen el lugar que solo ellos pueden ocupar — con compromisos por etapas, contra hitos verificables.',
    s5_items: [
      ['01', 'La industria', 'Anclar la demanda: compromisos de compra sobre el carbono certificado y la vivienda para sus propias operaciones. La energía, el agro y la construcción encuentran acá un activo territorial nuevo — financiado por etapas, nunca a ciegas.'],
      ['02', 'El Estado', 'Reglas claras y articulación. El proyecto avanza con el marco vigente y capital privado; del Estado necesita lo que mejor puede dar: destrabar, simplificar y acompañar sin poner trabas.'],
      ['03', 'La ciencia', 'Validación independiente: ensayos, normas y certificación con el INTI, universidades y laboratorios acreditados. Toda afirmación del plan debe poder firmarla un tercero.'],
    ],

    /* 06 · el carbono */
    s6_k: 'El activo ambiental',
    s6_t: 'Carbono medido, verificado y de un solo dueño',
    s6_d: 'El diferencial del cáñamo construido: el carbono que captura el cultivo queda fijado en la pared durante toda la vida de la construcción, y en el suelo por siglos vía biochar. La integridad del activo se resuelve desde el diseño de la cadena.',
    s6_statement_by: 'Integración de la cadena = sin doble contabilidad',
    s6_statement: 'Al controlar toda la cadena —semilla, cultivo, material, construcción y residuos—, el carbono tiene un único hilo de custodia, trazable de punta a punta. Se cuenta una sola vez y se atribuye a un solo titular.',
    s6_label_layers: 'Tres capas de validación',
    s6_table1_head: ['Capa', 'Responsable', 'Estándar'],
    s6_table1_rows: [
      ['Medición y trazabilidad (MRV)', 'Sistema propio (a desarrollar)', 'Trazabilidad digital de cultivos en tiempo real'],
      ['Certificación del carbono', 'EcoGaia', 'Verra / Gold Standard (internacional)'],
      ['Material y sistema constructivo', 'INTI', 'Certificación nacional (a desarrollar)'],
    ],
    s6_body:
      '**Titularidad.** Cada tonelada se registra una sola vez, con número de serie único en un registro público internacional, y se retira a nombre de un único titular: el socio que ancle la demanda. El diseño excluye expresamente el reclamo del mismo crédito por parte de cualquier otro actor de la cadena.',
    s6_label_asset: 'El activo de carbono — estimaciones de referencia',
    s6_table2_head: ['Escenario de precio', 'USD/tCO₂e', 'Ingreso anual de referencia *'],
    s6_table2_rows: [
      ['Mercado voluntario · nature-based', 'USD 30', 'USD 1,2 M'],
      ['Remoción durable · mercado premium', 'USD 75', 'USD 3,0 M'],
      ['Remoción durable · biochar (BCR–Puro)', 'USD 164', 'USD 6,6 M'],
    ],
    s6_footnote: '* Cifras ilustrativas, a validar en el benchmark. Estimación sobre 4.000 ha y un volumen conservador de 10 t CO₂/ha/año. Los montos, precios y superficies son materia de negociación.',

    /* 07 · quiénes lo hacen */
    s7_k: 'Quiénes lo hacen',
    s7_t: 'Un consorcio con las piezas completas',
    s7_d: 'La ejecución no recae en una sola persona: se apoya en partners institucionales con licencias, experiencia y capacidad operativa ya probadas.',
    s7_partners: [
      ['Flora Cáñamo Neuquino', 'Integra la cadena', 'Diseño del plan, coordinación del consorcio y vehículo operativo. Licencia industrial en gestión.'],
      ['Fundación GEN', 'Ejecuta el cultivo · licencia agrícola', 'Titular de la licencia agrícola. Maquinaria, conocimiento agronómico y capacidad operativa. Lidera el Proyecto Coirón, primer antecedente de cáñamo industrial de Neuquén.'],
      ['EcoGaia', 'Certifica el carbono', 'Desarrolladora y certificadora argentina de créditos de carbono: ciclo completo bajo Verra y Gold Standard, con experiencia en biochar, agricultura regenerativa y cáñamo en Canadá.'],
      ['INTI', 'Valida el material', 'Instituto Nacional de Tecnología Industrial: ensayos del material y ruta de certificación del sistema constructivo.'],
      ['Red Protierra', 'Transfiere el saber constructivo', 'Red argentina de construcción natural: manuales constructivos y formación de aplicadores.'],
    ],
    s7_founder_label: 'El fundador',
    s7_founder:
      '**Guillermo Sandoval** — fundador de Flora y del Plan Manuel Belgrano. Preside la asociación civil que opera cultivo y producción de cannabis medicinal en Neuquén desde 2023, y conduce Flora Cáñamo Neuquino SRL, la sociedad operadora del plan.',

    /* 08 · la oportunidad ampliada */
    s8_k: 'La oportunidad ampliada',
    s8_t: 'Una industria interrumpida hace 230 años.',
    s8_body:
      'El primer paso es acotado y de bajo riesgo, pero lo que abre es grande. Cultivar cáñamo a escala reactiva una cadena de la que se desprenden múltiples industrias —alimentos, textil, bioplásticos, papel, cosmética—: un motor de empleo y desarrollo regional.',
    s8_quote: 'Manuel Belgrano ya proponía en 1796 el cultivo del lino y del cáñamo como camino de valor agregado y trabajo para el país. La prohibición lo interrumpió; el marco vigente vuelve a habilitarlo.',
    s8_note: 'El foco ejecutivo del plan sigue siendo la cadena hempcrete–biochar; las demás industrias son el horizonte que se abre.',

    /* 09 · encuadre legal */
    s9_k: 'Encuadre legal y regulatorio',
    s9_t: 'Marco vigente, de alcance nacional',
    s9_d: 'El cáñamo industrial cuenta en Argentina con un marco normativo vigente y de alcance nacional, separado del régimen del cannabis medicinal.',
    s9_table_head: ['Norma', 'Qué establece'],
    s9_table_rows: [
      ['Ley 27.669 (2022)', 'Marco nacional del cáñamo industrial (THC < 0,3%). Crea la ARICCAME como autoridad de aplicación, en la órbita del Ministerio de Economía.'],
      ['Decreto 405/2023', 'Reglamenta la ley: habilita el cultivo, el procesamiento y la comercialización del cáñamo industrial en todo el país.'],
      ['Licencias ARICCAME', 'La licencia agrícola (cultivo) la posee Fundación GEN, socio ejecutor; la industrial está en gestión por Flora.'],
      ['Normas de construcción', 'Ruta de certificación identificada junto al INTI: aptitud técnica del sistema constructivo, normas IRAM de acondicionamiento térmico y reglamentos CIRSOC.'],
    ],
    s9_box_label: 'Sociedad operadora',
    s9_box_body:
      'Flora Cáñamo Neuquino SRL fue constituida en enero de 2025; su inscripción se completa en la jurisdicción de la Ciudad Autónoma de Buenos Aires, con el objeto social ajustado al marco de cáñamo industrial (Ley 27.669).',

    /* 10 · riesgos */
    s10_k: 'Riesgos',
    s10_t: 'Y cómo se gestionan',
    s10_table_head: ['Riesgo', 'Cómo se gestiona'],
    s10_table_rows: [
      ['Marco regulatorio del sector', 'Marco nacional vigente (Ley 27.669 / Decreto 405/2023). La dimensión regulatoria del plan mapea cada habilitación por etapa; los gates impiden avanzar sin cumplimiento.'],
      ['Doble contabilidad del carbono', 'Integración de la cadena (custodia única) + registro serializado + titular único.'],
      ['Reputación / greenwashing', 'Remoción real y de almacenamiento durable, fijada físicamente; comunicación basada únicamente en datos certificados por terceros.'],
      ['Riesgo operativo (cultivo)', 'Dos ecorregiones en paralelo; medición temprana mediante MRV; ejecución a cargo de un socio con licencia, maquinaria y experiencia (Fundación GEN).'],
      ['Escala', 'Plan por etapas con gates: la escala solo se aborda tras validar genética, material y demanda.'],
      ['Responsabilidad / ejecución', 'Asignación por contrato dentro del consorcio; financiamiento por etapas contra hitos verificables.'],
    ],

    /* 11 · por qué ahora + cierre */
    s11_k: 'Por qué ahora',
    s11_t: 'Valor agregado en origen.',
    s11_body:
      'Hoy convergen una necesidad social urgente —empleo y vivienda en la zona de Vaca Muerta—, un marco legal vigente, una industria mundial de materiales de base biológica en plena expansión, y una provincia con la tierra, el agua y el sol para liderarla. Transformar parte de la riqueza de Vaca Muerta en desarrollo, empleo y arraigo, en el mismo territorio — **a partir del petróleo, no en su lugar.**',
    s11_vision_k: 'La visión',
    s11_vision_t: 'Ciudades de cáñamo, de punta a punta del país.',
    s11_vision_body:
      'Imaginemos el país que esto construye: barrios y ciudades enteras levantadas con la misma planta que Manuel Belgrano soñó hace más de dos siglos —dando trabajo, techo y futuro a cada argentino dispuesto a ganárselo—. La cuenca que hoy le da energía al país puede darle, además, un modelo: convertir **Vaca Muerta en Vaca Verde**. Riqueza que se queda, que regenera y que nos da orgullo.',
    s11_belgrano_pre: 'Belgrano ',
    s11_belgrano_em: 'tenía razón.',
    s11_belgrano_sub: 'Doscientos treinta años después, su sueño vuelve a ser el plan más moderno que tenemos.',
    cta_meet: 'Agendar una reunión',
    cta_whatsapp: 'Escribinos por WhatsApp',
    footer: 'Flora Cáñamo Neuquino SRL · Julio 2026 · Documento confidencial',
  },

  en: {
    confidential: 'Confidential document · July 2026',
    doc_title: 'Plan Manuel Belgrano',
    doc_subtitle: 'The masterplan for a new Argentine industry.',
    issuer_label: 'Issuer',
    issuer: 'Flora Cáñamo Neuquino SRL · Guillermo Sandoval',
    scope_label: 'Scope',
    scope: 'Neuquén · Argentina',

    vision_k: 'The vision',
    vision_lead: 'We can turn Vaca Muerta into Vaca Verde.',
    vision_body:
      'Beneath Neuquén lies the energy that powers the country today. On the surface, there is land, water and sun to produce what can sustain it forever. The province has an estimated potential of **160,000 hectares to bring under irrigation**; industrial hemp is the crop that turns that surface into housing, work and a new industry. **Vaca Muerta is not eternal — what we build with what it generates can be.**',
    vision_cards: [
      ['Housing', 'affordable, well-insulated and quick to build, with local raw materials and labor.'],
      ['Employment', 'from seed to key: farming, industry and construction — local work at every link of the chain.'],
      ['Industry', 'a value chain with value added at the source, multiplying regional companies and exporting.'],
    ],

    s1_k: 'The moment',
    s1_t: 'Real problems, ready to ease',
    s1_d: 'Neuquén is facing concrete tensions, documented in the press, that the Manuel Belgrano Plan helps to ease.',
    clippings: [
      { medium: 'Río Negro', date: 'Jun 2026', quote: 'In 30 years, Neuquén will have one and a half million people.', who: 'Federico Sturzenegger · Minister of Deregulation', alarm: false },
      { medium: 'Infobae', date: 'Jun 18', quote: 'Don\'t come with your family.', who: 'Fernando Banderet · Mayor of Añelo', alarm: true },
      { medium: 'Infobae', date: 'Jun 2026', quote: 'We don\'t have jobs to spare. To work in Vaca Muerta, you have to be trained.', who: 'Rolando Figueroa · Governor of Neuquén', alarm: false },
      { medium: 'LM Neuquén', date: 'May 2026', quote: 'They hire outside companies for work that local firms could do.', who: 'UOCRA Neuquén · 100+ out of work', alarm: true },
    ],
    s1_bullets: [
      'The region\'s **housing deficit** is around 60%, with the most expensive rents in the country.',
      'A large share of the **jobs goes to companies from outside** the province, and local labor is left out.',
      'Añelo, the epicenter of the field, **grew by more than 140%** and has no way to house or serve those who arrive.',
      'In parallel, the **hemp industry is stalled**: a regulatory mismatch between agencies left hundreds of producers without coverage.',
    ],
    s1_statement: 'They all share one root: a productive potential waiting to be organized and set in motion. This plan exists for that.',

    s2_k: 'The crop',
    s2_t: 'One plant, two materials, almost zero waste',
    s2_d: 'Industrial hemp (Cannabis sativa L., THC < 0.3%): a short-cycle, hardy, low-water agricultural crop, regulated by Law 27,669. The construction material and the soil improver come from the same hectare.',
    s2_products: [
      ['Hempcrete', 'A bio-based construction material for bricks and blocks for affordable, well-insulated and quick-to-build housing. A technology proven in more than 50 countries, with European standard EN 16101. In Argentina it is barely used: the plan brings it in and adapts it.'],
      ['Biochar', 'Made from the plant\'s residues (pyrolysis), a material that locks carbon durably —for centuries— and improves the soil. The second value line from the same hectare.'],
    ],
    s2_statement_by: 'The logic of the chain',
    s2_statement: 'Housing drives production; carbon is the certifiable consequence.',
    s2_body:
      '**Where the innovation lies.** Not in the material —already proven worldwide— but in the **integration**: producing it at scale in Argentina, with carbon measurement and certification, validating the genetics adapted to each territory and connecting it with the housing the region needs.',
    s2_label_chain: 'From seed to key · eight steps',
    cadena: ['Seed', 'Cultivation', 'Harvest', 'Decortication', 'Mixing', 'Hempcrete', 'Construction', 'Housing'],
    s2_label_specs: 'The material, in numbers',
    specs: [
      ['0.06–0.12', 'W/mK · conductivity', 'Superior insulation — better thermal performance in the Patagonian cold.'],
      ['Class A', 'fire rating', 'Non-combustible material, suitable for operational environments.'],
      ['+500', 'years of service life', 'European standard EN 16101, proven in more than 50 countries.'],
      ['>90%', 'of the plant used', 'Hempcrete + biochar: circular economy, zero waste.'],
    ],

    s3_k: 'The plan',
    s3_t: 'Five programs, one platform',
    s3_d: 'The Manuel Belgrano Plan is organized in five programs that advance in parallel. Each one produces evidence, product or capacity that the others use: together they form a regenerative development platform.',
    programas: [
      {
        l: 'A', t: 'Science, evidence and validation',
        o: 'Produce the scientific, technical and economic evidence that validates hemp as an environmental, construction and productive solution.',
        p: ['Carbon capture certification', 'Life-cycle analysis of materials and housing', 'Thermal performance studies', 'Economic studies'],
        w: 'EcoGaia · INTI',
      },
      {
        l: 'B', t: 'Industrial and productive development',
        o: 'Develop a competitive value chain able to produce materials, generate economic activity and supply emerging markets.',
        p: ['Optimized genetics and seed production', 'Biomass and hemp hurd production', 'Hemp bricks and blocks (Flora Bricks · Flora Blocks)', 'Binder development, standardization and suppliers'],
        w: 'Fundación GEN · Flora · INTI',
      },
      {
        l: 'C', t: 'Housing and habitat',
        o: 'Demonstrate the technical, economic and social viability of hemp-based housing solutions that improve quality of life and reduce the sector\'s footprint.',
        p: ['Demonstration house', 'Modular social housing', 'Construction manuals', 'Municipal implementation models'],
        w: 'Flora · Red Protierra',
      },
      {
        l: 'D', t: 'Employment and human capital',
        o: 'Build labor capabilities and quality employment across the entire hemp value chain.',
        p: ['Training in materials production', 'Training in hemp construction', 'Employment academy and skills certification', 'Job placement'],
        w: 'Consortium',
      },
      {
        l: 'E', t: 'Market, financing and scaling',
        o: 'Create the market and financing mechanisms that sustain and scale the hemp ecosystem.',
        p: ['Carbon credits', 'Business models', 'Impact investment funds', 'Adoption strategies'],
        w: 'Flora · EcoGaia',
      },
    ],

    s4_k: 'The method',
    s4_t: 'Six stages, five dimensions, one gate at a time',
    s4_d: 'The plan advances with the discipline of an investment program: six maturity stages, evaluated in parallel across five dimensions. Between stages there is a gate — a decision made only with the evidence from the previous stage.',
    etapas: [
      ['0', 'Formulation', 'Define the project, the target performance and the validation path.'],
      ['1', 'Feasibility', 'Prove it is viable: prototypes, permits, real customer interest and financing.'],
      ['2', 'Pilot', 'Produce the material with reproducible performance and test it in an accredited laboratory.'],
      ['3', 'Demonstration', 'Build a real demonstration house, start technical certification and validate the system in use.'],
      ['4', 'Scale-up', 'Industrialize: plant, quality control, complete certifications and commercialization at scale.'],
      ['5', 'Territorial platform', 'Replicate the model in new territories: transferable technology, alliances and financing.'],
    ],
    s4_label_dims: 'The five dimensions — evaluated in parallel at every stage',
    dims: ['Technical', 'Regulatory', 'Commercial', 'Financial', 'Institutional'],
    s4_dims_body:
      'Each stage must pass in all five dimensions at once: an excellent product without permits does not pass the gate; huge demand without unit economics does not either. The plan defines verifiable indicators for every dimension at every stage.',
    s4_statement: 'Capital enters in stages and only advances with evidence.',
    s4_statement_by: 'The rule of the plan',

    s5_k: 'The invitation',
    s5_t: 'Three seats at the founding table',
    s5_d: 'The plan asks for no subsidies and no new agencies. It asks for founding partners to take the seat only they can take — with staged commitments, against verifiable milestones.',
    s5_items: [
      ['01', 'Industry', 'Anchor the demand: purchase commitments on certified carbon and on housing for their own operations. Energy, agriculture and construction find a new territorial asset here — financed in stages, never blindly.'],
      ['02', 'The State', 'Clear rules and coordination. The project advances under the current framework with private capital; from the State it needs what it does best: unblock, simplify and support without adding hurdles.'],
      ['03', 'Science', 'Independent validation: testing, standards and certification with INTI, universities and accredited laboratories. Every claim in the plan must be one a third party can sign.'],
    ],

    s6_k: 'The environmental asset',
    s6_t: 'Carbon measured, verified, with a single owner',
    s6_d: 'The differentiator of built hemp: the carbon captured by the crop stays locked in the wall for the entire life of the building, and in the soil for centuries via biochar. The integrity of the asset is resolved through chain design.',
    s6_statement_by: 'Chain integration = no double counting',
    s6_statement: 'By controlling the entire chain —seed, cultivation, material, construction and residues—, the carbon has a single chain of custody, traceable end to end. It is counted once and attributed to a single holder.',
    s6_label_layers: 'Three layers of validation',
    s6_table1_head: ['Layer', 'Owner', 'Standard'],
    s6_table1_rows: [
      ['Measurement and traceability (MRV)', 'Proprietary system (to be developed)', 'Real-time digital crop traceability'],
      ['Carbon certification', 'EcoGaia', 'Verra / Gold Standard (international)'],
      ['Material and construction system', 'INTI', 'National certification (to be developed)'],
    ],
    s6_body:
      '**Ownership.** Each tonne is registered only once, with a unique serial number in an international public registry, and retired in the name of a single holder: the partner that anchors the demand. The design expressly excludes any claim to the same credit by any other actor in the chain.',
    s6_label_asset: 'The carbon asset — reference estimates',
    s6_table2_head: ['Price scenario', 'USD/tCO₂e', 'Reference annual revenue *'],
    s6_table2_rows: [
      ['Voluntary market · nature-based', 'USD 30', 'USD 1.2 M'],
      ['Durable removal · premium market', 'USD 75', 'USD 3.0 M'],
      ['Durable removal · biochar (BCR–Puro)', 'USD 164', 'USD 6.6 M'],
    ],
    s6_footnote: '* Illustrative figures, to be validated in the benchmark. Estimate over 4,000 ha and a conservative volume of 10 t CO₂/ha/year. Amounts, prices and areas are subject to negotiation.',

    s7_k: 'Who delivers it',
    s7_t: 'A consortium with all the pieces',
    s7_d: 'Execution does not rest on a single person: it leans on institutional partners with licenses, experience and operational capacity already proven.',
    s7_partners: [
      ['Flora Cáñamo Neuquino', 'Integrates the chain', 'Plan design, consortium coordination and operating vehicle. Industrial license in process.'],
      ['Fundación GEN', 'Executes the cultivation · agricultural license', 'Holder of the agricultural license. Machinery, agronomic know-how and operational capacity. Leads the Coirón Project, the first industrial hemp precedent in Neuquén.'],
      ['EcoGaia', 'Certifies the carbon', 'An Argentine developer and certifier of carbon credits: full cycle under Verra and Gold Standard, with experience in biochar, regenerative agriculture and hemp in Canada.'],
      ['INTI', 'Validates the material', 'The National Institute of Industrial Technology: material testing and the certification path for the construction system.'],
      ['Red Protierra', 'Transfers the building know-how', 'Argentina\'s natural building network: construction manuals and applicator training.'],
    ],
    s7_founder_label: 'The founder',
    s7_founder:
      '**Guillermo Sandoval** — founder of Flora and of the Manuel Belgrano Plan. He chairs the civil association that has operated medical cannabis cultivation and production in Neuquén since 2023, and leads Flora Cáñamo Neuquino SRL, the plan\'s operating company.',

    s8_k: 'The broader opportunity',
    s8_t: 'An industry interrupted 230 years ago.',
    s8_body:
      'The first step is bounded and low-risk, but what it opens is large. Growing hemp at scale revives a chain from which multiple industries branch off —food, textiles, bioplastics, paper, cosmetics—: an engine of employment and regional development.',
    s8_quote: 'As early as 1796, Manuel Belgrano proposed the cultivation of flax and hemp as a path to added value and work for the country. Prohibition interrupted it; the current framework enables it once again.',
    s8_note: 'The executive focus of the plan remains the hempcrete–biochar chain; the other industries are the horizon it opens.',

    s9_k: 'Legal and regulatory framework',
    s9_t: 'A framework in force, national in scope',
    s9_d: 'Industrial hemp in Argentina has a regulatory framework that is in force and national in scope, separate from the medical cannabis regime.',
    s9_table_head: ['Regulation', 'What it establishes'],
    s9_table_rows: [
      ['Law 27,669 (2022)', 'National framework for industrial hemp (THC < 0.3%). Creates ARICCAME as the enforcement authority, under the Ministry of Economy.'],
      ['Decree 405/2023', 'Regulates the law: authorizes the cultivation, processing and marketing of industrial hemp nationwide.'],
      ['ARICCAME licenses', 'The agricultural license (cultivation) is held by Fundación GEN, the executing partner; the industrial one is being processed by Flora.'],
      ['Construction standards', 'Certification path identified with INTI: technical aptitude of the construction system, IRAM thermal conditioning standards and CIRSOC regulations.'],
    ],
    s9_box_label: 'Operating company',
    s9_box_body:
      'Flora Cáñamo Neuquino SRL was incorporated in January 2025; its registration is being completed in the jurisdiction of the Autonomous City of Buenos Aires, with its corporate purpose aligned to the industrial hemp framework (Law 27,669).',

    s10_k: 'Risks',
    s10_t: 'And how they are managed',
    s10_table_head: ['Risk', 'How it is managed'],
    s10_table_rows: [
      ['Sector regulatory framework', 'National framework in force (Law 27,669 / Decree 405/2023). The plan\'s regulatory dimension maps every permit by stage; the gates prevent advancing without compliance.'],
      ['Double counting of carbon', 'Chain integration (single custody) + serialized registry + single holder.'],
      ['Reputation / greenwashing', 'Real, durably stored removal, physically locked in; communication based solely on data certified by third parties.'],
      ['Operational risk (cultivation)', 'Two ecoregions in parallel; early measurement via MRV; execution led by a partner with license, machinery and experience (Fundación GEN).'],
      ['Scale', 'Staged plan with gates: scale is only addressed after validating genetics, material and demand.'],
      ['Liability / execution', 'Allocation by contract within the consortium; staged financing against verifiable milestones.'],
    ],

    s11_k: 'Why now',
    s11_t: 'Value added at the source.',
    s11_body:
      'Today, an urgent social need —employment and housing in the Vaca Muerta region—, a legal framework in force, a booming global industry of bio-based materials, and a province with the land, water and sun to lead it all converge. This turns part of Vaca Muerta\'s wealth into development, employment and roots, in the same territory — **building on oil, not in its place.**',
    s11_vision_k: 'The vision',
    s11_vision_t: 'Hemp cities, from one end of the country to the other.',
    s11_vision_body:
      'Imagine the country this builds: entire neighborhoods and cities raised with the same plant Manuel Belgrano dreamed of more than two centuries ago —giving work, shelter and a future to every Argentine willing to earn it—. The basin that today powers the country can also give it a model: turning **Vaca Muerta into Vaca Verde**. Wealth that stays, that regenerates and that makes us proud.',
    s11_belgrano_pre: 'Belgrano ',
    s11_belgrano_em: 'was right.',
    s11_belgrano_sub: 'Two hundred and thirty years later, his dream is once again the most modern plan we have.',
    cta_meet: 'Schedule a meeting',
    cta_whatsapp: 'Message us on WhatsApp',
    footer: 'Flora Cáñamo Neuquino SRL · July 2026 · Confidential document',
  },
} as const

type T = (typeof TXT)['es'] | (typeof TXT)['en']

/* ============================================================
   PRIMITIVAS
   ============================================================ */

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

const CADENA_IMG = ['01-semilla', '02-cultivo', '03-cosecha', '04-decorticacion', '05-mezclado', '06-material', '07-construccion', '08-vivienda'] as const

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '2px', background: GOLD, transformOrigin: '0%', scaleX: scrollYProgress, zIndex: 100 }} />
  )
}

/* ============================================================
   SECCIONES
   ============================================================ */

/* ---------- portada compacta (opcional) ---------- */

function Cover({ t }: { t: T }) {
  return (
    <section style={{ position: 'relative', minHeight: '82svh', background: INK, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <img src="/hero/relato/etapa4.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.22 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,26,56,0.7), rgba(7,26,56,0.94))' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1020px', margin: '0 auto', padding: 'clamp(5rem, 12vw, 8rem) clamp(1.5rem, 6vw, 5rem)', width: '100%' }}>
        <Reveal>
          <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 1.75rem' }}>{t.confidential}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(3rem, 9vw, 6.5rem)', lineHeight: 1, color: CREAM, margin: '0 0 1.5rem' }}>{t.doc_title}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1.05rem, 1.7vw, 1.4rem)', lineHeight: 1.5, color: 'rgba(243,241,231,0.72)', maxWidth: '40ch', margin: '0 0 2.75rem' }}>{t.doc_subtitle}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 2.5rem', borderTop: '1px solid rgba(243,241,231,0.16)', borderBottom: '1px solid rgba(243,241,231,0.16)', padding: '1.25rem 0', maxWidth: '44rem' }}>
            <span style={{ ...sans, fontSize: '0.8rem', color: 'rgba(243,241,231,0.6)' }}><span style={{ color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.6rem', marginRight: '0.6em' }}>{t.issuer_label}</span>{t.issuer}</span>
            <span style={{ ...sans, fontSize: '0.8rem', color: 'rgba(243,241,231,0.6)' }}><span style={{ color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.6rem', marginRight: '0.6em' }}>{t.scope_label}</span>{t.scope}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- la visión (apertura) ---------- */

function Vision({ t }: { t: T }) {
  return (
    <Doc bg={CREAM} id="vision">
      <Reveal>
        <Eyebrow>{t.vision_k}</Eyebrow>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem, 4.4vw, 3.6rem)', lineHeight: 1.14, color: INK, margin: '0 0 2.25rem', maxWidth: '20ch' }}>
          {t.vision_lead}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <P max="74ch" style={{ fontSize: 'clamp(1rem, 1.35vw, 1.16rem)', marginBottom: '2.5rem' }}>
          {rich(t.vision_body, INK)}
        </P>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: LINE, border: `1px solid ${LINE}` }}>
        {t.vision_cards.map(([title, d], i) => (
          <Reveal key={title} delay={0.06 * i}>
            <div style={{ background: CREAM, padding: 'clamp(1.5rem, 2.5vw, 2rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: GREEN_DK, margin: '0 0 0.6rem' }}>{title}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.6, color: MUTED, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Doc>
  )
}

/* ---------- 01 · el momento ---------- */

function S1({ t }: { t: T }) {
  return (
    <Doc id="s1">
      <Chapter id="s1-h" num="01" eyebrow={t.s1_k} title={t.s1_t} dek={t.s1_d} />

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
              <span style={{ position: 'absolute', left: 0, top: '0.05em', color: GOLD, ...serif, fontStyle: 'italic' }}>—</span>{rich(b, INK)}
            </li>
          ))}
        </ul>
      </Reveal>

      <Statement>{t.s1_statement}</Statement>
    </Doc>
  )
}

/* ---------- 02 · la planta ---------- */

function S2({ t }: { t: T }) {
  return (
    <Doc bg={CREAM} id="s2">
      <Chapter id="s2-h" num="02" eyebrow={t.s2_k} title={t.s2_t} dek={t.s2_d} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem, 2.5vw, 1.75rem)', marginBottom: '2.5rem' }}>
        {t.s2_products.map(([pt, pd], i) => (
          <Reveal key={pt} delay={0.08 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `2px solid ${GREEN}`, padding: 'clamp(1.6rem, 3vw, 2.2rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', color: INK, margin: '0 0 0.85rem' }}>{pt}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.7, color: MUTED, margin: 0 }}>{pd}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Statement by={t.s2_statement_by}>{t.s2_statement}</Statement>

      <Reveal>
        <P max="74ch">{rich(t.s2_body, INK)}</P>
      </Reveal>

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

      <Label>{t.s2_label_specs}</Label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1px', background: LINE, border: `1px solid ${LINE}` }}>
        {t.specs.map(([v, u, d], i) => (
          <Reveal key={u} delay={0.05 * i}>
            <div style={{ background: CREAM, padding: '1.5rem 1.4rem', height: '100%' }}>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', color: GREEN_DK, margin: '0 0 0.15rem', lineHeight: 1 }}>{v}</p>
              <p style={{ ...sans, fontSize: '0.56rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CELESTE, margin: '0 0 0.6rem' }}>{u}</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.74rem', lineHeight: 1.55, color: MUTED, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Doc>
  )
}

/* ---------- 03 · los cinco programas ---------- */

function S3({ t }: { t: T }) {
  return (
    <Doc id="s3">
      <Chapter id="s3-h" num="03" eyebrow={t.s3_k} title={t.s3_t} dek={t.s3_d} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {t.programas.map((pr, i) => (
          <Reveal key={pr.l} delay={0.05 * i}>
            <article style={{ background: '#fff', border: `1px solid ${LINE}`, borderLeft: `3px solid ${GOLD}`, padding: 'clamp(1.4rem, 2.8vw, 2rem)', display: 'flex', gap: 'clamp(1.1rem, 3vw, 2.25rem)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: GOLD, lineHeight: 0.9, minWidth: '2.4rem' }}>{pr.l}</span>
              <div style={{ flex: '1 1 320px' }}>
                <h3 style={{ ...sans, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', fontWeight: 600, color: INK, margin: '0 0 0.5rem' }}>{pr.t}</h3>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.65, color: 'rgba(7,26,56,0.74)', margin: '0 0 0.9rem', maxWidth: '70ch' }}>{pr.o}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.8rem' }}>
                  {pr.p.map((proj) => (
                    <span key={proj} style={{ ...sans, fontSize: '0.66rem', fontWeight: 500, color: 'rgba(7,26,56,0.7)', border: `1px solid ${LINE}`, background: PAPER, padding: '0.3rem 0.65rem', borderRadius: '2px' }}>{proj}</span>
                  ))}
                </div>
                <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CELESTE, margin: 0, fontWeight: 600 }}>{pr.w}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Doc>
  )
}

/* ---------- 04 · el método ---------- */

function S4({ t }: { t: T }) {
  return (
    <Doc bg={CREAM} id="s4">
      <Chapter id="s4-h" num="04" eyebrow={t.s4_k} title={t.s4_t} dek={t.s4_d} />

      {/* etapas: timeline con gates */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.7rem', marginBottom: '1rem' }}>
        {t.etapas.map(([n, name, d], i) => (
          <Reveal key={n} delay={0.05 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, padding: '1.2rem 1.3rem', height: '100%', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', marginBottom: '0.5rem' }}>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: '1.9rem', color: GOLD, lineHeight: 1 }}>{n}</span>
                <h3 style={{ ...sans, fontSize: '0.9rem', fontWeight: 600, color: INK, margin: 0 }}>{name}</h3>
              </div>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.6, color: MUTED, margin: 0 }}>{d}</p>
              {i < t.etapas.length - 1 && (
                <span aria-hidden style={{ position: 'absolute', right: '0.8rem', top: '0.9rem', ...sans, fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: GREEN_DK, fontWeight: 700 }}>
                  gate {i + 1} →
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Label>{t.s4_label_dims}</Label>
      <Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {t.dims.map((d) => (
            <span key={d} style={{ ...sans, fontSize: '0.74rem', fontWeight: 600, color: INK, border: `1px solid rgba(7,26,56,0.3)`, padding: '0.5rem 1rem', borderRadius: '2px', background: '#fff' }}>{d}</span>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <P max="74ch">{t.s4_dims_body}</P>
      </Reveal>

      <Statement by={t.s4_statement_by}>{t.s4_statement}</Statement>
    </Doc>
  )
}

/* ---------- 05 · la invitación (dark) ---------- */

function S5({ t }: { t: T }) {
  return (
    <Doc bg={DUSK} id="s5">
      <Reveal>
        <header id="s5-h" style={{ marginBottom: '2.75rem', scrollMarginTop: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(1rem, 2.5vw, 1.75rem)' }}>
            <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: GOLD, lineHeight: 0.8 }}>05</span>
            <div>
              <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, margin: '0 0 0.7rem', fontWeight: 500 }}>{t.s5_k}</p>
              <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', lineHeight: 1.08, color: CREAM, margin: 0 }}>{t.s5_t}</h2>
            </div>
          </div>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', lineHeight: 1.6, color: CREAM_MUTED, margin: '1.4rem 0 0', maxWidth: '66ch' }}>{t.s5_d}</p>
          <div style={{ height: '1px', background: LINE_D, marginTop: '1.9rem' }} />
        </header>
      </Reveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(242,181,68,0.2)', border: '1px solid rgba(242,181,68,0.2)' }}>
        {t.s5_items.map(([n, it, d], i) => (
          <Reveal key={n} delay={0.08 * i}>
            <div style={{ background: DUSK, padding: 'clamp(1.5rem, 3vw, 2.25rem)', display: 'flex', gap: 'clamp(1.25rem, 3vw, 2.5rem)', alignItems: 'flex-start' }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'rgba(242,181,68,0.6)', lineHeight: 1, minWidth: '2.5rem' }}>{n}</span>
              <div>
                <h3 style={{ ...sans, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', fontWeight: 600, color: CREAM, margin: '0 0 0.6rem', letterSpacing: '0.01em' }}>{it}</h3>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.62)', margin: 0, maxWidth: '70ch' }}>{d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Doc>
  )
}

/* ---------- 06 · el carbono ---------- */

function S6({ t }: { t: T }) {
  return (
    <Doc id="s6">
      <Chapter id="s6-h" num="06" eyebrow={t.s6_k} title={t.s6_t} dek={t.s6_d} />

      <Statement by={t.s6_statement_by}>{t.s6_statement}</Statement>

      <Label>{t.s6_label_layers}</Label>
      <Reveal>
        <DocTable head={t.s6_table1_head} rows={t.s6_table1_rows} />
      </Reveal>

      <Reveal delay={0.1}>
        <P max="74ch" style={{ marginTop: '2rem', marginBottom: 0 }}>{rich(t.s6_body, INK)}</P>
      </Reveal>

      <Label>{t.s6_label_asset}</Label>
      <Reveal>
        <DocTable head={t.s6_table2_head} rows={t.s6_table2_rows} emphFirst={false} />
      </Reveal>
      <Reveal delay={0.08}>
        <p style={{ ...sans, fontSize: '0.7rem', lineHeight: 1.6, color: FAINT, marginTop: '0.85rem', maxWidth: '74ch' }}>{t.s6_footnote}</p>
      </Reveal>
    </Doc>
  )
}

/* ---------- 07 · quiénes lo hacen ---------- */

function S7({ t }: { t: T }) {
  return (
    <Doc bg={CREAM} id="s7">
      <Chapter id="s7-h" num="07" eyebrow={t.s7_k} title={t.s7_t} dek={t.s7_d} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1rem, 2vw, 1.4rem)' }}>
        {t.s7_partners.map(([pt, ps, pd], i) => (
          <Reveal key={pt} delay={0.07 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `2px solid ${CELESTE}`, padding: 'clamp(1.4rem, 2.5vw, 1.9rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', color: INK, margin: '0 0 0.2rem' }}>{pt}</h3>
              <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CELESTE, margin: '0 0 0.8rem' }}>{ps}</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>{pd}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Label>{t.s7_founder_label}</Label>
      <Reveal>
        <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderLeft: `3px solid ${GOLD}`, padding: 'clamp(1.5rem, 3vw, 2rem)', maxWidth: '46rem' }}>
          <P max="74ch" style={{ marginBottom: 0 }}>{rich(t.s7_founder, INK)}</P>
        </div>
      </Reveal>
    </Doc>
  )
}

/* ---------- 08 · la oportunidad ampliada (full-bleed) ---------- */

function S8({ t }: { t: T }) {
  return (
    <section id="s8" style={{ position: 'relative', overflow: 'hidden', background: DUSK }}>
      <img src="/hero/vision-city.jpg" alt="Ciudad de cáñamo en la estepa patagónica" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.34 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,26,56,0.62), rgba(7,26,56,0.9))' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1020px', margin: '0 auto', padding: 'clamp(4.5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <Reveal>
          <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: GOLD, lineHeight: 0.8 }}>08</span>
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, margin: '1.25rem 0 0.7rem', fontWeight: 500 }}>{t.s8_k}</p>
          <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.06, color: CREAM, margin: '0 0 1.75rem', maxWidth: '18ch' }}>{t.s8_t}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', lineHeight: 1.75, color: 'rgba(243,241,231,0.74)', maxWidth: '66ch', margin: '0 0 1.5rem' }}>{t.s8_body}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', maxWidth: '44rem' }}>
            <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)', lineHeight: 1.34, color: CREAM, margin: 0 }}>{t.s8_quote}</p>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <p style={{ ...sans, fontWeight: 300, fontSize: '0.78rem', fontStyle: 'italic', lineHeight: 1.6, color: CREAM_FAINT, maxWidth: '62ch', marginTop: '2rem' }}>{t.s8_note}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- 09 · encuadre legal ---------- */

function S9({ t }: { t: T }) {
  return (
    <Doc id="s9">
      <Chapter id="s9-h" num="09" eyebrow={t.s9_k} title={t.s9_t} dek={t.s9_d} />
      <Reveal>
        <DocTable head={t.s9_table_head} rows={t.s9_table_rows} />
      </Reveal>
      <Reveal delay={0.1}>
        <div style={{ background: CREAM, border: `1px solid ${LINE}`, padding: 'clamp(1.5rem, 3vw, 2rem)', marginTop: '2rem' }}>
          <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: CELESTE, margin: '0 0 0.75rem', fontWeight: 600 }}>{t.s9_box_label}</p>
          <P max="74ch" style={{ marginBottom: 0 }}>{t.s9_box_body}</P>
        </div>
      </Reveal>
    </Doc>
  )
}

/* ---------- 10 · riesgos ---------- */

function S10({ t }: { t: T }) {
  return (
    <Doc bg={CREAM} id="s10">
      <Chapter id="s10-h" num="10" eyebrow={t.s10_k} title={t.s10_t} />
      <Reveal>
        <DocTable head={t.s10_table_head} rows={t.s10_table_rows} />
      </Reveal>
    </Doc>
  )
}

/* ---------- 11 · por qué ahora + cierre ---------- */

function S11({ t }: { t: T }) {
  return (
    <>
      <section id="s11" style={{ background: INK, padding: 'clamp(4.5rem, 10vw, 7rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '1020px', margin: '0 auto' }}>
          <Reveal>
            <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.6rem, 6vw, 4.6rem)', color: GOLD, lineHeight: 0.8 }}>11</span>
            <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, margin: '1.25rem 0 0.7rem', fontWeight: 500 }}>{t.s11_k}</p>
            <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.08, color: CREAM, margin: '0 0 1.75rem', maxWidth: '20ch' }}>{t.s11_t}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', lineHeight: 1.78, color: 'rgba(243,241,231,0.74)', maxWidth: '64ch', margin: '0 0 3rem' }}>{rich(t.s11_body, CREAM)}</p>
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
            <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 1rem', fontWeight: 500 }}>{t.s11_vision_k}</p>
            <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: 1.02, color: CREAM, margin: '0 0 1.75rem', maxWidth: '16ch' }}>{t.s11_vision_t}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.45vw, 1.22rem)', lineHeight: 1.78, color: 'rgba(243,241,231,0.82)', maxWidth: '60ch', margin: '0 0 2.75rem' }}>{rich(t.s11_vision_body, CREAM)}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1, color: CREAM, margin: '0 0 1rem' }}>
              {t.s11_belgrano_pre}<span style={{ color: GREEN }}>{t.s11_belgrano_em}</span>
            </h3>
            <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(243,241,231,0.6)', maxWidth: '50ch', margin: 0 }}>{t.s11_belgrano_sub}</p>
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
                {t.cta_meet}
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
                {t.cta_whatsapp}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p style={{ ...sans, fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.4)', marginTop: 'clamp(2.5rem, 6vw, 4rem)' }}>{t.footer}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ============================================================
   ENSAMBLADO
   ============================================================ */

export function MasterplanUniversal({ showCover = false }: { showCover?: boolean }) {
  const { lang } = useLang()
  const t = TXT[lang]
  return (
    <main style={{ background: PAPER }}>
      {showCover && <ProgressBar />}
      {showCover && <Cover t={t} />}
      <Vision t={t} />
      <S1 t={t} />
      <S2 t={t} />
      <S3 t={t} />
      <S4 t={t} />
      <S5 t={t} />
      <S6 t={t} />
      <S7 t={t} />
      <S8 t={t} />
      <S9 t={t} />
      <S10 t={t} />
      <S11 t={t} />
    </main>
  )
}
