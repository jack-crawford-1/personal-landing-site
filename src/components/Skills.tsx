import TechStackLogos from './TeckStackLogos';
import { skills } from '../data/skills';
import { ColourfulLinks } from '../shared/ColourfulLinks';

export default function Skills() {
  return (
    <div className="w-full text-sm bg-dark text-light mt-4 md:mt-20 pl-8 md:p-5">
      <div className="leading-8 p-2">
        <h2
          className="md:text-4xl md:pb-5 pb-2 text-4xl font-bold uppercase fredoka-variable underline underline-offset-8"
          id="projects"
        >
          <ColourfulLinks letter={'Skills'} />
        </h2>
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
      <TechStackLogos />
    </div>
  );
}
