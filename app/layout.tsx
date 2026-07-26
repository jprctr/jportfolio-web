import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Proctor",
  description: "Software Developer & Experience Engineer building engaging applications, platforms, and experiences that connect users with data and the powerful stories it tells.",
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} min-h-full antialiased`}
    >
      <body
        className="font-sans min-h-full flex flex-col flex-1 items-center"
      >
        <main className="flex flex-1 w-full max-w-3xl flex-col gap-4 px-8 py-8">
          <Link href='/'><h1>James Proctor</h1></Link>
          {children}
        </main>
      </body>
    </html>
  );
}
