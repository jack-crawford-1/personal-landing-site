'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  videoSource: string;
  posterSource: string;
};

export default function CustomVideoPlayer({
  videoSource,
  posterSource,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
    setShowPoster(true);
    setIsPlaying(false);
  }, [videoSource]);

  const handleReadyToDisplay = () => {
    setShowPoster(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <div className="relative w-full aspect-video ">
        <video
          key={key}
          ref={videoRef}
          src={videoSource}
          poster={posterSource}
          onLoadedData={handleReadyToDisplay}
          className="absolute inset-0 w-full h-full object-cover "
          playsInline
          loop={false}
          controls={true}
          muted
        />
      </div>
    </div>
  );
}
