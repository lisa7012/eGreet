'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { PhotosResults } from '../schemas/Photos';
import { useState } from 'react';

type GalleryProps = {
  photosResults: PhotosResults;
};

const Gallery = ({ photosResults }: GalleryProps) => {
  const [photoSelected, setPhotoSelected] = useState<number | null>(null);

  return (
    <section className="grid-cols-gallery my-auto grid grid-cols-3 justify-center gap-x-gallery-x-cl gap-y-gallery-y-cl px-gallery-cl max-md:grid-cols-2">
      {photosResults.photos.map((photo) => (
        <div key={photo.id} className="flex flex-col gap-photo-cl">
          <div
            className={`group relative h-photo-cl overflow-hidden rounded-[20px] ${photoSelected === photo.id ? ' border-photo-cl border-tangerine' : ''}`}
            onClick={() => {
              if (photoSelected !== photo.id) {
                setPhotoSelected(photo.id);
              } else if (photoSelected === photo.id) setPhotoSelected(null);
            }}
          >
            <Image
              unoptimized
              src={photo.src.large}
              alt={photo.alt}
              fill={true}
              sizes="(min-width: 2180px) calc(33.41vw - 203px), (min-width: 780px) 24.35vw, (min-width: 540px) calc(34.55vw + 17px), calc(39.55vw - 9px)"
              className="cursor-pointer object-cover"
            />
          </div>
          <div className="relative flex flex-row justify-between max-mobile:flex-col max-mobile:gap-2">
            <p className="caption">photo by: {photo.photographer}</p>
            {photoSelected === photo.id && (
              <Link
                href={`/creation/${photo.id}`}
                className="btn absolute right-0 h-next-btn-cl w-next-btn-cl rounded-next-btn-cl bg-tangerine text-next-btn-cl leading-tight text-white hover:bg-tangerine-hover max-mobile:static max-mobile:w-full"
              >
                next
              </Link>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
