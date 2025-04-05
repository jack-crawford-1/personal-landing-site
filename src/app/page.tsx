'use client';

import IntroText from '../components/IntroText';
import Hero from '../components/Hero';
import Project from '../components/Project';

export default function Home() {
  return (
    <>
      <main className="bg-dark text-light items-center flex flex-col sm:items-start justify-center min-h-screen p-10 md:pl-15 md:pr-15 ubuntu-medium">
        <div className="mb-10 xl:pl-15 justify-center items-center flex md:mt-0 mt-5">
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
