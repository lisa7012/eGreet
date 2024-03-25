import Image from 'next/image';
import Link from 'next/link';

export const generateMetadata = () => {
  return {
    title: 'Thank you for using eGreet!',
  };
};

const CardSent = () => {
  return (
    <div className="my-auto flex flex-col items-center justify-center gap-sent-cl">
      <div className="h-sent-icon-cl w-sent-icon-cl">
        <Image src="/sent_icon.svg" width={188} height={188} alt="sent_icon" />
      </div>
      <h2 className="text-center text-sent-cl font-normal">
        Your card has been sent! Thank you for using eGreet!
      </h2>
      <div className="flex justify-center gap-5 max-sm:flex-wrap">
        <button className="btn w-sent-btns-cl h-input-cl rounded-md bg-light-gray text-btn-cl text-black">
          reuse card
        </button>
        <Link
          href="/photogallery"
          className="btn w-sent-btns-cl h-input-cl rounded-md bg-strawberry-600 text-btn-cl text-white"
        >
          send another card
        </Link>
      </div>
    </div>
  );
};

export default CardSent;
