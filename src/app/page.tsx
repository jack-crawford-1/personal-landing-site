'use client';

import Hero from '@/src/components/Hero';
import IntroText from '@/src/components/IntroText';
import Project from '@/src/components/Project';
import Skills from '@/src/components/Skills';
import { ColourfulLinks } from '../shared/ColourfulLinks';
import LinksBottom from '../components/LinksBottom';

const Home = () => {
  return (
    <div className=" bg-dark text-light flex flex-col justify-center items-center p-0 md:p-20 pb-0  pt-10">
      <div className="w-full flex justify-start md:mt-0  pb-0 md:pl-30 pt-0 md:pt-0 p-10">
        <Hero />
      </div>

      <div className="w-full flex flex-col md:flex-row md:items-left md:justify-start items-start flex-grow md:ml-40">
        <div className=" flex flex-col justify-center items-center space-y-6 md:space-y-0 pt-8 pb-20">
          <IntroText />
          {/* <button
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className=" border-blue-400 border-2 text-white py-2 px-4 rounded-md text-sm font-medium  hover:bg-blue-500 transition cursor-pointer uppercase mt-10 w-[300px] md:ml-35"
          >
            <span className=" flex justify-center items-center">
              <img
                src="/icons/download.svg"
                alt="download"
                height={20}
                width={20}
                className="mr-2"
              />

              <ColourfulLinks letter={'Scroll To Projects'} />
            </span>
          </button> */}
        </div>
        <div className="w-full md:w-1/2 md:ml-40 mb-2 flex flex-col items-center md:items-start justify-center">
          <Skills />
          <button
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className=" border-blue-400 border-2 text-white py-2 px-4 rounded-md text-sm font-medium  hover:bg-blue-500 transition cursor-pointer uppercase mt-20 w-[300px] md:ml-35"
          >
            <span className=" flex justify-center items-center">
              <img
                src="/icons/download.svg"
                alt="download"
                height={20}
                width={20}
                className="mr-2"
              />

              <ColourfulLinks letter={'Scroll To Projects'} />
            </span>
          </button>
        </div>
      </div>
      <h2
        className="md:text-6xl text-4xl font-bold uppercase fredoka-variable mt-20 mb-10"
        id="projects"
      >
        <ColourfulLinks letter={'Projects'} />
      </h2>

      <Project />
    </div>
  );
};

export default Home;
