import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Source_Code_Pro, Source_Serif_4 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const sohneFont = localFont({
  src: "../../public/font/testSohne-4.otf",
  display: "swap",
  variable: "--sohneFont",
});
const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--sourceCode",
});
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--sourceSerif",
});

export const metadata: Metadata = {
  title:
    "You should stop writing Dockerfiles today — Do this instead | by Akhilesh Mishra | KPMG UK Engineering | Feb, 2024 | Medium",
  description: "A docker init guide for writing your dockerfiles!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${sohneFont.variable} ${sourceSerif.variable} ${sourceCode.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
