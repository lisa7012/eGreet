import { fetchASinglePhoto } from '../../../lib/api';
import type { Photo } from '../../../schemas/Photos';
import type { Metadata } from 'next';

// components
import Creation from '../../../components/Creation';
import PhotoSelectionError from '../../../components/PhotoSelectionError';

type CardCreationProps = {
  params: {
    id: number;
  };
};

export const metadata: Metadata = {
  title: 'Card Creation',
};

const CardCreation = async ({ params: { id } }: CardCreationProps) => {
  const url = `https://api.pexels.com/v1/photos/${id}`;

  const photoResult: Photo | undefined = await fetchASinglePhoto(url);

  if (!photoResult) {
    return <PhotoSelectionError />;
  }

  return (
    <div className="my-auto flex justify-center gap-creation-cl max-md:flex-wrap">
      <Creation photoResult={photoResult} />
    </div>
  );
};

export default CardCreation;
