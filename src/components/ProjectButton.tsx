import { useState } from 'react';
import { GetNatureColour } from '../utils/GetRandomColour';
import Image from 'next/image';

export const ProjectButton = ({
  onClick,
  iconSrc,
  iconAlt,
  text,
  iconOnLeft = false,
  additionalStyles = '',
  iconWidth = 15,
  iconHeight = 15,
}: {
  onClick: () => void;
  iconSrc: string;
  iconAlt: string;
  text: string;
  iconOnLeft?: boolean;
  additionalStyles?: string;
  iconWidth?: number;
  iconHeight?: number;
}) => {
  const [glowColor, setGlowColor] = useState('');

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setGlowColor(GetNatureColour())}
      onMouseLeave={() => setGlowColor('')}
      style={{
        backgroundColor: 'transparent',
      }}
      className={`flex items-center font-bold px-4 py-2 rounded-md transition text-sm hover:border-green-400/60  transition-all duration-200 ease-in-out ${additionalStyles}`}
    >
      {iconOnLeft && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      <span className={`mx-2 uppercase`}>{text}</span>
      {!iconOnLeft && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
        />
      )}
    </button>
  );
};
