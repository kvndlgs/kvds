
import Projects from '@/components/Projects';
import { getSortedProjectsData } from '@/lib/projects'; // Import the server-side data fetching function
import HeroSectionWrapper from '@/components/HeroSectionWrapper';


interface HomeProps {
  // isNavOpen: boolean; // No longer needed as a prop
}

export default function Home(/*{isNavOpen}: HomeProps*/) {
  const allProjectsData = getSortedProjectsData(); // Fetch data on the server

  return (
    <main className="w-full flex flex-col items-center justify-center m-0 p-0">
      <HeroSectionWrapper />
      <Projects projects={allProjectsData} /> {/* Pass fetched data to Projects component */}
    </main>
  );
}
