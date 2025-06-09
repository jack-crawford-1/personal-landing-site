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
    <div className="flex justify-end items-center w-full absolute top-4 md:top-5 right-10 p-5">
      <ul className="flex gap-5 justify-center items-center text-gray-400 ubuntu-bold uppercase">
        <li className="hover:text-gray-200 uppercase flex items-center justify-center"></li>
        <div className=" gap-4 mt-20 pb-10 flex items-center justify-center">
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
          <button
            onClick={DownloadCv}
            className=" border-blue-400 border-2 text-white py-2 px-4 rounded-md text-xs font-medium bg-blue-500 hover:bg-blue-700 transition cursor-pointer uppercase"
          >
            <span className=" flex ">
              <img
                src="/icons/download.svg"
                alt="download"
                height={15}
                width={15}
                className="mr-2"
              />

              <ColourfulLinks letter={'CV PDF'} />
            </span>
          </button>
        </div>
      </ul>
    </div>
  );
}
