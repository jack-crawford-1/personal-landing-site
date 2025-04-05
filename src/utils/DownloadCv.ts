import Confetti from './Confetti';

export const DownloadCv = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = '/documents/jack-crawford-cv.pdf';
  link.download = 'jack-crawford-cv.pdf';
  link.click();
  Confetti();
};
