'use client';

import Image from 'next/image';
import Hero from '@/src/components/Hero';
import { projects } from '@/src/data/projects';
import { useRef } from 'react';
import LinksBottom from '@/src/components/LinksBottom';
import Link from 'next/link';
import CustomVideoPlayer from '@/src/components/VideoPlayer';
import { Singleproject } from '@/src/data/hikingProject';

const Hiking = () => {
  const gardenProject = projects.find(
    (project) =>
      project.title ===
      'Hiking App with React, PostgreSQL and the Google Maps API'
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  if (!gardenProject) {
    return <p>Project not found.</p>;
  }

  const singleProject = Singleproject;

  return (
    <div className="relative bg-dark text-light min-h-screen flex flex-col items-center p-10 space-y-10">
      <div className="w-full flex justify-start pb-10  mt-10 md:mt-0 md:pl-80">
        <Hero />
      </div>

      <div className="max-w-2xl z-100">
        <Link
          href="/"
          className="text-gray-300 hover:text-white text-md mb-4 block"
        >
          ← Back to home
        </Link>
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
                    className="rounded-md pt-5"
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
                    className="rounded-md pt-5"
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
                    className="rounded-md pt-5"
                  />
                  <h4 className="text-md ubuntu-bold uppercase w-full sm:w-auto pb-2 md:pt-6 pt-10">
                    {project.title6}
                  </h4>
                  <p>{project.description6}</p>
                  <h4 className="text-md ubuntu-bold uppercase w-full sm:w-auto pb-2 md:pt-6 pt-10">
                    {project.title7}
                  </h4>
                  <p>{project.description7}</p>
                  <Image
                    src={gardenProject.images[2]}
                    alt={`${gardenProject.title} Image}`}
                    width={700}
                    height={300}
                    className="rounded-md pt-5"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-2 max-w-4xl flex-wrap"></div>
          </div>
        </div>

        <div className="mt-10 text-center flex justify-start">
          <Link href={'/keys'}>
            <button className="border-white border-2 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-500 transition cursor-pointer ">
              Next Project →
            </button>
          </Link>
        </div>
      </div>
      <LinksBottom />
    </div>
  );
};

export default Hiking;
