'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    setKey((prev) => prev + 1);
    setShowPoster(true);
    setIsPlaying(false);
  }, [videoSource]);

  const handleReadyToDisplay = () => {
    setShowPoster(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
      <div className="relative w-full aspect-video  ">
        {/* <AnimatePresence>
          {showPoster && (
            <motion.img
              key="poster"
              src={posterSource}
              alt="Poster"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </AnimatePresence> */}

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

      <button
        onClick={togglePlayPause}
        className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-md border-2 border-gray-400 text-sm font-bold hover:bg-gray-700 transition"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}
