import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { AmbientBackground } from "@/components/AmbientBackground";
import Cursor from "@/components/Cursor";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitya Savaliya | Portfolio",
  description:
    "Breaking through building. Learning through building. Building through breaking. Software Engineer, builder, and explorer. ",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
    <body className="min-h-screen bg-black text-white antialiased">
      <AmbientBackground />
      <Cursor />
      {children}
    </body>
  </html>
);

export default RootLayout;
