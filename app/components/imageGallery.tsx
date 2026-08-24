'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

import { galleryLayout } from '@/app/projects/metadata';

export default function ImageGallery({ slug, imageList }: { slug: string, imageList: string[] }) {
  const [selected, setSelected] = useState();
  const customLayout = galleryLayout[slug];

  function moveList(direction) {
    const currentIndex = imageList.indexOf(selected);
    let nextIndex = currentIndex + direction;
    if (nextIndex >= imageList.length) {
      nextIndex -= imageList.length;
    }
    if (nextIndex < 0) {
      nextIndex += imageList.length;
    }
    setSelected(imageList[nextIndex]);
  }

  const handleKeyDown = useCallback(({ key }: { key: string }) => {
    switch (key) {
      case 'Escape':
        setSelected();
        break;
      case 'ArrowLeft':
        moveList(-1);
        break;
      case 'ArrowRight':
        moveList(1);
        break;
    }
  }, [selected]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return imageList && imageList.length ? (
    <div className='flex flex-wrap gap-2 pb-4'>
      {
        imageList.map((image, i) => (
          <div
            key={image}
            className={`flex ${customLayout && customLayout[i] || '@3xl:flex-1 @3xl:basis-sm'}`}
          >
            <div
              className='m-auto cursor-pointer'
              onClick={() => setSelected(image)}
            >
              <Image
                src={`/projects/${slug}/${image}`}
                alt={`${slug} image ${image}`}
                loading='eager'
                className='height-auto object-cover rounded-md'
                width='720'
                height='720'
              />
            </div>
          </div>
        ))
      }
      {selected && (
        <div className='fixed top-0 left-0 right-0 bottom-0 flex'>
          <div
            className='fixed top-0 left-0 right-0 bottom-0 bg-white opacity-62'
            onClick={() => setSelected()}
          />
          <div
            className='fixed select-none rounded-md top-2 right-2 px-2 pb-1 cursor-pointer bg-white/62 z-2 text-lg'
            onClick={() => setSelected()}
          >
            🗙
          </div>
          <div
            className='fixed select-none rounded-md top-1/2 left-2 px-2 pb-1 cursor-pointer bg-white/62 z-2 text-lg'
            onClick={() => moveList(-1)}
          >
            ◀
          </div>
          <div
            className='fixed select-none rounded-md top-1/2 right-2 px-2 pb-1 cursor-pointer bg-white/62 z-2 text-lg'
            onClick={() => moveList(1)}
          >
            ▶
          </div>
          <div className='flex relative max-h-full z-1 m-auto p-4 @2xl:p-12 pointer-events-none'>
            <Image
              src={`/projects/${slug}/${selected}`}
              alt={`${slug} image ${selected}`}
              loading='eager'
              className='object-contain'
              width='1920'
              height='1920'
            />
          </div>
        </div>
      )}
    </div>
  ) : null;
}