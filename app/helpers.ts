import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sortBy from 'lodash.sortby';

const markdownDirectory = 'markdown';

export function getProjectList() {
  try {
    const directory = path.join(process.cwd(), markdownDirectory);
    const projectFiles = fs.readdirSync(directory);
    const projects = sortBy(projectFiles.map(file => {
      const slug = file.replace('.md', '');
      const projectData = getProjectData(slug);
      return {
        slug,
        ...projectData,
      };
    }), ({ metadata }) => -metadata.date);
    return { projects };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export function getProjectData(slug: string) {
  try {
    const file = path.join(process.cwd(), markdownDirectory, `${slug}.md`);
    const text = fs.readFileSync(file, 'utf8');
    const { data, content } = matter(text);
    return { metadata: data, markdown: content };
  } catch (error) {
    return { error }
  }
}