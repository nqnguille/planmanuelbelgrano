'use client'

/* ============================================================
   PLAN MANUEL BELGRANO — MASTERPLAN STAGE-GATE (jul 2026)
   Escrito de cero: el documento ES el camino de etapas.
   Arquitectura = la metodología del proyecto (Stage Gate,
   6 etapas × 5 dimensiones, un gate por vez, riesgo mínimo):
     tesis → la regla → Etapa 0 ✓ → Etapa 1 ✓ →
     ETAPA 2 ● (la que se financia ahora) → camino 3-5 →
     carriles (5 programas) → carbono → quiénes → invitación →
     cierre cinematográfico.
   Sin precios en la web (presupuesto de la Etapa 2 en reunión).
   Sin nombres de empresas energéticas. Bilingüe ES / EN.
   Estética Soberana (papel, navy, dorado, Fraunces/Archivo).
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

const MEET_URL = 'https://calendar.app.google/PBcbPHeEvsxKNR4X8'
const WHATSAPP_URL = 'https://wa.me/5492994229436?text=' + encodeURIComponent('Hola, quiero conversar sobre el Plan Manuel Belgrano.')

const serif: CSSProperties = { fontFamily: 'var(--font-garamond), "EB Garamond", serif', fontWeight: 400 }
const sans: CSSProperties = { fontFamily: 'var(--font-hanken), "Plus Jakarta Sans", sans-serif' }

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
   COPY — ES / EN
   ============================================================ */

