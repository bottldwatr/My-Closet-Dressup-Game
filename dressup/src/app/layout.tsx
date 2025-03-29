import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';

const monogram = localFont({
  src: [
    {
      path: "../../public/fonts/mgram.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/mgram-italic.ttf",
      weight: "400",
      style: "italic"
    }
  ]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dress Up Closet",
  description: "Game to create outfits from the clothes in your closet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monogram.className} ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
