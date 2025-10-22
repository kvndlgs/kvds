import HeroBackground from "@/components/background";
import Projects from '@/components/Projects';
import ShinyText from "@/components/ShinyText";
import { getSortedProjectsData } from '@/lib/projects'; // Import the server-side data fetching function

export default function Home() {
  const allProjectsData = getSortedProjectsData(); // Fetch data on the server

  return (
    <main className="w-full flex flex-col items-center justify-center m-0 p-0">
      <div className="w-full h-screen flex items-center justify-center">
        <HeroBackground />
        <div className="w-4/5 h-auto flex flex-col gap-6 md:z-100">
          <h1 className="lg:text-[140px] lg:leading-[128px]  md:text-[100px] md:leading-[90px] text-[64px] leading-[70px] font-sans-heavy text-[#4D4D4D] pb-4">Full Stack Developer
            With a Healthy Obsession
            Over Details. </h1>
          <a href="#projects" className="w-60 text-white rounded-md text-xl border-t-4 border-l-transparent border-r-transparent border-t-white/90 border-b-4 border-[#A65962]/80 h-auto flex items-center px-4 pt-4 pb-3.5 justify-center bg-linear-to-t from-accent/90 via-60% to-accent/30"> 
                 See Recent Projects
          </a>
        </div>
      </div>
      <Projects projects={allProjectsData} /> {/* Pass fetched data to Projects component */}
    </main>
  );
}
