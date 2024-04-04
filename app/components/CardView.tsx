'use client';

import { ComponentType } from 'react';
import { Photo } from '../schemas/Photos';

type CardViewProps = {
  photoResult: Photo;
  UserView: ComponentType<SenderFormProps | RecipientProps>;
};

const CardView = ({ photoResult, UserView }: CardViewProps) => {
  return (
    <div className="my-auto flex justify-center gap-creation-cl max-md:flex-wrap">
      <Card photoResult={photoResult} />
      <UserView />
    </div>
  );
};

export default CardView;
