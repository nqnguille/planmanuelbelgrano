/* ============================================================
   PLAN MANUEL BELGRANO — BANCO DE OBJECIONES (deck privado)
   Fuente: "Posibles objeciones - Flora cáñamo" (Carmen, jun 2026).
   Cada objeción trae nuestra respuesta preparada, la evidencia que
   la respalda y un tag para filtrar. Las marcadas `abogados:true`
   son las que necesitamos cerrar en la reunión legal/técnica.
   ============================================================ */

export type Tag = 'Legal' | 'Técnica' | 'Comercial' | 'Reputacional' | 'Estratégica' | 'Financiera'
export type Audiencia = 'YPF' | 'Inversores' | 'Partners' | 'Equipo'

export interface Objecion {
  n: number
  audiencia: Audiencia
  pregunta: string          // la objeción tal como la formularían
  quien: string             // quién la hace / por qué
  respuesta: string         // nuestra respuesta preparada
  evidencia: string         // qué / quién la respalda
  tag: Tag
  abogados?: boolean        // requiere definición legal en la reunión
}

export const objeciones: Objecion[] = [
  /* ---------- YPF (pensar como Marín) ---------- */
  {
    n: 1, audiencia: 'YPF', tag: 'Estratégica',
    pregunta: '¿Por qué debería hacerlo yo? ¿Qué relación estratégica existe entre YPF y Flora?',
    quien: 'Marín / directorio — la primera objeción no es técnica: "¿por qué esto es un problema de YPF?".',
    respuesta: 'No te pedimos que produzcas impacto: te ofrecemos un activo que YPF ya va a necesitar. El GNL que exportás a Europa va a exigir huella de carbono certificada (CBAM). Flora produce remoción biológica de carbono, verificable, en el mismo territorio donde operás y a un costo por tonelada menor que cualquier alternativa tecnológica. Es la pata que hoy le falta al MACC de YPF: la única de remoción, no de reducción.',
    evidencia: 'MACC YPF en construcción · CBAM UE 2026 · precio sombra interno USD 55/tCO₂e.',
  },
  {
    n: 2, audiencia: 'YPF', tag: 'Comercial',
    pregunta: '¿Esto es filantropía disfrazada? ¿Me proponen un negocio o una donación?',
    quien: 'YPF recibe propuestas de ONGs, fundaciones y proyectos sociales todo el tiempo.',
    respuesta: 'Es un contrato de proveedor, no una donación. YPF paga por dos activos entregables y medibles: créditos de carbono certificados y materiales de construcción. Si no entregamos, no cobramos. La estructura es la misma que usás con cualquier proveedor estratégico.',
    evidencia: '3 contratos: desarrollo de proveedor estratégico · offtake de créditos · exclusividad territorial.',
  },
  {
    n: 3, audiencia: 'YPF', tag: 'Financiera',
    pregunta: '¿Cuál es el retorno para YPF?',
    quien: 'No necesariamente financiero, pero sí tangible y medible.',
    respuesta: 'Retorno en cuatro ejes medibles: (1) toneladas de CO₂ removidas y certificadas para tu inventario/MACC; (2) indicadores ESG verificables para el reporte de sustentabilidad; (3) licencia social y empleo en Neuquén; (4) opción de exclusividad sobre todo el carbono de la provincia. Escala: 4.000 ha → 40.000 tCO₂/año × USD 55 = USD 2,2M/año. Payback ~6 semanas de operación a escala.',
    evidencia: 'Modelo financiero del deal · potencial Neuquén 50.000 ha = USD 27,5M/año.',
  },
  {
    n: 4, audiencia: 'YPF', tag: 'Técnica',
    pregunta: '¿El impacto es realmente atribuible? ¿Cómo sabemos que ocurrió gracias al proyecto?',
    quien: 'Abogados y auditores — exigen adicionalidad.',
    respuesta: 'Se demuestra con metodología, no con relato. El carbono se certifica bajo Verra VCS o Gold Standard, que exigen prueba de adicionalidad (que no habría ocurrido sin el proyecto). El empleo y las viviendas se miden contra una línea de base territorial. EcoGaia gestiona el ciclo completo originación → verificación → venta del crédito.',
    evidencia: 'EcoGaia (certificadora argentina, Verra/Gold Standard) · registro Puro.',
  },
  {
    n: 5, audiencia: 'YPF', tag: 'Técnica',
    pregunta: '¿Quién certifica todo esto? ¿Ese organismo es reconocido?',
    quien: 'No alcanza con decir "capturamos carbono".',
    respuesta: 'Tres capas independientes y reconocidas. Carbono: EcoGaia bajo Verra/Gold Standard. Material y sistema constructivo: INTI. Cultivo y trazabilidad: ARICCAME. Ninguna afirmación queda sin un tercero acreditado que la respalde.',
    evidencia: 'EcoGaia · INTI · ARICCAME (Ley 27.669).',
  },
  {
    n: 6, audiencia: 'YPF', tag: 'Legal', abogados: true,
    pregunta: '¿Existe doble contabilidad del impacto? ¿Lo reporta Flora, YPF, la constructora o el dueño de la vivienda?',
    quien: 'Los abogados ESG son extremadamente sensibles a esto.',
    respuesta: 'No. Cada tonelada se registra una sola vez en un registro público (Verra/Gold Standard) con número de serie único y se retira a nombre de un único titular. El contrato de offtake define explícitamente que el crédito lo reporta YPF y prohíbe que Flora, la constructora o el propietario lo reclamen. Es el punto exacto que queremos cerrar con ustedes.',
    evidencia: 'Registro serializado Verra · cláusula de titularidad exclusiva en el contrato de offtake.',
  },
  {
    n: 7, audiencia: 'YPF', tag: 'Reputacional', abogados: true,
    pregunta: '¿Esto puede ser considerado greenwashing? "YPF financia cáñamo mientras expande Vaca Muerta."',
    quien: 'Riesgo reputacional — probablemente la objeción más sensible.',
    respuesta: 'Lo damos vuelta: es remoción real y permanente, no compensación dudosa. El carbono queda fijado físicamente en infraestructura (paredes), auditable. Comunicamos solo claims certificados por terceros. El relato no es "YPF se vuelve verde" sino "YPF convierte parte de la riqueza de Vaca Muerta en desarrollo regenerativo en su propio territorio": suma, no lavado.',
    evidencia: 'Permanencia física en el material · política de claims solo certificados.',
  },
  {
    n: 8, audiencia: 'YPF', tag: 'Estratégica',
    pregunta: '¿La escala es relevante? Flora captura 500 t; nosotros emitimos millones.',
    quien: 'YPF — ¿esto es escalable o simbólico?',
    respuesta: 'El piloto no busca demostrar volumen sino el mecanismo. La escala está dimensionada: Neuquén tiene 50.000 ha irrigables → potencial USD 27,5M/año. No competimos con tus millones de toneladas; te damos la única vía de remoción del MACC mientras reducís por las otras.',
    evidencia: '50.000 ha potencial provincial · rol de remoción en el MACC.',
  },
  {
    n: 9, audiencia: 'YPF', tag: 'Estratégica',
    pregunta: '¿Cuál es el plan para escalar? ¿Cómo pasa de piloto a programa regional?',
    quien: 'YPF — no les interesa una hectárea ni diez viviendas.',
    respuesta: 'Secuencia explícita con hitos: Piloto (2 benchmarks Neuquén + Mendoza, 18 meses) → Validación (variedad campeona por ecorregión, datos MRV) → Modelo (sociedades agrícolas colaborativas + fábrica regional) → Escala provincial. Cada etapa desbloquea la siguiente.',
    evidencia: 'Roadmap · sociedades agrícolas Q2 2026 · primera vivienda Q3 2026.',
  },
  {
    n: 10, audiencia: 'YPF', tag: 'Técnica',
    pregunta: '¿Qué pasa si el cáñamo falla? Sequía, plagas, cambios regulatorios, cosecha.',
    quien: 'Riesgo operativo.',
    respuesta: 'Diversificamos el riesgo por diseño. Dos ecorregiones en paralelo (Neuquén + Mendoza) cubren riesgo climático. El benchmark AI-First (sensores IoT, drones multiespectrales, gemelo digital) detecta problemas temprano. Y el modelo no cuelga de una sola cosecha: el carbono de suelo y el biochar generan crédito aun con rindes variables.',
    evidencia: 'Dos benchmarks simultáneos · benchmark AI-First · línea de biochar.',
  },
  {
    n: 11, audiencia: 'YPF', tag: 'Legal',
    pregunta: '¿La regulación del cáñamo es suficientemente estable para construir una estrategia corporativa?',
    quien: 'Los abogados — el cáñamo es un sector joven en Argentina.',
    respuesta: 'El marco existe y es nacional. La Ley 27.669 (2022) creó ARICCAME; el cáñamo industrial (THC < 1%) está habilitado para cultivo, procesamiento y comercialización. Flora ya tiene licencia ARICCAME desde enero 2024. No construimos sobre un vacío: operamos dentro de un régimen vigente con autoridad de aplicación.',
    evidencia: 'Ley 27.669 · ARICCAME · licencia Flora (ene 2024).',
  },
  {
    n: 12, audiencia: 'YPF', tag: 'Legal', abogados: true,
    pregunta: '¿Quién asume responsabilidades si el proyecto fracasa o aparecen conflictos comunitarios?',
    quien: 'YPF financia — ¿quién responde?',
    respuesta: 'Se asigna por contrato. Flora asume el riesgo de ejecución del cultivo y la entrega del crédito (si no se certifica, no se cobra). YPF asume solo el financiamiento por etapas contra hitos. La responsabilidad de la certificación recae en el verificador acreditado. Es una de las cláusulas a estructurar finamente con ustedes.',
    evidencia: 'Desembolsos contra hitos · asignación de riesgo por contrato.',
  },
  {
    n: 13, audiencia: 'YPF', tag: 'Técnica',
    pregunta: '"Muy interesante. Muéstrenme datos." No visión, no narrativa: datos.',
    quien: 'Marín — posiblemente la objeción más fuerte hoy.',
    respuesta: 'El piloto está diseñado precisamente para producir esos datos: toneladas de biomasa, tCO₂, costo por tonelada, empleos generados, costo por empleo, costo por vivienda. Hoy ya mostramos hitos ejecutados; lo que falta es exactamente lo que el benchmark va a medir. Por eso el piloto es la respuesta, no una promesa.',
    evidencia: 'Roadmap ejecutado: licencia · cosechas · aceites certificados · ensayo Añelo (Q3 2025) · ladrillos (Q4 2025).',
  },
  {
    n: 14, audiencia: 'YPF', tag: 'Técnica',
    pregunta: '¿Por qué cáñamo y no forestación, que ya conocemos?',
    quien: 'YPF ya conoce forestación, restauración y conservación.',
    respuesta: 'Velocidad y permanencia. El cáñamo captura 8-15 tCO₂/ha/año (más que cualquier cultivo) en un ciclo de ~4 meses, no 20 años. Y el carbono no queda en un árbol que puede arder o talarse: queda fijado en una pared con vida útil > 500 años. Además genera un producto vendible, no solo un sumidero.',
    evidencia: '8-15 tCO₂/ha/año · permanencia en hempcrete · norma EN 16101.',
  },
  {
    n: 15, audiencia: 'YPF', tag: 'Técnica',
    pregunta: 'Si el objetivo es capturar carbono, ¿por qué terminar fabricando ladrillos?',
    quien: 'YPF — necesitan entender el concepto de permanencia.',
    respuesta: 'Por permanencia y por negocio. El carbono en biomasa se libera si se quema o se pudre; fijado en hempcrete queda almacenado de forma permanente y auditable. Y el ladrillo es el primer negocio que hace viable todo lo demás: se vende a un mercado que ya existe.',
    evidencia: 'Permanencia en infraestructura · mercado de reemplazo del hormigón celular premium.',
  },
  {
    n: 16, audiencia: 'YPF', tag: 'Comercial',
    pregunta: '¿Existe demanda real para esos materiales? ¿Hay constructoras que los comprarían?',
    quien: 'YPF no querrá sostener artificialmente un mercado.',
    respuesta: 'Sí, y no la sostenemos artificialmente. Flora Bricks es un reemplazo drop-in del hormigón celular premium (formato 50×25, mismos espesores) → switching cost cero para constructoras que ya usan ese material. El sello eficiente hace que la propiedad se venda más rápido y a mejor precio.',
    evidencia: 'Compatibilidad de formato · targets LOI: ASPA Desarrollos, Idero (Añelo) · CAMARCO Neuquén.',
  },
  {
    n: 17, audiencia: 'YPF', tag: 'Estratégica',
    pregunta: 'Si nos retiramos en cinco años, ¿el sistema sigue funcionando?',
    quien: 'Las grandes empresas desconfían de proyectos que dependen exclusivamente de ellas.',
    respuesta: 'Sí. El negocio de materiales se sostiene con el mercado de la construcción, independientemente del carbono. YPF es el cliente ancla que acelera, no el respirador. Si YPF se retira, el sistema (productores, fábrica, constructoras, certificadora) sigue operando. Esa independencia es parte del diseño.',
    evidencia: 'Doble vía: material (mercado) + carbono (upside).',
  },
  {
    n: 18, audiencia: 'YPF', tag: 'Legal', abogados: true,
    pregunta: '¿Quién gobierna el sistema? ¿Quién controla los datos y los certificados?',
    quien: 'Objeción que aparece tarde pero es crítica si Flora crece.',
    respuesta: 'Estructura societaria clara: Flora Cáñamo Neuquino SRL es el vehículo operador y titular de la metodología de medición y de la relación con la certificadora. Los datos y certificados se gobiernan bajo contrato, con trazabilidad en registro público. Las decisiones de escala se acuerdan con YPF vía el contrato de exclusividad. Tema a precisar con ustedes.',
    evidencia: 'Flora Cáñamo Neuquino SRL · registro público de créditos · contrato de exclusividad.',
  },

  /* ---------- Inversores / financiadores / evaluadores ---------- */
  {
    n: 19, audiencia: 'Inversores', tag: 'Estratégica',
    pregunta: 'Hay demasiadas cosas juntas: cultivo, materiales, carbono, empleo, vivienda, ESG…',
    quien: 'Inversor — "no entiendo cuál es el negocio principal". Riesgo percibido: falta de foco.',
    respuesta: 'El foco es uno solo: la cadena cáñamo → material → impacto verificable. Todo lo demás (empleo, vivienda, ESG) son consecuencias de esa cadena, no líneas de negocio separadas. El piloto aísla deliberadamente esa cadena específica, que después habilita el resto.',
    evidencia: 'Piloto enfocado en una sola cadena de valor.',
  },
  {
    n: 20, audiencia: 'Inversores', tag: 'Comercial',
    pregunta: '¿Cuál es el producto realmente? ¿Venden ladrillos, cañamiza, carbono, impacto, consultoría?',
    quien: 'Inversor — "no sé qué me están vendiendo". Riesgo percibido: modelo poco claro.',
    respuesta: 'En una frase: generamos materiales de construcción sostenibles que producen impactos ambientales y sociales verificables. Vendemos dos activos concretos: el material y el crédito de carbono. El resto es consecuencia.',
    evidencia: 'Dos activos vendibles: material + crédito de carbono.',
  },
  {
    n: 21, audiencia: 'Inversores', tag: 'Comercial',
    pregunta: '¿Existe demanda real? ¿Quién va a comprar? ¿Cuánto está dispuesto a pagar?',
    quien: 'Pregunta clásica — una cosa es inspirar, otra es que exista mercado.',
    respuesta: 'El mercado premium ya existe y está educado: el hormigón celular autoclave (Retak) ya validó que se paga un sobreprecio por mejor material. Entramos como reemplazo de formato compatible, con LOIs en curso con constructoras y desarrolladores.',
    evidencia: 'Categoría premium ya educada · LOIs: ASPA, Idero · vía CAMARCO Neuquén.',
  },
  {
    n: 22, audiencia: 'Inversores', tag: 'Comercial',
    pregunta: '¿El mercado argentino está preparado? "Esto funciona en Europa, no en Argentina."',
    quien: 'Objeciones: normativa, adopción, precio, desconocimiento técnico.',
    respuesta: 'No pedimos que el mercado cambie de hábito: reemplazamos un material premium que ya se usa. El driver es local y económico: Neuquén es Zona Fría de gas y el sello de eficiencia energética acelera la venta del inmueble. El hempcrete tiene norma europea (EN 16101) y se usa en más de 50 países; la certificación INTI cierra la pata local.',
    evidencia: 'Zona Fría de gas · sello eficiencia · EN 16101 · INTI.',
  },
  {
    n: 23, audiencia: 'Inversores', tag: 'Financiera',
    pregunta: '¿Qué pasa si el mercado de carbono cambia o las empresas dejan de comprar?',
    quien: 'Si parte del valor depende de impactos verificables, ¿qué pasa si cambian las reglas?',
    respuesta: 'El negocio se sostiene incluso sin mercados de carbono: la base es el material, que se vende al mercado de la construcción. El carbono es upside, no fundamento. Lo modelamos con sensibilidad a USD 15 / 35 / 55 por tonelada, y el caso cierra en el escenario bajo.',
    evidencia: 'Sensibilidad USD 15/35/55 · base = ingresos por material.',
  },
  {
    n: 24, audiencia: 'Inversores', tag: 'Técnica',
    pregunta: '¿Por qué no forestación, madera, adobe o construcción tradicional?',
    quien: 'Pregunta inevitable.',
    respuesta: 'Por captura más rápida, crecimiento en meses (no décadas), múltiples usos del cultivo y beneficios adicionales (suelo, empleo, biochar). Frente al adobe y lo tradicional, el hempcrete suma aislación térmica, resistencia al fuego Clase A y carbono almacenado de forma permanente.',
    evidencia: 'Captura 8-15 t/ha/año · ciclo ~4 meses · usos múltiples · biochar.',
  },
  {
    n: 25, audiencia: 'Inversores', tag: 'Estratégica',
    pregunta: 'No tienen activos: planta, maquinaria, producción. "Lo único que existe es una presentación."',
    quien: 'Inversor — objeción no injusta; se reduce con pilotos.',
    respuesta: 'Es cierto que estamos en etapa temprana, y por eso el piloto existe: convierte presentación en activos. Pero hoy ya hay tracción real: licencia ARICCAME, salas de cultivo, cosechas, aceites certificados, ensayo en cantera de Añelo y primeros ladrillos producidos.',
    evidencia: 'Licencia · 3 salas · cosechas · aceites certificados · ensayo Añelo · ladrillos Q4 2025.',
  },
  {
    n: 26, audiencia: 'Inversores', tag: 'Estratégica',
    pregunta: '¿Qué barrera de entrada existe? Si funciona, ¿qué impide que una petrolera o constructora lo haga sola?',
    quien: 'Inversor — defensibilidad del negocio.',
    respuesta: 'La barrera es el ecosistema, no una sola pieza: know-how de cultivo y material, alianzas (EcoGaia, INTI, Fundación Gen), metodología propia de medición/MRV, red territorial con productores y la posición de primer entrante con licencia y relación regulatoria. Eso no se compra en el mercado.',
    evidencia: 'Know-how + alianzas + metodología MRV + red territorial + primer entrante.',
  },

  /* ---------- Partners potenciales ---------- */
  {
    n: 27, audiencia: 'Partners', tag: 'Estratégica',
    pregunta: 'Suena demasiado ambicioso. "Quieren cambiar el mundo con una startup."',
    quien: 'Fundaciones, universidades, municipios — ¿qué van a hacer realmente en 12 meses?',
    respuesta: 'En 12 meses hacemos algo acotado y verificable: ejecutar el benchmark en dos ecorregiones, medir captura y rindes, identificar la variedad campeona y producir el primer lote de material certificable. Ambición de largo plazo, hitos de corto plazo.',
    evidencia: 'Hitos del piloto a 12-18 meses.',
  },
  {
    n: 28, audiencia: 'Partners', tag: 'Estratégica',
    pregunta: '¿Cuánto hay de realidad y cuánto de visión?',
    quien: 'Los partners colaboran cuando perciben ejecución, no solo narrativa.',
    respuesta: 'Mostramos ejecución antes que relato: licencia obtenida, infraestructura de cultivo operando, cosechas reales, ensayo industrial en Añelo y ladrillos producidos. La visión es grande; la base es concreta y verificable hoy.',
    evidencia: 'Roadmap ejecutado 2023-2025.',
  },
  {
    n: 29, audiencia: 'Partners', tag: 'Técnica',
    pregunta: '¿Quién lidera técnicamente? ¿Quién sabe de cáñamo? ¿Quién sabe de materiales?',
    quien: 'El equipo tiene negocio, sostenibilidad e innovación — falta la voz técnica.',
    respuesta: 'La conducción técnica se apoya en alianzas: Fundación Gen aporta el conocimiento agronómico/genético del cáñamo e INTI valida el material y el sistema constructivo. No improvisamos la parte técnica: la institucionalizamos con socios reconocidos.',
    evidencia: 'Fundación Gen (cáñamo) · INTI (material/sistema).',
  },
  {
    n: 30, audiencia: 'Partners', tag: 'Comercial',
    pregunta: '¿Qué gano yo colaborando?',
    quien: 'La mayoría no pregunta si es buena idea, sino qué ganan.',
    respuesta: 'Tenemos una propuesta de valor por actor: productores (ingreso y cultivo colaborativo), municipios (empleo y vivienda), universidades (datos y publicaciones del benchmark), constructoras (material premium diferenciado) y certificadoras (volumen de créditos). Cada uno entra por su propio interés.',
    evidencia: 'Propuesta segmentada por actor del ecosistema.',
  },
  {
    n: 31, audiencia: 'Partners', tag: 'Financiera',
    pregunta: '¿Quién financia el camino hasta que exista mercado?',
    quien: 'Los impactos, certificaciones y ventas grandes vienen después.',
    respuesta: 'YPF, como cliente ancla, financia la etapa de validación a través del contrato de desarrollo de proveedor (Fase 1 benchmark + Fase 2 piloto). Eso cubre justamente el tramo entre hoy y el mercado, sin pedirle a los partners que pongan el capital de riesgo.',
    evidencia: 'Fase 1 USD 150K + Fase 2 USD 115K financiadas por YPF.',
  },

  /* ---------- Personas que podrían sumarse al equipo ---------- */
  {
    n: 32, audiencia: 'Equipo', tag: 'Estratégica',
    pregunta: '¿Esto es un emprendimiento o una misión? ¿Dónde está el modelo económico?',
    quien: 'Algunos se enamoran de la misión; otros buscan el negocio.',
    respuesta: 'Es las dos cosas, y en ese orden importa la segunda: el modelo económico es vender material y crédito de carbono con márgenes reales. La misión es la consecuencia de un negocio que funciona, no un sustituto de él.',
    evidencia: 'Modelo de ingresos: material + carbono.',
  },
  {
    n: 33, audiencia: 'Equipo', tag: 'Reputacional',
    pregunta: '¿Voy a tener trabajo estable? "Me forman para que me vaya."',
    quien: 'La rotación positiva e inserción laboral puede malinterpretarse.',
    respuesta: 'Hay dos caminos y ambos son válidos: quien quiera quedarse crece dentro de Flora a medida que escala; quien se forme para construir su propia vivienda o emprender lo hace con nuestro apoyo. No es expulsión, es movilidad. Hay que comunicarlo con cuidado, pero la idea es virtuosa.',
    evidencia: 'Modelo "de la semilla a la llave" · cultivo colaborativo.',
  },
  {
    n: 34, audiencia: 'Equipo', tag: 'Estratégica',
    pregunta: '¿Hay oportunidades reales de crecimiento? Carrera, aprendizaje, liderazgo.',
    quien: 'Los buenos perfiles quieren proyección.',
    respuesta: 'Sí: un proyecto que escala de piloto a programa provincial abre roles nuevos de liderazgo técnico, operativo y comercial a medida que crece. El que entra temprano define el área.',
    evidencia: 'Trayectoria de escalado piloto → programa regional.',
  },
  {
    n: 35, audiencia: 'Equipo', tag: 'Estratégica',
    pregunta: '¿Esto puede ejecutarse realmente, o se queda en PowerPoint?',
    quien: 'Muchos vieron proyectos de impacto que nunca pasan del sitio web.',
    respuesta: 'Buscan señales de ejecución y las tenemos: pilotos en marcha, acuerdos con instituciones, clientes en conversación (LOIs) y un presupuesto definido financiado por YPF. La diferencia con un PowerPoint es que ya hay obra hecha.',
    evidencia: 'Pilotos · acuerdos · LOIs · presupuesto financiado.',
  },
]

