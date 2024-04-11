'use client';
import { useState } from 'react';
import type { Photo } from '../schemas/Photos';
import { getCustomizationValuesFromSS } from '../lib/utils';
import { useToPng } from '@hugocxl/react-to-image';

// components
import Card from './Card';
import Form from './Form';

type CardViewProps = {
  photoResult: Photo;
};

export const defaultCustomizationValues = {
  fontStyle: 'font-poppins',
  fontColor: '#333333',
  backgroundColor: '#ffffff',
  message: '',
};

const Creation = ({ photoResult }: CardViewProps) => {
  const values = getCustomizationValuesFromSS(
    'userCustomizationValues',
    defaultCustomizationValues,
  );

  const [fontStyle, setFontStyle] = useState(values.fontStyle);
  const [fontColor, setFontColor] = useState(values.fontColor);
  const [backgroundColor, setBackgroundColor] = useState(
    values.backgroundColor,
  );
  const [message, setMessage] = useState(values.message);

  const [_, convertToPng, cardRef] = useToPng<HTMLDivElement>({
    quality: 1.0,
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
    <div className="m-auto flex justify-center gap-creation-cl max-md:flex-wrap">
      <Card
        photoResult={photoResult}
        customizationValues={customizationValues}
        cardRef={cardRef}
      />
      <Form
        photoResult={photoResult}
        customizationValues={customizationValues}
        {...customizationHandlers}
      />
    </div>
  );
};

export default Creation;
