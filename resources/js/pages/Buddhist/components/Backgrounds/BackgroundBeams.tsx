import React, { ReactNode } from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { cn } from "@/lib/utils"; // helper for class merging if you use shadcn

interface BackgroundBeamsProps {
  children: ReactNode;
  className?: string;
}

export function BackgroundBeams({ children, className }: BackgroundBeamsProps) {
  return (
    <BackgroundBeamsWithCollision className={cn("relative w-full h-full", className)}>
      {children}
    </BackgroundBeamsWithCollision>
  );
}
