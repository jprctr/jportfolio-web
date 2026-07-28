import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from "react-markdown";

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
              <div className='flex flex-col @2xl:gap-4 @2xl:flex-row @2xl:flex-row-reverse'>
                <div className='flex-1 py-2'>
                  <Image
                    src={`/projects/${slug}/0.jpg`}
                    alt={`${metadata.title} thumbnail`}
                    className='aspect-3/2 height-auto object-cover object-top rounded-md'
                    width='720'
                    height='720'
                  />
                </div>
                <div className='flex-2 @lg:bg-red'>
                  <ProjectSummary metadata={metadata} />
                  <p className='py-2'>{metadata.description}</p>
                </div>
              </div>
            )}
          </Link>
        ))
      }
    </>
  );
}
