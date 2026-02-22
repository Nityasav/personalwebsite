import { Hero } from "@/components/Hero";
import { HorizontalScrollSection } from "@/components/HorizontalScrollSection";
import { Nav } from "@/components/Nav";

const Home = () => (
  <>
    <a
      href="#hero"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Skip to main content"
    >
      Skip to content
    </a>
    <Nav />
    <main className="relative" id="main" role="main">
      <Hero />
      <HorizontalScrollSection />
    </main>
  </>
);

export default Home;
