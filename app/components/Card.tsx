// Part of Creation client bundle

import Image from 'next/image';
import type { Photo } from '../schemas/Photos';

type CardProps = {
  photoResult: Photo;
  fontStyle: string;
  fontColor: string;
  backgroundColor: string;
  message: string;
};

const Card = ({
  photoResult,
  fontStyle,
  fontColor,
  backgroundColor,
  message,
}: CardProps) => {
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
      <div
        className="flex h-card-msg-cl flex-col"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <p className="caption self-end pr-1 pt-1" style={{ color: fontColor }}>
          photo by: {photoResult.photographer}
        </p>
        <p
          className={`mx-0.5 my-auto whitespace-pre-line text-wrap text-center text-card-msg-cl ${fontStyle}`}
          style={{ color: fontColor }}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Card;
