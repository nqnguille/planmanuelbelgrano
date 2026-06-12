export function HempBotanical({ className, opacity = 1 }: { className?: string; opacity?: number }) {
  const ink = '#7B5830'
  const sw = 0.85

  return (
    <svg
      viewBox="0 0 260 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {/* ─── Defs: reusable leaflet shapes ─── */}
      <defs>
        {/* Large leaflet ~88px */}
        <path
          id="lf-lg"
          d="M 0,0 L -1.5,-8 C -4,-18 -7,-32 -7.5,-48
             L -10,-53 L -7,-56 L -9.5,-62 L -6.5,-65
             L -8,-72 L -5,-74 C -4,-82 -1.5,-88 0,-90
             C 1.5,-88 4,-82 5,-74 L 8,-72 L 5.5,-65
             L 9.5,-62 L 7,-56 L 10,-53 L 7.5,-48
             C 7,-32 4,-18 1.5,-8 Z"
        />
        {/* Medium leaflet ~70px */}
        <path
          id="lf-md"
          d="M 0,0 L -1.2,-6 C -3.5,-15 -6,-27 -6,-40
             L -8,-44 L -5.5,-47 L -7.5,-52 L -5,-54
             C -4,-62 -1.5,-68 0,-71
             C 1.5,-68 4,-62 5,-54 L 7.5,-52 L 5.5,-47
             L 8,-44 L 6,-40 C 6,-27 3.5,-15 1.2,-6 Z"
        />
        {/* Small leaflet ~52px */}
        <path
          id="lf-sm"
          d="M 0,0 L -1,-5 C -3,-12 -5,-22 -5,-32
             L -7,-36 L -4.5,-38 L -6,-43 L -4,-45
             C -3,-51 -1,-55 0,-57
             C 1,-55 3,-51 4,-45 L 6,-43 L 4.5,-38
             L 7,-36 L 5,-32 C 5,-22 3,-12 1,-5 Z"
        />
        {/* Tiny leaflet ~36px */}
        <path
          id="lf-xs"
          d="M 0,0 L -0.8,-4 C -2,-9 -3.5,-16 -3.5,-24
             L -5,-27 L -3,-29 L -4,-33 L -2.5,-34
             C -2,-39 -0.8,-42 0,-44
             C 0.8,-42 2,-39 2.5,-34 L 4,-33 L 3,-29
             L 5,-27 L 3.5,-24 C 3.5,-16 2,-9 0.8,-4 Z"
        />
      </defs>

      {/* ─── Roots ─── */}
      <path d="M 130,510 C 128,520 126,530 122,540" stroke={ink} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M 130,510 C 132,520 134,532 138,540" stroke={ink} strokeWidth="1.1" strokeLinecap="round" />
      <path d="M 126,500 C 114,510 102,516 92,522" stroke={ink} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M 134,500 C 146,510 158,516 168,522" stroke={ink} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M 122,505 C 108,512 96,520 86,526" stroke={ink} strokeWidth="0.6" strokeLinecap="round" />
      <path d="M 138,505 C 152,512 164,520 174,526" stroke={ink} strokeWidth="0.6" strokeLinecap="round" />
      <path d="M 118,495 C 104,500 92,506 82,512" stroke={ink} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M 142,495 C 156,500 168,506 178,512" stroke={ink} strokeWidth="0.5" strokeLinecap="round" />
      {/* Fine root hairs */}
      <path d="M 92,522 C 88,526 84,530 80,534" stroke={ink} strokeWidth="0.4" strokeLinecap="round" />
      <path d="M 86,526 C 80,530 76,534 72,537" stroke={ink} strokeWidth="0.35" strokeLinecap="round" />
      <path d="M 168,522 C 172,526 176,530 180,534" stroke={ink} strokeWidth="0.4" strokeLinecap="round" />
      <path d="M 174,526 C 180,530 184,534 188,537" stroke={ink} strokeWidth="0.35" strokeLinecap="round" />

      {/* ─── Main stem ─── */}
      <path
        d="M 130,510 C 130,450 129,390 130,330 C 131,270 130,210 130,150 C 130,110 130,80 131,45"
        stroke={ink}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Stem detail (faint inner line) */}
      <path
        d="M 132,510 C 132,450 131,390 132,330 C 133,270 132,210 132,150"
        stroke={ink}
        strokeWidth="0.3"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* ─── Node 1 — y≈440 — left, large ─── */}
      <g transform="translate(130,440)">
        <path d="M 0,0 C -8,-2 -18,-3 -24,-2" stroke={ink} strokeWidth="1" strokeLinecap="round" />
        <line x1="-24" y1="-2" x2="-24" y2="-88" stroke={ink} strokeWidth="0.35" opacity="0.45" />
        <g transform="translate(-24,-2)">
          <use href="#lf-lg" transform="rotate(-12)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(18)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(-38)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(44)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(-62)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-xs" transform="rotate(72)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-xs" transform="rotate(-88)" stroke={ink} strokeWidth={sw} fill="none" />
        </g>
      </g>

      {/* ─── Node 2 — y≈360 — right, large ─── */}
      <g transform="translate(130,360)">
        <path d="M 0,0 C 8,-2 18,-3 24,-2" stroke={ink} strokeWidth="1" strokeLinecap="round" />
        <line x1="24" y1="-2" x2="24" y2="-88" stroke={ink} strokeWidth="0.35" opacity="0.45" />
        <g transform="translate(24,-2) scale(-1,1)">
          <use href="#lf-lg" transform="rotate(-12)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(18)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(-38)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(44)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(-62)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-xs" transform="rotate(72)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-xs" transform="rotate(-88)" stroke={ink} strokeWidth={sw} fill="none" />
        </g>
      </g>

      {/* ─── Node 3 — y≈278 — left, medium ─── */}
      <g transform="translate(130,278)">
        <path d="M 0,0 C -7,-2 -15,-3 -20,-2" stroke={ink} strokeWidth="0.9" strokeLinecap="round" />
        <line x1="-20" y1="-2" x2="-20" y2="-72" stroke={ink} strokeWidth="0.3" opacity="0.4" />
        <g transform="translate(-20,-2) scale(0.82)">
          <use href="#lf-lg" transform="rotate(-12)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(18)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(-38)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(44)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(-62)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-xs" transform="rotate(72)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-xs" transform="rotate(-88)" stroke={ink} strokeWidth={sw} fill="none" />
        </g>
      </g>

      {/* ─── Node 4 — y≈205 — right, medium-small ─── */}
      <g transform="translate(130,205)">
        <path d="M 0,0 C 7,-2 14,-3 19,-2" stroke={ink} strokeWidth="0.85" strokeLinecap="round" />
        <g transform="translate(19,-2) scale(-0.65, 0.65)">
          <use href="#lf-lg" transform="rotate(-12)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(18)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(-38)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(44)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(-62)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-xs" transform="rotate(72)" stroke={ink} strokeWidth={sw} fill="none" />
        </g>
      </g>

      {/* ─── Node 5 — terminal — y≈135 — symmetric, small ─── */}
      <g transform="translate(130,135)">
        <g transform="scale(0.52)">
          <use href="#lf-lg" transform="rotate(0)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(28)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-md" transform="rotate(-28)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(54)" stroke={ink} strokeWidth={sw} fill="none" />
          <use href="#lf-sm" transform="rotate(-54)" stroke={ink} strokeWidth={sw} fill="none" />
        </g>
      </g>

      {/* ─── Seed / flower head ─── */}
      <g transform="translate(131,47)">
        {/* Central bract */}
        <ellipse cx="0" cy="-14" rx="5.5" ry="13" stroke={ink} strokeWidth="0.85" />
        {/* Side bracts */}
        <ellipse cx="-7" cy="-9" rx="3.5" ry="8.5" stroke={ink} strokeWidth="0.75" transform="rotate(-22,-7,-9)" />
        <ellipse cx="7" cy="-9" rx="3.5" ry="8.5" stroke={ink} strokeWidth="0.75" transform="rotate(22,7,-9)" />
        {/* Tiny stippling */}
        <circle cx="0" cy="-8" r="0.9" fill={ink} />
        <circle cx="0" cy="-15" r="0.8" fill={ink} />
        <circle cx="-2.5" cy="-12" r="0.7" fill={ink} />
        <circle cx="2.5" cy="-12" r="0.7" fill={ink} />
        <circle cx="-7" cy="-9" r="0.7" fill={ink} />
        <circle cx="7" cy="-9" r="0.7" fill={ink} />
        {/* Stigma hairs */}
        <path d="M -1.5,-27 C -2,-30 -3,-32 -4,-33" stroke={ink} strokeWidth="0.5" strokeLinecap="round" />
        <path d="M 0,-27 C 0,-30 0,-32 0,-34" stroke={ink} strokeWidth="0.5" strokeLinecap="round" />
        <path d="M 1.5,-27 C 2,-30 3,-32 4,-33" stroke={ink} strokeWidth="0.5" strokeLinecap="round" />
      </g>

      {/* ─── Node markers on stem ─── */}
      {[440, 360, 278, 205, 135].map((y) => (
        <circle key={y} cx="130" cy={y} r="1.8" fill={ink} opacity="0.6" />
      ))}

      {/* ─── Subtle crosshatching on a few leaflets for depth ─── */}
      <g opacity="0.18">
        <line x1="95" y1="370" x2="102" y2="380" stroke={ink} strokeWidth="0.4" />
        <line x1="98" y1="368" x2="105" y2="378" stroke={ink} strokeWidth="0.4" />
        <line x1="101" y1="366" x2="108" y2="376" stroke={ink} strokeWidth="0.4" />
        <line x1="160" y1="290" x2="167" y2="300" stroke={ink} strokeWidth="0.4" />
        <line x1="163" y1="288" x2="170" y2="298" stroke={ink} strokeWidth="0.4" />
      </g>
    </svg>
  )
}
