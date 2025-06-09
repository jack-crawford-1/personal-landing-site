import { useState, useEffect } from 'react';
import { GetMidtoneColour, GetNatureColour } from '../utils/GetRandomColour';

export function ColourfulLinks({ letter }: { letter: string }) {
  const [colour, setColour] = useState('#ffffff');
  const [isHovered, setIsHovered] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isHovered) {
  //       setColour(GetMidtoneColour());
  //     }
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setColour(GetMidtoneColour());
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setColour('#ffffff');
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
