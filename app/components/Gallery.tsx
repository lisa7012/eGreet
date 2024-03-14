'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { PhotosResults } from '../schemas/Photos';
import { useMemo, useState } from 'react';

type GalleryProps = {
  photosResults: PhotosResults;
};

const Gallery = ({ photosResults }: GalleryProps) => {
  const [photoSelected, setPhotoSelected] = useState<number | null>(null);
  // WAY 1 -> breaks photo selection T_T
  // const [photosArray] = useState<PhotosResults | undefined>(photosResults);
  // const [numberOfitemsShown, setNumberOfItemsToShown] = useState(15);
  // const [displayShowMoreButton, setDisplayShowMoreButton] = useState(true);

  // const showMore = () => {
  //   if (!photosArray)
  //     return (
  //       <div className="my-auto flex flex-col justify-center">
  //         <h2 className="self-center text-center text-xl font-medium">
  //           Oops! No photos were found with that search term. Please try again.
  //         </h2>
  //       </div>
  //     );
  //   if (numberOfitemsShown + 15 <= photosArray.photos.length) {
  //     setNumberOfItemsToShown(numberOfitemsShown + 15);
  //   } else {
  //     setNumberOfItemsToShown(photosArray.photos.length);
  //     setDisplayShowMoreButton(false);
  //   }
  // };

  // const itemsToShow = useMemo(() => {
  //   return photosArray?.photos.slice(0, numberOfitemsShown).map((photo) => (
  //     <div key={photo.id} className="flex flex-col gap-2">
  //       <div
  //         className={`group relative h-photo-cl overflow-hidden rounded-[20px] ${photoSelected === photo.id ? ' border-photo-cl border-tangerine' : ''}`}
  //         onClick={() => {
  //           if (photoSelected !== photo.id) {
  //             setPhotoSelected(photo.id);
  //           } else if (photoSelected === photo.id) setPhotoSelected(null);
  //         }}
  //       >
  //         {/* TODO: relint images after all space fixes */}
  //         <Image
  //           src={photo.src.large}
  //           alt={photo.alt}
  //           fill={true}
  //           sizes="(min-width: 2220px) calc(33.33vw - 201px), (min-width: 780px) calc(25.92vw - 38px), (min-width: 520px) calc(36.25vw - 17px), calc(41.5vw - 43px)"
  //           className="cursor-pointer object-cover"
  //         />
  //       </div>
  //       <div className="relative flex flex-row justify-between max-mobile:flex-col max-mobile:gap-1">
  //         <p className="text-caption-cl italic text-black">
  //           photo by: {photo.photographer}
  //         </p>
  //         {/* TODO: check and group styles to remove clutter */}
  //         {photoSelected === photo.id && (
  //           <Link
  //             href={`/creation/${photo.id}`}
  //             className="btn absolute right-0 rounded-next-btn-cl bg-tangerine px-next-x-cl py-next-y-cl text-next-btn-cl leading-tight text-white max-mobile:static max-mobile:self-center"
  //           >
  //             next
  //           </Link>
  //         )}
  //       </div>
  //     </div>
  //   ));
  // }, [photosArray, numberOfitemsShown]);

  // ORIGINAL
  // if (!photosResults)
  //   return (
  //     <div className="my-auto flex flex-col justify-center">
  //       <h2 className="self-center text-center text-xl font-medium">
  //         Oops! No photos were found with that search term. Please try again.
  //       </h2>
  //     </div>
  //   );

  // return (
  //   <section className="grid-cols-gallery my-auto grid grid-cols-3 justify-center gap-x-gallery-x-cl gap-y-gallery-y-cl px-gallery-cl max-md:grid-cols-2">
  //     {photosResults.photos.map((photo) => (
  //       <div key={photo.id} className="flex flex-col gap-2">
  //         <div
  //           className={`group relative h-photo-cl overflow-hidden rounded-[20px] ${photoSelected === photo.id ? ' border-photo-cl border-tangerine' : ''}`}
  //           onClick={() => {
  //             if (photoSelected !== photo.id) {
  //               setPhotoSelected(photo.id);
  //             } else if (photoSelected === photo.id) setPhotoSelected(null);
  //           }}
  //         >
  //           {/* TODO: relint images after all space fixes */}
  //           <Image
  //             src={photo.src.large}
  //             alt={photo.alt}
  //             fill={true}
  //             sizes="(min-width: 2220px) calc(33.33vw - 201px), (min-width: 780px) calc(25.92vw - 38px), (min-width: 520px) calc(36.25vw - 17px), calc(41.5vw - 43px)"
  //             className="cursor-pointer object-cover"
  //           />
  //         </div>
  //         <div className="relative flex flex-row justify-between max-mobile:flex-col max-mobile:gap-1">
  //           <p className="text-caption-cl italic text-black">
  //             photo by: {photo.photographer}
  //           </p>
  //           {/* TODO: check and group styles to remove clutter */}
  //           {photoSelected === photo.id && (
  //             <Link
  //               href={`/creation/${photo.id}`}
  //               className="btn absolute right-0 rounded-next-btn-cl bg-tangerine px-next-x-cl py-next-y-cl text-next-btn-cl leading-tight text-white max-mobile:static"
  //             >
  //               next
  //             </Link>
  //           )}
  //         </div>
  //       </div>
  //     ))}
  //   </section>
  // );

  // WAY 1
  // return (
  //   <section className="grid-cols-gallery my-auto grid grid-cols-3 justify-center gap-x-gallery-x-cl gap-y-gallery-y-cl px-gallery-cl max-md:grid-cols-2">
  //     {itemsToShow}
  //     <button
  //       onClick={showMore}
  //       className={displayShowMoreButton ? '' : 'hidden'}
  //     >
  //       show more
  //     </button>
  //   </section>
  // );

  // WAY 2
  // if (!photosResults || photosResults.per_page === 0)
  //   return (
  //     <div className="my-auto flex flex-col justify-center">
  //       <h2 className="self-center text-center text-xl font-medium">
  //         Oops! No photos were found with that search term. Please try again.
  //       </h2>
  //     </div>
  //   );

  // WAY 2
  return (
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
          <div className="relative flex flex-row justify-between max-mobile:flex-col max-mobile:gap-1">
            <p className="text-caption-cl italic text-black">
              photo by: {photo.photographer}
            </p>
            {/* TODO: check and group styles to remove clutter */}
            {photoSelected === photo.id && (
              <Link
                href={`/creation/${photo.id}`}
                className="btn absolute right-0 rounded-next-btn-cl bg-tangerine px-next-x-cl py-next-y-cl text-next-btn-cl leading-tight text-white max-mobile:static"
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
