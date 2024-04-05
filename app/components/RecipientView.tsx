'use client';

import Link from 'next/link';
import { Photo } from '../schemas/Photos';
import { useSearchParams } from 'next/navigation';
import { defaultCustomizationValues } from './Creation';
import { useToPng } from '@hugocxl/react-to-image';
import Card from './Card';

type RecipientViewProps = {
  photoResult: Photo;
};

const RecipientView = ({ photoResult }: RecipientViewProps) => {
  const searchParams = useSearchParams();
  const recipientName = searchParams.get('recipientName') ?? '';
  const senderName = searchParams.get('senderName') ?? '';

  const customizationValues = {
    fontStyle:
      searchParams.get('fontStyle') ?? defaultCustomizationValues.fontStyle,
    fontColor:
      searchParams.get('fontColor') ?? defaultCustomizationValues.fontColor,
    backgroundColor:
      searchParams.get('backgroundColor') ??
      defaultCustomizationValues.backgroundColor,
    message: searchParams.get('message') ?? '', // TODO: figure out the decoding part
  };

  const [_, convertToPng, cardRef] = useToPng<HTMLDivElement>({
    quality: 1.0,
    onSuccess: (data) => {
      const link = document.createElement('a');
      link.download = `eCard_from_${senderName}.png`;
      link.href = data;
      link.click();
    },
  });

  return (
    <div className="flex flex-col items-center gap-sent-cl">
      <div>
        <h1 className="text-recipient-name-cl leading-none">
          Hi {recipientName},
        </h1>
        <h3 className="text-recipient-sender-cl leading-snug">
          Here is your special eCard from {senderName}!
        </h3>
      </div>
      <Card
        photoResult={photoResult}
        {...customizationValues}
        cardRef={cardRef}
      />
      <div className="flex w-full justify-center gap-creation-btn-cl max-md:flex-wrap">
        <Link
          href="/"
          className="btn h-btn-cl w-btn-cl rounded-md bg-light-gray text-btn-cl text-black"
        >
          send eCards with eGreet
        </Link>
        <button
          className="btn h-btn-cl w-btn-cl rounded-md bg-strawberry-600 text-btn-cl text-white shadow-md"
          onClick={convertToPng}
        >
          download eCard
        </button>
      </div>
    </div>
  );
};

export default RecipientView;
