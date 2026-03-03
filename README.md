
# JakeR-Dev Portfolio & Sandbox

![CI](https://github.com/JakeR-Dev/jaker-dev.github.io/actions/workflows/nextjs.yml/badge.svg)

https://jaker-dev.github.io/

Built with:
- Next.js
- Tailwind
- SCSS
- Turbopack (Next.js bundler)
- Swiper

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The repository uses a GitHub Actions workflow to build and deploy the static `out` site automatically on pushes to the `main` branch.

If you want to deploy locally (manual), you can still run `npm run build` then push the `out` folder to your Pages configuration.