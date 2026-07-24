import fs from 'fs';
import path from 'path';

const markdownDirectory = 'markdown';

export function getProjectList() {
  try {
    const directory = path.join(process.cwd(), markdownDirectory);
    const projects = fs.readdirSync(directory);
    return { projects };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export function getProjectMarkdown(slug) {
  try {
    const file = path.join(process.cwd(), markdownDirectory, `${slug}.md`);
    const markdown = fs.readFileSync(file, 'utf8');
    return { markdown };
  } catch (error) {
    return { error }
  }
}