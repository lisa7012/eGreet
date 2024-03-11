'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { PhotosResults } from '../schemas/Photos';
import { useState } from 'react';

type GalleryProps = {
  photosResults: PhotosResults | undefined;
};

const Gallery = ({ photosResults }: GalleryProps) => {
  const [photoSelected, setPhotoSelected] = useState<number | null>(null);

  // TODO: check what this looks like in the browser after the search bar is created
  // Check if there are any photos
  if (!photosResults)
    return <h2 className="m-4 text-xl font-bold">No Photos Found.</h2>;

  return (
    // TODO: recalculate gap to take into account of caption and button
    <section className="grid-cols-gallery my-auto grid grid-cols-3 justify-center gap-x-gallery-x-cl gap-y-gallery-y-cl px-gallery-cl max-md:grid-cols-2">
      {photosResults.photos.map((photo) => (
        <div key={photo.id} className="flex flex-col gap-2">
          <div
            className={`group relative h-photo-cl overflow-hidden rounded-[20px] ${photoSelected === photo.id ? ' border-photo-cl border-tangerine' : ''}`}
            onClick={() => {
              if (photoSelected !== photo.id) {
                setPhotoSelected(photo.id);
              } else if (photoSelected === photo.id) setPhotoSelected(null);
            }}
          >
            {/* TODO: relint images after all space fixes */}
            <Image
              src={photo.src.large}
              alt={photo.alt}
              fill={true}
              sizes="(min-width: 2220px) calc(33.33vw - 201px), (min-width: 780px) calc(25.92vw - 38px), (min-width: 520px) calc(36.25vw - 17px), calc(41.5vw - 43px)"
              className="cursor-pointer object-cover"
            />
          </div>
          <div className="relative flex flex-row justify-between max-mobile:flex-col max-mobile:gap-1 max-mobile:self-center">
            <p className="text-caption-cl italic text-black">
              photo by: {photo.photographer}
            </p>
            {/* TODO: check and group styles to remove clutter */}
            {photoSelected === photo.id && (
              <Link
                href={`/creation/${photo.id}`}
                className="btn absolute right-0 rounded-next-btn-cl bg-tangerine px-next-x-cl py-next-y-cl text-next-btn-cl leading-tight text-white max-mobile:static max-mobile:self-center"
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
