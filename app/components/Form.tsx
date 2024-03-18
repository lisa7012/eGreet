const Form = () => {
  return (
    <form className="flex w-[600px] flex-col gap-5">
      <div className="flex gap-7">
        <div className="input-field w-full">
          <label htmlFor="name" className="text-lg font-normal">
            Name*
          </label>
          <input
            type="text"
            className="input h-input-cl pl-2.5"
            id="name"
            placeholder="Please enter your name"
            required
          />
        </div>
        <div className="input-field w-full">
          <label htmlFor="rname" className="text-lg font-normal">
            Recipient&apos;s Name*
          </label>
          <input
            type="text"
            className="input h-input-cl pl-2.5"
            id="rname"
            placeholder="Please enter the recipient's name"
            required
          />
        </div>
      </div>
      <div className="input-field">
        <label htmlFor="email" className="text-lg font-normal">
          Email*
        </label>
        <input
          type="text"
          className="input h-input-cl pl-2.5"
          id="email"
          placeholder="Please enter your email"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="remail" className="text-lg font-normal">
          Recipient&apos;s Email*
        </label>
        <input
          type="text"
          className="input h-input-cl pl-2.5"
          id="remail"
          placeholder="Please enter the recipient's email"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="message" className="text-lg font-normal">
          Message*
        </label>
        <textarea
          className="input h-[200px] pl-2.5 pt-2.5"
          id="message"
          placeholder="Please write your message"
          required
        />
        <p className="caption">maximum characters of 500 characters</p>
      </div>
      <div className="flex gap-7">
        <div className="input-field w-full">
          <label htmlFor="font" className="text-lg font-normal">
            Font
          </label>
          <select id="font" className="input h-input-cl px-2.5">
            <option value="" disabled selected hidden>
              Please pick a font
            </option>
          </select>
        </div>
        <div className="input-field w-full">
          <label htmlFor="fontcolor" className="text-lg font-normal">
            Font Color
          </label>
          <input
            type="color"
            className="input h-input-cl w-full px-2.5"
            id="fontcolor"
            placeholder="Please pick a color"
          />
        </div>
      </div>
      <div className="input-field w-[285px]">
        <label htmlFor="bgcolor" className="text-lg font-normal">
          Background Color
        </label>
        <input
          type="color"
          className="input h-input-cl w-full px-2.5"
          id="bgcolor"
          placeholder="Please pick a color"
        />
      </div>
    </form>
  );
};

export default Form;
