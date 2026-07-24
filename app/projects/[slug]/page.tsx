import fs from 'fs';
import path from 'path';
import { redirect } from 'next/navigation';
import ReactMarkdown from "react-markdown";

/*
  look into:
  - generateStaticParams
  - loading
  - redirect
  references: 
  https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
  https://www.singlehanded.dev/blog/building-markdown-blog-with-nextjs-app-router
*/

function getProjectMarkdown(slug) {
  try {
    const file = path.join(process.cwd(), 'markdown', `${slug}.md`);
    const markdown = fs.readFileSync(file, 'utf8');
    return { markdown };
  } catch(error) {
    return { error }
  }
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectMarkdown(slug);
  if (project.error) {
    redirect('/');
  }
  return (
    <ReactMarkdown>{project.markdown}</ReactMarkdown>
  );
}