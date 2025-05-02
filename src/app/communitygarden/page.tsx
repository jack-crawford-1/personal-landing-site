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
    (project) => project.title === 'Community Garden'
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  if (!gardenProject) {
    return <p>Project not found.</p>;
  }

  const singleProject = Singleproject;

  return (
    <div className="relative bg-dark text-light min-h-screen flex flex-col items-center p-10 space-y-10">
      <div className="w-full flex justify-start pb-10  mt-10 md:mt-5 md:pl-80">
        <Hero />
      </div>

      <div className="max-w-2xl">
        <div className=" space-y-6 text-left">
          <h2 className="text-xl font-bold ubuntu-bold">
            {singleProject.map((project) => project.title)}
          </h2>
          <div className="w-screen md:w-full px-2 -mx-10 md:mx-0">
            <CustomVideoPlayer
              videoSource={gardenProject.video}
              posterSource={gardenProject.images[0]}
            />
          </div>
          <div className="space-y-4 pt-4 text-start">
            <div>
              {singleProject.map((project, index) => (
                <div key={index}>
                  <h3 className="text-md ubuntu-bold uppercase w-full sm:w-auto pb-2 pt-6">
                    {project.title}
                  </h3>
                  <p>{project.overview}</p>
                  <h4 className="text-md ubuntu-bold uppercase w-full sm:w-auto pb-2 md:pt-6 pt-10">
                    {project.title2}
                  </h4>
                  <p>{project.description2}</p>
                  <div className="flex flex-wrap gap-4 justify-start pt-6 ">
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
                  <p>{project.description3}</p>
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
                  <p>{project.description4}</p>
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
                  <p>{project.description5}</p>
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
                  <p>{project.description6}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-2 max-w-4xl flex-wrap"></div>
          </div>
        </div>
        <div className="mt-10 text-center flex justify-end">
          <Link href={'/subscribe'}>
            <button className="w-full bg-white text-dark px-6 py-3 rounded-md hover:bg-gray-200 transition shadow-md shadow-gray-500 font-bold">
              Next Project →
            </button>
          </Link>
        </div>
      </div>
      <LinksBottom />
    </div>
  );
};

export default CommunityGardens;
