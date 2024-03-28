'use client';
import { useState } from 'react';
import type { Photo } from '../schemas/Photos';

// components
import Card from './Card';
import Form from './Form';

type CardCreationProps = {
  photoResult: Photo;
};

const Creation = ({ photoResult }: CardCreationProps) => {
  const [fontStyle, setFontStyle] = useState('font-poppins');
  const [fontColor, setFontColor] = useState('#333333');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [message, setMessage] = useState('');

  // TODO: --> react-hook-form, zod validation, server action, react email, resend
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
