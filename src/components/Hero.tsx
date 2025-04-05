import AnimatedText from '../shared/AnimatedText';
import Links from './Links';

export function HeroText() {
  return (
    <>
      <div>
        <div className="md:transform md:hover:scale-110 md:transition md:duration-500 md:ease-in-out text-6xl md:text-7xl uppercase font-bold fredoka-variable">
          <h1>
            <AnimatedText>Jack Crawford</AnimatedText>
          </h1>
        </div>
        <Links />
      </div>
    </>
  );
}

export default HeroText;
