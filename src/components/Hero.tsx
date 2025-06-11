import Link from 'next/link';
import AnimatedText from '../shared/AnimatedText';
import Links from './Links';

export function HeroText() {
  return (
    <>
      <div>
        <div className="hidden md:block">
          <Links />
        </div>
        <div className="text-6xl md:text-8xl uppercase font-bold fredoka-variable pt-10 md:pt-0 ">
          <Link href={'/'}>
            <h1>
              <AnimatedText>Jack Crawford</AnimatedText>
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroText;
