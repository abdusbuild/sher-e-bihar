// Original flat illustrations (inline SVG) in the site's amber palette.
// Elements with class "float" / "twinkle" / "steam" are animated in globals.css.

const ink = "#1c1917";

/* A guest resting chin on hand, winking, with a big question mark */
export function ThinkingGuest({ className = "" }) {
  return (
    <svg className={`illus thinking-guest ${className}`} viewBox="0 0 420 420" role="img" aria-label="Illustration of a curious hotel guest with a suitcase and a question mark">
      <defs>
        <clipPath id="tg-clip">
          <rect width="420" height="420" />
        </clipPath>
      </defs>
      <g clipPath="url(#tg-clip)">
        {/* question mark */}
        <g className="wobble">
          <path d="M210 120a82 82 0 1 1 124 70c-22 14-30 30-30 58v10" fill="none" stroke={ink} strokeWidth="58" strokeLinecap="round" />
          <path d="M210 120a82 82 0 1 1 124 70c-22 14-30 30-30 58v10" fill="none" stroke="#ffb900" strokeWidth="46" strokeLinecap="round" />
        </g>

        {/* hotel badge */}
        <g className="float" style={{ "--fd": ".3s" }} transform="translate(44 52)">
          <rect x="0" y="22" width="84" height="76" rx="6" fill="#fff" stroke={ink} strokeWidth="5" />
          <rect x="-6" y="0" width="96" height="26" rx="6" fill="#c2410c" stroke={ink} strokeWidth="5" />
          <text x="42" y="19" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff" className="illus-font">HOTEL</text>
          <g fill="#ffd230" stroke={ink} strokeWidth="3">
            <rect x="12" y="36" width="20" height="18" />
            <rect x="52" y="36" width="20" height="18" />
            <rect x="12" y="62" width="20" height="18" />
            <rect x="52" y="62" width="20" height="18" />
          </g>
        </g>

        {/* map pin */}
        <g className="float" style={{ "--fd": "1s" }} transform="translate(20 196)">
          <path d="M30 0a30 30 0 0 1 30 30c0 24-30 56-30 56S0 54 0 30A30 30 0 0 1 30 0z" fill="#fe9a00" stroke={ink} strokeWidth="5" />
          <circle cx="30" cy="30" r="10" fill="#fff" stroke={ink} strokeWidth="4" />
        </g>

        {/* !!! */}
        <g stroke={ink} strokeWidth="6" strokeLinecap="round" className="twinkle">
          <path d="M340 286v14M356 282v14M372 286v14" />
        </g>

        {/* body / shirt */}
        <path d="M112 420c0-78 40-118 100-118s100 40 100 118z" fill="#c2410c" stroke={ink} strokeWidth="5" />
        <path d="M184 304c8 18 48 18 56 0" fill="none" stroke={ink} strokeWidth="5" />
        {/* neck */}
        <path d="M194 268h36v38c-12 8-24 8-36 0z" fill="#d9966c" stroke={ink} strokeWidth="5" />

        {/* head */}
        <ellipse cx="216" cy="206" rx="64" ry="70" fill="#e8b08a" stroke={ink} strokeWidth="5" />
        <ellipse cx="154" cy="214" rx="14" ry="18" fill="#e8b08a" stroke={ink} strokeWidth="5" />
        {/* hair */}
        <path d="M150 204c-12-58 22-96 72-96 50 0 80 32 74 94-10-26-28-44-52-48 4 14-6 22-20 24 4-10 2-18-6-22-14 18-40 28-68 48z" fill="#292524" stroke={ink} strokeWidth="5" strokeLinejoin="round" />
        {/* brows */}
        <path d="M176 186q14-10 28-2" fill="none" stroke={ink} strokeWidth="7" strokeLinecap="round" />
        <path d="M232 182q14-6 26 4" fill="none" stroke={ink} strokeWidth="7" strokeLinecap="round" />
        {/* eyes: one open (blinks), one winking */}
        <ellipse className="blink" cx="192" cy="208" rx="7" ry="10" fill={ink} />
        <path d="M232 210q12-10 24 0" fill="none" stroke={ink} strokeWidth="6" strokeLinecap="round" />
        {/* nose + mouth */}
        <path d="M218 214q12 16-2 22" fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" />
        <path d="M200 252q18 8 34-6" fill="none" stroke={ink} strokeWidth="5" strokeLinecap="round" />
        {/* cheek */}
        <ellipse cx="250" cy="236" rx="12" ry="7" fill="#f28c6b" opacity=".55" />

        {/* arm + hand on chin */}
        <path d="M120 420l44-118c8-20 22-34 36-38" fill="none" stroke={ink} strokeWidth="47" strokeLinecap="round" />
        <path d="M120 420l44-118c8-20 22-34 36-38" fill="none" stroke="#e8b08a" strokeWidth="37" strokeLinecap="round" />
        <path d="M100 420l30-82h56l-30 82z" fill="#c2410c" stroke={ink} strokeWidth="5" strokeLinejoin="round" />
        <ellipse cx="200" cy="268" rx="24" ry="20" fill="#e8b08a" stroke={ink} strokeWidth="5" />
        <path d="M186 258q8 4 8 12M198 252q8 4 8 12" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" />

        {/* trolley suitcase */}
        <g transform="translate(300 300)">
          <path d="M28 4v-30M60 4v-30M24-26h40" fill="none" stroke={ink} strokeWidth="6" strokeLinecap="round" />
          <rect x="6" y="2" width="76" height="104" rx="12" fill="#ffd230" stroke={ink} strokeWidth="5" />
          <path d="M28 18v72M44 18v72M60 18v72" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
          <circle cx="22" cy="112" r="7" fill={ink} />
          <circle cx="66" cy="112" r="7" fill={ink} />
        </g>
      </g>
    </svg>
  );
}

/* Reception bell with ring lines */
export function ReceptionBell() {
  return (
    <svg className="illus reception-bell" viewBox="0 0 220 130" role="img" aria-label="Reception bell illustration">
      <g transform="translate(50 24)">
        <rect x="52" y="0" width="16" height="12" rx="4" fill="#fde68a" />
        <rect x="56" y="10" width="8" height="10" fill="#fbbf24" />
        <path d="M8 74a52 52 0 0 1 104 0z" fill="#f59e0b" />
        <path d="M30 56a32 32 0 0 1 24-24" stroke="#fff" strokeOpacity=".55" strokeWidth="7" strokeLinecap="round" fill="none" />
        <rect x="0" y="72" width="120" height="16" rx="7" fill="#fde68a" />
        <g stroke="#ffd230" strokeWidth="5" strokeLinecap="round" className="ding">
          <path d="M-14 18l-14-12" />
          <path d="M-18 40h-18" />
          <path d="M134 18l14-12" />
          <path d="M138 40h18" />
        </g>
      </g>
    </svg>
  );
}
