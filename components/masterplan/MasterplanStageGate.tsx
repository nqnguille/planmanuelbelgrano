'use client'

/* ============================================================
   PLAN MANUEL BELGRANO — MASTERPLAN STAGE-GATE (jul 2026)
   El documento ES el camino de etapas, desarrolladas todas con
   el MISMO nivel de detalle y sin marcar estado de avance
   (en qué etapa está el proyecto se cuenta en reunión):
     tesis → la regla del juego → Etapas 0-5 (template idéntico:
     pregunta del gate → frentes de trabajo → criterio del gate)
     → carriles (5 programas) → carbono → quiénes → invitación →
     cierre cinematográfico.
   Sin precios en la web (el presupuesto de cada etapa se
   presenta en reunión). Sin nombres de empresas energéticas.
   Bilingüe ES / EN. Estética Soberana.
   ============================================================ */

import { motion, useScroll } from 'framer-motion'
import { useState, useEffect, type CSSProperties, type ReactNode } from 'react'
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

type Stage = {
  n: string
  name: string
  q: string
  intro: string
  fronts: readonly (readonly [string, string])[]
  gate: string
  showClippings?: boolean
  showCadena?: boolean
}

const TXT = {
  es: {
    /* la visión */
    tesis_k: 'La visión',
    tesis_lead: 'Podemos convertir Vaca Muerta en Vaca Verde.',
    tesis_body:
      'Debajo de Neuquén está la energía que hoy mueve al país. Cuando esa energía crece, crece la provincia entera — y en la superficie hay tierra, agua y sol para convertir ese crecimiento en algo que eche raíces. **Vaca Muerta no es eterna — lo que construyamos con lo que genera puede serlo.**',
    v_belgrano_label: 'Una industria interrumpida hace 230 años',
    v_belgrano:
      'En 1796, Manuel Belgrano propuso desde el Consulado el cultivo del lino y del cáñamo como una de las primeras industrias del país: **producir y agregar valor, en lugar de solo extraer**. Se adelantó más de dos siglos. El cáñamo construyó durante siglos en Europa, Asia y América —la estructura más antigua documentada tiene mil quinientos años y sigue en pie—, hasta que la prohibición del siglo XX lo interrumpió: una decisión regulatoria, no técnica ni económica. El marco vigente vuelve a habilitarlo. **Y la industria todavía no tiene dueño.**',
    v_planta_label: 'La planta',
    v_planta:
      'El cáñamo industrial crece rápido, en suelo árido y con poca agua: madura en pocos meses y prospera donde otros cultivos no llegan. De una sola siembra entrega fibra, materiales y energía — casi sin desperdicio.',
    v_products: [
      ['Hempcrete', 'El material de construcción de base biológica: ladrillos y bloques para vivienda accesible, aislante y de rápida ejecución. Probado en más de 50 países, con un diferencial único: el carbono que capturó el cultivo queda almacenado en la pared durante toda la vida de la construcción.'],
      ['Biochar', 'Del residuo de la planta, por pirólisis, un carbón vegetal estable que bloquea carbono por más de mil años y mejora el suelo. La segunda línea de valor de la misma hectárea — el residuo también es un activo.'],
    ] as readonly (readonly [string, string])[],
    v_cadena_label: 'De la semilla a la llave',
    v_cadena:
      'Una sola planta abre una cadena industrial completa: cultivo, material de construcción y, del residuo, biochar. Cada paso ocurre en la misma cuenca y es empleo técnico — del campo a la vivienda.',
    v_dif_label: 'El diferencial',
    v_dif:
      'Casi cualquier cultivo captura carbono; lo excepcional es retenerlo. Este proyecto fija el carbono capturado en materia que lo guarda por décadas y siglos —**en la pared, como ladrillo; en el suelo, como biochar**— y, porque la cadena es una sola, cada crédito nace con **una única cadena de custodia**, trazable de la semilla al muro. Respaldo físico y custodia única le dan al crédito un valor que el mercado paga, y que muy pocos pueden ofrecer.',
    v_dif_statement: 'El carbono se captura en el campo y queda guardado en la pared: un crédito que solo puede generar quien tiene la cadena entera.',
    v_dif_by: 'Fijación durable + custodia única',
    v_impacto_label: 'Tres resultados de la misma cadena',
    v_cards: [
      ['Vivienda', 'accesible, aislante y de rápida ejecución, con materia prima y mano de obra locales — allí donde más falta.'],
      ['Empleo', 'técnico y local en cada eslabón: cultivo, industria y construcción. La fuente de trabajo crece con cada hectárea y con cada obra.'],
      ['Industria', 'valor agregado en origen que multiplica empresas regionales — y reactiva las cadenas que se desprenden del cáñamo: alimentos, textiles, bioplásticos, papel, cosmética.'],
    ] as readonly (readonly [string, string])[],
    v_ciudades_label: 'Ciudades de cáñamo',
    v_ciudades:
      'Si a Neuquén llega un millón de personas, la pregunta no es solo dónde duermen: es qué construye su economía. El hempcrete convierte cualquier hectárea cultivable de la Argentina en viviendas, barrios y ciudades enteras — y en una fuente de trabajo inagotable, en cada eslabón de la cadena, del campo a la llave.',
    v_statement: 'Vaca Muerta le dio a Neuquén energía, trabajo y escala. Sobre esa misma tierra, el cáñamo suma una industria que planta, construye y regenera.',
    v_statement_by: 'Vaca Muerta → Vaca Verde',
    v_puente:
      'La visión es enorme. Por eso el plan es exactamente lo contrario: **chico, verificable y por etapas**. Nadie pone todo el capital de una vez; cada etapa compra la certeza que habilita la siguiente.',

    /* la regla */
    regla_k: 'La regla del juego',
    regla_t: 'El riesgo no se asume: se elimina etapa por etapa.',
    regla_d:
      'El plan avanza con un modelo de madurez Stage Gate: seis etapas, evaluadas en paralelo en cinco dimensiones — técnica, regulatoria, comercial, financiera e institucional. Entre etapa y etapa hay un gate: una decisión de inversión que solo se toma con la evidencia de la etapa anterior.',
    regla_body:
      'El error clásico de los proyectos grandes es saltar a la escala a ciegas. Este plan lo hace **imposible por diseño**: cada etapa tiene frentes de trabajo y entregables verificables, cada gate tiene criterios explícitos, y el capital de una etapa nunca compromete el de la siguiente. Lo que se compra en cada etapa es información — la que convierte a la próxima en una decisión, en lugar de una apuesta. **El presupuesto de cada etapa se estructura contra sus entregables y se presenta en reunión.**',
    regla_dims_label: 'Las cinco dimensiones de cada gate',
    dims: ['Técnica', 'Regulatoria', 'Comercial', 'Financiera', 'Institucional'],
    regla_statement: 'El capital entra por etapas y solo avanza con evidencia.',
    regla_statement_by: 'La regla del plan',
    rail_label: 'El camino completo',

    stage_word: 'Etapa',
    gate_label: 'El gate',
    fronts_label: 'Los frentes de trabajo de la etapa',
    nav_top: [['vision', 'La visión', 'V'], ['regla', 'La regla', 'R']] as readonly (readonly [string, string, string])[],
    nav_bottom: [['carriles', 'Los carriles', 'C'], ['carbono', 'El carbono', 'CO₂'], ['quienes', 'Quiénes', 'Q'], ['invitacion', 'La invitación', 'I']] as readonly (readonly [string, string, string])[],

    stages: [
      {
        n: '0', name: 'Formulación',
        q: '¿Hay acá un proyecto real?',
        intro: 'La etapa fundacional: definir el proyecto con trabajo de campo, mercado y marco legal — no con entusiasmo. El problema, el producto, el marco y el equipo quedan sobre la mesa antes de invertir un peso en desarrollo.',
        fronts: [
          ['El problema, caracterizado y documentado', 'Déficit habitacional cercano al 60% en la zona de Vaca Muerta, Añelo creció más del 140%, los alquileres más caros del país y obra que se contrata a empresas de fuera de la provincia. La prensa lo cuenta sola:'],
          ['El mercado y su hueco de pionero', 'El material a batir identificado (hormigón celular curado en autoclave), los segmentos definidos —construcción privada, vivienda pública y la industria que necesita alojar a su gente— y una posición única: nadie construyó todavía con cáñamo en Argentina.'],
          ['El producto, especificado', 'Hempcrete: densidad objetivo 250–350 kg/m³, conductividad 0,06–0,12 W/mK, incombustible (Clase A), vida útil de más de 500 años — norma europea EN 16101, probado en más de 50 países. Dos líneas: ladrillo de cerramiento y bloque estructural.'],
          ['El marco legal, relevado', 'Ley 27.669 (cáñamo industrial, THC < 0,3%, autoridad ARICCAME en el Ministerio de Economía) y Decreto 405/2023. Ruta de certificación del sistema constructivo identificada junto al INTI: aptitud técnica, normas IRAM, reglamentos CIRSOC.'],
          ['El consorcio y la gobernanza', 'Flora integra; Fundación GEN cultiva (titular de la licencia agrícola, con el primer antecedente de cáñamo industrial de Neuquén); EcoGaia certifica el carbono; INTI valida el material; Red Protierra transfiere el saber constructivo. Quien opera no es quien valida ni quien certifica.'],
        ],
        gate: 'Existe una base técnica, legal, comercial e institucional suficiente para justificar la inversión en viabilidad.',
        showClippings: true,
      },
      {
        n: '1', name: 'Viabilidad',
        q: '¿Se puede hacer acá, con lo nuestro?',
        intro: 'La etapa que baja el proyecto del papel al territorio: la viabilidad no se argumenta, se produce. Materiales de prueba, licencias, tierra y una operación real que conoce el clima, el suelo y la regulación.',
        fronts: [
          ['Formulaciones de laboratorio', 'Mezclas de cañamiza y aglomerante ensayadas hasta seleccionar la formulación de trabajo (binder de cal), con desarrollo junto al INTI.'],
          ['Prototipos y primeros materiales', 'Primeros ladrillos de prueba y ensayo industrial en condiciones reales — el material se hace, no se proyecta.'],
          ['La cadena completa, diseñada', 'De la semilla a la llave: ocho eslabones definidos, de la genética al barrio construido, con el proceso productivo del piloto dimensionado.'],
          ['Licencias y habilitaciones', 'Licencia agrícola de ARICCAME operativa en el consorcio (Fundación GEN); licencia industrial en gestión; habilitaciones del piloto identificadas.'],
          ['Demanda y financiamiento, validados', 'Interés real de constructoras y programas de vivienda relevado en el territorio, y un plan de financiamiento del piloto contra hitos verificables.'],
        ],
        gate: 'Es técnicamente viable producir el material, hay camino regulatorio y hay interés real: se justifica el piloto.',
      },
      {
        n: '2', name: 'Piloto',
        q: '¿El material se produce en serie, con desempeño reproducible y certificable?',
        intro: 'La etapa que convierte los primeros ladrillos en un producto medido, ensayado y listo para certificar — y a la genética en un dato, no una promesa. Es la etapa más chica del camino y la que más certeza compra.',
        fronts: [
          ['Benchmark de genéticas en dos ecorregiones', 'Ensayo científico simultáneo en Mendoza y Neuquén, con genéticas nacionales e internacionales: la variedad campeona por territorio, medida — el cimiento agrícola de todo lo que sigue.'],
          ['Lote piloto de ladrillos y bloques', 'Producción en condiciones controladas, con variabilidad entre lotes documentada: la prueba de que el material sale igual dos veces.'],
          ['Ensayos normalizados en el INTI', 'Resistencia, desempeño térmico (IRAM 11605) y comportamiento al fuego, en laboratorio acreditado: el expediente que abre la certificación del sistema constructivo.'],
          ['Primera medición del carbono', 'Análisis de ciclo de vida preliminar y estimación de captura por unidad, con metodología certificable (EcoGaia): el activo ambiental deja de ser un cálculo de escritorio.'],
          ['MRV piloto', 'Trazabilidad digital del cultivo al material: el hilo de custodia que hará auditable cada tonelada.'],
        ],
        gate: 'Lote reproducible, ensayos aprobados y captura medida: la construcción real deja de ser un riesgo y pasa a ser la decisión siguiente.',
      },
      {
        n: '3', name: 'Demostración',
        q: '¿Funciona en una construcción real y es repetible constructivamente?',
        intro: 'La etapa donde el material se vuelve casa: una obra demostrativa completa, medida en uso, con el sistema constructivo documentado y la certificación técnica en marcha. La evidencia deja el laboratorio y se muda al territorio.',
        fronts: [
          ['La vivienda demostrativa', 'Una obra real ejecutada de punta a punta con el sistema constructivo propio, documentada paso a paso — la primera casa de cáñamo de la Argentina.'],
          ['Desempeño medido en uso', 'Comportamiento térmico, humedad y confort monitoreados durante meses de habitación real, con etiqueta de eficiencia energética como referencia pública.'],
          ['Certificación de aptitud técnica', 'El expediente CAT en marcha: la llave que habilita obra pública y vivienda social — el mercado más grande del material.'],
          ['Manual constructivo y aplicadores', 'El sistema documentado en manuales junto a Red Protierra y las primeras camadas de aplicadores formados: el saber deja de vivir en una sola cuadrilla.'],
          ['Tracción comercial verificable', 'Expresiones formales de interés y primeros acuerdos a partir de la obra: constructoras, programas de vivienda y el offtake del carbono avanzado.'],
        ],
        gate: 'La obra funciona, el desempeño está medido y el mercado respondió: se justifica la inversión industrial.',
      },
      {
        n: '4', name: 'Escalamiento',
        q: '¿Se produce industrialmente, con calidad constante y certificable?',
        intro: 'La etapa donde el sistema se vuelve industria: planta, control de calidad, certificaciones completas y el material compitiendo de igual a igual en el mercado de la construcción.',
        fronts: [
          ['La planta industrial', 'Capacidad definida por la demanda validada en la Demostración, ingeniería de proceso y localización cerca de la cuenca — el flete manda en los materiales de construcción.'],
          ['Calidad industrial por lote', 'Control estadístico del proceso, muestreo por lote y procedimientos normalizados: la calidad deja de depender de las manos.'],
          ['Certificaciones completas', 'CAT vigente para las dos líneas de producto, normas IRAM cumplidas y habilitación industrial de planta — el material comercializable legalmente a escala.'],
          ['Canales y comercialización', 'Distribuidores, constructoras, desarrolladores y programas públicos: la red que sostiene la producción, con la unidad económica —costo, precio, margen— validada con datos propios.'],
          ['El carbono, a escala', 'Con volumen industrial, el activo ambiental se certifica y comercializa en serio: cada tonelada serializada, un solo titular, ingresos que complementan al material.'],
        ],
        gate: 'La producción es industrial, la calidad es constante y la demanda la absorbe: el negocio es repetible.',
      },
      {
        n: '5', name: 'Plataforma territorial',
        q: '¿Se replica en nuevos territorios y se sostiene sin depender de un solo actor?',
        intro: 'La etapa final no es un techo: es un modelo. Todo lo validado —tecnología, alianzas, formación, financiamiento— se empaqueta para replicarse en cualquier provincia con tierra, agua y sol. La plataforma de desarrollo territorial.',
        fronts: [
          ['El paquete tecnológico transferible', 'Know-how, manuales y especificaciones empaquetados para réplica y licenciamiento: se replican plantas, no se despacha producto pesado a mil kilómetros.'],
          ['El modelo institucional replicable', 'El consorcio como molde —integrador + cultivo + certificadora + validación técnica— transferible a nuevos territorios con actores locales.'],
          ['Formación a escala', 'Academia de empleo, certificación de competencias e inserción laboral: cada nueva planta y cada nueva obra forman su propia gente.'],
          ['El portfolio diversificado', 'Bloques, ladrillos, paneles, morteros y biochar — y la cadena madre encendiendo las industrias que se desprenden del cáñamo: alimentos, textil, bioplásticos, papel.'],
          ['Autosostenibilidad financiera', 'Ingresos diversificados —material, construcción, licencias, formación, carbono— y capacidad de financiar nuevas réplicas sin depender de un único financiador ni de un único cliente.'],
        ],
        gate: 'El modelo vive solo: la industria que Belgrano propuso, funcionando de punta a punta del país.',
      },
    ] as readonly Stage[],

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
    carbono_moat_label: 'La oportunidad para quien entra primero',
    carbono_moat1:
      'Toda empresa con una meta ambiental enfrenta la misma disyuntiva: comprar créditos de terceros —a precio de mercado, con la integridad de otro— o **generar los propios**. Este plan ofrece lo segundo: la capacidad de producir créditos de remoción durable, verificados y trazables, en el mismo territorio donde la empresa opera. Un activo que nadie más puede reclamar, a costo de productor — **una ventaja que no se puede comprar hecha**.',
    carbono_moat_statement: 'Generar créditos de carbono hoy es como minar bitcoin en 2010: el que entra temprano fija su costo para siempre, y la posición de pionero se toma una sola vez.',
    carbono_moat_by: 'El diferencial para el socio fundador',
    carbono_moat2:
      'La ventana de primer entrante ya pasó por los ferrocarriles, el petróleo y el shale. Ahora está abierta para la remoción biológica verificable — y en la Argentina ese activo todavía no tiene dueño. La empresa que ayude a arrancar y validar el modelo queda, para siempre, como la que lo hizo posible: **fundadora de la cadena y primera en la fila de todo lo que produce**.',
    carbono_body2:
      'Su dimensión económica se cuantifica cuando el plan la valida — la primera medición real es un entregable del Piloto, y la escala comercial llega con el Escalamiento. **Como todo en este documento, el activo no se promete: se demuestra.**',

    /* quiénes */
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
    inv_t: 'Tres asientos en la mesa fundadora',
    inv_d:
      'Un socio no compra la visión entera: entra por el gate que tiene adelante, con compromisos acotados contra entregables verificables — sin subsidios y sin organismos nuevos.',
    inv_items: [
      ['01', 'La industria', 'Financia etapas acotadas y queda fundadora de la cadena: **la capacidad de generar sus propios créditos de carbono** —en lugar de comprarlos a terceros— y preferencia sobre la vivienda para sus propias operaciones, con la opción —nunca la obligación— de acompañar cada etapa siguiente. Y una verdad simple: **cuando la empresa ancla crece, crece toda la cadena** — el campo que la abastece, la obra que la construye y el pueblo que la habita.'],
      ['02', 'El Estado', 'Reglas claras y articulación. El plan avanza con el marco vigente y capital privado; del Estado necesita lo que mejor puede dar: destrabar, simplificar y acompañar sin poner trabas.'],
      ['03', 'La ciencia', 'Ensayos, normas y certificación en cada etapa del camino: INTI, universidades y laboratorios acreditados. Toda afirmación del plan la firma un tercero.'],
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

    clippings: [
      { medium: 'Río Negro', quote: 'Neuquén va a tener, en 30 años, 1 millón y medio de personas.', who: 'F. Sturzenegger · Ministro de Desregulación', alarm: false },
      { medium: 'Infobae', quote: 'No se vengan con la familia.', who: 'F. Banderet · Intendente de Añelo', alarm: true },
      { medium: 'LM Neuquén', quote: 'Contratan empresas de afuera para obras que podrían hacer las empresas locales.', who: 'UOCRA Neuquén · +100 sin trabajo', alarm: true },
    ],
    cadena: ['Semilla', 'Cultivo', 'Cosecha', 'Decortización', 'Mezclado', 'Hempcrete', 'Construcción', 'Vivienda'],
  },

  en: {
    tesis_k: 'The vision',
    tesis_lead: 'We can turn Vaca Muerta into Vaca Verde.',
    tesis_body:
      'Beneath Neuquén lies the energy that powers the country today. When that energy grows, the whole province grows — and on the surface there is land, water and sun to turn that growth into something that takes root. **Vaca Muerta is not eternal — what we build with what it generates can be.**',
    v_belgrano_label: 'An industry interrupted 230 years ago',
    v_belgrano:
      'In 1796, Manuel Belgrano proposed from the Consulate the cultivation of flax and hemp as one of the country\'s first industries: **producing and adding value, rather than only extracting**. He was more than two centuries ahead. Hemp built across Europe, Asia and America for centuries —the oldest documented structure is fifteen hundred years old and still standing— until the 20th-century prohibition interrupted it: a regulatory decision, not a technical or economic one. The current framework enables it once again. **And the industry still has no owner.**',
    v_planta_label: 'The plant',
    v_planta:
      'Industrial hemp grows fast, in arid soil and with little water: it matures in a few months and thrives where other crops cannot. A single sowing delivers fiber, materials and energy — with almost zero waste.',
    v_products: [
      ['Hempcrete', 'The bio-based construction material: bricks and blocks for affordable, well-insulated, quick-to-build housing. Proven in more than 50 countries, with a unique differentiator: the carbon captured by the crop stays stored in the wall for the entire life of the building.'],
      ['Biochar', 'From the plant\'s residues, through pyrolysis, a stable charcoal that locks carbon for more than a thousand years and improves the soil. The second value line from the same hectare — the residue is an asset too.'],
    ] as readonly (readonly [string, string])[],
    v_cadena_label: 'From seed to key',
    v_cadena:
      'A single plant opens a complete industrial chain: cultivation, construction material and, from the residue, biochar. Every step happens in the same basin and is skilled employment — from the field to the home.',
    v_dif_label: 'The differentiator',
    v_dif:
      'Almost any crop captures carbon; what is exceptional is holding onto it. This project locks the captured carbon into matter that keeps it for decades and centuries —**in the wall, as brick; in the soil, as biochar**— and, because the chain is one, every credit is born with **a single chain of custody**, traceable from seed to wall. Physical backing and single custody give the credit a value the market pays for, and that very few can offer.',
    v_dif_statement: 'The carbon is captured in the field and stays stored in the wall: a credit that only whoever holds the entire chain can generate.',
    v_dif_by: 'Durable fixation + single custody',
    v_impacto_label: 'Three outcomes from the same chain',
    v_cards: [
      ['Housing', 'affordable, well-insulated and quick to build, with local raw materials and labor — where it is needed most.'],
      ['Employment', 'skilled and local at every link: farming, industry and construction. The source of work grows with every hectare and every build.'],
      ['Industry', 'value added at the source that multiplies regional companies — and revives the chains that branch off hemp: food, textiles, bioplastics, paper, cosmetics.'],
    ] as readonly (readonly [string, string])[],
    v_ciudades_label: 'Hemp cities',
    v_ciudades:
      'If a million people arrive in Neuquén, the question is not only where they sleep: it is what builds their economy. Hempcrete turns any arable hectare of Argentina into homes, neighborhoods and entire cities — and into an inexhaustible source of work, at every link of the chain, from the field to the key.',
    v_statement: 'Vaca Muerta gave Neuquén energy, work and scale. On that same land, hemp adds an industry that plants, builds and regenerates.',
    v_statement_by: 'Vaca Muerta → Vaca Verde',
    v_puente:
      'The vision is enormous. That is why the plan is exactly the opposite: **small, verifiable and staged**. No one puts up all the capital at once; each stage buys the certainty that enables the next one.',

    regla_k: 'The rule of the game',
    regla_t: 'Risk is not taken: it is eliminated stage by stage.',
    regla_d:
      'The plan advances under a Stage-Gate maturity model: six stages, evaluated in parallel across five dimensions — technical, regulatory, commercial, financial and institutional. Between stages there is a gate: an investment decision made only with the evidence from the previous stage.',
    regla_body:
      'The classic mistake of large projects is leaping to scale blindly. This plan makes that **impossible by design**: every stage has verifiable work fronts and deliverables, every gate has explicit criteria, and the capital of one stage never commits the capital of the next. What each stage buys is information — the kind that turns the next stage into a decision instead of a bet. **The budget of each stage is structured against its deliverables and presented in a meeting.**',
    regla_dims_label: 'The five dimensions of every gate',
    dims: ['Technical', 'Regulatory', 'Commercial', 'Financial', 'Institutional'],
    regla_statement: 'Capital enters in stages and only advances with evidence.',
    regla_statement_by: 'The rule of the plan',
    rail_label: 'The full path',

    stage_word: 'Stage',
    gate_label: 'The gate',
    fronts_label: 'The work fronts of the stage',
    nav_top: [['vision', 'The vision', 'V'], ['regla', 'The rule', 'R']] as readonly (readonly [string, string, string])[],
    nav_bottom: [['carriles', 'The lanes', 'L'], ['carbono', 'The carbon', 'CO₂'], ['quienes', 'Who', 'W'], ['invitacion', 'The invitation', 'I']] as readonly (readonly [string, string, string])[],

    stages: [
      {
        n: '0', name: 'Formulation',
        q: 'Is there a real project here?',
        intro: 'The founding stage: defining the project with field work, market research and legal groundwork — not with enthusiasm. The problem, the product, the framework and the team are laid on the table before a single peso goes into development.',
        fronts: [
          ['The problem, characterized and documented', 'A housing deficit close to 60% in the Vaca Muerta region, Añelo grew more than 140%, the most expensive rents in the country and construction contracted to companies from outside the province. The press tells it on its own:'],
          ['The market and its pioneer\'s gap', 'The material to beat identified (autoclaved aerated concrete), the segments defined —private construction, public housing and the industry that needs to house its people— and a unique position: no one has built with hemp in Argentina yet.'],
          ['The product, specified', 'Hempcrete: target density 250–350 kg/m³, conductivity 0.06–0.12 W/mK, non-combustible (Class A), service life over 500 years — European standard EN 16101, proven in more than 50 countries. Two lines: enclosure brick and structural block.'],
          ['The legal framework, mapped', 'Law 27,669 (industrial hemp, THC < 0.3%, ARICCAME as authority under the Ministry of Economy) and Decree 405/2023. Certification path for the construction system identified with INTI: technical aptitude, IRAM standards, CIRSOC regulations.'],
          ['The consortium and its governance', 'Flora integrates; Fundación GEN cultivates (holder of the agricultural license, with Neuquén\'s first industrial hemp precedent); EcoGaia certifies the carbon; INTI validates the material; Red Protierra transfers the building know-how. The operator is not the validator nor the certifier.'],
        ],
        gate: 'There is a sufficient technical, legal, commercial and institutional base to justify investing in feasibility.',
        showClippings: true,
      },
      {
        n: '1', name: 'Feasibility',
        q: 'Can it be done here, with what we have?',
        intro: 'The stage that takes the project from paper to territory: feasibility is not argued, it is produced. Test materials, licenses, land and a real operation that knows the climate, the soil and the regulation.',
        fronts: [
          ['Laboratory formulations', 'Hemp-hurd and binder mixes tested until a working formulation is selected (lime binder), developed with INTI.'],
          ['Prototypes and first materials', 'First test bricks and an industrial trial under real conditions — the material is made, not projected.'],
          ['The full chain, designed', 'From seed to key: eight links defined, from genetics to the built neighborhood, with the pilot\'s production process dimensioned.'],
          ['Licenses and permits', 'ARICCAME agricultural license operational within the consortium (Fundación GEN); industrial license in process; pilot permits identified.'],
          ['Demand and financing, validated', 'Real interest from builders and housing programs surveyed in the territory, and a pilot financing plan against verifiable milestones.'],
        ],
        gate: 'Producing the material is technically feasible, there is a regulatory path and there is real interest: the pilot is justified.',
      },
      {
        n: '2', name: 'Pilot',
        q: 'Can the material be produced in series, with reproducible, certifiable performance?',
        intro: 'The stage that turns the first bricks into a measured, tested, certification-ready product — and the genetics into data, not a promise. It is the smallest stage of the path and the one that buys the most certainty.',
        fronts: [
          ['Genetics benchmark in two ecoregions', 'A simultaneous scientific trial in Mendoza and Neuquén, with national and international genetics: the winning variety per territory, measured — the agricultural foundation of everything that follows.'],
          ['Pilot batch of bricks and blocks', 'Production under controlled conditions, with batch-to-batch variability documented: the proof that the material comes out the same twice.'],
          ['Standardized testing at INTI', 'Strength, thermal performance (IRAM 11605) and fire behavior, in an accredited laboratory: the file that opens the certification of the construction system.'],
          ['First carbon measurement', 'Preliminary life-cycle analysis and capture estimate per unit, under a certifiable methodology (EcoGaia): the environmental asset stops being a desk calculation.'],
          ['Pilot MRV', 'Digital traceability from crop to material: the chain of custody that will make every tonne auditable.'],
        ],
        gate: 'A reproducible batch, approved tests and measured capture: real construction stops being a risk and becomes the next decision.',
      },
      {
        n: '3', name: 'Demonstration',
        q: 'Does it work in a real building, and is it constructively repeatable?',
        intro: 'The stage where the material becomes a house: a complete demonstration build, measured in use, with the construction system documented and technical certification underway. The evidence leaves the laboratory and moves to the territory.',
        fronts: [
          ['The demonstration house', 'A real build executed end to end with the plan\'s own construction system, documented step by step — Argentina\'s first hemp house.'],
          ['Performance measured in use', 'Thermal behavior, humidity and comfort monitored through months of real habitation, with an energy-efficiency label as public reference.'],
          ['Technical aptitude certification', 'The CAT file underway: the key that enables public works and social housing — the material\'s largest market.'],
          ['Construction manual and applicators', 'The system documented in manuals with Red Protierra and the first cohorts of trained applicators: the know-how stops living in a single crew.'],
          ['Verifiable commercial traction', 'Formal expressions of interest and first agreements arising from the build: builders, housing programs and the carbon offtake advancing.'],
        ],
        gate: 'The build works, performance is measured and the market responded: industrial investment is justified.',
      },
      {
        n: '4', name: 'Scale-up',
        q: 'Can it be produced industrially, with constant, certifiable quality?',
        intro: 'The stage where the system becomes an industry: plant, quality control, complete certifications and the material competing head to head in the construction market.',
        fronts: [
          ['The industrial plant', 'Capacity defined by the demand validated in Demonstration, process engineering and a location near the basin — freight rules in construction materials.'],
          ['Industrial quality by batch', 'Statistical process control, batch sampling and standardized procedures: quality stops depending on hands.'],
          ['Complete certifications', 'CAT in force for both product lines, IRAM standards met and the plant\'s industrial permit — the material legally marketable at scale.'],
          ['Channels and commercialization', 'Distributors, builders, developers and public programs: the network that sustains production, with the unit economics —cost, price, margin— validated with the plan\'s own data.'],
          ['Carbon, at scale', 'With industrial volume, the environmental asset is certified and marketed in earnest: every tonne serialized, a single holder, revenue that complements the material.'],
        ],
        gate: 'Production is industrial, quality is constant and demand absorbs it: the business is repeatable.',
      },
      {
        n: '5', name: 'Territorial platform',
        q: 'Can it be replicated in new territories and sustain itself without depending on a single actor?',
        intro: 'The final stage is not a ceiling: it is a model. Everything validated —technology, alliances, training, financing— is packaged to be replicated in any province with land, water and sun. The territorial development platform.',
        fronts: [
          ['The transferable technology package', 'Know-how, manuals and specifications packaged for replication and licensing: plants are replicated, heavy product is not shipped a thousand kilometers.'],
          ['The replicable institutional model', 'The consortium as a mold —integrator + cultivation + certifier + technical validation— transferable to new territories with local actors.'],
          ['Training at scale', 'Employment academy, skills certification and job placement: every new plant and every new build trains its own people.'],
          ['The diversified portfolio', 'Blocks, bricks, panels, mortars and biochar — and the mother chain igniting the industries that branch off hemp: food, textiles, bioplastics, paper.'],
          ['Financial self-sustainability', 'Diversified revenue —material, construction, licenses, training, carbon— and the capacity to finance new replications without depending on a single financier or a single client.'],
        ],
        gate: 'The model lives on its own: the industry Belgrano proposed, working from one end of the country to the other.',
      },
    ] as readonly Stage[],

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
    carbono_moat_label: 'The opportunity for whoever enters first',
    carbono_moat1:
      'Every company with an environmental target faces the same dilemma: buying credits from third parties —at market price, on someone else\'s integrity— or **generating its own**. This plan offers the latter: the capacity to produce durable-removal credits, verified and traceable, in the very territory where the company operates. An asset no one else can claim, at producer cost — **an advantage that cannot be bought ready-made**.',
    carbono_moat_statement: 'Generating carbon credits today is like mining bitcoin in 2010: whoever enters early locks in their cost forever, and the pioneer\'s position is taken only once.',
    carbono_moat_by: 'The differentiator for the founding partner',
    carbono_moat2:
      'The first-mover window already passed with railroads, oil and shale. It is now open for verifiable biological removal — and in Argentina that asset still has no owner. The company that helps start and validate the model remains, forever, the one that made it possible: **a founder of the chain, first in line for everything it produces**.',
    carbono_body2:
      'Its economic dimension is quantified when the plan validates it — the first real measurement is a Pilot deliverable, and commercial scale arrives with Scale-up. **Like everything in this document, the asset is not promised: it is demonstrated.**',

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
    inv_t: 'Three seats at the founding table',
    inv_d:
      'A partner does not buy the whole vision: they enter through the gate in front of them, with bounded commitments against verifiable deliverables — no subsidies and no new agencies.',
    inv_items: [
      ['01', 'Industry', 'Finances bounded stages and becomes a founder of the chain: **the capacity to generate its own carbon credits** —instead of buying them from third parties— and preference over housing for its own operations, with the option —never the obligation— to accompany each following stage. And one simple truth: **when the anchor company grows, the whole chain grows** — the field that supplies it, the works that build it and the town that inhabits it.'],
      ['02', 'The State', 'Clear rules and coordination. The plan advances under the current framework with private capital; from the State it needs what it does best: unblock, simplify and support without adding hurdles.'],
      ['03', 'Science', 'Testing, standards and certification at every stage of the path: INTI, universities and accredited laboratories. Every claim in the plan is signed by a third party.'],
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

    clippings: [
      { medium: 'Río Negro', quote: 'In 30 years, Neuquén will have one and a half million people.', who: 'F. Sturzenegger · Minister of Deregulation', alarm: false },
      { medium: 'Infobae', quote: 'Don\'t come with your family.', who: 'F. Banderet · Mayor of Añelo', alarm: true },
      { medium: 'LM Neuquén', quote: 'They hire outside companies for work that local firms could do.', who: 'UOCRA Neuquén · 100+ out of work', alarm: true },
    ],
    cadena: ['Seed', 'Cultivation', 'Harvest', 'Decortication', 'Mixing', 'Hempcrete', 'Construction', 'Housing'],
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
    <section id={id} style={{ background: bg, padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)', scrollMarginTop: '3.4rem' }}>
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

/* ---------- navegación por etapas: scrollspy + sidebar/barra ---------- */

const NAV_IDS = ['vision', 'regla', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'carriles', 'carbono', 'quienes', 'invitacion'] as const

function useScrollSpy(): string {
  const [active, setActive] = useState<string>('vision')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px' },
    )
    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

function StageNav({ t }: { t: T }) {
  const active = useScrollSpy()

  /* el sidebar flota solo mientras alguna sección del documento está en viewport
     (no sobre el hero de arriba ni sobre el cierre cinematográfico) */
  const [inDoc, setInDoc] = useState(false)
  useEffect(() => {
    const seen = new Set<string>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) seen.add(e.target.id)
        else seen.delete(e.target.id)
      })
      setInDoc(seen.size > 0)
    })
    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  /* menú completo, en el orden del documento: V · R · 0-5 · C · CO₂ · Q · I */
  const items: { id: string; label: string; glyph: string }[] = [
    ...t.nav_top.map(([id, label, glyph]) => ({ id, label, glyph })),
    ...t.stages.map((s) => ({ id: `e${s.n}`, label: `${s.name}`, glyph: s.n })),
    ...t.nav_bottom.map(([id, label, glyph]) => ({ id, label, glyph })),
  ]

  return (
    <>
      {/* sidebar (desktop) */}
      <nav className="mp-sidenav" aria-label="Secciones" style={{ position: 'fixed', left: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 60, flexDirection: 'column', gap: '0.45rem', alignItems: 'flex-start', opacity: inDoc ? 1 : 0, pointerEvents: inDoc ? 'auto' : 'none', transition: 'opacity 0.35s' }}>
        {items.map(({ id, label, glyph }) => {
          const on = active === id
          const multi = glyph.length > 1
          return (
            <a key={id} href={`#${id}`} aria-label={label} style={{ position: 'relative', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <span style={{
                width: '29px', height: '29px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${on ? GOLD : LINE}`, background: on ? 'rgba(242,181,68,0.14)' : '#fff',
                ...serif, fontStyle: 'italic', fontSize: multi ? '0.56rem' : '0.95rem', color: on ? '#8a6510' : 'rgba(7,26,56,0.55)',
                transition: 'all 0.25s',
              }}>{glyph}</span>
              {on && <NavLabel>{label}</NavLabel>}
            </a>
          )
        })}
      </nav>

      {/* barra sticky de chips (mobile) */}
      <nav className="mp-stagebar" aria-label="Secciones" style={{
        position: 'sticky', top: 0, zIndex: 55,
        background: 'rgba(250,248,241,0.93)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${LINE}`,
        overflowX: 'auto', gap: '0.4rem', alignItems: 'center',
        padding: '0.55rem 4.6rem 0.55rem 1rem',
        scrollbarWidth: 'none',
      }}>
        {items.map(({ id, label, glyph }) => {
          const on = active === id
          const multi = glyph.length > 1
          return (
            <a key={id} href={`#${id}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0,
              border: `1px solid ${on ? GOLD : LINE}`, background: on ? 'rgba(242,181,68,0.14)' : '#fff',
              padding: '0.32rem 0.7rem', borderRadius: '999px', textDecoration: 'none',
              transition: 'all 0.25s',
            }}>
              <span style={{ ...serif, fontStyle: 'italic', fontSize: multi ? '0.6rem' : '0.88rem', color: on ? '#8a6510' : GOLD, lineHeight: 1 }}>{glyph}</span>
              <span style={{ ...sans, fontSize: '0.64rem', fontWeight: 600, color: on ? INK : MUTED, whiteSpace: 'nowrap' }}>{label}</span>
            </a>
          )
        })}
      </nav>
    </>
  )
}

function NavLabel({ children }: { children: ReactNode }) {
  return (
    <span style={{
      position: 'absolute', left: 'calc(100% + 9px)', top: '50%', transform: 'translateY(-50%)',
      background: PAPER, border: `1px solid ${LINE}`, borderRadius: '3px',
      padding: '0.22rem 0.6rem', whiteSpace: 'nowrap',
      ...sans, fontSize: '0.62rem', fontWeight: 600, color: INK, letterSpacing: '0.04em',
      boxShadow: '0 1px 6px rgba(7,26,56,0.08)',
    }}>{children}</span>
  )
}

/* ---------- el rail de etapas (neutro, sin estados) ---------- */

function StageRail({ t }: { t: T }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem 0', alignItems: 'stretch', margin: '0.5rem 0 0.5rem' }}>
      {t.stages.map((s, i) => (
        <div key={s.n} style={{ display: 'flex', alignItems: 'center' }}>
          <a href={`#e${s.n}`} style={{
            display: 'flex', alignItems: 'center', gap: '0.55rem',
            border: `1px solid ${LINE}`, background: '#fff',
            padding: '0.5rem 0.85rem', borderRadius: '3px', textDecoration: 'none',
          }}>
            <span style={{ ...serif, fontStyle: 'italic', fontSize: '1.15rem', lineHeight: 1, color: GOLD, minWidth: '0.8rem', textAlign: 'center' }}>{s.n}</span>
            <span style={{ ...sans, fontSize: '0.68rem', fontWeight: 600, color: INK, whiteSpace: 'nowrap' }}>{s.name}</span>
          </a>
          {i < t.stages.length - 1 && (
            <span aria-hidden style={{ width: 'clamp(0.5rem, 1.4vw, 1.1rem)', height: '1px', background: 'rgba(7,26,56,0.25)', display: 'inline-block' }} />
          )}
        </div>
      ))}
    </div>
  )
}

/* ---------- capítulo de etapa (template idéntico para las 6) ---------- */

function GateBlock({ t, verdict }: { t: T; verdict: string }) {
  return (
    <Reveal>
      <div style={{
        marginTop: '2.5rem',
        border: '1px solid rgba(242,181,68,0.55)',
        borderLeft: `4px solid ${GOLD}`,
        background: 'rgba(242,181,68,0.08)',
        padding: 'clamp(1.25rem, 2.5vw, 1.8rem)',
        display: 'flex', gap: '1.25rem', alignItems: 'flex-start', flexWrap: 'wrap',
      }}>
        <span style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: '#8a6510', whiteSpace: 'nowrap', paddingTop: '0.2rem' }}>
          {t.gate_label}
        </span>
        <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)', lineHeight: 1.4, color: INK, margin: 0, flex: '1 1 320px' }}>
          {verdict}
        </p>
      </div>
    </Reveal>
  )
}

const CADENA_IMG = ['01-semilla', '02-cultivo', '03-cosecha', '04-decorticacion', '05-mezclado', '06-material', '07-construccion', '08-vivienda'] as const

function StageChapter({ t, idx, bg }: { t: T; idx: number; bg: string }) {
  const s = t.stages[idx]
  return (
    <Doc bg={bg} id={`e${s.n}`}>
      <Reveal>
        <header style={{ marginBottom: '2.5rem', scrollMarginTop: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(1rem, 2.5vw, 1.75rem)', flexWrap: 'wrap' }}>
            <span style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(3.4rem, 8vw, 6rem)', color: GOLD, lineHeight: 0.8, flexShrink: 0 }}>{s.n}</span>
            <div style={{ flex: '1 1 300px' }}>
              <Eyebrow>{t.stage_word} {s.n} · {s.name}</Eyebrow>
              <h2 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 3.6vw, 2.9rem)', lineHeight: 1.12, color: INK, margin: 0, maxWidth: '26ch' }}>
                {s.q}
              </h2>
            </div>
          </div>
          <div style={{ height: '1px', background: LINE, marginTop: '1.9rem' }} />
        </header>
      </Reveal>

      <Reveal><P max="74ch">{s.intro}</P></Reveal>

      <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, margin: '2.25rem 0 1.1rem' }}>{t.fronts_label}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
        {s.fronts.map(([title, d], i) => (
          <Reveal key={title} delay={0.04 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderLeft: `3px solid ${GOLD}`, padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              <h3 style={{ ...sans, fontSize: '0.98rem', fontWeight: 600, color: INK, margin: '0 0 0.4rem' }}>{title}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.65, color: MUTED, margin: 0, maxWidth: '76ch' }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* material de apoyo específico de algunas etapas */}
      {s.showClippings && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(232px, 1fr))', gap: '0.7rem', marginTop: '0.7rem' }}>
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
      )}

      {s.showCadena && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(105px, 1fr))', gap: '0.5rem', marginTop: '1.5rem' }}>
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
      )}

      <GateBlock t={t} verdict={s.gate} />
    </Doc>
  )
}

