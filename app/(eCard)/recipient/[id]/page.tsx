import ReceivedCard from '@/app/components/ReceivedCard';
import { Metadata } from 'next';

type RecipientViewProps = {
  params: {
    id: number;
  };
};

export const metadata: Metadata = {
  title: 'Your eCard',
};

const RecipientView = () => {
  return <ReceivedCard />;
};

export default RecipientView;
