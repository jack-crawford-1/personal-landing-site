import { useState } from 'react';
import { projects } from '../data/projects';
// import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ProjectButton } from './ProjectButton';
import { ProjectMedia } from './ProjectMedia';
import Link from 'next/link';

const ProjectIconsRow = ({
  icons,
}: {
  icons: { src: string; alt: string }[];
}) => (
  <div className="flex justify-around items-center xl:justify-start gap-2 md:gap-4 mt-5">
    {icons.map((icon, index) => (
      <Image key={index} src={icon.src} alt={icon.alt} width={30} height={30} />
    ))}
  </div>
);

const ProjectDetailsHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <h2 className="font-bold text-white text-3xl xl:text-2xl mb-2 md:mt-[0px] mt-5 ubuntu-bold uppercase">
        {title}
      </h2>
      <p className="md:leading-7 text-md mt-2 md:mt-6">{description}</p>
    </>
  );
};

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];
  const [showVideo, setShowVideo] = useState(true);

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
    setShowVideo(true);
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setShowVideo(true);
  };

  // const router = useRouter();

  return (
    <div className=" flex flex-col items-center justify-center w-full h-fit ">
      <div className="flex flex-col xl:flex-row w-full md:max-w-7xl ">
        <div className=" w-full lg:w-[70%] ">
          <div className="w-full md:bg-[#252323] mb-4 md:mb-0 p-5 md:p-0">
            <ProjectMedia
              showVideo={showVideo}
              videoSrc={project.video}
              images={project.images || []}
              alt={project.alt}
            />
          </div>
        </div>

        <div className="w-full xl:w-[40%] md:pl-10  md:max-h-[450px] md:mt-0">
          <div className="h-full md:bg-card-dark rounded-md lg:shadow-xl lg:shadow-black ">
            <div className="text-left p-5 md:p-10 md:pt-5 md:pb-5 ">
              <ProjectDetailsHeader
                title={project.title}
                description={project.description}
              />
              <div className="flex mt-3 justify-start items-center">
                <Link href={project.githubUrl} target="_blank">
                  <ProjectButton
                    onClick={() => {
                      null;
                    }}
                    iconSrc="/logos/github.png"
                    iconAlt="GitHub"
                    text="See Code"
                    iconHeight={25}
                    iconWidth={25}
                    additionalStyles="hover:text-gray-100"
                  />
                </Link>
                {/* <Link href={`/project/${project.route}`} target="_blank">
                  <ProjectButton
                    onClick={() => {
                      null;
                    }}
                    iconSrc="/icons/more-light.png"
                    iconAlt="More"
                    text="Read More"
                    iconHeight={25}
                    iconWidth={25}
                  />
                </Link> */}
              </div>

              <ProjectIconsRow icons={project.icons} />
            </div>

            <div className=" xl:absolute xl:top-30 2xl:top-60 mt-4 md:ml-10 pb-5 md:pb-0">
              <div className=" md:ml-7 flex md:justify-around justify-center items-center gap-4 text-sm">
                <ProjectButton
                  onClick={prevProject}
                  iconSrc="/icons/back.png"
                  iconAlt="Back"
                  text="Previous"
                  iconOnLeft
                  additionalStyles="py-3 min-w-[120px] text-white  border-2 border-white/90  transition-all duration-200 ease-in-out "
                />
                <ProjectButton
                  onClick={nextProject}
                  iconSrc="/icons/next.png"
                  iconAlt="Next"
                  text="Next"
                  additionalStyles="py-3 min-w-[120px] text-white justify-center  border-2 border-white/90  transition-all duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
