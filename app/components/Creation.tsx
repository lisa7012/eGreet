'use client';
import { useState } from 'react';
import type { Photo } from '../schemas/Photos';
import { getCustomizationValuesFromSS } from '../lib/utils';
import { useToPng } from '@hugocxl/react-to-image';

// components
import Card from './Card';
import Form from './Form';

type CardCreationProps = {
  photoResult: Photo;
};

const initialCustomizationValues = {
  fontStyle: 'font-poppins',
  fontColor: '#333333',
  backgroundColor: '#ffffff',
  message: '',
};

const Creation = ({ photoResult }: CardCreationProps) => {
  let values = getCustomizationValuesFromSS(
    'userCustomizationValues',
    initialCustomizationValues,
  );

  const [fontStyle, setFontStyle] = useState(values.fontStyle);
  const [fontColor, setFontColor] = useState(values.fontColor);
  const [backgroundColor, setBackgroundColor] = useState(
    values.backgroundColor,
  );
  const [message, setMessage] = useState(values.message);

  const [_, convertToPng, cardRef] = useToPng<HTMLDivElement>({
    onSuccess: (data) => {
      sessionStorage.setItem('cardImgSrc', data);
    },
  });

  const customizationValues = {
    fontStyle,
    fontColor,
    backgroundColor,
    message,
  };

  const customizationHandlers = {
    setFontStyle,
    setFontColor,
    setBackgroundColor,
    setMessage,
    convertToPng,
  };

  return (
    <>
      <Card
        photoResult={photoResult}
        {...customizationValues}
        cardRef={cardRef}
      />
      <Form {...customizationValues} {...customizationHandlers} />
    </>
  );
};

export default Creation;
