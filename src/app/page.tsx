'use client';

import IntroText from '../components/IntroText';
import Hero from '../components/Hero';
import Project from '../components/Project';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const userAgent =
      typeof navigator === 'undefined' ? '' : navigator.userAgent;
    const isMobile =
      /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    const isSmallScreen = window.innerWidth <= 768;

    if (isMobile || isSmallScreen) {
      window.location.href = 'https://www.olddogonline.com/';
    }
  }, []);

  return (
    <>
      <main className="bg-dark text-light items-center flex flex-col sm:items-start  justify-center min-h-screen p-10 md:pl-15 md:pr-15 2xl:pl-55 2xl:pr-55 ubuntu-medium">
        <div className="mb-10 xl:pl-15 justify-center items-center flex md:mt-0 mt-5 2xl:mb-20">
          <Hero />
        </div>
        <div className="mb-10 xl:pl-15">
          <IntroText />
        </div>
        <div className="xl:pl-15 ">
          <Project />
        </div>
      </main>
    </>
  );
}
