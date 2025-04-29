'use client';

import Contact from '@/src/components/Contact';
import Hero from '@/src/components/Hero';
import IntroText from '@/src/components/IntroText';
import Skills from '@/src/components/Skills';
import TechStackLogos from '@/src/components/TeckStackLogos';

const About = () => {
  return (
    <div className="bg-dark text-light h-screen flex flex-col items-center p-10">
      <div className="w-full flex justify-start pb-10 md:pl-20 pt-20 md:pt-0">
        <Hero />
      </div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row  items-start flex-grow">
        <div className="w-full md:w-1/2 flex flex-col space-y-6 pt-15">
          <IntroText />
          <Skills />
          <div className="mt-2 md:mt-0 md:w-full flex flex-wrap justify-center items-center gap-4 md:pl-0">
            <TechStackLogos />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="text-3xl font-bold mt-10 md:mt-0 pt-20 md:pt-0">
            Get in Touch
          </h2>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default About;
