import { useEffect, useState } from 'react';
import { ColourfulLetter } from '../shared/ColourfulLetter';
import { DownloadCv } from '../utils/DownloadCv';
import { ColourfulLinks } from '../shared/ColourfulLinks';

export default function LinksBottom() {
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
    <div className="flex justify-end items-center w-full absolute bottom-4 md:bottom-5 right-30 p-5">
      <ul className="flex gap-5 justify-center items-center ubuntu-bold uppercase">
        
        <li className="hover:text-gray-200 flex items-center justify-center"></li>
        
        <div className=" gap-4 mt-20 pb-10 flex items-center justify-center">
          <p className='pr-5'>contact me →</p>
          <a
            href="mailto:hello@jackcrawford.co.nz"
            target="_blank"
            className="text-sm"
          >
            <img
              src="/logos/email1.svg"
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
              src="/logos/lin1.svg"
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
          <a
            href="https://github.com/jack-crawford-1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={DownloadCv}
          >
            <img
              src="/logos/cv1.svg"
              alt="download"
              width={30}
              height={30}
              className="hover:opacity-80 transition"
            />
          </a>
        </div>
      </ul>
    </div>
  );
}
