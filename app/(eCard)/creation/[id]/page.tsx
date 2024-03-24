import { fetchASinglePhoto } from '../../../lib/api';
import type { Photo } from '../../../schemas/Photos';

// components
import Card from '../../../components/Card';
import Form from '../../../components/Form';
import Image from 'next/image';

type CardCreationProps = {
  params: {
    id: number;
  };
};

export const generateMetadata = () => {
  return {
    title: 'Card Creation',
  };
};

const CardCreation = async ({ params: { id } }: CardCreationProps) => {
  const url = `https://api.pexels.com/v1/photos/${id}`;

  const photoResult: Photo | undefined = await fetchASinglePhoto(url);

  if (!photoResult) {
    return (
      <div className="my-auto flex flex-col justify-center">
        <h2 className="self-center text-center text-xl font-medium">
          An error has occured. Please return to the photo gallery and select a
          photo again.
        </h2>
        {/* // should i put a button to redirect user back to photo gallery? */}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-creation-cl max-md:flex-wrap">
      <div className="hidden flex-nowrap items-center justify-center text-info-cl max-md:flex">
        <p className="font-medium">
          Please scroll down and fill in the information
        </p>
        {/* //TODO: consider making a photocontainer since it's kinda used a lot */}
        <div className="flex h-info-arrow-cl w-info-arrow-cl">
          <Image
            src="/ei_arrow-down.svg"
            width={35}
            height={35}
            alt="arrow-down"
            className="self-center"
          />
        </div>
      </div>
      <Card photoResult={photoResult} />
      <Form />
    </div>
  );
};

export default CardCreation;