const TXT = {
  es: {
    /* tesis */
    tesis_k: 'El plan',
    tesis_lead: 'Podemos convertir Vaca Muerta en Vaca Verde.',
    tesis_body:
      'La visión es enorme: vivienda, empleo y una industria nueva desde la superficie de Neuquén — la tierra, el agua y el sol que quedan cuando el subsuelo ya dio lo suyo. Por eso el plan es exactamente lo contrario: **chico, verificable y por etapas**. Nadie pone todo el capital de una vez; cada etapa compra la certeza que habilita la siguiente.',

    /* la regla */
    regla_k: 'La regla del juego',
    regla_t: 'El riesgo no se asume: se elimina etapa por etapa.',
    regla_d:
      'El plan avanza con un modelo de madurez Stage Gate: seis etapas, evaluadas en paralelo en cinco dimensiones — técnica, regulatoria, comercial, financiera e institucional. Entre etapa y etapa hay un gate: una decisión de inversión que solo se toma con la evidencia de la etapa anterior.',
    regla_body:
      'El error clásico de los proyectos grandes es saltar a la escala a ciegas. Este plan lo hace **imposible por diseño**: cada etapa tiene entregables verificables, cada gate tiene criterios explícitos, y el capital de una etapa nunca compromete el de la siguiente. Lo que se compra en cada etapa es información — la que convierte a la próxima en una decisión, en lugar de una apuesta.',
    regla_dims_label: 'Las cinco dimensiones de cada gate',
    dims: ['Técnica', 'Regulatoria', 'Comercial', 'Financiera', 'Institucional'],
    regla_statement: 'El capital entra por etapas y solo avanza con evidencia.',
    regla_statement_by: 'La regla del plan',

    /* rail */
    rail_label: 'El camino completo',
    stages: [
      { n: '0', name: 'Formulación', state: 'done' },
      { n: '1', name: 'Viabilidad', state: 'done' },
      { n: '2', name: 'Piloto', state: 'now' },
      { n: '3', name: 'Demostración', state: 'next' },
      { n: '4', name: 'Escalamiento', state: 'next' },
      { n: '5', name: 'Plataforma territorial', state: 'next' },
    ],
    stage_word: 'Etapa',
    badge_done: 'Completada',
    badge_now: 'En curso — la etapa que se financia ahora',
    badge_next: 'Se cuantifica al aprobar el gate anterior',
    gate_label: 'Gate',
    gate_passed: 'Aprobado',
    gate_open: 'El gate que este plan viene a pasar',

    /* etapa 0 */
    e0_q: '¿Hay acá un proyecto real?',
    e0_intro:
      'La Etapa 0 respondió la pregunta fundacional con trabajo de campo, mercado y marco legal — no con entusiasmo. Esto es lo que quedó demostrado:',
    e0_items: [
      ['El problema es real y está documentado', 'Déficit habitacional cercano al 60% en la zona de Vaca Muerta, Añelo creció más del 140%, los alquileres más caros del país, y obra que se contrata a empresas de fuera de la provincia. La prensa de 2026 lo cuenta sola:'],
      ['El mercado tiene un hueco de pionero', 'El material a batir está identificado (hormigón celular curado en autoclave) y los segmentos también: construcción privada, vivienda pública y la industria que necesita alojar a su gente. Nadie construyó todavía con cáñamo en Argentina.'],
      ['El producto está especificado', 'Hempcrete: densidad objetivo 250–350 kg/m³, conductividad 0,06–0,12 W/mK, incombustible (Clase A), vida útil de más de 500 años — norma europea EN 16101, probado en más de 50 países. Dos líneas: ladrillo de cerramiento y bloque estructural.'],
      ['El marco legal existe y está relevado', 'Ley 27.669 (cáñamo industrial, THC < 0,3%, autoridad ARICCAME en el Ministerio de Economía) y Decreto 405/2023. Ruta de certificación del sistema constructivo identificada junto al INTI: aptitud técnica, normas IRAM, reglamentos CIRSOC.'],
      ['El consorcio está formado', 'Flora integra; Fundación GEN cultiva (titular de la licencia agrícola, con el primer antecedente de cáñamo industrial de Neuquén); EcoGaia certifica el carbono (Verra / Gold Standard); INTI valida el material; Red Protierra transfiere el saber constructivo.'],
      ['El plan tiene arquitectura', 'Cinco programas de trabajo y este modelo de madurez por etapas, con indicadores verificables para cada dimensión en cada etapa.'],
    ],
    clippings: [
      { medium: 'Río Negro', quote: 'Neuquén va a tener, en 30 años, 1 millón y medio de personas.', who: 'F. Sturzenegger · Ministro de Desregulación', alarm: false },
      { medium: 'Infobae', quote: 'No se vengan con la familia.', who: 'F. Banderet · Intendente de Añelo', alarm: true },
      { medium: 'LM Neuquén', quote: 'Contratan empresas de afuera para obras que podrían hacer las empresas locales.', who: 'UOCRA Neuquén · +100 sin trabajo', alarm: true },
    ],
    e0_gate: 'Hay problema real, producto especificado, marco vigente y equipo con licencias. Hay proyecto.',

    /* etapa 1 */
    e1_q: '¿Se puede hacer acá, con lo nuestro?',
    e1_intro:
      'La Etapa 1 bajó el proyecto del papel al territorio. La viabilidad no se argumentó: se produjo.',
    e1_items: [
      ['Cultivo real, en la provincia', 'El consorcio opera cultivo y producción en Neuquén desde 2023 — cosechas, productos con análisis de laboratorio y una operación que ya conoce el clima, el suelo y la regulación.'],
      ['Primeros materiales producidos', 'Formulación seleccionada (binder de cal, con desarrollo junto al INTI), primeros ladrillos de prueba y un ensayo industrial en una cantera de Añelo — el material se hizo, no se proyectó.'],
      ['La cadena completa, diseñada', 'De la semilla a la llave: ocho eslabones definidos, de la genética al barrio construido.'],
      ['Licencias en la mesa', 'La licencia agrícola de ARICCAME está operativa en el consorcio (Fundación GEN); la licencia industrial de Flora, en gestión.'],
      ['Dos ecorregiones aseguradas para validar', 'Tierra disponible en Mendoza (Valle de Uco) y Neuquén para ensayar genéticas en paralelo y elegir la variedad campeona por territorio.'],
    ],
    cadena: ['Semilla', 'Cultivo', 'Cosecha', 'Decortización', 'Mezclado', 'Hempcrete', 'Construcción', 'Vivienda'],
    e1_gate: 'Es viable: hay material, hay licencias, hay tierra y hay operación. Lo que falta no es idea — es serie.',

    /* etapa 2 — LA ACTUAL */
    e2_q: '¿El material se produce en serie, con desempeño reproducible y certificable?',
    e2_intro:
      'Todo el plan se concentra hoy en esta pregunta. La Etapa 2 es la más chica del camino y la que más certeza compra: convierte los primeros ladrillos en un producto medido, ensayado y listo para certificar — y a la genética en un dato, no una promesa.',
    e2_deliv_label: 'Los cinco entregables de la etapa',
    e2_deliverables: [
      ['Benchmark de genéticas en dos ecorregiones', 'Ensayo científico simultáneo en Mendoza y Neuquén, con genéticas nacionales e internacionales: la variedad campeona por territorio, medida — el cimiento agrícola de todo lo que sigue.'],
      ['Lote piloto de ladrillos y bloques', 'Producción en condiciones controladas, con variabilidad entre lotes documentada: la prueba de que el material sale igual dos veces.'],
      ['Ensayos normalizados en el INTI', 'Resistencia, desempeño térmico (IRAM 11605) y comportamiento al fuego, en laboratorio acreditado: el expediente que abre la certificación del sistema constructivo.'],
      ['Primera medición del carbono', 'Análisis de ciclo de vida preliminar y estimación de captura por unidad, con metodología certificable (EcoGaia): el activo ambiental deja de ser un cálculo de escritorio.'],
      ['MRV piloto', 'Trazabilidad digital del cultivo al material: el hilo de custodia que hará auditable cada tonelada.'],
    ],
    e2_not_label: 'Lo que esta etapa no compromete',
    e2_not:
      'Ni planta industrial, ni escala de hectáreas, ni compromisos de largo plazo. La Etapa 2 termina con un informe de gate: si la evidencia acompaña, se abre la Demostración; si no acompaña, el aprendizaje queda comprado al precio más bajo posible. **Ese es el diseño.**',
    e2_risk_label: 'Los riesgos de la etapa, acotados de antemano',
    e2_risks: [
      ['Agronómico', 'Dos ecorregiones en paralelo y ejecución a cargo de un socio con licencia, maquinaria y experiencia en el cultivo (Fundación GEN).'],
      ['Técnico', 'Formulación ya seleccionada en la Etapa 1; los ensayos INTI entran temprano, no al final.'],
      ['Regulatorio', 'Marco nacional vigente; las habilitaciones del piloto están mapeadas en la dimensión regulatoria del plan.'],
    ],
    e2_price:
      'El presupuesto de la Etapa 2 —acotado y estructurado contra estos cinco entregables— se presenta en reunión.',
    e2_gate: 'Con lote reproducible, ensayos aprobados y captura medida, la Demostración deja de ser un riesgo: es la decisión siguiente.',

    /* camino 3-5 */
    camino_k: 'El camino por delante',
    camino_t: 'Lo que cada gate desbloquea',
    camino_d:
      'Las etapas siguientes no se cuantifican hoy — se cuantifican al aprobar el gate anterior, con los datos que ese gate produce. Es la misma regla que protege a quien financia la Etapa 2.',
    camino_items: [
      ['3', 'Demostración', '¿Funciona en una construcción real?', 'La primera vivienda demostrativa: certificación de aptitud técnica en marcha, desempeño térmico medido en uso, manual constructivo y aplicadores formados.'],
      ['4', 'Escalamiento', '¿Se produce industrialmente, con calidad constante?', 'Planta industrial, control de calidad por lote, certificaciones completas y comercialización a escala — el material compitiendo en el mercado de la construcción.'],
      ['5', 'Plataforma territorial', '¿Se replica en nuevos territorios?', 'El paquete completo —tecnología, alianzas, formación y financiamiento— transferible a otras provincias. Y la cadena madre encendiendo las industrias que se desprenden del cáñamo: alimentos, textil, bioplásticos, papel.'],
    ],

    /* carriles */
    carriles_k: 'Los cinco carriles',
    carriles_t: 'Los programas que atraviesan todas las etapas',
    carriles_d:
      'El avance por etapas se ejecuta a través de cinco programas permanentes. Cada gate evalúa el estado de los cinco a la vez.',
    carriles: [
      ['A', 'Ciencia, evidencia y validación', 'Certificación de captura, análisis de ciclo de vida, desempeño térmico, estudios económicos.', 'EcoGaia · INTI'],
      ['B', 'Desarrollo industrial y productivo', 'Genéticas, semillas, biomasa, cañamiza, ladrillos y bloques, binders, proveedores.', 'Fundación GEN · Flora · INTI'],
      ['C', 'Vivienda y hábitat', 'Vivienda demostrativa, vivienda social modular, manuales constructivos, modelos municipales.', 'Flora · Red Protierra'],
      ['D', 'Empleo y capital humano', 'Capacitación en producción y construcción, academia de empleo, certificación de competencias, inserción.', 'Consorcio'],
      ['E', 'Mercado, financiamiento y escalamiento', 'Créditos de carbono, modelos de negocio, fondos de impacto, estrategias de adopción.', 'Flora · EcoGaia'],
    ],

    /* carbono */
    carbono_k: 'El activo que madura con el plan',
    carbono_t: 'Carbono medido, verificado y de un solo dueño',
    carbono_body1:
      'El diferencial del cáñamo construido es la permanencia: el carbono que captura el cultivo queda fijado en la pared durante toda la vida de la construcción, y en el suelo por siglos vía biochar. Al controlar la cadena completa —semilla, cultivo, material, construcción y residuos— el crédito tiene **un único hilo de custodia**: se mide con el MRV propio, lo certifica EcoGaia bajo estándares internacionales, y cada tonelada se registra una sola vez, a nombre de un único titular.',
    carbono_body2:
      'Su dimensión económica se cuantifica cuando el plan la valida — la primera medición real es, precisamente, un entregable de la Etapa 2. **Como todo en este documento, el activo no se promete: se demuestra.**',

    /* quiénes / lo que sostiene */
    quienes_k: 'Lo que sostiene el plan',
    quienes_t: 'Un consorcio con las piezas completas',
    quienes: [
      ['Flora Cáñamo Neuquino', 'Integra', 'Diseño del plan, coordinación del consorcio y vehículo operativo. Licencia industrial en gestión.'],
      ['Fundación GEN', 'Cultiva', 'Titular de la licencia agrícola. Maquinaria, conocimiento agronómico y el primer antecedente de cáñamo industrial de Neuquén.'],
      ['EcoGaia', 'Certifica', 'Desarrolladora y certificadora argentina de créditos de carbono, ciclo completo bajo Verra y Gold Standard, con experiencia en cáñamo en Canadá.'],
      ['INTI', 'Valida', 'Ensayos del material y ruta de certificación del sistema constructivo.'],
      ['Red Protierra', 'Transfiere', 'Red argentina de construcción natural: manuales constructivos y formación de aplicadores.'],
    ],
    founder_label: 'El fundador',
    founder:
      '**Guillermo Sandoval** — fundador de Flora y del Plan Manuel Belgrano. Preside la asociación civil que opera cultivo y producción en Neuquén desde 2023 y conduce Flora Cáñamo Neuquino SRL (constituida en enero de 2025; inscripción en curso en la jurisdicción de CABA, con objeto social ajustado a la Ley 27.669).',

    /* invitación */
    inv_k: 'La invitación',
    inv_t: 'Los asientos de la Etapa 2',
    inv_d:
      'Un socio no compra la visión entera: entra por el gate que tiene adelante. La Etapa 2 tiene asientos abiertos — sin subsidios, sin organismos nuevos, con compromisos acotados contra cinco entregables verificables.',
    inv_items: [
      ['01', 'La industria', 'Financia una validación chica y queda fundadora de la cadena: preferencia sobre el carbono certificado y sobre la vivienda para sus propias operaciones, con la opción —nunca la obligación— de acompañar cada etapa siguiente.'],
      ['02', 'El Estado', 'Reglas claras y articulación. El plan avanza con el marco vigente y capital privado; del Estado necesita lo que mejor puede dar: destrabar, simplificar y acompañar sin poner trabas.'],
      ['03', 'La ciencia', 'Los ensayos, las normas y la certificación de la Etapa 2 son el corazón de la etapa: INTI, universidades y laboratorios acreditados. Toda afirmación del plan la firma un tercero.'],
    ],

    /* cierre */
    cierre_vision_k: 'La visión',
    cierre_vision_t: 'Ciudades de cáñamo, de punta a punta del país.',
    cierre_vision_body:
      'Cada gate aprobado acerca el mismo horizonte: barrios y ciudades levantadas con la planta que Manuel Belgrano propuso en 1796 — trabajo, techo y futuro para cada argentino dispuesto a ganárselo. La cuenca que hoy le da energía al país puede darle, además, un modelo: convertir **Vaca Muerta en Vaca Verde**. Riqueza que se queda, que regenera y que nos da orgullo.',
    belgrano_pre: 'Belgrano ',
    belgrano_em: 'tenía razón.',
    belgrano_sub: 'Doscientos treinta años después, su sueño vuelve a ser el plan más moderno que tenemos.',
    cta_meet: 'Agendar una reunión',
    cta_whatsapp: 'Escribinos por WhatsApp',
    footer: 'Flora Cáñamo Neuquino SRL · Julio 2026 · Documento confidencial',
  },

  en: {
    tesis_k: 'The plan',
    tesis_lead: 'We can turn Vaca Muerta into Vaca Verde.',
    tesis_body:
      'The vision is enormous: housing, employment and a new industry from Neuquén\'s surface — the land, water and sun that remain when the subsoil has given its share. That is why the plan is exactly the opposite: **small, verifiable and staged**. No one puts up all the capital at once; each stage buys the certainty that enables the next one.',

    regla_k: 'The rule of the game',
    regla_t: 'Risk is not taken: it is eliminated stage by stage.',
    regla_d:
      'The plan advances under a Stage-Gate maturity model: six stages, evaluated in parallel across five dimensions — technical, regulatory, commercial, financial and institutional. Between stages there is a gate: an investment decision made only with the evidence from the previous stage.',
    regla_body:
      'The classic mistake of large projects is leaping to scale blindly. This plan makes that **impossible by design**: every stage has verifiable deliverables, every gate has explicit criteria, and the capital of one stage never commits the capital of the next. What each stage buys is information — the kind that turns the next stage into a decision instead of a bet.',
    regla_dims_label: 'The five dimensions of every gate',
    dims: ['Technical', 'Regulatory', 'Commercial', 'Financial', 'Institutional'],
    regla_statement: 'Capital enters in stages and only advances with evidence.',
    regla_statement_by: 'The rule of the plan',

    rail_label: 'The full path',
    stages: [
      { n: '0', name: 'Formulation', state: 'done' },
      { n: '1', name: 'Feasibility', state: 'done' },
      { n: '2', name: 'Pilot', state: 'now' },
      { n: '3', name: 'Demonstration', state: 'next' },
      { n: '4', name: 'Scale-up', state: 'next' },
      { n: '5', name: 'Territorial platform', state: 'next' },
    ],
    stage_word: 'Stage',
    badge_done: 'Completed',
    badge_now: 'In progress — the stage being financed now',
    badge_next: 'Quantified upon approval of the previous gate',
    gate_label: 'Gate',
    gate_passed: 'Approved',
    gate_open: 'The gate this plan is here to pass',

    e0_q: 'Is there a real project here?',
    e0_intro:
      'Stage 0 answered the founding question with field work, market research and legal groundwork — not with enthusiasm. This is what was demonstrated:',
    e0_items: [
      ['The problem is real and documented', 'A housing deficit close to 60% in the Vaca Muerta region, Añelo grew more than 140%, the most expensive rents in the country, and construction contracted to companies from outside the province. The 2026 press tells it on its own:'],
      ['The market has a pioneer\'s gap', 'The material to beat is identified (autoclaved aerated concrete) and so are the segments: private construction, public housing and the industry that needs to house its people. No one has built with hemp in Argentina yet.'],
      ['The product is specified', 'Hempcrete: target density 250–350 kg/m³, conductivity 0.06–0.12 W/mK, non-combustible (Class A), service life over 500 years — European standard EN 16101, proven in more than 50 countries. Two lines: enclosure brick and structural block.'],
      ['The legal framework exists and is mapped', 'Law 27,669 (industrial hemp, THC < 0.3%, ARICCAME as authority under the Ministry of Economy) and Decree 405/2023. Certification path for the construction system identified with INTI: technical aptitude, IRAM standards, CIRSOC regulations.'],
      ['The consortium is formed', 'Flora integrates; Fundación GEN cultivates (holder of the agricultural license, with Neuquén\'s first industrial hemp precedent); EcoGaia certifies the carbon (Verra / Gold Standard); INTI validates the material; Red Protierra transfers the building know-how.'],
      ['The plan has architecture', 'Five work programs and this staged maturity model, with verifiable indicators for every dimension at every stage.'],
    ],
    clippings: [
      { medium: 'Río Negro', quote: 'In 30 years, Neuquén will have one and a half million people.', who: 'F. Sturzenegger · Minister of Deregulation', alarm: false },
      { medium: 'Infobae', quote: 'Don\'t come with your family.', who: 'F. Banderet · Mayor of Añelo', alarm: true },
      { medium: 'LM Neuquén', quote: 'They hire outside companies for work that local firms could do.', who: 'UOCRA Neuquén · 100+ out of work', alarm: true },
    ],
    e0_gate: 'There is a real problem, a specified product, a framework in force and a licensed team. There is a project.',

    e1_q: 'Can it be done here, with what we have?',
    e1_intro:
      'Stage 1 took the project from paper to territory. Feasibility was not argued: it was produced.',
    e1_items: [
      ['Real cultivation, in the province', 'The consortium has operated cultivation and production in Neuquén since 2023 — harvests, lab-tested products and an operation that already knows the climate, the soil and the regulation.'],
      ['First materials produced', 'Formulation selected (lime binder, developed with INTI), first test bricks and an industrial trial at a quarry in Añelo — the material was made, not projected.'],
      ['The full chain, designed', 'From seed to key: eight links defined, from genetics to the built neighborhood.'],
      ['Licenses on the table', 'The ARICCAME agricultural license is operational within the consortium (Fundación GEN); Flora\'s industrial license is in process.'],
      ['Two ecoregions secured for validation', 'Land available in Mendoza (Uco Valley) and Neuquén to trial genetics in parallel and pick the winning variety per territory.'],
    ],
    cadena: ['Seed', 'Cultivation', 'Harvest', 'Decortication', 'Mixing', 'Hempcrete', 'Construction', 'Housing'],
    e1_gate: 'It is feasible: there is material, there are licenses, there is land and there is an operation. What is missing is not an idea — it is series production.',

    e2_q: 'Can the material be produced in series, with reproducible, certifiable performance?',
    e2_intro:
      'The entire plan is concentrated on this question today. Stage 2 is the smallest stage of the path and the one that buys the most certainty: it turns the first bricks into a measured, tested, certification-ready product — and the genetics into data, not a promise.',
    e2_deliv_label: 'The five deliverables of the stage',
    e2_deliverables: [
      ['Genetics benchmark in two ecoregions', 'A simultaneous scientific trial in Mendoza and Neuquén, with national and international genetics: the winning variety per territory, measured — the agricultural foundation of everything that follows.'],
      ['Pilot batch of bricks and blocks', 'Production under controlled conditions, with batch-to-batch variability documented: the proof that the material comes out the same twice.'],
      ['Standardized testing at INTI', 'Strength, thermal performance (IRAM 11605) and fire behavior, in an accredited laboratory: the file that opens the certification of the construction system.'],
      ['First carbon measurement', 'Preliminary life-cycle analysis and capture estimate per unit, under a certifiable methodology (EcoGaia): the environmental asset stops being a desk calculation.'],
      ['Pilot MRV', 'Digital traceability from crop to material: the chain of custody that will make every tonne auditable.'],
    ],
    e2_not_label: 'What this stage does not commit',
    e2_not:
      'No industrial plant, no scaling of hectares, no long-term commitments. Stage 2 ends with a gate report: if the evidence holds, Demonstration opens; if it does not, the learning was bought at the lowest possible price. **That is the design.**',
    e2_risk_label: 'The stage\'s risks, bounded in advance',
    e2_risks: [
      ['Agronomic', 'Two ecoregions in parallel and execution led by a partner with a license, machinery and cultivation experience (Fundación GEN).'],
      ['Technical', 'Formulation already selected in Stage 1; INTI testing enters early, not at the end.'],
      ['Regulatory', 'National framework in force; the pilot\'s permits are mapped in the plan\'s regulatory dimension.'],
    ],
    e2_price:
      'The Stage 2 budget —bounded and structured against these five deliverables— is presented in a meeting.',
    e2_gate: 'With a reproducible batch, approved tests and measured capture, Demonstration stops being a risk: it becomes the next decision.',

    camino_k: 'The path ahead',
    camino_t: 'What each gate unlocks',
    camino_d:
      'The following stages are not quantified today — they are quantified upon approval of the previous gate, with the data that gate produces. It is the same rule that protects whoever finances Stage 2.',
    camino_items: [
      ['3', 'Demonstration', 'Does it work in a real building?', 'The first demonstration house: technical aptitude certification underway, thermal performance measured in use, a construction manual and trained applicators.'],
      ['4', 'Scale-up', 'Can it be produced industrially, with constant quality?', 'Industrial plant, batch quality control, complete certifications and commercialization at scale — the material competing in the construction market.'],
      ['5', 'Territorial platform', 'Can it be replicated in new territories?', 'The full package —technology, alliances, training and financing— transferable to other provinces. And the mother chain igniting the industries that branch off hemp: food, textiles, bioplastics, paper.'],
    ],

    carriles_k: 'The five lanes',
    carriles_t: 'The programs that run through every stage',
    carriles_d:
      'The staged advance is executed through five permanent programs. Each gate evaluates the state of all five at once.',
    carriles: [
      ['A', 'Science, evidence and validation', 'Capture certification, life-cycle analysis, thermal performance, economic studies.', 'EcoGaia · INTI'],
      ['B', 'Industrial and productive development', 'Genetics, seeds, biomass, hemp hurd, bricks and blocks, binders, suppliers.', 'Fundación GEN · Flora · INTI'],
      ['C', 'Housing and habitat', 'Demonstration house, modular social housing, construction manuals, municipal models.', 'Flora · Red Protierra'],
      ['D', 'Employment and human capital', 'Training in production and construction, employment academy, skills certification, job placement.', 'Consortium'],
      ['E', 'Market, financing and scaling', 'Carbon credits, business models, impact funds, adoption strategies.', 'Flora · EcoGaia'],
    ],

    carbono_k: 'The asset that matures with the plan',
    carbono_t: 'Carbon measured, verified, with a single owner',
    carbono_body1:
      'The differentiator of built hemp is permanence: the carbon captured by the crop stays locked in the wall for the entire life of the building, and in the soil for centuries via biochar. By controlling the full chain —seed, cultivation, material, construction and residues— the credit has **a single chain of custody**: measured with the plan\'s own MRV, certified by EcoGaia under international standards, and each tonne registered only once, in the name of a single holder.',
    carbono_body2:
      'Its economic dimension is quantified when the plan validates it — the first real measurement is, precisely, a Stage 2 deliverable. **Like everything in this document, the asset is not promised: it is demonstrated.**',

    quienes_k: 'What holds the plan up',
    quienes_t: 'A consortium with all the pieces',
    quienes: [
      ['Flora Cáñamo Neuquino', 'Integrates', 'Plan design, consortium coordination and operating vehicle. Industrial license in process.'],
      ['Fundación GEN', 'Cultivates', 'Holder of the agricultural license. Machinery, agronomic know-how and Neuquén\'s first industrial hemp precedent.'],
      ['EcoGaia', 'Certifies', 'An Argentine developer and certifier of carbon credits, full cycle under Verra and Gold Standard, with hemp experience in Canada.'],
      ['INTI', 'Validates', 'Material testing and the certification path for the construction system.'],
      ['Red Protierra', 'Transfers', 'Argentina\'s natural building network: construction manuals and applicator training.'],
    ],
    founder_label: 'The founder',
    founder:
      '**Guillermo Sandoval** — founder of Flora and of the Manuel Belgrano Plan. He chairs the civil association that has operated cultivation and production in Neuquén since 2023 and leads Flora Cáñamo Neuquino SRL (incorporated January 2025; registration underway in the CABA jurisdiction, with its corporate purpose aligned to Law 27,669).',

    inv_k: 'The invitation',
    inv_t: 'The seats of Stage 2',
    inv_d:
      'A partner does not buy the whole vision: they enter through the gate in front of them. Stage 2 has open seats — no subsidies, no new agencies, with bounded commitments against five verifiable deliverables.',
    inv_items: [
      ['01', 'Industry', 'Finances a small validation and becomes a founder of the chain: preference over the certified carbon and over housing for its own operations, with the option —never the obligation— to accompany each following stage.'],
      ['02', 'The State', 'Clear rules and coordination. The plan advances under the current framework with private capital; from the State it needs what it does best: unblock, simplify and support without adding hurdles.'],
      ['03', 'Science', 'The testing, standards and certification of Stage 2 are the heart of the stage: INTI, universities and accredited laboratories. Every claim in the plan is signed by a third party.'],
    ],

    cierre_vision_k: 'The vision',
    cierre_vision_t: 'Hemp cities, from one end of the country to the other.',
    cierre_vision_body:
      'Every approved gate brings the same horizon closer: neighborhoods and cities raised with the plant Manuel Belgrano proposed in 1796 — work, shelter and a future for every Argentine willing to earn it. The basin that today powers the country can also give it a model: turning **Vaca Muerta into Vaca Verde**. Wealth that stays, that regenerates and that makes us proud.',
    belgrano_pre: 'Belgrano ',
    belgrano_em: 'was right.',
    belgrano_sub: 'Two hundred and thirty years later, his dream is once again the most modern plan we have.',
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

function P({ children, max = '70ch', style }: { children: ReactNode; max?: string; style?: CSSProperties }) {
  return (
    <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.95rem, 1.15vw, 1.06rem)', lineHeight: 1.8, color: 'rgba(7,26,56,0.82)', maxWidth: max, margin: '0 0 1.25rem 0', ...style }}>
      {children}
    </p>
  )
}

function Statement({ children, by }: { children: ReactNode; by?: string }) {
  return (
    <Reveal>
      <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', margin: '0.5rem 0 2rem', maxWidth: '42rem' }}>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)', lineHeight: 1.26, color: INK, margin: 0 }}>{children}</p>
        {by && <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: FAINT, margin: '1rem 0 0' }}>{by}</p>}
      </div>
    </Reveal>
  )
}

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '2px', background: GOLD, transformOrigin: '0%', scaleX: scrollYProgress, zIndex: 100 }} />
  )
}

