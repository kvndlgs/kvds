import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CaseStudyMetadata {
  order: number;
  title: string;
  subtitle?: string;
  tags?: string[];
  category?: string;
  imageUrl?: string;
  slug: string;
}

const caseStudiesDirectory = path.join(process.cwd(), 'data', 'case-studies');

export function getAllCaseStudies(): CaseStudyMetadata[] {
  const filenames = fs.readdirSync(caseStudiesDirectory).filter(name => name.endsWith('.md'));

  const allCaseStudies = filenames.map((filename) => {
    const filePath = path.join(caseStudiesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      order: data.order || 999,
      slug: filename.replace(/\.md$/, ''),
      title: data.title || 'No Title',
      subtitle: data.subtitle || '',
      tags: data.tags || [],
      category: data.category || '',
      imageUrl: data.imageUrl || '',
    };
  });

  return allCaseStudies.sort((a, b) => a.order - b.order);
}

export function getCaseStudyBySlug(slug: string): CaseStudyMetadata | null {
  const allCaseStudies = getAllCaseStudies();
  return allCaseStudies.find(study => study.slug === slug) || null;
}

export function getCaseStudiesByCategory(category: string): CaseStudyMetadata[] {
  const allCaseStudies = getAllCaseStudies();
  return allCaseStudies.filter(study => study.category === category);
}
