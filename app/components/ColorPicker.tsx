'use client';
import { useState, MouseEvent, useRef } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useClickOutside } from 'xooks';

type ColorPickerProps = {
  defaultColor: string;
};

const ColorPicker = ({ defaultColor }: ColorPickerProps) => {
  const [color, setColor] = useState(defaultColor);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false));

  const handleColorPickerClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="color-picker relative" ref={ref}>
      <div className="input flex h-input-cl w-full gap-2 px-2.5">
        <button
          type="button"
          className="my-auto h-[20px] w-[20px]"
          style={{ backgroundColor: color }}
          onClick={handleColorPickerClick}
        ></button>
        <div className="my-auto">
          <p className="inline-block">#</p>
          <HexColorInput
            color={color}
            onChange={setColor}
            className="bg-transparent uppercase outline-none"
          />
        </div>
      </div>
      {isOpen && <HexColorPicker color={color} onChange={setColor} />}
    </div>
  );
};

export default ColorPicker;