/* ---------- el rail de etapas ---------- */

function StageRail({ t, current }: { t: T; current?: number }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem 0', alignItems: 'stretch', margin: '0.5rem 0 0.5rem' }}>
      {t.stages.map((s, i) => {
        const isCurrent = current !== undefined && i === current
        const done = s.state === 'done'
        const now = s.state === 'now'
        const nodeColor = done ? GREEN_DK : now ? GOLD : 'rgba(7,26,56,0.28)'
        return (
          <div key={s.n} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.55rem',
              border: `1px solid ${isCurrent ? nodeColor : LINE}`,
              background: isCurrent ? (now ? 'rgba(242,181,68,0.12)' : 'rgba(47,143,58,0.08)') : '#fff',
              padding: '0.5rem 0.85rem', borderRadius: '3px',
            }}>
              <span style={{
                ...serif, fontStyle: 'italic', fontSize: '1.15rem', lineHeight: 1,
                color: nodeColor, minWidth: '0.8rem', textAlign: 'center',
              }}>{s.n}</span>
              <span style={{ ...sans, fontSize: '0.68rem', fontWeight: 600, color: done || now ? INK : FAINT, whiteSpace: 'nowrap' }}>
                {s.name}{done ? ' ✓' : now ? ' ●' : ''}
              </span>
            </div>
            {i < t.stages.length - 1 && (
              <span aria-hidden style={{ width: 'clamp(0.5rem, 1.4vw, 1.1rem)', height: '1px', background: 'rgba(7,26,56,0.25)', display: 'inline-block' }} />
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ---------- encabezado de capítulo-etapa ---------- */

function StageHeader({ t, idx, q }: { t: T; idx: number; q: string }) {
  const s = t.stages[idx]
  const done = s.state === 'done'
  const now = s.state === 'now'
  const color = done ? GREEN_DK : now ? GOLD : FAINT
  const badge = done ? t.badge_done : now ? t.badge_now : t.badge_next
  return (
    <Reveal>
      <header style={{ marginBottom: '2.5rem', scrollMarginTop: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(1rem, 2.5vw, 1.75rem)', flexWrap: 'wrap' }}>
          <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(3.4rem, 8vw, 6rem)', color, lineHeight: 0.8, flexShrink: 0 }}>{s.n}</span>
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
              <span style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: CELESTE, fontWeight: 500 }}>
                {t.stage_word} {s.n} · {s.name}
              </span>
              <span style={{
                ...sans, fontSize: '0.56rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700,
                color: done ? GREEN_DK : now ? '#8a6510' : FAINT,
                background: done ? 'rgba(47,143,58,0.1)' : now ? 'rgba(242,181,68,0.18)' : 'rgba(7,26,56,0.05)',
                border: `1px solid ${done ? 'rgba(47,143,58,0.3)' : now ? 'rgba(242,181,68,0.5)' : LINE}`,
                padding: '0.28rem 0.6rem', borderRadius: '2px',
              }}>{badge}</span>
            </div>
            <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 3.6vw, 2.9rem)', lineHeight: 1.12, color: INK, margin: 0, maxWidth: '26ch' }}>
              {q}
            </h2>
          </div>
        </div>
        <div style={{ height: '1px', background: LINE, marginTop: '1.9rem' }} />
      </header>
    </Reveal>
  )
}

/* ---------- bloque de gate ---------- */

function GateBlock({ t, n, verdict, passed }: { t: T; n: number; verdict: string; passed: boolean }) {
  return (
    <Reveal>
      <div style={{
        marginTop: '2.5rem',
        border: `1px solid ${passed ? 'rgba(47,143,58,0.35)' : 'rgba(242,181,68,0.55)'}`,
        borderLeft: `4px solid ${passed ? GREEN_DK : GOLD}`,
        background: passed ? 'rgba(47,143,58,0.05)' : 'rgba(242,181,68,0.08)',
        padding: 'clamp(1.25rem, 2.5vw, 1.8rem)',
        display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap',
      }}>
        <span style={{
          ...sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700,
          color: passed ? GREEN_DK : '#8a6510', whiteSpace: 'nowrap', paddingTop: '0.2rem',
        }}>
          {t.gate_label} {n} — {passed ? t.gate_passed + ' ✓' : t.gate_open}
        </span>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)', lineHeight: 1.4, color: INK, margin: 0, flex: '1 1 320px' }}>
          {verdict}
        </p>
      </div>
    </Reveal>
  )
}

/* ---------- lista de evidencia (etapas 0-1) ---------- */

function EvidenceList({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
      {items.map(([title, d], i) => (
        <Reveal key={title} delay={0.04 * i}>
          <div style={{ background: '#fff', border: `1px solid ${LINE}`, padding: 'clamp(1.1rem, 2.2vw, 1.5rem)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span aria-hidden style={{ color: GREEN_DK, ...sans, fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.5 }}>✓</span>
            <div>
              <h3 style={{ ...sans, fontSize: '0.96rem', fontWeight: 600, color: INK, margin: '0 0 0.35rem' }}>{title}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.65, color: MUTED, margin: 0, maxWidth: '78ch' }}>{d}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

const CADENA_IMG = ['01-semilla', '02-cultivo', '03-cosecha', '04-decorticacion', '05-mezclado', '06-material', '07-construccion', '08-vivienda'] as const

/* ============================================================
   SECCIONES
   ============================================================ */

function Tesis({ t }: { t: T }) {
  return (
    <Doc bg={CREAM} id="vision">
      <Reveal>
        <Eyebrow>{t.tesis_k}</Eyebrow>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2rem, 4.4vw, 3.6rem)', lineHeight: 1.14, color: INK, margin: '0 0 2rem', maxWidth: '20ch' }}>
          {t.tesis_lead}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <P max="74ch" style={{ fontSize: 'clamp(1rem, 1.35vw, 1.16rem)', marginBottom: 0 }}>
          {rich(t.tesis_body, INK)}
        </P>
      </Reveal>
    </Doc>
  )
}

function Regla({ t }: { t: T }) {
  return (
    <Doc id="regla">
      <Reveal>
        <Eyebrow>{t.regla_k}</Eyebrow>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', lineHeight: 1.08, color: INK, margin: '0 0 1.4rem', maxWidth: '24ch' }}>{t.regla_t}</h2>
        <P max="72ch" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.14rem)' }}>{t.regla_d}</P>
      </Reveal>

      <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, margin: '2.25rem 0 1rem' }}>{t.rail_label}</p>
      <Reveal>
        <StageRail t={t} />
      </Reveal>

      <Reveal delay={0.08}>
        <P max="74ch" style={{ marginTop: '1.75rem' }}>{rich(t.regla_body, INK)}</P>
      </Reveal>

      <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, margin: '2rem 0 1rem' }}>{t.regla_dims_label}</p>
      <Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {t.dims.map((d) => (
            <span key={d} style={{ ...sans, fontSize: '0.74rem', fontWeight: 600, color: INK, border: '1px solid rgba(7,26,56,0.3)', padding: '0.5rem 1rem', borderRadius: '2px', background: '#fff' }}>{d}</span>
          ))}
        </div>
      </Reveal>

      <Statement by={t.regla_statement_by}>{t.regla_statement}</Statement>
    </Doc>
  )
}

function Etapa0({ t }: { t: T }) {
  return (
    <Doc bg={CREAM} id="e0">
      <StageHeader t={t} idx={0} q={t.e0_q} />
      <Reveal><P max="72ch">{t.e0_intro}</P></Reveal>

      <EvidenceList items={t.e0_items.slice(0, 1)} />

      {/* recortes de prensa como evidencia del problema */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(232px, 1fr))', gap: '0.7rem', margin: '0.7rem 0' }}>
        {t.clippings.map((c, i) => (
          <Reveal key={c.quote} delay={0.05 * i}>
            <article style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `2px solid ${c.alarm ? '#B4301C' : 'rgba(7,26,56,0.5)'}`, padding: '0.8rem 1rem 0.9rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <span style={{ ...serif, fontWeight: 600, fontSize: '0.74rem', color: INK, borderBottom: '1px solid rgba(7,26,56,0.1)', paddingBottom: '0.35rem' }}>{c.medium}</span>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: '0.88rem', lineHeight: 1.3, color: INK, margin: 0 }}>“{c.quote}”</p>
              <p style={{ ...sans, fontSize: '0.55rem', letterSpacing: '0.03em', color: FAINT, margin: 'auto 0 0', lineHeight: 1.4 }}>{c.who}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <EvidenceList items={t.e0_items.slice(1)} />

      <GateBlock t={t} n={1} verdict={t.e0_gate} passed />
    </Doc>
  )
}

function Etapa1({ t }: { t: T }) {
  return (
    <Doc id="e1">
      <StageHeader t={t} idx={1} q={t.e1_q} />
      <Reveal><P max="72ch">{t.e1_intro}</P></Reveal>

      <EvidenceList items={t.e1_items} />

      {/* la cadena, diseñada */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(105px, 1fr))', gap: '0.5rem', margin: '1.5rem 0 0' }}>
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

      <GateBlock t={t} n={2} verdict={t.e1_gate} passed />
    </Doc>
  )
}

function Etapa2({ t }: { t: T }) {
  return (
    <Doc bg={CREAM} id="e2">
      <StageHeader t={t} idx={2} q={t.e2_q} />
      <Reveal>
        <P max="74ch" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.14rem)' }}>{t.e2_intro}</P>
      </Reveal>

      <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, margin: '2.25rem 0 1.1rem' }}>{t.e2_deliv_label}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {t.e2_deliverables.map(([title, d], i) => (
          <Reveal key={title} delay={0.05 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderLeft: `3px solid ${GOLD}`, padding: 'clamp(1.25rem, 2.5vw, 1.75rem)', display: 'flex', gap: 'clamp(1rem, 2.5vw, 1.75rem)', alignItems: 'flex-start' }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', color: GOLD, lineHeight: 1, minWidth: '2rem' }}>{i + 1}</span>
              <div>
                <h3 style={{ ...sans, fontSize: '0.98rem', fontWeight: 600, color: INK, margin: '0 0 0.4rem' }}>{title}</h3>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.65, color: MUTED, margin: 0, maxWidth: '76ch' }}>{d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* lo que no compromete */}
      <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, margin: '2.5rem 0 1rem' }}>{t.e2_not_label}</p>
      <Reveal>
        <P max="74ch">{rich(t.e2_not, INK)}</P>
      </Reveal>

      {/* riesgos acotados */}
      <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, margin: '2rem 0 1.1rem' }}>{t.e2_risk_label}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.7rem' }}>
        {t.e2_risks.map(([r, d], i) => (
          <Reveal key={r} delay={0.05 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, padding: '1.2rem 1.3rem', height: '100%' }}>
              <h3 style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, color: INK, margin: '0 0 0.55rem' }}>{r}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.6, color: MUTED, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* presupuesto en reunión */}
      <Reveal>
        <div style={{ marginTop: '2.25rem', background: INK, padding: 'clamp(1.4rem, 2.8vw, 2rem)', maxWidth: '46rem' }}>
          <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', lineHeight: 1.45, color: CREAM, margin: 0 }}>
            {t.e2_price}
          </p>
        </div>
      </Reveal>

      <GateBlock t={t} n={3} verdict={t.e2_gate} passed={false} />
    </Doc>
  )
}

