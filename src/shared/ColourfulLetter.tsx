import { useState, useEffect } from 'react';
import {
  GetMidtoneColour,
  GetNatureColour,
  GetRandomColour,
} from '../utils/GetRandomColour';

export function ColourfulLetter({ letter }: { letter: string }) {
  const [colour, setColour] = useState('#ffffff');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setColour(GetMidtoneColour());
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setColour(GetRandomColour());
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        color: colour,
        transition: isHovered
          ? 'color 0.3s ease-in-out '
          : 'color 3s ease-in-out',
      }}
    >
      {letter}
    </span>
  );
}
