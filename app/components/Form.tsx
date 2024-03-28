// Part of Creation client bundle

import ColorPicker from './ColorPicker';
import { Dispatch, SetStateAction } from 'react';

type FormProps = {
  fontStyle: string;
  fontColor: string;
  backgroundColor: string;
  message: string;
  setFontStyle: Dispatch<SetStateAction<string>>;
  setFontColor: Dispatch<SetStateAction<string>>;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
};

const Form = ({
  fontStyle,
  fontColor,
  backgroundColor,
  message,
  setFontStyle,
  setFontColor,
  setBackgroundColor,
  setMessage,
}: FormProps) => {
  // TODO: create zod schema to validate input
  return (
    <form className="flex w-form-cl flex-col gap-form-cl">
      <div className="flex gap-input-field-cl">
        <div className="input-field w-sm-input-cl">
          <label htmlFor="name" className="text-label-cl font-normal">
            Name*
          </label>
          <input
            type="text"
            className="input h-input-cl pl-input-cl placeholder-shown:truncate"
            id="name"
            placeholder="Please enter your name"
            required
          />
        </div>
        <div className="input-field w-sm-input-cl">
          <label htmlFor="rname" className="text-label-cl font-normal">
            Recipient&apos;s Name*
          </label>
          <input
            type="text"
            className="input h-input-cl pl-input-cl placeholder-shown:truncate"
            id="rname"
            placeholder="Please enter the recipient's name"
            required
          />
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="email" className="text-label-cl font-normal">
          Email*
        </label>
        <input
          type="text"
          className="input h-input-cl pl-input-cl"
          id="email"
          placeholder="Please enter your email"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="remail" className="text-label-cl font-normal">
          Recipient&apos;s Email*
        </label>
        <input
          type="text"
          className="input h-input-cl pl-input-cl"
          id="remail"
          placeholder="Please enter the recipient's email"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="message" className="text-label-cl font-normal">
          Message*
        </label>
        <textarea
          className="input h-txt-area-cl pl-input-cl pt-input-cl"
          id="message"
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
            id="font"
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
          <label htmlFor="fontcolor" className="text-label-cl font-normal">
            Font Color
          </label>
          <ColorPicker color={fontColor} setColor={setFontColor} />
        </div>
      </div>
      <div className="input-field w-sm-input-cl">
        <label htmlFor="bgcolor" className="text-label-cl font-normal">
          Background Color
        </label>
        <ColorPicker color={backgroundColor} setColor={setBackgroundColor} />
      </div>
      <div className="mt-creation-btn-cl flex w-full gap-creation-btn-cl max-md:flex-wrap">
        <button className="btn h-input-cl w-full rounded-md bg-light-gray text-btn-cl text-black">
          select another photo
        </button>
        <button className="btn h-input-cl w-full rounded-md bg-strawberry-600 text-btn-cl text-white">
          send
        </button>
      </div>
    </form>
  );
};

export default Form;
