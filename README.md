# Nitya Savaliya — Portfolio

A black-and-white, scroll-driven portfolio site built with Next.js, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Images to provide

See **[IMAGES.md](./IMAGES.md)** for the full list of image slots and exact filenames. Place files in `public/images/placeholders/` to replace the gray placeholders.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Fonts: Syne (display), DM Sans (body)

## Structure

- `src/app/` — layout, page, globals
- `src/components/` — Hero, Story, Experience, Projects, Education, Awards, Contact, Nav, ProjectCard
- `src/data/resume.ts` — single source for all copy (edit here to update the site)
