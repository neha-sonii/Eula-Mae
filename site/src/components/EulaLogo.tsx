import { cn } from "@/lib/utils";

interface EulaLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function EulaLogo({ variant = "light", size = "md", className }: EulaLogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#1A0A00]";
  const branchColor = variant === "light" ? "rgba(255,255,255,0.35)" : "#6B4C2A";
  const footColor = variant === "light" ? "rgba(255,255,255,0.5)" : "#8B6914";

  const sizeClasses = {
    sm: "w-36 h-auto",
    md: "w-52 h-auto",
    lg: "w-72 h-auto",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", sizeClasses[size], className)}>
      <svg viewBox="0 0 130 60" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Branch */}
        <path d="M 4 53 Q 65 60 126 53" fill="none" stroke={branchColor} strokeWidth="2" strokeLinecap="round"/>

        {/* ── LEFT CARDINAL (facing right) ── */}
        {/* Body */}
        <ellipse cx="32" cy="39" rx="16" ry="12" fill="#C8392B"/>
        {/* Tail pointing left-down */}
        <path d="M 17,44 L 3,56 L 13,46 Z" fill="#992C22"/>
        {/* Neck connector to head */}
        <ellipse cx="40" cy="32" rx="7" ry="6" fill="#C8392B"/>
        {/* Head */}
        <circle cx="44" cy="26" r="9" fill="#C8392B"/>
        {/* Crest — upward spike */}
        <path d="M 44,17 C 46,11 49,6 47,4 C 44,6 41,11 41,17 Z" fill="#C8392B"/>
        {/* Dark facial mask */}
        <path d="M 46,29 C 50,27 53,27 53,30 C 53,33 49,35 46,34 Z" fill="#1A0A00" opacity="0.45"/>
        {/* Beak — pointing right */}
        <path d="M 52,27 L 61,29 L 52,33 Z" fill="#E6A822"/>
        {/* Eye */}
        <circle cx="48" cy="24" r="2.2" fill="#1A0A00"/>
        <circle cx="48.7" cy="23.3" r="0.7" fill="white"/>
        {/* Wing shadow line */}
        <path d="M 22,37 C 30,32 38,32 44,37" fill="none" stroke="#992C22" strokeWidth="1.8"/>
        {/* Feet */}
        <line x1="28" y1="51" x2="25" y2="55" stroke={footColor} strokeWidth="1.2"/>
        <line x1="32" y1="51" x2="36" y2="55" stroke={footColor} strokeWidth="1.2"/>

        {/* ── RIGHT CARDINAL (facing left, slightly larger) ── */}
        {/* Body */}
        <ellipse cx="98" cy="39" rx="17" ry="13" fill="#C8392B"/>
        {/* Tail pointing right-down */}
        <path d="M 113,44 L 127,56 L 117,46 Z" fill="#992C22"/>
        {/* Neck connector */}
        <ellipse cx="90" cy="32" rx="8" ry="7" fill="#C8392B"/>
        {/* Head */}
        <circle cx="86" cy="26" r="10" fill="#C8392B"/>
        {/* Crest — upward spike */}
        <path d="M 86,16 C 84,10 81,5 83,3 C 86,5 89,10 89,16 Z" fill="#C8392B"/>
        {/* Dark facial mask */}
        <path d="M 84,29 C 80,27 77,27 77,30 C 77,33 81,35 84,34 Z" fill="#1A0A00" opacity="0.45"/>
        {/* Beak — pointing left */}
        <path d="M 78,27 L 69,29 L 78,33 Z" fill="#E6A822"/>
        {/* Eye */}
        <circle cx="82" cy="24" r="2.4" fill="#1A0A00"/>
        <circle cx="82.7" cy="23.3" r="0.8" fill="white"/>
        {/* Wing shadow line */}
        <path d="M 108,37 C 100,32 92,32 86,37" fill="none" stroke="#992C22" strokeWidth="1.8"/>
        {/* Feet */}
        <line x1="94" y1="52" x2="91" y2="56" stroke={footColor} strokeWidth="1.2"/>
        <line x1="98" y1="52" x2="102" y2="56" stroke={footColor} strokeWidth="1.2"/>
      </svg>

      <div className={cn("font-serif font-bold text-center leading-none mt-1", textColor,
        size === "sm" ? "text-lg" : size === "md" ? "text-2xl" : "text-4xl"
      )}>
        Eula Mae's
      </div>
    </div>
  );
}
