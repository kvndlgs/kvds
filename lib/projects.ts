import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectData {
  order: number;
  title: string;
  subtitle?: string;
  tags?: string[];
  category?: string;
  imageUrl?: string;
  slug: string;
}

export function getSortedProjectsData(): ProjectData[] {
  const postsDirectory = path.join(process.cwd(), 'data', 'case-studies');
  const filenames = fs.readdirSync(postsDirectory);

  const allProjectsData = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      order: data.order || 999,
      slug: filename.replace(/\.md$/, ''),
      title: data.title || 'No Title',
      subtitle: data.subtitle || '',
      tags: data.tags || [],
      category: data.category || '',
      imageUrl: data.imageUrl || 'https://via.placeholder.com/400x300',
    };
  });

  // Sort projects by order field (ascending - lower numbers first)
  return allProjectsData.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else {
      return 1;
    }
  });
}
