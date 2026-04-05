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
        @keyframes twinkle-1 {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.2; transform: scale(0.5); }
        }
        @keyframes twinkle-2 {
          0%, 100% { opacity: 0.4; transform: scale(0.7); }
          50%       { opacity: 1; transform: scale(1); }
        }
        @keyframes twinkle-3 {
          0%, 100% { opacity: 0.7; transform: scale(0.9); }
          60%       { opacity: 0.1; transform: scale(0.4); }
        }
        @keyframes moon-glow {
          0%, 100% { opacity: 0.15; r: 7px; }
          50%       { opacity: 0.3;  r: 8.5px; }
        }
        .star-1 { transform-origin: 22px 6px;  animation: twinkle-1 2.4s ease-in-out infinite; }
        .star-2 { transform-origin: 24px 13px; animation: twinkle-2 3.1s ease-in-out infinite; }
        .star-3 { transform-origin: 19px 4px;  animation: twinkle-3 2.8s ease-in-out infinite 0.6s; }
        .moon-pulse { transform-origin: 11px 15px; animation: moon-glow 4s ease-in-out infinite; }
      `}</style>

      {/* Soft glow behind moon */}
      <circle
        className="moon-pulse"
        cx="11"
        cy="15"
        r="7"
        fill="#2A9D8F"
        opacity="0.15"
      />

      {/* Moon crescent — teal fill, copper edge */}
      <path
        d="M19 14.5C19 18.6421 15.6421 22 11.5 22C7.35786 22 4 18.6421 4 14.5C4 10.3579 7.35786 7 11.5 7C10.1667 8.5 9.5 10.4 9.5 14.5C9.5 16.5 10.5 19 13 19.5C16 20.1 19 17.5 19 14.5Z"
        fill="#1a6b62"
        stroke="#C2714F"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Inner crescent highlight */}
      <path
        d="M10.5 10C9.8 11.2 9.5 12.8 9.5 14.5C9.5 16.5 10.2 18.2 11.5 19.2"
        stroke="#2A9D8F"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Stars — copper dots */}
      <circle className="star-1" cx="22" cy="6" r="1" fill="#E8A838" />
      <circle className="star-2" cx="24" cy="13" r="0.7" fill="#C2714F" />
      <circle className="star-3" cx="19" cy="4" r="0.8" fill="#E8A838" />
    </svg>
  );
}
