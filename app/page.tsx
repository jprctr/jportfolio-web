import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from "react-markdown";

import { thumbnails } from '@/app/projects/metadata';
import { getAboutCopy, getProjectList } from '@/app/helpers';
import { Metadata } from '@/app/types';
import ProjectSummary from '@/app/components/projectSummary';

export default function Home() {
  const about = getAboutCopy();
  const list = getProjectList();

  return (
    <>
      <div className='detail flex flex-col gap-4 px-4'>
        <ReactMarkdown>{about.markdown}</ReactMarkdown>
      </div>
      <h2 className='px-4'>Projects</h2>
      {
        list.projects && list.projects.map(({ slug, metadata }) => (
          <Link key={slug} className='@container bg-white-layer px-4 py-2 rounded-md' href={`/projects/${slug}`}>
            {metadata && (

              <div className='flex flex-col'>
                <div className='pb-1 @2xl:max-w-5/8'>
                  <ProjectSummary metadata={metadata} />
                </div>
                <div className='flex flex-col @2xl:gap-4 @2xl:flex-row'>
                  <div className='flex-64 py-2 mb-auto'>
                    <Image
                      src={`/projects/${slug}/${thumbnails[slug] || 0}.jpg`}
                      alt={`${metadata.title} thumbnail`}
                      loading='eager'
                      className='aspect-auto object-cover object-top rounded-md h-auto'
                      width='720'
                      height='720'
                    />
                  </div>
                  <div className='flex-36 py-2'>
                    <p>{metadata.description}</p>
                  </div>
                </div>
              </div>
            )}
          </Link>
        ))
      }
    </>
  );
}