function Camino({ t }: { t: T }) {
  return (
    <Doc id="camino">
      <Reveal>
        <Eyebrow>{t.camino_k}</Eyebrow>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', lineHeight: 1.08, color: INK, margin: '0 0 1.4rem', maxWidth: '24ch' }}>{t.camino_t}</h2>
        <P max="72ch">{t.camino_d}</P>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '0.8rem', marginTop: '1.5rem' }}>
        {t.camino_items.map(([n, name, q, d], i) => (
          <Reveal key={n} delay={0.06 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, padding: 'clamp(1.4rem, 2.5vw, 1.9rem)', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.7rem' }}>
                <span style={{ ...serif, fontStyle: 'italic', fontSize: '2.4rem', color: 'rgba(7,26,56,0.3)', lineHeight: 1 }}>{n}</span>
                <h3 style={{ ...sans, fontSize: '1rem', fontWeight: 600, color: INK, margin: 0 }}>{name}</h3>
              </div>
              <p style={{ ...serif, fontStyle: 'italic', fontSize: '1.02rem', lineHeight: 1.35, color: CELESTE, margin: '0 0 0.7rem' }}>{q}</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.84rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Doc>
  )
}

function Carriles({ t }: { t: T }) {
  return (
    <Doc bg={CREAM} id="carriles">
      <Reveal>
        <Eyebrow>{t.carriles_k}</Eyebrow>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', lineHeight: 1.08, color: INK, margin: '0 0 1.4rem', maxWidth: '26ch' }}>{t.carriles_t}</h2>
        <P max="72ch">{t.carriles_d}</P>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: LINE, border: `1px solid ${LINE}`, marginTop: '1.25rem' }}>
        {t.carriles.map(([l, name, d, w], i) => (
          <Reveal key={l} delay={0.04 * i}>
            <div style={{ background: CREAM, padding: 'clamp(1.1rem, 2.2vw, 1.5rem)', display: 'flex', gap: 'clamp(1rem, 2.5vw, 2rem)', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: '1.7rem', color: GOLD, lineHeight: 1, minWidth: '1.6rem' }}>{l}</span>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ ...sans, fontSize: '0.95rem', fontWeight: 600, color: INK, margin: '0 0 0.3rem' }}>{name}</h3>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.6, color: MUTED, margin: 0 }}>{d}</p>
              </div>
              <span style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, whiteSpace: 'nowrap' }}>{w}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Doc>
  )
}

