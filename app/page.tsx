'use client'
import HeroBackground from "@/components/background";
import Projects from '@/components/Projects';
import ShinyText from "@/components/ShinyText";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center m-0 p-0">
      <div className="w-full h-screen flex items-center justify-center">
        <HeroBackground />
        <div className="p-6 w-3/5 h-auto flex flex-col -mt-40 gap-6">
          <h1 className="text-8xl font-sans font-black text-[#4D4D4D] leading-tighter"> Full Stack Developer
            With a Healthy Obsession
            Over Details. </h1>
          <a href="#projects" className="w-48 rounded-md border-b-4 border-[#A65962]/50 h-auto flex items-center px-5 py-3.5 justify-center bg-accent"> 
            <ShinyText 
              text="Explore Projects"
              speed={1.5} 
              className="font-sans font-medium"
            /> 
          </a>
        </div>
      </div>
      <Projects />
    </main>
  );
}
