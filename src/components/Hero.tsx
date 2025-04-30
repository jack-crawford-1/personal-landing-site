import Link from 'next/link';
import AnimatedText from '../shared/AnimatedText';
import Links from './Links';

export function HeroText() {
  return (
    <>
      <div>
        <div className="text-6xl md:text-7xl uppercase font-bold fredoka-variable">
          <Link href={'/'}>
            <h1>
              <AnimatedText>Jack Crawford</AnimatedText>
            </h1>
          </Link>
        </div>
        <Links />
      </div>
    </>
  );
}

export default HeroText;
