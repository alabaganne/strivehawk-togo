export const FortinetIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      className={className}
    >
      {/* Fortinet Shield/Logo */}
      <path d="M20 5L5 12V22C5 30 12 36 20 38C28 36 35 30 35 22V12L20 5Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M12 18H28M12 24H28M20 12V30" stroke="currentColor" strokeWidth="2"/>

      {/* FORTINET text */}
      <path d="M45 12H60V15H48.5V18.5H58V21.5H48.5V28H45V12Z" fill="currentColor"/>
      <path d="M70 12C76 12 80 16 80 20C80 24 76 28 70 28C64 28 60 24 60 20C60 16 64 12 70 12ZM70 25C74 25 76.5 23 76.5 20C76.5 17 74 15 70 15C66 15 63.5 17 63.5 20C63.5 23 66 25 70 25Z" fill="currentColor"/>
      <path d="M83 12H93C97 12 99 14 99 17C99 19.5 97.5 21 95 21.5L100 28H96L91.5 22H86.5V28H83V12ZM86.5 19H92C94 19 95.5 18 95.5 17C95.5 16 94 15 92 15H86.5V19Z" fill="currentColor"/>
      <path d="M102 15H95V12H113V15H106V28H102V15Z" fill="currentColor"/>
      <path d="M116 12H119.5V28H116V12Z" fill="currentColor"/>
      <path d="M123 12H127L135 23V12H138.5V28H135L127 17V28H123V12Z" fill="currentColor"/>
    </svg>
  );
};
