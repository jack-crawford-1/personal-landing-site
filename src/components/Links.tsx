import { useEffect, useState } from 'react';
import { ColourfulLetter } from '../shared/ColourfulLetter';
import { DownloadCv } from '../utils/DownloadCv';
import { ColourfulLinks } from '../shared/ColourfulLinks';

export default function Links() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const isOnAboutOrProjectPage =
    currentPath === '/about' ||
    currentPath.startsWith('/communitygarden') ||
    currentPath.startsWith('/keys') ||
    currentPath.startsWith('/subscribe') ||
    currentPath.startsWith('/hiking');

  return (
    <div className="flex justify-end items-center w-full absolute top-0 md:top-5 right-10 p-5">
      <ul className="flex gap-5 justify-center items-center text-gray-400 ubuntu-bold uppercase">
        <li className="hover:text-gray-200 uppercase">
          <button
            onClick={() => {
              window.location.href = isOnAboutOrProjectPage ? '/' : '/about';
            }}
            className="bg-transparent border-none uppercase cursor-pointer text-sm"
          >
            <ColourfulLinks
              letter={isOnAboutOrProjectPage ? 'PROJECTS' : 'ABOUT'}
            />
          </button>
        </li>
        {/* <li className="hover:text-gray-200 uppercase">
          <a
            href="mailto:hello@jackcrawford.co.nz"
            target="_blank"
            className="text-sm"
          >
            <ColourfulLinks letter={'EMAIL ME'} />
          </a>
        </li> */}
        {/* <li className="hover:text-gray-200 uppercase flex items-center justify-center">
          <button
            onClick={DownloadCv}
            className=" border-blue-400 border-2 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-500 transition cursor-pointer uppercase"
          >
            <span className=" flex ">
              <img
                src="/icons/download.svg"
                alt="download"
                height={20}
                width={20}
                className="mr-2"
              />

              {'CV PDF'}
            </span>
          </button>
        </li> */}
      </ul>
    </div>
  );
}
