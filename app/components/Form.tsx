'use client';

import ColorPicker from './ColorPicker';

const Form = () => {
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
        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaa */}
        <textarea
          className="input h-txt-area-cl pl-input-cl pt-input-cl"
          id="message"
          placeholder="Please write your message"
          required
          maxLength={500}
        />
        <p className="caption">maximum characters of 500 characters</p>
      </div>
      <div className="flex gap-input-field-cl">
        <div className="input-field w-sm-input-cl">
          <label htmlFor="font" className="text-label-cl font-normal">
            Font
          </label>
          <select
            id="font"
            className="input h-input-cl cursor-pointer appearance-none bg-[url('../public/arrow_down.svg')] bg-clip-padding bg-[97%_50%] bg-no-repeat px-input-cl"
          >
            <option value="">Poppins</option>
            <option value="">Indie Flower</option>
            <option value="">Bona Nova</option>
            <option value="">Leckerli One</option>
            <option value="">Cherry Bomb One</option>
          </select>
        </div>
        <div className="input-field w-sm-input-cl">
          <label htmlFor="fontcolor" className="text-label-cl font-normal">
            Font Color
          </label>
          <ColorPicker defaultColor="#333333" />
        </div>
      </div>
      <div className="input-field w-sm-input-cl">
        <label htmlFor="bgcolor" className="text-label-cl font-normal">
          Background Color
        </label>
        <ColorPicker defaultColor="#ffffff" />
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
