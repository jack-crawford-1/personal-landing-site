import { projects } from '../data/projects';
import LinksBottom from './LinksBottom';

const Project = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-fit ">
      <div className="flex flex-col xl:flex-row w-full md:max-w-7xl pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 md:p-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-dark p-6 rounded-lg shadow-md">
              <a href={project.route}>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 md:h-72 rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.shortDescription}</p>
                <span className="text-gray-300 hover:underline hover:text-gray-300 transition-all duration-300">
                  Read more →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <LinksBottom /> */}
    </div>
  );
};

export default Project;
