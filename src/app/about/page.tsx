'use client';

import Contact from '@/src/components/Contact';
import Hero from '@/src/components/Hero';
import IntroText from '@/src/components/IntroText';
import Skills from '@/src/components/Skills';
import TechStackLogos from '@/src/components/TeckStackLogos';
import { DownloadCv } from '@/src/utils/DownloadCv';

const About = () => {
  return (
    <div className=" bg-dark text-light flex flex-col justify-center items-center p-10 md:p-20 pb-20  pt-20">
      <div className="w-full flex justify-start md:mt-0  pb-10 md:pl-30 pt-10 md:pt-0">
        <Hero />
      </div>

      <div className="w-full flex flex-col md:flex-row md:items-left md:justify-end items-start flex-grow md:mt-20">
        <div className="w-full flex flex-col space-y-6 md:space-y-0 pt-8 pb-4">
          <IntroText />
          <TechStackLogos />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Skills />
          <div className="flex gap-6 mt-6 pb-10">
            Contact
            <a
              href="mailto:hello@jackcrawford.co.nz"
              target="_blank"
              className="text-sm"
            >
              <img
                src="/logos/email.png"
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
                src="/logos/linkedin.png"
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
            <button onClick={DownloadCv}>
              <img
                src="/icons/download.svg"
                alt="CV"
                width={30}
                height={30}
                className="hover:opacity-80 transition"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
