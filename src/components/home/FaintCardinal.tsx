import { memo } from "react";

export const FaintCardinal = memo(() => (
  <svg 
    viewBox="0 0 100 100" 
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M40 30 C50 20, 60 20, 70 30 C80 40, 80 50, 70 60 L80 65 L60 60 C50 70, 40 70, 30 60 C20 50, 20 40, 30 30 Z" fill="#C8392B"/>
    <path d="M60 20 L65 5 L70 20 Z" fill="#C8392B"/>
    <path d="M75 35 L90 40 L75 45 Z" fill="#E6A822"/>
    <path d="M20 70 C30 60, 40 60, 50 70 L35 90 Z" fill="#992C22"/>
  </svg>
));
FaintCardinal.displayName = 'FaintCardinal';