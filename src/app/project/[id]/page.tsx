import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.route === params.id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen w-full">
      <div
        className="bg-contain fixed inset-0 bg-black opacity-20"
        style={{
          backgroundImage: `url('${project.images[0]}')`,
        }}
      />
      <div className="fixed inset-0 bg-black/40 z-10" />

      <main className="relative z-10 max-w-4xl mx-auto bg-card-dark text-light rounded-md m-10 p-10 shadow-lg shadow-gray-700 leading-7 border border-gray-700">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-white">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <p>Built using</p>
            {project.icons.map((icon, i) => (
              <img
                key={i}
                src={icon.src}
                alt={icon.alt}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            ))}
          </div>

          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white rounded hover:bg-gray-800 mb-8 flex w-fit hover:shadow-lg transition duration-300 ease-in-out hover:shadow-black"
          >
            <Image
              src="/logos/github.png"
              alt="git"
              height={30}
              width={30}
              className="mr-2"
            ></Image>
            View Code
          </Link>

          <p className="mb-6">{project.description}</p>

          <Image
            src={project.images[0]}
            alt="image fs"
            width={700}
            height={400}
            className=" rounded-md"
          />

          {project.learnings1 &&
            project.learnings2 &&
            project.learnings3 &&
            project.futurePlans && (
              <div>
                <h2 className="text-white text-2xl font-semibold mt-8 mb-2">
                  What I Learned
                </h2>
                <p className="mt-4 mb-3">{project.learnings1}</p>
                <div className="flex flex-wrap gap-2">
                  <Image
                    src={project.images[0]}
                    alt="image fs"
                    width={200}
                    height={100}
                    className=" rounded-md"
                  />
                  <Image
                    src={project.images[0]}
                    alt="image fs"
                    width={300}
                    height={300}
                    className=" rounded-md"
                  />
                </div>
                <p className="mt-4 mb-3">{project.learnings2}</p>
                <Image
                  src={project.images[0]}
                  alt="image fs"
                  width={400}
                  height={400}
                  className=" rounded-md"
                />
                <p className="mt-4 mb-3">{project.learnings3}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">
                  Future Plans
                </h2>
                <p className="mt-4 mb-3">{project.futurePlans}</p>
                <div className="flex flex-wrap gap-2">
                  <Image
                    src={project.images[0]}
                    alt="image fs"
                    width={300}
                    height={400}
                    className=" rounded-md"
                  />
                  <Image
                    src={project.images[0]}
                    alt="image fs"
                    width={200}
                    height={100}
                    className=" rounded-md"
                  />
                </div>
                <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">
                  Watch Video Demo{' '}
                </h2>
                <video controls className="w-full mt-4 rounded-md">
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
        </div>
      </main>
    </div>
  );
}
