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
              src={photo.src.large}
              alt={photo.alt}
              fill={true}
              sizes="(min-width: 2220px) calc(33.33vw - 201px), (min-width: 780px) calc(25.92vw - 38px), (min-width: 520px) calc(36.25vw - 17px), calc(41.5vw - 43px)"
              className="cursor-pointer object-cover"
            />
          </div>
          <div className="relative flex flex-row justify-between max-mobile:flex-col max-mobile:gap-2">
            <p className="caption">photo by: {photo.photographer}</p>
            {/* TODO: check and group styles to remove clutter */}
            {photoSelected === photo.id && (
              <Link
                href={`/creation/${photo.id}`}
                className="btn w-next-btn-cl h-next-btn-cl absolute right-0 rounded-next-btn-cl bg-tangerine text-next-btn-cl leading-tight text-white max-mobile:static max-mobile:w-full"
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
