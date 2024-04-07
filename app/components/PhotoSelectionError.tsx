import Image from 'next/image';
import PreviousPageButton from './PreviousPageButton';

const PhotoSelectionError = () => {
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
      <PreviousPageButton
        colorStyle="bg-strawberry-600 text-white"
        text="return to photo gallery"
      />
    </div>
  );
};

export default PhotoSelectionError;
