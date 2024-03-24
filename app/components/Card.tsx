'use client';

import Image from 'next/image';
import type { Photo } from '../schemas/Photos';

type CardProps = {
  photoResult: Photo;
};

const Card = ({ photoResult }: CardProps) => {
  return (
    <div className=" my-auto h-card-cl w-card-cl overflow-hidden rounded-[20px] border-card-cl border-[#999997]">
      <div className="relative h-card-pic-cl">
        <Image
          src={photoResult.src.large}
          alt={photoResult.alt}
          fill={true}
          sizes="(min-width: 2100px) 549px, calc(16.01vw + 216px)"
          className="object-cover"
        />
      </div>
      <div className="flex h-card-msg-cl flex-col bg-white">
        <p className="caption self-end pr-1 pt-1">
          photo by: {photoResult.photographer}
        </p>
        <p className="my-auto text-center text-card-msg-cl">Happy Birthday</p>
      </div>
    </div>
  );
};

export default Card;
