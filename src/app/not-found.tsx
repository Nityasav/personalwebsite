import Link from "next/link";

const NotFound = () => (
  <div className="flex min-h-dvh flex-col items-center justify-center bg-black px-6 text-white">
    <h1 className="font-display text-4xl font-semibold">404</h1>
    <p className="mt-2 text-white/70">Page not found.</p>
    <Link
      href="/"
      className="mt-6 underline decoration-white/40 underline-offset-4 hover:decoration-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
      aria-label="Go to home page"
    >
      Go home
    </Link>
  </div>
);

export default NotFound;
