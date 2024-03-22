import { fetchASinglePhoto } from '../../../lib/api';
import type { Photo } from '../../../schemas/Photos';

// components
import Card from '../../../components/Card';
import Form from '../../../components/Form';

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
    <div className="relative flex justify-center gap-40">
      <Card photoResult={photoResult} />
      <Form />
    </div>
  );
};

export default CardCreation;
