import { cn } from "@/lib/utils";

interface EulaLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function EulaLogo({ variant = "light", size = "md", className }: EulaLogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#1A0A00]";
  const branchColor = variant === "light" ? "rgba(255,255,255,0.4)" : "#6B4C2A";

  const sizeClasses = {
    sm: "w-32 h-auto",
    md: "w-48 h-auto",
    lg: "w-64 h-auto"
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", sizeClasses[size], className)}>
      <svg viewBox="0 0 100 40" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(30, 5)">
          <path d="M15 10 C20 5, 25 5, 30 10 C35 15, 35 20, 30 25 L35 28 L25 25 C20 30, 15 30, 10 25 C5 20, 5 15, 10 10 Z" fill="#C8392B"/>
          <path d="M25 5 L28 -2 L30 5 Z" fill="#C8392B"/>
          <circle cx="28" cy="13" r="1.5" fill={variant === "light" ? "#F5EFE0" : "#F5EFE0"}/>
          <path d="M32 13 L38 15 L32 18 Z" fill="#E6A822"/>
          <path d="M12 18 C18 18, 22 22, 22 28" fill="none" stroke="#992C22" strokeWidth="1.5"/>
          <path d="M5 30 C10 25, 15 25, 20 30 L12 40 Z" fill="#992C22"/>
        </g>
        <g transform="translate(70, 5) scale(-1, 1)">
          <path d="M15 10 C20 5, 25 5, 30 10 C35 15, 35 20, 30 25 L35 28 L25 25 C20 30, 15 30, 10 25 C5 20, 5 15, 10 10 Z" fill="#C8392B"/>
          <path d="M25 5 L28 -2 L30 5 Z" fill="#C8392B"/>
          <circle cx="28" cy="13" r="1.5" fill={variant === "light" ? "#F5EFE0" : "#F5EFE0"}/>
          <path d="M32 13 L38 15 L32 18 Z" fill="#E6A822"/>
          <path d="M12 18 C18 18, 22 22, 22 28" fill="none" stroke="#992C22" strokeWidth="1.5"/>
          <path d="M5 30 C10 25, 15 25, 20 30 L12 40 Z" fill="#992C22"/>
        </g>
        <path d="M10 30 Q 50 40 90 30" fill="none" stroke={branchColor} strokeWidth="1.5"/>
      </svg>
      <div className={cn("font-serif font-bold text-center mt-2 leading-none", textColor, 
        size === "sm" ? "text-xl" : size === "md" ? "text-3xl" : "text-4xl"
      )}>
        Eula Mae's
      </div>
      <div className={cn("w-3/4 h-[1px] mt-3", variant === "light" ? "bg-white/30" : "bg-[#6B4C2A]/30")} />
    </div>
  );
}
