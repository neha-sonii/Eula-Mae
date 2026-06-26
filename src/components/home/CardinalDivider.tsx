import { memo } from "react";

export const CardinalDivider = memo(({ className = "", light = false }: { className?: string; light?: boolean }) => (
  <div className={`flex items-center justify-center w-full py-8 ${className}`}>
    <div className={`h-[1px] flex-grow max-w-[100px] ${light ? 'bg-white/20' : 'bg-[#6B4C2A]/30'}`} />
    <svg width="40" height="20" viewBox="0 0 100 50" className="mx-4" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(10, 10)">
        <path d="M15 10 C20 5, 25 5, 30 10 C35 15, 35 20, 30 25 L35 28 L25 25 C20 30, 15 30, 10 25 C5 20, 5 15, 10 10 Z" fill="#C8392B"/>
        <path d="M25 5 L28 -2 L30 5 Z" fill="#C8392B"/>
        <circle cx="28" cy="13" r="1.5" fill="#1A0A00"/>
        <path d="M32 13 L40 15 L32 18 Z" fill="#E6A822"/>
        <path d="M5 30 C10 25, 15 25, 20 30 L12 40 Z" fill="#992C22"/>
      </g>
      <g transform="translate(90, 10) scale(-1, 1)">
        <path d="M15 10 C20 5, 25 5, 30 10 C35 15, 35 20, 30 25 L35 28 L25 25 C20 30, 15 30, 10 25 C5 20, 5 15, 10 10 Z" fill="#C8392B"/>
        <path d="M25 5 L28 -2 L30 5 Z" fill="#C8392B"/>
        <circle cx="28" cy="13" r="1.5" fill="#1A0A00"/>
        <path d="M32 13 L40 15 L32 18 Z" fill="#E6A822"/>
        <path d="M5 30 C10 25, 15 25, 20 30 L12 40 Z" fill="#992C22"/>
      </g>
      <path d="M0 35 Q 50 45 100 35" fill="none" stroke={light ? "rgba(255,255,255,0.4)" : "#6B4C2A"} strokeWidth="1.5"/>
    </svg>
    <div className={`h-[1px] flex-grow max-w-[100px] ${light ? 'bg-white/20' : 'bg-[#6B4C2A]/30'}`} />
  </div>
));
CardinalDivider.displayName = 'CardinalDivider';