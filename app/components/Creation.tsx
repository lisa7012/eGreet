'use client';
import { useState } from 'react';
import type { Photo } from '../schemas/Photos';

// components
import Card from './Card';
import Form from './Form';
import { getCustomizationValuesFromSS } from '../lib/utils';

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

  // TODO: --> server action, react email, resend
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
  };

  return (
    <>
      <Card photoResult={photoResult} {...customizationValues} />
      <Form {...customizationValues} {...customizationHandlers} />
    </>
  );
};

export default Creation;
