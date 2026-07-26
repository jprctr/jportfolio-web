import { redirect } from 'next/navigation';
import ReactMarkdown from "react-markdown";

import { getProjectData } from '@/app/helpers';

/*
  look into:
  - generateStaticParams
  - loading
  references: 
  https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
  https://www.singlehanded.dev/blog/building-markdown-blog-with-nextjs-app-router
*/

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectData(slug);
  console.log(project);
  if (project.error) {
    redirect('/');
  }
  return (
    <ReactMarkdown>{project.markdown}</ReactMarkdown>
  );
}