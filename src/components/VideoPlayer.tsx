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

  const togglePlayPause = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        const playPromise = video.play();

        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
        }
      }
    } catch (err) {
      console.error('Error attempting to play the video:', err);
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
        <video
          key={key}
          ref={videoRef}
          src={videoSource}
          poster={posterSource}
          // onLoadedData={handleReadyToDisplay}
          className="absolute inset-0 w-full h-full object-cover "
          playsInline
          loop={false}
          controls={true}
          muted
          onLoadedData={() => console.log('video loaded')}
          onPlay={() => console.log('video playing')}
          onError={(e) => console.error('video error', e)}
        />
      </div>

      <button
        onClick={async () => {
          try {
            const result = await videoRef.current?.play();
            console.log('play promise result:', result);
          } catch (err) {
            console.error('Play error:', err);
          }
        }}
      >
        Play
      </button>
    </div>
  );
}
