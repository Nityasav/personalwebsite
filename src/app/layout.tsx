import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
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
    "Naturally curious and driven to push the limits of technology. Software Engineer, builder, and problem-solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const photographyPreloads = [
    "about-1",
    "about-2",
    "experience-1",
    "experience-2",
    "projects-1",
    "projects-2",
    "education-1",
    "education-2",
    "awards-1",
    "awards-2",
    "contact-1",
    "contact-2",
  ];

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        {photographyPreloads.map((name) => (
          <link
            key={name}
            rel="preload"
            as="image"
            href={`/images/photography/${name}.jpeg`}
          />
        ))}
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
