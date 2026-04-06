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

      {/* Crescent — same stroke weight and linecap as SunLogo rays */}
      <path
        d="M18 14C18 17.866 14.866 21 11 21C7.13401 21 4 17.866 4 14C4 10.134 7.13401 7 11 7C9.8 8.4 9.2 10.1 9.2 14C9.2 15.8 10 18 12.5 18.4C15.2 18.8 18 16.5 18 14Z"
        stroke="#C2714F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Three stars — same amber/copper as sun core */}
      <circle className="s1" cx="21" cy="7" r="1" fill="#E8A838" />
      <circle className="s2" cx="23" cy="14" r="0.7" fill="#C2714F" />
      <circle className="s3" cx="18" cy="5" r="0.8" fill="#E8A838" />
    </svg>
  );
}
