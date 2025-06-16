'use client';

import Image from 'next/image';
import Hero from '@/src/components/Hero';
import { projects } from '@/src/data/projects';
import { useRef } from 'react';
import LinksBottom from '@/src/components/LinksBottom';
import { Singleproject } from '@/src/data/gardenProject';
import Link from 'next/link';
import CustomVideoPlayer from '@/src/components/VideoPlayer';

const CommunityGardens = () => {
  const gardenProject = projects.find(
    (project) =>
      project.title === 'NZ Community Gardens - React.js Tailwind CSS MongoDB'
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  if (!gardenProject) {
    return <p>Project not found.</p>;
  }

  const singleProject = Singleproject;

  return (
    <div className="relative bg-dark text-light min-h-screen flex flex-col items-center p-3 space-y-2">
      <div className="w-full flex justify-center md:mr-60 md:pb-20 mt-3 mb-10 md:mb-0 md:mt-10 ">
        <Hero />
      </div>

      <div className="md:max-w-4xl md:p-5">
       
        <div className="w-full max-w-full px-4 md:px-10">
          <h2 className="ubuntu-bold md:text-3xl text-xl font-bold text-left mb-10  w-full overflow-wrap">
            {singleProject.map((project) => project.title)}
          </h2>
          <div className="w-full  md:mx-0">
            <CustomVideoPlayer
              videoSource={gardenProject.video}
              posterSource={gardenProject.images[0]}
            />
          </div>

          
            <div className=''>
              {singleProject.map((project, index) => (
                <div key={index}>
                 
                  <p className='md:max-w-2xl pt-10'>{project.overview}</p>
                  <h4 className="text-md ubuntu-bold uppercase w-full sm:w-auto pb-2 md:pt-6 pt-10">
                    {project.title2}
                  </h4>
                  <p className='md:max-w-2xl'>{project.description2}</p>
                  <div className="flex flex-wrap gap-1 md:gap-6 justify-start pt-6 ">
                    {gardenProject.icons?.map((icon, index) => (
                      <Image
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        width={35}
                        height={35}
                        className="rounded object-contain"
                      />
                    ))}
                  </div>
                  <h4 className="text-md ubuntu-bold uppercase w-full sm:w-auto pb-2 md:pt-6 pt-10">
                    {project.title3}
                  </h4>
                  <p className='md:max-w-2xl '>{project.description3}</p>
                  <Image
                    src={gardenProject.images[3]}
                    alt={`${gardenProject.title} Image}`}
                    width={700}
                    height={350}
                    className="rounded-md md:pt-5 pt-10"
                  />
                  <h4 className="text-md ubuntu-bold uppercase w-full sm:w-auto pb-2 md:pt-6 pt-10">
                    {project.title4}
                  </h4>
                  <p className='md:max-w-2xl'>{project.description4}</p>
                  <Image
                    src={gardenProject.images[1]}
                    alt={`${gardenProject.title} Image}`}
                    width={700}
                    height={350}
                    className="rounded-md md:pt-5 pt-10"
                  />
                  <h4 className="text-md ubuntu-bold uppercase w-full sm:w-auto pb-2 md:pt-6 pt-10">
                    {project.title5}
                  </h4>
                  <p className='md:max-w-2xl'>{project.description5}</p>
                  <Image
                    src={gardenProject.images[0]}
                    alt={`${gardenProject.title} Image}`}
                    width={700}
                    height={100}
                    className="rounded-md md:pt-5 pt-10"
                  />
                  <h4 className="text-md ubuntu-bold uppercase w-full sm:w-auto pb-2 md:pt-6 pt-10">
                    {project.title6}
                  </h4>
                  <p className='md:max-w-2xl'>{project.description6}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center flex md:justify-start justify-center  md:mb-0  relative z-10">
          <Link href={'/subscribe'}>
            <button className="border-white border-2 text-white py-2 px-4 rounded-md text-sm font-medium  transition cursor-pointer w-full hover:bg-blue-500">
              Next Project →
            </button>
          </Link>
        </div>
        <div className="mt-5 text-center flex md:justify-start justify-center  md:mb-0 mb-20 relative z-10">
          <Link href={'/'}>
            <button className=" text-white py-2 px-4 rounded-md text-sm font-medium  transition cursor-pointer w-full hover:bg-blue-500 mb-10 md:mb-0">
              ← Home
            </button>
          </Link>
        </div>
          
          
        </div>
        
      </div>
      
      <LinksBottom />
    </div>
  );
};

export default CommunityGardens;
