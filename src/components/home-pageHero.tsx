import { cn } from "@/utils/utils";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementsProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <h1
      className={cn(
        "text-3xl md:text-6xl leading-tight font-semibold",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HerosubTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <p className={cn("text-base md:text-xl py-4 leading-relaxed", className)}>
      {children}
    </p>
  );
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={cn("text-center", className)}>{children}</div>;
};
