// Part of Creation client bundle

import Image from 'next/image';
import type { Photo } from '../schemas/Photos';

export type CardCustomization = {
  fontStyle: string;
  fontColor: string;
  backgroundColor: string;
  message: string;
};

type CardProps = {
  photoResult: Photo;
  customizationValues: CardCustomization;
  cardRef: (domNode: HTMLDivElement) => void;
};

const Card = ({ photoResult, customizationValues, cardRef }: CardProps) => {
  const { fontStyle, fontColor, backgroundColor, message } =
    customizationValues;
  return (
    <div
      className="my-auto h-card-cl w-card-cl overflow-hidden rounded-[20px] border-card-cl border-[#DCDBD9]"
      ref={cardRef}
    >
      <div className="relative h-card-pic-cl">
        <Image
          src={photoResult.src.large}
          alt={photoResult.alt}
          fill={true}
          sizes="(min-width: 2140px) 552px, (min-width: 940px) calc(12.88vw + 279px), (min-width: 780px) calc(51.43vw - 77px), calc(16.09vw + 250px)"
          className="object-cover"
        />
      </div>
      <div
        className="flex h-card-msg-cl flex-col"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <p
          className="caption self-start pl-2 pt-1"
          style={{ color: fontColor }}
        >
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
