import Image from 'next/image';
import Link from 'next/link';

const CardSent = () => {
  return (
    <div className="flex flex-col justify-center gap-sent-cl">
      <div className="h-sent-icon-cl w-sent-icon-cl">
        <Image src="/sent_icon.svg" width={188} height={188} alt="sent_icon" />
      </div>
      <h2 className="text-sent-cl font-normal">
        Your card has been sent! Thank you for using eGreet!
      </h2>
      <div className="flex gap-5">
        <button className="btn h-input-cl w-full rounded-md bg-light-gray text-btn-cl text-black">
          reuse card
        </button>
        <Link
          href="/photogallery"
          className="btn h-input-cl w-full rounded-md bg-strawberry-600 text-btn-cl text-white"
        >
          send another card
        </Link>
      </div>
    </div>
  );
};

export default CardSent;
