import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShinyText from './ShinyText';
import { ProjectData } from '@/lib/projects'; // Import ProjectData interface

interface ProjectsProps {
  projects: ProjectData[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="w-full py-8 px-4 md:px-8">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-[#4D4D4D] mb-12">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-62">
                <Image
                  src={project.imageUrl || ''}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#4D4D4D] mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.subtitle}</p>
                <Link href={`/works/${project.slug}`} className="inline-block">
                  <ShinyText text="View Case Study" speed={1.5} className="font-sans font-medium" />
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
