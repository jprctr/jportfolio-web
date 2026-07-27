import Link from 'next/link';

import { Metadata } from '@/app/types';

export default function ProjectSummary({ metadata }: { metadata: Metadata }) {
  const { title, description, category, client, industry, link } = metadata;
  return (
    <div className='flex flex-col gap-2 my-2'>
      <h3>{title}</h3>
      <div className='flex text-sm gap-2'>
        {[client, industry, category].map((v, i) => (
          <div className='bg-white-layer px-2 rounded-md' key={i}>{v}</div>
        ))}
      </div>
    </div>
  )
}
