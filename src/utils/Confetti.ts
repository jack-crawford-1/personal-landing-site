import confetti from 'canvas-confetti';
import { GetRandomColour } from './GetRandomColour';

export default function Confetti() {
  const colour = GetRandomColour();

  confetti({
    particleCount: 100,
    angle: 90,
    spread: 180,
    startVelocity: 40,
    ticks: 500,
    gravity: 1.7,
    decay: 0.94,
    colors: [`${colour}]`],
    shapes: ['square', 'circle'],
    origin: { x: 0.5, y: 0.5 },
  });
}
