import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import PreviousPageButton from '@/app/components/PreviousPageButton';

export const metadata: Metadata = {
  title: 'Thank you for using eGreet!',
};

const CardSentPage = () => {
  return (
    <div className="my-auto flex flex-col items-center justify-center gap-sent-cl">
      <div className="h-page-icon-cl w-page-icon-cl">
        <Image src="/sent_icon.svg" width={188} height={188} alt="sent_icon" />
      </div>
      <h2 className="text-center text-sent-cl font-normal">
        Your card has been sent! Thank you for using eGreet!
      </h2>
      <div className="flex justify-center gap-5 max-sm:flex-wrap">
        <PreviousPageButton
          colorStyle="bg-light-gray text-black hover:bg-gray-hover"
          text="reuse card"
        />
        <Link
          href="/photogallery"
          className="btn h-btn-cl w-btn-cl rounded-md bg-strawberry-600 text-btn-cl text-white shadow-md hover:bg-strawberry-hover"
        >
          send another card
        </Link>
      </div>
    </div>
  );
};

export default CardSentPage;
