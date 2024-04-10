'use client';
import { useRouter } from 'next/navigation';

type PreviousPageButtonProps = {
  colorStyle: string;
  text: string;
};

const PreviousPageButton = ({ colorStyle, text }: PreviousPageButtonProps) => {
  const router = useRouter();

  // When this button renders on the sent page previous values will be removed
  if (typeof window !== 'undefined') {
    if (sessionStorage.getItem('userFormData')) {
      sessionStorage.removeItem('userFormData');
    }

    if (sessionStorage.getItem('userCustomizationValues')) {
      sessionStorage.removeItem('userCustomizationValues');
    }

    if (sessionStorage.getItem('cardImgSrc')) {
      sessionStorage.removeItem('cardImgSrc');
    }
  }

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
