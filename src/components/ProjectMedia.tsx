'use client';

import { useEffect, useState } from 'react';

interface ProjectMediaProps {
  showVideo: boolean;
  videoSrc: string;
  images: string[];
  alt: string;
}

const mobileScreen = 768;

export const ProjectMedia = ({ videoSrc }: ProjectMediaProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileScreen);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <video
      src={videoSrc}
      muted
      playsInline
      autoPlay={!isMobile}
      loop={!isMobile}
      controls={isMobile}
      className="w-full h-full aspect-video max-w-full shadow-lg shadow-black rounded-sm bg-[#252323]"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
