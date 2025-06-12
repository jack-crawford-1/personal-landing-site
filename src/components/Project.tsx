import { projects } from '../data/projects';
import LinksBottom from './LinksBottom';

const Project = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-fit mt-5 ">
      <div className="flex flex-col xl:flex-row w-full  pb-40 items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-1  md:gap-20 md:p-10 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" md:p-60 md:pt-10 md:pb-10 md:rounded-md pt-10  md:shadow-lg shadow-sm shadow-[#0000005d]  "
            >
              <h3 className="ubuntu-bold md:text-3xl text-2xl font-bold  text-left md:pb-4 max-w-md md:max-w-lg mx-auto p-5 md:p-0 pb-0 mt-2 md:mt-0 ">
                {project.title}
              </h3>
              <a href={project.route}>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-54 md:h-90 md:mb-10 mb-1 object-cover p-5"
                />
                <div className="p-6 pt-0">
                  <p className="mb-4 max-w-xl text-sm md:text-md">
                    {project.shortDescription}
                  </p>
                  <span className="hover:underline hover:text-gray-300 transition-all duration-300">
                    Read more →
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <LinksBottom />
    </div>
  );
};

export default Project;
