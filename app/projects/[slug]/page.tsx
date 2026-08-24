import { redirect } from 'next/navigation';
import ReactMarkdown from "react-markdown";

import { getProjectData, getProjectImageList } from '@/app/helpers';
import ProjectSummary from '@/app/components/projectSummary';
import ImageGallery from '@/app/components/imageGallery';

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
  const { imageList } = getProjectImageList(slug);
  if (project.error) {
    redirect('/');
  }
  return (
    <div className='@container flex flex-col gap-2 bg-white-layer p-4 rounded-md'>
      <div className='detail flex flex-col mb-2'>
        {project.metadata && (
          <>
            <ProjectSummary metadata={project.metadata} />
            {project.metadata.link && <a className='mt-2' href={project.metadata.link} target='_blank'>Link ↗</a>}
          </>
        )}
      </div>
      <div className='flex flex-col'>
        <div className='flex'> 
          {imageList && <ImageGallery slug={slug} imageList={imageList} />}
        </div>
        <div className='project flex flex-col gap-2'>
          <ReactMarkdown>{project.markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
