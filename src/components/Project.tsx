import { projects } from '../data/projects';
import LinksBottom from './LinksBottom';

const Project = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-fit mt-10 md:mt-0">
      <div className="flex flex-col xl:flex-row w-full pb-40 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 md:gap-20 md:p-40">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.route}
              className="md:flex md:items-center md:gap-10 md:p-10 p-5 md:rounded-md md:shadow-lg shadow-sm shadow-[#0000005d] md:border-4 border-gray-800 transition hover:bg-gray-800/30"
            >
              {/* Left: Text content */}
              <div className="md:w-1/2 space-y-4">
                <h3 className="ubuntu-bold md:text-3xl text-2xl font-bold text-left">
                  {project.title}
                </h3>
                <p className="text-sm md:text-md max-w-xl">{project.shortDescription}</p>
                <span className="inline-block text-sm text-blue-300 hover:underline">
                  Read more →
                </span>
              </div>

              {/* Right: Image */}
              <div className="md:w-1/2">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-auto md:h-[300px] object-cover rounded-md mt-5 md:mt-0"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <LinksBottom />
    </div>
  );
};

export default Project;
