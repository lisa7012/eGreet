'use client';

import ColorPicker from './ColorPicker';
import { Dispatch, SetStateAction, useEffect, MouseEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import useFormPersist from 'react-hook-form-persist';
import { FormDataSchema, FormInputs } from '../schemas/FormData';
import { setCustomizationValuesToLS } from '../lib/utils';
import { sendEmail } from '../actions';
import { Photo } from '../schemas/Photos';
import { CardCustomization } from './Card';

type FormProps = {
  photoResult: Photo;
  customizationValues: CardCustomization;
  setFontStyle: Dispatch<SetStateAction<string>>;
  setFontColor: Dispatch<SetStateAction<string>>;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
  convertToPng: () => void;
};

type registeredFields = 'senderName' | 'recipientName' | 'recipientEmail';

const Form = ({
  photoResult,
  customizationValues,
  setFontStyle,
  setFontColor,
  setBackgroundColor,
  setMessage,
  convertToPng,
}: FormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<FormInputs>({
    resolver: zodResolver(FormDataSchema),
    mode: 'all',
  });

  const { fontStyle, fontColor, backgroundColor, message } =
    customizationValues;

  // persisting user's data when they decide to select another photo
  useFormPersist('userFormData', {
    watch,
    setValue,
    storage: localStorage,
  });

  const router = useRouter();

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCustomizationValuesToLS('userCustomizationValues', {
      fontStyle: fontStyle,
      fontColor: fontColor,
      backgroundColor: backgroundColor,
      message: message,
    });
    router.back();
  };

  useEffect(() => {
    // revalidating fields when the user comes back from selecting another photo and they have some fields already populated
    if (localStorage.getItem('userFormData')) {
      const fieldsToValidate: registeredFields[] = [];
      const fieldValues = getValues();

      let key: keyof FormInputs;
      for (key in fieldValues) {
        if (fieldValues[key].length !== 0) {
          fieldsToValidate.push(key);
        }
      }

      if (fieldsToValidate.length > 0) {
        trigger(fieldsToValidate);
      }
    }
  });

  const handleOnSubmitForm: SubmitHandler<FormInputs> = (data: FormInputs) => {
    convertToPng();

    const cardCustomization = {
      photoId: photoResult.id,
      cardImgSrc: localStorage.getItem('cardImgSrc') ?? '',
      customizationValues: {
        fontStyle: btoa(fontStyle),
        fontColor: btoa(fontColor),
        backgroundColor: btoa(backgroundColor),
        message: btoa(message),
      },
    };

    sendEmail(data, cardCustomization);

    if (localStorage.getItem('userFormData')) {
      localStorage.removeItem('userFormData');
    }

    if (localStorage.getItem('userCustomizationValues')) {
      localStorage.removeItem('userCustomizationValues');
    }

    if (localStorage.getItem('cardImgSrc')) {
      localStorage.removeItem('cardImgSrc');
    }

    router.push('/sent');
  };

  return (
    <form
      className="my-auto flex w-form-cl flex-col gap-form-cl"
      onSubmit={handleSubmit(handleOnSubmitForm)}
    >
      <div className="flex gap-input-field-cl">
        <div className="input-field relative w-sm-input-cl">
          <label htmlFor="senderName" className="text-label-cl font-normal">
            Your Name
            <p className="inline-block text-label-cl font-normal text-strawberry-600">
              *
            </p>
          </label>
          <input
            type="text"
            className="input h-input-cl pl-input-cl placeholder-shown:truncate"
            placeholder="Please enter your name"
            required
            {...register('senderName')}
          />
          {errors.senderName?.message && (
            <p className="absolute bottom-[-15px] text-caption-cl text-red-600">
              {errors.senderName?.message}
            </p>
          )}
        </div>
        <div className="input-field relative w-sm-input-cl">
          <label htmlFor="recipientName" className="text-label-cl font-normal">
            Recipient&apos;s Name
            <p className="inline-block text-label-cl font-normal text-strawberry-600">
              *
            </p>
          </label>
          <input
            type="text"
            className="input h-input-cl pl-input-cl placeholder-shown:truncate"
            placeholder="Please enter the recipient's name"
            required
            {...register('recipientName')}
          />
          {errors.recipientName?.message && (
            <p className="absolute bottom-[-15px] text-caption-cl text-red-600">
              {errors.recipientName?.message}
            </p>
          )}
        </div>
      </div>
      <div className="input-field relative">
        <label htmlFor="recipientEmail" className="text-label-cl font-normal">
          Recipient&apos;s Email
          <p className="inline-block text-label-cl font-normal text-strawberry-600">
            *
          </p>
        </label>
        <input
          type="text"
          className="input h-input-cl pl-input-cl"
          placeholder="Please enter the recipient's email"
          required
          {...register('recipientEmail')}
        />
        {errors.recipientEmail?.message && (
          <p className="absolute bottom-[-15px] text-caption-cl text-red-600">
            {errors.recipientEmail?.message}
          </p>
        )}
      </div>
      <div className="input-field">
        <label htmlFor="message" className="text-label-cl font-normal">
          Message
          <p className="inline-block text-label-cl font-normal text-strawberry-600">
            *
          </p>
        </label>
        <textarea
          className="input h-txt-area-cl pl-input-cl pt-input-cl"
          placeholder="Please write your message"
          required
          minLength={1}
          maxLength={250}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="caption">maximum characters of 250 characters</p>
      </div>
      <div className="flex gap-input-field-cl">
        <div className="input-field w-sm-input-cl">
          <label htmlFor="fontStyle" className="text-label-cl font-normal">
            Font
          </label>
          <select
            className="input h-input-cl cursor-pointer appearance-none bg-[url('/arrow_down.svg')] bg-clip-padding bg-[97%_50%] bg-no-repeat px-input-cl"
            value={fontStyle}
            onChange={(e) => setFontStyle(e.target.value)}
          >
            <option value="font-poppins">Poppins</option>
            <option value="font-indie-flower">Indie Flower</option>
            <option value="font-bona-nova">Bona Nova</option>
            <option value="font-leckerli-one">Leckerli One</option>
            <option value="font-cherry-bomb-one">Cherry Bomb One</option>
          </select>
        </div>
        <div className="input-field w-sm-input-cl">
          <label htmlFor="fontColor" className="text-label-cl font-normal">
            Font Color
          </label>
          <ColorPicker color={fontColor} setColor={setFontColor} />
        </div>
      </div>
      <div className="input-field w-sm-input-cl">
        <label htmlFor="backgroundColor" className="text-label-cl font-normal">
          Background Color
        </label>
        <ColorPicker color={backgroundColor} setColor={setBackgroundColor} />
      </div>
      <div className="mt-creation-btn-cl flex w-full gap-creation-btn-cl max-md:flex-wrap">
        <button
          className="btn h-btn-cl w-full rounded-md bg-light-gray text-btn-cl text-black hover:bg-gray-hover"
          onClick={handleOnClick}
        >
          select another photo
        </button>
        <button
          type="submit"
          className="btn h-btn-cl w-full rounded-md bg-strawberry-600 text-btn-cl text-white shadow-md enabled:hover:bg-strawberry-hover disabled:cursor-not-allowed disabled:opacity-75"
          disabled={!isDirty || !isValid || message.length < 1}
        >
          send
        </button>
      </div>
    </form>
  );
};

export default Form;