function Carbono({ t }: { t: T }) {
  return (
    <Doc bg={DUSK} id="carbono">
      <Reveal>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, margin: '0 0 0.7rem', fontWeight: 500 }}>{t.carbono_k}</p>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', lineHeight: 1.08, color: CREAM, margin: '0 0 1.75rem', maxWidth: '24ch' }}>{t.carbono_t}</h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.98rem, 1.3vw, 1.1rem)', lineHeight: 1.8, color: CREAM_MUTED, maxWidth: '72ch', margin: '0 0 1.25rem' }}>
          {rich(t.carbono_body1, CREAM)}
        </p>
      </Reveal>
      <Reveal delay={0.14}>
        <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.98rem, 1.3vw, 1.1rem)', lineHeight: 1.8, color: CREAM_MUTED, maxWidth: '72ch', margin: 0 }}>
          {rich(t.carbono_body2, CREAM)}
        </p>
      </Reveal>
    </Doc>
  )
}

function Quienes({ t }: { t: T }) {
  return (
    <Doc id="quienes">
      <Reveal>
        <Eyebrow>{t.quienes_k}</Eyebrow>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', lineHeight: 1.08, color: INK, margin: '0 0 2.25rem', maxWidth: '24ch' }}>{t.quienes_t}</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 'clamp(0.9rem, 2vw, 1.3rem)' }}>
        {t.quienes.map(([name, role, d], i) => (
          <Reveal key={name} delay={0.06 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `2px solid ${CELESTE}`, padding: 'clamp(1.3rem, 2.4vw, 1.7rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.3rem, 2vw, 1.65rem)', color: INK, margin: '0 0 0.2rem' }}>{name}</h3>
              <p style={{ ...sans, fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CELESTE, margin: '0 0 0.75rem' }}>{role}</p>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.8rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, margin: '2.5rem 0 1.1rem' }}>{t.founder_label}</p>
      <Reveal>
        <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderLeft: `3px solid ${GOLD}`, padding: 'clamp(1.4rem, 2.8vw, 1.9rem)', maxWidth: '48rem' }}>
          <P max="76ch" style={{ marginBottom: 0 }}>{rich(t.founder, INK)}</P>
        </div>
      </Reveal>
    </Doc>
  )
}

