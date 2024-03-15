import { fetchPhotos } from '../../../lib/api';
import type { PhotosResults } from '../../../schemas/Photos';

type CardCreationProps = {
  params: {
    photoId: string;
  };
};

export const generateMetadata = () => {
  return {
    title: 'Card Creation',
  };
};

const CardCreation = async ({ params: { photoId } }: CardCreationProps) => {
  const url = `https://api.pexels.com/v1/photos/${photoId}`;

  const photosResult: PhotosResults | undefined = await fetchPhotos(url);

  if (!photosResult) {
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
    <div>
      <div></div>
    </div>
  );
};

export default CardCreation;
