'use client'

interface Props {
  className?: string
}

export function GNLFlowDiagram({ className }: Props) {
  const goldStroke  = 'rgba(139,100,42,0.7)'
  const red         = 'rgba(180,48,28,0.07)'
  const redStroke   = 'rgba(180,48,28,0.75)'
  const green       = 'rgba(55,130,50,0.07)'
  const greenStroke = 'rgba(55,130,50,0.8)'
  const ink         = 'rgba(28,26,20,0.8)'
  const inkMid      = 'rgba(28,26,20,0.5)'
  const inkFaint    = 'rgba(28,26,20,0.32)'

  return (
    <svg
      viewBox="0 0 600 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', maxWidth: '680px' }}
    >
      {/* ─── Arrowhead markers ─── */}
      <defs>
        <marker id="arrow-gold-l" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={goldStroke} />
        </marker>
        <marker id="arrow-red-l" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={redStroke} />
        </marker>
        <marker id="arrow-green-l" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill={greenStroke} />
        </marker>
      </defs>

      {/* ═══ NODO SUPERIOR — YPF · Vaca Muerta ═══ */}
      <rect
        x="220" y="10" width="160" height="36" rx="3"
        stroke={goldStroke} strokeWidth="1.5"
        fill="rgba(201,168,76,0.08)"
      />
      <text
        x="300" y="33" textAnchor="middle"
        fontFamily="var(--font-hanken), sans-serif"
        fontSize="13" fontWeight="600" fill={ink} letterSpacing="0.03em"
      >
        YPF · Vaca Muerta
      </text>

      {/* ─── Flecha central ─── */}
      <path d="M300,46 L300,82" stroke={goldStroke} strokeWidth="1.5" markerEnd="url(#arrow-gold-l)" />

      {/* ─── Label cargo GNL ─── */}
      <text
        x="300" y="99" textAnchor="middle"
        fontFamily="var(--font-hanken), sans-serif"
        fontSize="9" fill={inkFaint} letterSpacing="0.08em"
      >
        CARGO GNL
      </text>

      {/* ─── Punto de bifurcación ─── */}
      <circle cx="300" cy="115" r="2.5" fill={goldStroke} />

      {/* ─── Path izquierdo — ROJO ─── */}
      <path
        d="M300,115 C300,145 160,145 160,175"
        stroke={redStroke} strokeWidth="1.5" markerEnd="url(#arrow-red-l)"
      />

      {/* ─── Path derecho — VERDE ─── */}
      <path
        d="M300,115 C300,145 440,145 440,175"
        stroke={greenStroke} strokeWidth="1.5" markerEnd="url(#arrow-green-l)"
      />

      {/* ─── Labels sobre los paths ─── */}
      <text x="210" y="148" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="8" fill={inkFaint} letterSpacing="0.06em">SIN CLAVE</text>
      <text x="210" y="158" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="8" fill={inkFaint} letterSpacing="0.06em">(hoy)</text>
      <text x="390" y="148" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="8" fill={inkFaint} letterSpacing="0.06em">CON CLAVE</text>
      <text x="390" y="158" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="8" fill={inkFaint} letterSpacing="0.06em">(Plan Belgrano)</text>

      {/* ═══ ÍCONO LLAVE ═══ */}
      <g transform="translate(300, 127) scale(0.55)">
        <circle cx="0" cy="-10" r="8" stroke={goldStroke} strokeWidth="1.6" />
        <circle cx="0" cy="-10" r="3.5" stroke={goldStroke} strokeWidth="1.2" />
        <line x1="0" y1="-2" x2="0" y2="18" stroke={goldStroke} strokeWidth="1.6" />
        <line x1="0" y1="8"  x2="5" y2="8"  stroke={goldStroke} strokeWidth="1.4" />
        <line x1="0" y1="13" x2="4" y2="13" stroke={goldStroke} strokeWidth="1.4" />
      </g>
      <text x="300" y="154" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="7.5" fill={inkFaint} letterSpacing="0.05em">Crédito de carbono</text>

      {/* ═══ NODO IZQUIERDO — COMMODITY ═══ */}
      <rect x="60" y="175" width="200" height="54" rx="3" stroke={redStroke} strokeWidth="1.5" fill={red} />
      <text x="160" y="199" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="12" fontWeight="600" fill="rgba(180,48,28,0.85)" letterSpacing="0.04em">
        Mercado Commodity
      </text>
      <text x="160" y="215" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="9.5" fill={inkMid} letterSpacing="0.03em">
        precio spot · sin diferenciación
      </text>

      {/* ═══ NODO DERECHO — PREMIUM ═══ */}
      <rect x="340" y="175" width="200" height="54" rx="3" stroke={greenStroke} strokeWidth="1.5" fill={green} />
      <text x="440" y="199" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="12" fontWeight="600" fill="rgba(55,130,50,0.9)" letterSpacing="0.04em">
        Mercado Premium
      </text>
      <text x="440" y="215" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="9.5" fill={inkMid} letterSpacing="0.03em">
        +USD 2–5/MMBtu · CS3D certified
      </text>

      {/* ─── Flechas hacia abajo ─── */}
      <path d="M160,229 L160,258" stroke={redStroke} strokeWidth="0.8" markerEnd="url(#arrow-red-l)" />
      <path d="M440,229 L440,258" stroke={greenStroke} strokeWidth="0.8" markerEnd="url(#arrow-green-l)" />

      {/* ─── Resultados finales ─── */}
      <rect x="80" y="262" width="160" height="26" rx="2" stroke={redStroke} strokeWidth="0.8" fill={red} />
      <text x="160" y="278" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="9" fill={inkMid} letterSpacing="0.04em">
        Volumen sin margen extra
      </text>

      <rect x="360" y="262" width="160" height="26" rx="2" stroke={greenStroke} strokeWidth="0.8" fill={green} />
      <text x="440" y="278" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="9" fill={inkMid} letterSpacing="0.04em">
        Diferencial sostenido EU ETS
      </text>

      {/* ─── Separador inferior ─── */}
      <line x1="60" y1="310" x2="540" y2="310" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" />
      <text x="300" y="316" textAnchor="middle" fontFamily="var(--font-hanken), sans-serif" fontSize="7" fill="rgba(28,26,20,0.25)" letterSpacing="0.06em">
        EU Carbon Border Adjustment · CS3D Compliance · Flora Cáñamo Neuquino SRL
      </text>
    </svg>
  )
}
