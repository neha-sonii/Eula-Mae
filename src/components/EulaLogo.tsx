import { cn } from "@/lib/utils";
import OptimizedImage from "@/components/OptimizedImage";

interface EulaLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function EulaLogo({ variant = "light", size = "md", className }: EulaLogoProps) {
  const sizeClasses = {
    sm: "w-36 h-auto",
    md: "w-52 h-auto",
    lg: "w-72 h-auto",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", sizeClasses[size], className)}>
      <OptimizedImage 
        src="/favicon-logo.png" 
        alt="Eula Mae's Cafe" 
        className="w-full h-auto"
      />
    </div>
  );
}