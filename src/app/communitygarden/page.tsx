'use client';

import Image from 'next/image';
import Contact from '@/src/components/Contact';
import Hero from '@/src/components/Hero';
import { projects } from '@/src/data/projects';
import { useRef } from 'react';

const CommunityGardens = () => {
  const gardenProject = projects.find(
    (project) => project.title === 'Community Garden'
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  if (!gardenProject) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="bg-dark text-light min-h-screen flex flex-col items-center p-10 space-y-10">
      {/* HERO */}
      <div className="w-full flex justify-start pb-10 md:pl-20">
        <Hero />
      </div>

      {/* PROJECT TEXT */}
      <div className="max-w-5xl space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold">{gardenProject.title}</h2>
        {/* TECH STACK ICONS */}
        <div className="flex flex-wrap gap-4 justify-start pt-6">
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
        <p className="text-gray-400">{gardenProject.shortDescription}</p>

        <div className="space-y-4 pt-4">
          <p>{gardenProject.description}</p>
          <p>{gardenProject.learnings1}</p>

          <div className="flex gap-2">
            <Image
              src={gardenProject.images[0]}
              alt={`${gardenProject.title} Image}`}
              width={400}
              height={300}
              className="rounded-md"
            />
            <Image
              src={gardenProject.images[1]}
              alt={`${gardenProject.title} Image}`}
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
          <p>{gardenProject.learnings2}</p>
          {/* PROJECT IMAGES */}
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
            <Image
              src={gardenProject.images[2]}
              alt={`${gardenProject.title} Image}`}
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
          <p>{gardenProject.learnings3}</p>
          <p>{gardenProject.futurePlans}</p>
        </div>
      </div>
      <div className="w-full max-w-6xl">
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

      {/* CONTACT SECTION */}
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <Contact />
      </div>
    </div>
  );
};

export default CommunityGardens;
