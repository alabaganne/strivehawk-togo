export const CiscoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="52"
      viewBox="0 0 100 52"
      fill="none"
      className={className}
    >
      {/* Cisco bridge bars */}
      <rect x="10" y="6" width="4" height="18" rx="2" fill="currentColor"/>
      <rect x="18" y="0" width="4" height="24" rx="2" fill="currentColor"/>
      <rect x="26" y="6" width="4" height="18" rx="2" fill="currentColor"/>

      <rect x="38" y="10" width="4" height="14" rx="2" fill="currentColor"/>
      <rect x="46" y="4" width="4" height="20" rx="2" fill="currentColor"/>
      <rect x="54" y="10" width="4" height="14" rx="2" fill="currentColor"/>

      <rect x="66" y="6" width="4" height="18" rx="2" fill="currentColor"/>
      <rect x="74" y="0" width="4" height="24" rx="2" fill="currentColor"/>
      <rect x="82" y="6" width="4" height="18" rx="2" fill="currentColor"/>

      {/* cisco text */}
      <path d="M13 42C9 42 6 39 6 35C6 31 9 28 13 28C15.5 28 17.5 29 19 30.5L17 33C16 31.8 14.5 31 13 31C10.8 31 9 32.8 9 35C9 37.2 10.8 39 13 39C14.5 39 16 38.2 17 37L19 39.5C17.5 41 15.5 42 13 42Z" fill="currentColor"/>
      <path d="M23 28.5H26V42H23V28.5Z" fill="currentColor"/>
      <path d="M36 34C35.2 33.5 33.5 33 32 33C30.8 33 30 33.3 30 34C30 34.7 30.8 35 32 35.3C35.2 36 37 37 37 39.5C37 41.8 35 43 32 43C29.5 43 27.5 42.2 26 41L27.5 38.5C28.8 39.5 30.5 40 32 40C33.3 40 34 39.7 34 39C34 38.3 33.2 38 32 37.7C28.8 37 27 36 27 33.5C27 31.2 29 30 32 30C34.2 30 36 30.7 37.5 31.8L36 34Z" fill="currentColor"/>
      <path d="M50 42C46 42 43 39 43 35C43 31 46 28 50 28C52.5 28 54.5 29 56 30.5L54 33C53 31.8 51.5 31 50 31C47.8 31 46 32.8 46 35C46 37.2 47.8 39 50 39C51.5 39 53 38.2 54 37L56 39.5C54.5 41 52.5 42 50 42Z" fill="currentColor"/>
      <path d="M67 28C71 28 75 31 75 35C75 39 71 42 67 42C63 42 59 39 59 35C59 31 63 28 67 28ZM67 39C69.2 39 71 37.2 71 35C71 32.8 69.2 31 67 31C64.8 31 63 32.8 63 35C63 37.2 64.8 39 67 39Z" fill="currentColor"/>
    </svg>
  );
};