function Invitacion({ t }: { t: T }) {
  return (
    <Doc bg={DUSK} id="invitacion">
      <Reveal>
        <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: GOLD, margin: '0 0 0.7rem', fontWeight: 500 }}>{t.inv_k}</p>
        <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', lineHeight: 1.08, color: CREAM, margin: '0 0 1.4rem', maxWidth: '22ch' }}>{t.inv_t}</h2>
        <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', lineHeight: 1.65, color: CREAM_MUTED, margin: '0 0 2.5rem', maxWidth: '66ch' }}>{t.inv_d}</p>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(242,181,68,0.2)', border: '1px solid rgba(242,181,68,0.2)' }}>
        {t.inv_items.map(([n, name, d], i) => (
          <Reveal key={n} delay={0.08 * i}>
            <div style={{ background: DUSK, padding: 'clamp(1.5rem, 3vw, 2.25rem)', display: 'flex', gap: 'clamp(1.25rem, 3vw, 2.5rem)', alignItems: 'flex-start' }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'rgba(242,181,68,0.6)', lineHeight: 1, minWidth: '2.5rem' }}>{n}</span>
              <div>
                <h3 style={{ ...sans, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', fontWeight: 600, color: CREAM, margin: '0 0 0.6rem' }}>{name}</h3>
                <p style={{ ...sans, fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.62)', margin: 0, maxWidth: '70ch' }}>{d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Doc>
  )
}

function Cierre({ t }: { t: T }) {
  return (
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
          <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: GOLD, margin: '0 0 1rem', fontWeight: 500 }}>{t.cierre_vision_k}</p>
          <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: 1.02, color: CREAM, margin: '0 0 1.75rem', maxWidth: '16ch' }}>{t.cierre_vision_t}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(1rem, 1.45vw, 1.22rem)', lineHeight: 1.78, color: 'rgba(243,241,231,0.82)', maxWidth: '60ch', margin: '0 0 2.75rem' }}>
            {rich(t.cierre_vision_body, CREAM)}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1, color: CREAM, margin: '0 0 1rem' }}>
            {t.belgrano_pre}<span style={{ color: GREEN }}>{t.belgrano_em}</span>
          </h3>
          <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)', lineHeight: 1.6, color: 'rgba(243,241,231,0.6)', maxWidth: '50ch', margin: 0 }}>{t.belgrano_sub}</p>
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
  )
}

/* ============================================================
   ENSAMBLADO
   ============================================================ */

export function MasterplanStageGate({ showCover = false }: { showCover?: boolean }) {
  const { lang } = useLang()
  const t = TXT[lang]
  return (
    <main style={{ background: PAPER }}>
      {showCover && <ProgressBar />}
      <Tesis t={t} />
      <Regla t={t} />
      <Etapa0 t={t} />
      <Etapa1 t={t} />
      <Etapa2 t={t} />
      <Camino t={t} />
      <Carriles t={t} />
      <Carbono t={t} />
      <Quienes t={t} />
      <Invitacion t={t} />
      <Cierre t={t} />
    </main>
  )
}
