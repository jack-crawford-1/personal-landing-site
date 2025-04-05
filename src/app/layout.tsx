import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Demo - landing Site',
  description: 'Working site for project demos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-dark">
      <body>{children}</body>
    </html>
  );
}
