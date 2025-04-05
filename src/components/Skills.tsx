import TechStackLogos from './TeckStackLogos';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <div className="w-full p-10 mt-3 text-sm bg-light text-dark">
      <div className="leading-8 p-2">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        {Object.entries(skills).map(([category, description]) => (
          <p key={category}>
            <span className="font-bold">
              {category
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())
                .replace(/\b\w/g, (c) => c.toUpperCase())}
              :
            </span>{' '}
            {description}
          </p>
        ))}
      </div>
      <div className="mt-8 w-screen flex justify-left items-center">
        <TechStackLogos />
      </div>
    </div>
  );
}
