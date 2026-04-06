export function MoonIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <style>{`
        @keyframes star-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        .s1 { transform-origin: 21px 7px;  animation: star-pulse 2.4s ease-in-out infinite; }
        .s2 { transform-origin: 23px 14px; animation: star-pulse 3.2s ease-in-out infinite 0.8s; }
        .s3 { transform-origin: 18px 5px;  animation: star-pulse 2.8s ease-in-out infinite 1.4s; }
      `}</style>

      {/* Crescent — Facing Right, simplified curves for a cleaner crescent shape */}
      <path
        d="M11 14C11 10.134 14.134 7 18 7C21.866 7 25 10.134 25 14C25 17.866 21.866 21 18 21C19.2 19.6 19.8 17.9 19.8 14C19.8 12.2 19 10 16.5 9.6C13.8 9.2 11 11.5 11 14Z"
        stroke="#C2714F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Three stars — Positioned inside/around the crescent */}
      <circle className="s1" cx="21" cy="7" r="1" fill="#E8A838" />
      <circle className="s2" cx="23" cy="14" r="0.7" fill="#C2714F" />
      <circle className="s3" cx="18" cy="5" r="0.8" fill="#E8A838" />
    </svg>
  );
}
