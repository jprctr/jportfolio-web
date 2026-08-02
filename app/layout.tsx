import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import CellCanvas from '@/app/cellCanvas';
import "./globals.css";

export const metadata: Metadata = {
  title: "James Proctor",
  description: "Software Developer & Experience Engineer building engaging applications, platforms, and experiences that connect users with data and the powerful stories it tells.",
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${raleway.variable} min-h-full antialiased`}>
      <body className='font-sans min-h-full flex flex-col flex-1 items-center'>
        <CellCanvas />
        <main className='flex flex-1 w-full max-w-4xl flex-col gap-4 px-8 py-8 z-1'>
          <Link className='flex px-4 gap-2' href='/'>
            {/*<Image className='my-auto w-8 h-8 rounded-md' src='/icon.png' width='128' height='128' alt='' />*/}
            <h1 className='m-auto ml-0'>James Proctor</h1>
          </Link>
          {children}
        </main>
      </body>
    </html>
  );
}