/* Las dos objeciones que resumen todas las demás. */
export const objecionesMadre = [
  {
    titulo: 'La que haría Horacio Marín, en persona',
    cita: 'Entiendo el propósito. Ahora demuéstrenme que esto puede convertirse en una solución de escala para el desarrollo territorial de Neuquén, y no quedarse en un piloto interesante.',
    bajada: 'YPF no necesita otro proyecto inspirador. Necesita plataformas capaces de operar a escala provincial o nacional. Y por eso el piloto importa: no para probar que el cáñamo funciona, sino para probar que existe un mecanismo medible, verificable y escalable de impacto que una empresa de su tamaño pueda adoptar.',
  },
  {
    titulo: 'La más peligrosa',
    cita: 'Es una visión extraordinaria, pero todavía no veo cuál es el primer negocio que la hace posible.',
    bajada: 'Casi todas las demás objeciones desaparecen si demostramos cuatro cosas: que existe demanda para materiales sostenibles, que podemos producirlos, que generan impacto medible, y que alguien está dispuesto a pagar por alguno de esos dos activos. El objetivo del piloto es, exactamente, reducir esta objeción.',
  },
]

/* La receta de Carmen para estructurar el deck. */
export const arco = [
  { n: 1, t: 'Hacé que quiera que exista', d: 'Antes de probar que es posible, rentable o escalable. Primero debe pensar "ojalá esto exista". Es una etapa emocional, no irracional.' },
  { n: 2, t: 'Mostrá el problema', d: 'Emisiones, materiales intensivos en carbono, empleo de baja calidad, necesidad de diversificar. El público debe sentir: "sí, este problema existe".' },
  { n: 3, t: 'Recién ahí, la visión', d: 'Belgrano, Flora, el cáñamo — como respuesta a un problema, no como una idea aislada.' },
  { n: 4, t: 'Mostrá el mecanismo', d: 'Cultivo → Biomasa → Materiales → Construcción → Carbono almacenado → Empleo → Impacto verificable. "Entiendo cómo funciona."' },
  { n: 5, t: 'Respondé objeciones cuando aparecen', d: 'No todas juntas: cada una en el momento exacto en que surge en la cabeza del público.' },
  { n: 6, t: 'Mostrá evidencia', d: 'Aliados, pilotos, métricas, validaciones, cartas de intención. Responde "¿por qué creerles?".' },
  { n: 7, t: 'Después la escala', d: 'Piloto → Validación → Modelo → Escala. Nunca la escala antes de probar que funciona.' },
  { n: 8, t: 'Cerrá con visión', d: 'La visión aparece dos veces: al principio como inspiración, al final como destino.' },
]

/* Secuencia "afirmación → objeción → diapositiva que la desactiva". */
export const secuencia = [
  { dice: 'Vamos a generar impacto.', pregunta: '¿Cómo lo van a medir?', responde: 'Medición y certificación' },
  { dice: 'Vamos a fabricar materiales.', pregunta: '¿Funcionan?', responde: 'INTI' },
  { dice: 'Vamos a capturar carbono.', pregunta: '¿Quién lo valida?', responde: 'EcoGaia · Verra / Gold Standard' },
  { dice: 'Hay mercado.', pregunta: '¿Quién compra?', responde: 'Constructoras y empresas ESG' },
]

export const audiencias: Audiencia[] = ['YPF', 'Inversores', 'Partners', 'Equipo']
export const tags: Tag[] = ['Legal', 'Técnica', 'Comercial', 'Reputacional', 'Estratégica', 'Financiera']
