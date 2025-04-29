'use client';

import Image from 'next/image';
import Contact from '@/src/components/Contact';
import Hero from '@/src/components/Hero';
import { projects } from '@/src/data/projects';
import { useRef } from 'react';
import LinksBottom from '@/src/components/LinksBottom';

const Subscribe = () => {
  const gardenProject = projects.find(
    (project) => project.title === 'Subscribe and Pay'
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  if (!gardenProject) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="relative bg-dark text-light min-h-screen flex flex-col items-center p-10 space-y-10">
      {/* HERO */}
      <div className="w-full flex justify-start pb-10  mt-10 md:mt-5 md:pl-80">
        <Hero />
      </div>

      <div className="max-w-2xl">
        {/* PROJECT TEXT */}
        <div className=" space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold ubuntu-bold">
            {gardenProject.title}
          </h2>
          <div className="w-full max-w-2xl">
            <video
              ref={videoRef}
              src={gardenProject.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* TECH STACK ICONS */}
          <div className="flex flex-wrap gap-4 justify-start pt-6 ">
            <h2 className="text-md ubuntu-bold pt-2 uppercase">Built with</h2>
            {gardenProject.icons?.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={40}
                height={40}
                className="rounded"
              />
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <p>{gardenProject.description}</p>
            <p>{gardenProject.learnings1}</p>
            <p>{gardenProject.learnings2}</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl"></div>
            <p>{gardenProject.learnings3}</p>
            <p>{gardenProject.futurePlans}</p>

            <div className="flex gap-2 max-w-4xl flex-wrap">
              <Image
                src={gardenProject.images[0]}
                alt={`${gardenProject.title} Image}`}
                width={700}
                height={100}
                className="rounded-md"
              />
              <Image
                src={gardenProject.images[1]}
                alt={`${gardenProject.title} Image}`}
                width={700}
                height={350}
                className="rounded-md "
              />
              <Image
                src={gardenProject.images[2]}
                alt={`${gardenProject.title} Image}`}
                width={700}
                height={300}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <LinksBottom />
    </div>
  );
};

export default Subscribe;
