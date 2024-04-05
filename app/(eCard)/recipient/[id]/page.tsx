import { Photo } from '../../../schemas/Photos';
import { Metadata } from 'next';
import { fetchASinglePhoto } from '../../../lib/api';
import RecipientView from '../../../components/RecipientView';

type RecipientPageProps = {
  params: {
    id: number;
  };
};

export const metadata: Metadata = {
  title: 'Your eCard',
};

const RecipientPage = async ({ params: { id } }: RecipientPageProps) => {
  const url = `https://api.pexels.com/v1/photos/${id}`;

  const photoResult: Photo | undefined = await fetchASinglePhoto(url);

  if (!photoResult) {
    return (
      <h2 className="my-auto self-center text-center text-xl font-medium">
        An error has occured. Please try again later! Thank you for your
        understanding!
      </h2>
    );
  }
  return <RecipientView photoResult={photoResult} />;
};

export default RecipientPage;
