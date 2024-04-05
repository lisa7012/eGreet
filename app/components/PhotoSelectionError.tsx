'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PhotoSelectionError = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };

  return (
    <div className="my-auto flex flex-col items-center justify-center gap-sent-cl">
      <div className="h-page-icon-cl w-page-icon-cl">
        <Image
          src="/error_icon.svg"
          width={188}
          height={188}
          alt="error_icon"
        />
      </div>
      <h2 className="self-center text-center text-xl font-medium">
        An error has occured. Please return to the photo gallery and select a
        photo again.
      </h2>
      <button
        className="btn h-btn-cl w-btn-cl rounded-md bg-strawberry-600 text-btn-cl text-white shadow-md"
        onClick={handleOnClick}
      >
        return to photo gallery
      </button>
    </div>
  );
};

export default PhotoSelectionError;
