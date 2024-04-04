// Part of Creation client bundle

import ColorPicker from './ColorPicker';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import useFormPersist from 'react-hook-form-persist';
import { FormDataSchema, FormInputs } from '../schemas/FormData';
import { setCustomizationValuesToSS } from '../lib/utils';
import { sendEmail } from '../actions';
import { Photo } from '../schemas/Photos';

type FormProps = {
  photoResult: Photo;
  fontStyle: string;
  fontColor: string;
  backgroundColor: string;
  message: string;
  setFontStyle: Dispatch<SetStateAction<string>>;
  setFontColor: Dispatch<SetStateAction<string>>;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
  convertToPng: () => void;
};

type registeredFields = 'name' | 'recipientName' | 'recipientEmail';

const Form = ({
  photoResult,
  fontStyle,
  fontColor,
  backgroundColor,
  message,
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

  // persisting user's data when they decide to select another photo
  useFormPersist('userFormData', {
    watch,
    setValue,
  });

  const router = useRouter();

  const handleOnClick = () => {
    setCustomizationValuesToSS('userCustomizationValues', {
      fontStyle: fontStyle,
      fontColor: fontColor,
      backgroundColor: backgroundColor,
      message: message,
    });
    router.back();
  };

  useEffect(() => {
    // revalidating fields when the user comes back from selecting another photo and they have some fields already populated
    if (sessionStorage.getItem('userFormData')) {
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
  }, []);

  // WORKING HERE NOWWWWWWWWWWWWWWWWWWWWW
  const handleOnSubmitForm: SubmitHandler<FormInputs> = (data: FormInputs) => {
    convertToPng();
    const cardImgSrc = sessionStorage.getItem('cardImgSrc') ?? '';

    // console.log(cardImgSrc);
    // const cardImgSrc = sessionStorage.getItem('cardSrcImg') ?? '';
    sendEmail(data, cardImgSrc);
    // if (sessionStorage.getItem('userFormData')) {
    //   sessionStorage.removeItem('userFormData');
    // }

    // if (sessionStorage.getItem('userCustomizationValues')) {
    //   sessionStorage.removeItem('userCustomizationValues');
    // }

    // router.push('/sent');
  };

  return (
    <form
      className="my-auto flex w-form-cl flex-col gap-form-cl"
      onSubmit={handleSubmit(handleOnSubmitForm)}
    >
      <div className="flex gap-input-field-cl">
        <div className="input-field relative w-sm-input-cl">
          <label className="text-label-cl font-normal">Name*</label>
          <input
            type="text"
            className="input h-input-cl pl-input-cl placeholder-shown:truncate"
            placeholder="Please enter your name"
            required
            {...register('name')}
          />
          {errors.name?.message && (
            <p className="absolute bottom-[-15px] text-caption-cl text-red-600">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="input-field relative w-sm-input-cl">
          <label className="text-label-cl font-normal">
            Recipient&apos;s Name*
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
        <label className="text-label-cl font-normal">
          Recipient&apos;s Email*
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
          Message*
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
          <label htmlFor="font" className="text-label-cl font-normal">
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
          <label className="text-label-cl font-normal">Font Color</label>
          <ColorPicker color={fontColor} setColor={setFontColor} />
        </div>
      </div>
      <div className="input-field w-sm-input-cl">
        <label className="text-label-cl font-normal">Background Color</label>
        <ColorPicker color={backgroundColor} setColor={setBackgroundColor} />
      </div>
      <div className="mt-creation-btn-cl flex w-full gap-creation-btn-cl max-md:flex-wrap">
        {/* // TODO: Consider a hover tool tip */}
        <button
          className="btn h-input-cl w-full rounded-md bg-light-gray text-btn-cl text-black"
          onClick={handleOnClick}
        >
          select another photo
        </button>
        <button
          type="submit"
          className="btn h-input-cl w-full rounded-md bg-strawberry-600 text-btn-cl text-white shadow-md disabled:cursor-not-allowed disabled:opacity-75"
          disabled={!isDirty || !isValid || message.length < 1}
        >
          send
        </button>
      </div>
    </form>
  );
};

export default Form;
