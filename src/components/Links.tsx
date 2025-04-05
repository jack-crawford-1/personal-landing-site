import { ColourfulLetter } from '../shared/ColourfulLetter';
import { DownloadCv } from '../utils/DownloadCv';

export default function Links() {
  return (
    <div className="flex justify-end items-center w-full absolute top-0 md:top-5 right-10 p-5">
      <ul className="flex gap-5 justify-center items-center text-gray-400 ubuntu-bold uppercase">
        <li className="hover:text-gray-200 uppercase">
          <a
            href="mailto:hello@jackcrawford.co.nz"
            target="_blank"
            className="text-sm"
          >
            <ColourfulLetter letter={'EMAIL ME'} />
          </a>
        </li>
        <li className="hover:text-gray-200 uppercase">
          <button
            onClick={DownloadCv}
            className="bg-transparent border-none uppercase cursor-pointer text-sm "
          >
            <span className=" flex pt-2">
              <img
                src="/icons/download.svg"
                alt="download"
                height={20}
                width={20}
              />
              <ColourfulLetter letter={'CV PDF'} />
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}
