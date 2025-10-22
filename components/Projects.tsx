// components/Projects.tsx
import React from 'react';
import ShinyText from './ShinyText';

const projects = [
  {
    title: 'Parapluie',
    category: 'Mobile',
    keywords: ['android', 'ux', 'ui', 'interface', 'mobile app', 'brand'],
    description: 'Rethinking senior safety apps through empathetic UX, AI guidance, and family-centered design.',
    caseStudyUrl: '/works/project-one',
    imageUrl: 'https://i.imgur.com/CAHXrbG.png',
  },
  {
    title: 'AuraChain',
    description: 'AuraChain is a blockchain-powered student recognition platform.',
    category: 'Web',
    keywords: ['web3', 'ux', 'ui', 'interface', 'brand', 'blockchain', 'crypto', 'DeFi'],
    caseStudyUrl: '/works/project-two',
    imageUrl: 'https://i.imgur.com/wzOKedB.png',
  },
  {
    title: 'Shield',
    description: 'Website And Branding For A Local Flagging Business',
    caseStudyUrl: '/works/project-three',
    imageUrl: 'https://cdn.dribbble.com/userupload/14351600/file/original-d25b719bd5a5884c03f41e4b5fae9cf2.png?resize=1600x1067&vertical=center',
  },
];

const Projects = () => {
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
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.caseStudyUrl} className="inline-block">
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
