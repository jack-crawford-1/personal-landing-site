'use client';

import Contact from '@/src/components/Contact';
import Hero from '@/src/components/Hero';
import IntroText from '@/src/components/IntroText';
import Skills from '@/src/components/Skills';
import TechStackLogos from '@/src/components/TeckStackLogos';

const About = () => {
  return (
    <div className="bg-dark text-light h-screen flex flex-col justify-center items-center p-10 md:p-20 pb-20">
      <div className="w-full flex justify-start  pb-10 md:pl-30 pt-100 md:pt-0">
        <Hero />
      </div>

      <div className="w-full flex flex-col md:flex-row md:items-left md:justify-end items-start flex-grow md:mt-20">
        <div className="w-full flex flex-col space-y-6 md:space-y-0 pt-8 pb-4">
          <IntroText />
          <TechStackLogos />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
