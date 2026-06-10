export default function Logo() {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      className="w-auto h-8"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define the African pattern */}
      <defs>
        <pattern id="africanPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          {/* Geometric shapes */}
          <circle cx="4" cy="4" r="1.5" fill="white" opacity="0.8" />
          <line x1="0" y1="4" x2="8" y2="4" stroke="white" strokeWidth="0.5" opacity="0.6" />
          <line x1="4" y1="0" x2="4" y2="8" stroke="white" strokeWidth="0.5" opacity="0.6" />
          <polygon points="4,1 6,3 4,5 2,3" fill="none" stroke="white" strokeWidth="0.5" opacity="0.7" />
        </pattern>
      </defs>

      {/* M - White */}
      <text x="0" y="32" fontSize="36" fontWeight="bold" fontFamily="Arial, sans-serif" fill="white">
        M
      </text>

      {/* a - African pattern */}
      <text x="24" y="32" fontSize="36" fontWeight="bold" fontFamily="Arial, sans-serif" fill="url(#africanPattern)" stroke="white" strokeWidth="0.5">
        a
      </text>

      {/* r - African pattern */}
      <text x="42" y="32" fontSize="36" fontWeight="bold" fontFamily="Arial, sans-serif" fill="url(#africanPattern)" stroke="white" strokeWidth="0.5">
        r
      </text>

      {/* y - White */}
      <text x="58" y="32" fontSize="36" fontWeight="bold" fontFamily="Arial, sans-serif" fill="white">
        y
      </text>
    </svg>
  );
}
