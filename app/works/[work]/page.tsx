import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface WorkProps {
  title: string;
  subtitle?: string;
  tags?: string[]; // Tags will be an array of strings from front matter
  category?: string;
  imageUrl?: string;
  slug: string;
  contentHtml: string;
};

const CaseStudyPage = async ({ params }: { params: { work: string, order: number } }) => {
  const fullPath = path.join(process.cwd(), 'data', 'case-studies', `${params.work}.md`);


  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-[#4D4D4D] mb-4">Project Not Found</h1>
        <p className="text-[rgb(120,120,120)]">The case study you are looking for does not exist.</p>
      </div>
    );
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const project: WorkProps = {
    slug: params.work,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle || '',
    tags: matterResult.data.tags || [],
    category: matterResult.data.category || '',
    imageUrl: matterResult.data.imageUrl || '',
    contentHtml,
  };

  return (
    <div className="container mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold text-center text-[#4D4D4D] mb-4">{project.title}</h1>

      {project.subtitle && <h2 className="text-2xl text-center text-[#4D4D4D] mb-8">{project.subtitle}</h2>}

      {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="w-full h-96 object-cover mb-8 rounded-lg" />}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
   
        {project.tags && project.tags.map((tag, index) => (
      
      <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">

            {tag}
     
          </span>
        ))}
      </div>
      <div className='flex flex-wrap items-center gap-4 border-b py-4 mt-6'>
      {project.category && <p className="text-center text-gray-600 mb-4">Category: {project.category}</p>}
     </div>
      <div className="case-study prose mx-auto" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
    </div>
  );
};

export default CaseStudyPage;
