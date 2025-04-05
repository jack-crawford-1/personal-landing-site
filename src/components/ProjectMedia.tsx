interface ProjectMediaProps {
  showVideo: boolean;
  videoSrc: string;
  images: string[];
  alt: string;
}

export const ProjectMedia = ({ videoSrc }: ProjectMediaProps) => {
  return (
    <video
      src={videoSrc}
      autoPlay
      muted
      loop
      className="w-full h-full aspect-video max-w-full shadow-lg shadow-black rounded-sm bg-[#252323]"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
