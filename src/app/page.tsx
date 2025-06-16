'use client';

import Project from '@/src/components/Project';
import Hero from '@/src/components/Hero';
import Link from 'next/link';
import AnimatedText from '@/src/shared/AnimatedText';
import Links from '@/src/components/Links';
import { ColourfulLinks } from '@/src/shared/ColourfulLinks';
import { DownloadCv } from '@/src/utils/DownloadCv';
import TechStackLogos from '@/src/components/TeckStackLogos';

export default function Home() {
  return (
    <div className=" bg-dark text-light ubuntu-regular">
      <div className="flex flex-row justify-center items-center w-full  ">
        <div className="md:text-7xl text-5xl text-left md:mr-140 fredoka-variable uppercase">
          <Link href={'/'}>
            <h1 className="p-10 md:p-0 md:pt-20">
              <AnimatedText>Jack Crawford</AnimatedText>
            </h1>
          </Link>
        </div>
      </div>

      <div className=" absolute top-20 right-30 hidden md:block border-0  border-pink-600 py-2 px-4 rounded-md">
        <div className="flex items-center justify-center gap-4">
          <p className='uppercase ubuntu-bold'>contact me →</p>
          <a
            href="mailto:hello@jackcrawford.co.nz"
            target="_blank"
            className="text-sm"
          >
            <img
              src="/logos/email1.svg"
              alt="Email"
              width={30}
              height={30}
              className="hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jackwardcrawford"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logos/lin1.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              className="hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://github.com/jack-crawford-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logos/github.png"
              alt="GitHub"
              width={30}
              height={30}
              className="hover:opacity-80 transition"
            />
          </a>
          <a
            href="https://github.com/jack-crawford-1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={DownloadCv}
          >
            <img
              src="/logos/cv1.svg"
              alt="download"
              width={30}
              height={30}
              className="hover:opacity-80 transition"
            />
          </a>
          
        </div>
      </div>
      <div className=" justify-center items-center flex flex-col mt-1 border-0 border-yellow-400">
        <div className="flex md:flex-row flex-col items-center justify-center w-fit h-full border-0 border-green-400">
          <div className="md:w-1/2 w-full min-h-[500px] border-0 border-red-400 flex justify-center items-center">
            <div className="w-full md:w-[600px] h-full  p-6 md:p-0 pt-0 max-w-md md:max-w-full">
              <p className="text-sm leading-6  mb-4">
                I got into coding through a mix of side projects and spending
                time working alongside developers, product managers, and data
                analytics teams. Being part of those conversations and seeing
                how things were built made me want to try it for myself — and
                what started as curiosity just stuck.
              </p>
              <p className="text-sm leading-6  mb-4  ">
                Recently, I've been working on features like payment flows in a
                subscriptions app, originally built to help troubleshoot API
                integration issues for merchants at work. I’ve also been
                building an interactive map site for a separate project, which
                came out of a personal interest in gardening and a lack of
                existing resources. It’s turned into a way to combine tech with
                something more community-focused.
              </p>
              <p className="text-sm leading-6  mb-4  ">
                Outside of work, I enjoy playing guitar and gardening in my
                small urban courtyard. This site is a showcase of some projects
                I've built — mostly using React, Node, MongoDB, and Tailwind
                CSS.
              </p>
            </div>
          </div>

          <div className=" h-full md:pl-30 p-5 md:p-0 pt-0">
            <div className="pb-0">
              <ul className="list-disc text-xs md:text-sm leading-8">
                <p>
                  <strong>Client:</strong> React, Next.js, TypeScript, Tailwind
                  CSS, Vite
                </p>
                <p>
                  <strong>Server:</strong> Node.js, Express
                </p>
                <p>
                  <strong>Database:</strong> PostgreSQL, MongoDB, Prisma
                </p>
                <p>
                  <strong>Web Services:</strong> REST APIs, Axios
                </p>
                <p>
                  <strong>Version Control:</strong> Git/GitHub
                </p>
                <p>
                  <strong>Auth:</strong> JWTs, OAuth2, Dotenv
                </p>
                <p>
                  <strong>Professional Development:</strong> Agile
                  Methodologies, Project Planning
                </p>
              </ul>
              <TechStackLogos />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full  rounded-md  flex justify-center">
        <Project />
      </div>
    </div>
  );
}


// bg-[#00000000]