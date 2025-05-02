import Image from 'next/image';
import Tooltip from '../shared/Tooltip';

export default function TechStackLogos() {
  return (
    <div className="mt-8 w-full flex justify-center  items-center">
      <div className="flex flex-wrap justify-center gap-5 md:gap-9">
        <Tooltip text="React.js">
          <Image
            src="/logos/react.png"
            alt="React.js Logo"
            width={30}
            height={30}
          />
        </Tooltip>
        <Tooltip text="Next.js">
          <Image
            src="/logos/nextjs.png"
            alt="Next.js Logo"
            width={30}
            height={30}
          />
        </Tooltip>

        <Tooltip text="Javascript">
          <Image
            src="/logos/javascript.png"
            alt="Javascript Logo"
            width={30}
            height={30}
          />
        </Tooltip>

        <Tooltip text="Typescript">
          <Image
            src="/logos/typescript.png"
            alt="Typescript Logo"
            width={30}
            height={30}
          />
        </Tooltip>

        <Tooltip text="Node.js">
          <Image
            src="/logos/node.png"
            alt="Node.js Logo"
            width={30}
            height={30}
          />
        </Tooltip>

        <Tooltip text="Tailwind CSS">
          <Image
            src="/logos/tailwind.png"
            alt="Tailwind Logo"
            width={30}
            height={30}
          />
        </Tooltip>

        <Tooltip text="Prisma">
          <Image
            src="/logos/prisma.png"
            alt="Prisma Logo"
            width={30}
            height={30}
          />
        </Tooltip>

        <Tooltip text="PostgreSQL">
          <Image
            src="/logos/psql.png"
            alt="PostgreSQL Logo"
            width={30}
            height={30}
          />
        </Tooltip>

        <Tooltip text="MongoDB">
          <Image
            src="/logos/mongo.png"
            alt="MongoDB Logo"
            width={30}
            height={30}
          />
        </Tooltip>

        <Tooltip text="JWT">
          <Image src="/logos/jwt.svg" alt="OAuth Logo" width={30} height={30} />
        </Tooltip>
      </div>
    </div>
  );
}
