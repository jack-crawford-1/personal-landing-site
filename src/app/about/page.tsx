'use client';

import Project from '@/src/components/Project';
import Hero from '@/src/components/Hero';

export default function About() {
  return (
    <>
      <main className=" bg-dark text-light items-center flex flex-col sm:items-start  justify-center min-h-screen  md:pl-15 md:pr-15 2xl:pl-55 2xl:pr-55  pb-20 md:pb-0 pt-5 md:pt-0">
        <div className="pl-10 p-5 pt-10 mb-10 xl:pl-30 justify-center items-center flex md:mt-0 mt-10 2xl:mb-0">
          <Hero />
        </div>
        <div className="xl:pl-15 ">
          <Project />
        </div>
      </main>
    </>
  );
}
