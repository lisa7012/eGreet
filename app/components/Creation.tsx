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
  const [fontStyle, setFontStyle] = useState('poppins');
  const [fontColor, setFontColor] = useState('#333333');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  return (
    <>
      <Card photoResult={photoResult} />
      <Form />
    </>
  );
};

export default Creation;
