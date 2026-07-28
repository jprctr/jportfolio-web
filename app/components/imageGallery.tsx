import Image from 'next/image';
import Link from 'next/link';

import { getProjectImageList } from '@/app/helpers';

export default function ImageGallery({ slug }: { slug: string }) {
  const { imageList } = getProjectImageList(slug);
  return imageList.length && (
    <div className='flex flex-wrap gap-2 pb-4'>
      {
        imageList.map(image => (
          <div key={image} className='flex @3xl:basis-sm'>
            <Link
              className='m-auto'
              href={`/projects/${slug}/${image}`}
              target='_blank'
            >
              <Image
                src={`/projects/${slug}/${image}`}
                alt={`${slug} image ${image}`}
                className='height-auto object-cover rounded-md'
                width='720'
                height='720'
              />
            </Link>
          </div>
        ))
      }
    </div>
  );
}