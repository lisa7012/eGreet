'use client';
import { useRouter } from 'next/navigation';

type PreviousPageButtonProps = {
  colorStyle: string;
  text: string;
};

const PreviousPageButton = ({ colorStyle, text }: PreviousPageButtonProps) => {
  const router = useRouter();

  // When this button renders on the sent page previous values will be removed
  // if (localStorage.getItem('userFormData')) {
  //   localStorage.removeItem('userFormData');
  // }

  // if (localStorage.getItem('userCustomizationValues')) {
  //   localStorage.removeItem('userCustomizationValues');
  // }

  // if (localStorage.getItem('cardImgSrc')) {
  //   localStorage.removeItem('cardImgSrc');
  // }

  const style = `btn h-btn-cl w-btn-cl rounded-md text-btn-cl ${colorStyle}`;

  const handleOnClick = () => {
    router.back();
  };

  return (
    <button onClick={handleOnClick} className={style}>
      {text}
    </button>
  );
};

export default PreviousPageButton;
