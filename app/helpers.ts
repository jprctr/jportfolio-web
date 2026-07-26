import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sortBy from 'lodash.sortby';

import { Metadata } from '@/app/types';

const markdownDirectory = 'markdown';
const projectDirectory = 'projects';

export function getAboutCopy() {
  try {
    const file = path.join(process.cwd(), markdownDirectory, 'about.md');
    const markdown = fs.readFileSync(file, 'utf8');
    return { markdown };
  } catch (error) {
    return { error };
  }
}

export function getProjectData(slug: string) {
  try {
    const file = path.join(process.cwd(), `${markdownDirectory}/${projectDirectory}`, `${slug}.md`);
    const text = fs.readFileSync(file, 'utf8');
    const { data, content } = matter(text);
    return { metadata: data as Metadata, markdown: content };
  } catch (error) {
    return { error };
  }
}

export function getProjectList() {
  try {
    const directory = path.join(process.cwd(), `${markdownDirectory}/${projectDirectory}`);
    const projectFiles = fs.readdirSync(directory);
    const projects = sortBy(projectFiles.map(file => {
      const slug = file.replace('.md', '');
      const projectData = getProjectData(slug);
      return {
        slug,
        ...projectData,
      };
    }), ({ metadata }) => metadata && metadata.date && -metadata.date);
    return { projects };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
