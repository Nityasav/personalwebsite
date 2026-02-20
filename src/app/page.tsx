import { Hero } from "@/components/Hero";
import { HorizontalScrollSection } from "@/components/HorizontalScrollSection";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:outline-none"
      >
        Skip to content
      </a>
      <Nav />
      <main className="relative" id="main">
        <Hero />
        <HorizontalScrollSection />
      </main>
    </>
  );
}
