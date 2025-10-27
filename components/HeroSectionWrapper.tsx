"use client";

import HeroBackground from "@/components/background";
import { cn } from "@/lib/utils";
import { useNav } from "@/lib/NavContext";

interface HeroSectionWrapperProps {
  // isNavOpen: boolean; // No longer needed as a prop
}

export default function HeroSectionWrapper(/*{ isNavOpen }: HeroSectionWrapperProps*/) {
  const { isNavOpen } = useNav();

  return (
    <div className="w-full h-screen flex items-center justify-center px-4 md:px-8 py-8">
      <div className="absolute inset-4 md:inset-8 bg-white/95 backdrop-blur-sm rounded-3xl pointer-events-none" />

      <HeroBackground />

      <div
        className={cn(
          isNavOpen
            ? "md:w-74/100 w-full px-4 h-auto flex flex-col gap-4 md:gap-6 z-10 relative"
            : "md:w-74/100 w-full px-4 h-auto flex flex-col gap-4 md:gap-6 z-50 transition-z duration-75 relative",
        )}
      >
        <h1
          className="text-[clamp(2.6rem,7.5vw,5.4rem)] leading-none
        font-sans-heavy text-[#4D4D4D] md:pb-4"
        >
          Full Stack Developer With a Healthy Obsession Over Details.
        </h1>
        <a
          href="#projects"
          className="md:w-60 w-40 text-white rounded-md text-sm md:text-xl border-t-4
        border-l-transparent border-r-transparent border-t-white/90 border-b-4 border-[#A65962]/90
        h-auto shadow-lg
        flex items-center px-3 md:px-4 pt-4.5 pb-4 justify-center bg-linear-to-t
        from-accent/90 via-accent/70 to-accent/70"
        >
          Recent Projects
        </a>
      </div>
    </div>
  );
}
