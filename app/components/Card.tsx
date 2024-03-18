'use client';

import Image from 'next/image';
import type { Photo } from '../schemas/Photos';

type CardProps = {
  photoResult: Photo;
};

const Card = ({ photoResult }: CardProps) => {
  return (
    <div className=" h-[765px] w-[555px] overflow-hidden rounded-[20px] border-[3px] border-[#999997]">
      <div className="relative h-[375px]">
        <Image
          src={photoResult.src.large}
          alt={photoResult.alt}
          fill={true}
          sizes="(min-width: 1400px) 549px, (min-width: 900px) calc(41.25vw - 20px), (min-width: 760px) calc(82.5vw - 385px), calc(96.67vw - 475px)"
          className="object-cover"
        />
      </div>
      <div className="flex h-[390px] flex-col bg-white">
        <p className="caption self-end">photo by: {photoResult.photographer}</p>
        <p className="my-auto text-center">Happy Birthday</p>
      </div>
    </div>
  );
};

export default Card;
