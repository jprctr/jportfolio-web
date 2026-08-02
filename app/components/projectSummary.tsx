import Link from 'next/link';

import { Metadata } from '@/app/types';

export default function ProjectSummary({ metadata }: { metadata: Metadata }) {
  const { title, description, category, client, industry, link } = metadata;
  const excludeClient = industry === 'Art';
  return (
    <div className='flex flex-col gap-2 my-1'>
      <h3>{excludeClient ? title : `${client}: ${title}`}</h3>
      <div className='flex flex-wrap text-sm gap-2'>
        {[client, industry, category]
          .filter((v, i) => (excludeClient && i === 1 || i !== 0))
          .map((v, i) => (
            <div className='bg-white-layer px-2 rounded-md' key={i}>{v}</div>
          ))
        }
      </div>
    </div>
  )
}
