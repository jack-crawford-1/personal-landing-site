'use client';

import IntroText from '../components/IntroText';
import Hero from '../components/Hero';
import Project from '../components/Project';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   const userAgent =
  //     typeof navigator === 'undefined' ? '' : navigator.userAgent;
  //   const isMobile =
  //     /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
  //       userAgent
  //     );

  //   const isSmallScreen = window.innerWidth <= 768;

  //   if (isMobile || isSmallScreen) {
  //     window.location.href = 'https://www.olddogonline.com/';
  //   }
  // }, []);

  return (
    <>
      <main className="bg-dark text-light items-center flex flex-col sm:items-start  justify-center min-h-screen  md:pl-15 md:pr-15 2xl:pl-55 2xl:pr-55  pb-20 md:pb-0 pt-5 md:pt-0">
        <div className=" p-5 pt-10 mb-20 xl:pl-15 justify-center items-center flex md:mt-0 mt-10 2xl:mb-20">
          <Hero />
        </div>
        {/* <div className="mb-10 xl:pl-15 p-5">
          <IntroText />
        </div> */}
        <div className="xl:pl-15 ">
          <Project />
        </div>
      </main>
    </>
  );
}