/* ============================================================
   SECCIONES
   ============================================================ */

function VisionLabel({ children }: { children: ReactNode }) {
  return (
    <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: CELESTE, fontWeight: 600, margin: '3.25rem 0 1.1rem' }}>
      {children}
    </p>
  )
}

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

      {/* Belgrano 1796 — la industria interrumpida */}
      <VisionLabel>{t.v_belgrano_label}</VisionLabel>
      <Reveal>
        <P max="74ch" style={{ marginBottom: 0 }}>{rich(t.v_belgrano, INK)}</P>
      </Reveal>

      {/* la planta y sus dos materiales */}
      <VisionLabel>{t.v_planta_label}</VisionLabel>
      <Reveal>
        <P max="74ch">{t.v_planta}</P>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(1rem, 2.5vw, 1.75rem)' }}>
        {t.v_products.map(([pt, pd], i) => (
          <Reveal key={pt} delay={0.08 * i}>
            <div style={{ background: '#fff', border: `1px solid ${LINE}`, borderTop: `2px solid ${GREEN}`, padding: 'clamp(1.6rem, 3vw, 2.2rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', color: INK, margin: '0 0 0.85rem' }}>{pt}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.86rem', lineHeight: 1.7, color: MUTED, margin: 0 }}>{pd}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* la cadena: de la semilla a la llave */}
      <VisionLabel>{t.v_cadena_label}</VisionLabel>
      <Reveal>
        <P max="74ch">{t.v_cadena}</P>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(105px, 1fr))', gap: '0.5rem' }}>
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

      {/* el diferencial: fijación durable + custodia única */}
      <VisionLabel>{t.v_dif_label}</VisionLabel>
      <Reveal>
        <P max="74ch">{rich(t.v_dif, INK)}</P>
      </Reveal>
      <Statement by={t.v_dif_by}>{t.v_dif_statement}</Statement>

      {/* triple impacto */}
      <VisionLabel>{t.v_impacto_label}</VisionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: LINE, border: `1px solid ${LINE}` }}>
        {t.v_cards.map(([title, d], i) => (
          <Reveal key={title} delay={0.06 * i}>
            <div style={{ background: CREAM, padding: 'clamp(1.5rem, 2.5vw, 2rem)', height: '100%' }}>
              <h3 style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', color: GREEN_DK, margin: '0 0 0.6rem' }}>{title}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.6, color: MUTED, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ciudades de cáñamo */}
      <VisionLabel>{t.v_ciudades_label}</VisionLabel>
      <Reveal>
        <P max="74ch">{t.v_ciudades}</P>
      </Reveal>
      <Statement by={t.v_statement_by}>{t.v_statement}</Statement>

      {/* puente al método */}
      <Reveal>
        <P max="74ch" style={{ fontSize: 'clamp(1rem, 1.35vw, 1.16rem)', marginBottom: 0 }}>
          {rich(t.v_puente, INK)}
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

      {/* el moat: generar en lugar de comprar */}
      <p style={{ ...sans, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: GOLD, fontWeight: 600, margin: '2.75rem 0 1.1rem' }}>{t.carbono_moat_label}</p>
      <Reveal>
        <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.98rem, 1.3vw, 1.1rem)', lineHeight: 1.8, color: CREAM_MUTED, maxWidth: '72ch', margin: '0 0 1.75rem' }}>
          {rich(t.carbono_moat1, CREAM)}
        </p>
      </Reveal>
      <Reveal>
        <div style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: 'clamp(1.25rem, 2.5vw, 2rem)', margin: '0.5rem 0 1.9rem', maxWidth: '44rem' }}>
          <p style={{ ...serif, fontStyle: 'italic', fontSize: 'clamp(1.35rem, 2.5vw, 2.1rem)', lineHeight: 1.3, color: CREAM, margin: 0 }}>{t.carbono_moat_statement}</p>
          <p style={{ ...sans, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(243,241,231,0.5)', margin: '1rem 0 0' }}>{t.carbono_moat_by}</p>
        </div>
      </Reveal>
      <Reveal>
        <p style={{ ...sans, fontWeight: 300, fontSize: 'clamp(0.98rem, 1.3vw, 1.1rem)', lineHeight: 1.8, color: CREAM_MUTED, maxWidth: '72ch', margin: '0 0 1.75rem' }}>
          {rich(t.carbono_moat2, CREAM)}
        </p>
      </Reveal>

      <Reveal delay={0.06}>
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
            <div style={{ background: DUSK, padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              <h3 style={{ ...sans, fontSize: 'clamp(1rem, 1.4vw, 1.18rem)', fontWeight: 600, color: CREAM, margin: '0 0 0.6rem' }}>{name}</h3>
              <p style={{ ...sans, fontWeight: 300, fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(243,241,231,0.62)', margin: 0, maxWidth: '70ch' }}>{rich(d, CREAM)}</p>
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
      <StageNav t={t} />
      <Tesis t={t} />
      <Regla t={t} />
      {t.stages.map((s, i) => (
        <StageChapter key={s.n} t={t} idx={i} bg={i % 2 === 0 ? CREAM : PAPER} />
      ))}
      <Carriles t={t} />
      <Carbono t={t} />
      <Quienes t={t} />
      <Invitacion t={t} />
      <Cierre t={t} />
    </main>
  )
}
