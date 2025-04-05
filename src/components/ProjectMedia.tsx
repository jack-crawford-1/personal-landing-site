'use client';

import { useEffect, useRef, useState } from 'react';

interface ProjectMediaProps {
  showVideo: boolean;
  videoSrc: string;
  images: string[];
  alt: string;
}

const mobileScreen = 800;

export const ProjectMedia = ({ videoSrc }: ProjectMediaProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileScreen);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video && !isMobile) {
      video.muted = true;
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const handleUserInteraction = () => {
            video.play();
            window.removeEventListener('click', handleUserInteraction);
          };
          window.addEventListener('click', handleUserInteraction);
        });
      }
    }
  }, [isMobile]);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      muted
      playsInline
      autoPlay={!isMobile}
      loop={!isMobile}
      controls
      className="w-full h-full aspect-video max-w-full shadow-lg shadow-black rounded-sm bg-[#252323]"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
