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
      <div className="input w-sm-input-cl gap-color-p-cl flex h-input-cl px-input-cl">
        <button
          type="button"
          className="h-color-p-cl w-color-p-cl my-auto"
          style={{ backgroundColor: color }}
          onClick={handleColorPickerClick}
        ></button>
        <div className="my-auto flex w-[80%] flex-nowrap">
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
