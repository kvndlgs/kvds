import React from 'react';
import ShinyText from './ShinyText';
import { ProjectData } from '@/lib/projects'; // Import ProjectData interface

interface ProjectsProps {
  projects: ProjectData[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="w-full py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-[#4D4D4D] mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-62 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#4D4D4D] mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.subtitle}</p>
                <a href={`/works/${project.slug}`} className="inline-block">
                  <ShinyText text="View Case Study" speed={1.5} className="font-sans font-medium" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
