'use client';
import { useState, MouseEvent, useRef, Dispatch, SetStateAction } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useClickOutside } from 'xooks';

type ColorPickerProps = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  id: string;
};

const ColorPicker = ({ color, setColor, id }: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false));

  const handleColorPickerClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="color-picker relative" ref={ref}>
      <div className="input flex h-input-cl w-sm-input-cl gap-color-p-cl px-input-cl">
        <button
          type="button"
          className="my-auto h-color-p-cl w-color-p-cl"
          style={{ backgroundColor: color }}
          onClick={handleColorPickerClick}
        ></button>
        <div className="my-auto flex w-[80%] flex-nowrap">
          <p className="inline-block">#</p>
          <HexColorInput
            id={id}
            color={color}
            onChange={setColor}
            className="bg-transparent uppercase outline-none"
          />
        </div>
      </div>
      {isOpen && <HexColorPicker id={id} color={color} onChange={setColor} />}
    </div>
  );
};

export default ColorPicker;
