// 'use client';

// import Hero from '../components/Hero';
// import Project from '../components/Project';

// export default function Home() {
//   return (
//     <>
//       <main className=" bg-dark text-light items-center flex flex-col sm:items-start  justify-center min-h-screen  md:pl-15 md:pr-15 2xl:pl-55 2xl:pr-55  pb-20 md:pb-0 pt-5 md:pt-0">
//         <div className="pl-10 p-5 pt-10 mb-10 xl:pl-30 justify-center items-center flex md:mt-0 mt-10 2xl:mb-0">
//           <Hero />
//         </div>
//         <div className="xl:pl-15 ">
//           <Project />
//         </div>
//       </main>
//     </>
//   );
// }

'use client';

import Contact from '@/src/components/Contact';
import Hero from '@/src/components/Hero';
import IntroText from '@/src/components/IntroText';
import Project from '@/src/components/Project';
import Skills from '@/src/components/Skills';
import TechStackLogos from '@/src/components/TeckStackLogos';
import { DownloadCv } from '@/src/utils/DownloadCv';
import { ColourfulLinks } from '../shared/ColourfulLinks';

const Home = () => {
  return (
    <div className=" bg-dark text-light flex flex-col justify-center items-center p-10 md:p-20 md:pb-0  pt-20">
      <div className="w-full flex justify-start md:mt-0  pb-10 md:pl-30 pt-10 md:pt-0">
        <Hero />
      </div>

      <div className="w-full flex flex-col md:flex-row md:items-left md:justify-start items-start flex-grow pb-20">
        <div className="w-full flex flex-col space-y-6 md:space-y-0 pt-8 pb-20">
          <IntroText />
          <button
            // onClick={scrollToProjects}
            className=" border-blue-400 border-2 text-white py-2 px-4 rounded-md text-sm font-medium  hover:bg-blue-500 transition cursor-pointer uppercase mt-10 w-2/3 ml-35"
          >
            <span className=" flex ">
              <img
                src="/icons/download.svg"
                alt="download"
                height={20}
                width={20}
                className="mr-2"
              />

              <ColourfulLinks letter={'See Projects'} />
            </span>
          </button>
          {/* <TechStackLogos /> */}
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-left">
          <Skills />
        </div>
      </div>
      <h2 className="text-7xl font-bold uppercase fredoka-variable">
        <ColourfulLinks letter={'Projects'} />
      </h2>
      <Project />
    </div>
  );
};

export default Home;
