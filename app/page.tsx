import Link from 'next/link';
import ReactMarkdown from "react-markdown";

import { getAboutCopy, getProjectList } from '@/app/helpers';
import ProjectSummary from '@/app/components/projectSummary';

export default function Home() {
  const about = getAboutCopy();
  const list = getProjectList();

  return (
    <>
      <div className='detail flex flex-col gap-4'>
        <ReactMarkdown>{about.markdown}</ReactMarkdown>
      </div>
      <h2>Projects</h2>
      {
        list.projects && list.projects.map(({ slug, metadata }) => (
          <Link key={slug} className='bg-white-layer px-4 py-2 rounded-md' href={`/projects/${slug}`}>
            <ProjectSummary metadata={metadata} />
            <p className='py-2'>{metadata.description}</p>
          </Link>
        ))
      }
    </>
  );
}
