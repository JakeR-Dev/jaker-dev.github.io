
# JakeR-Dev Portfolio & Sandbox

![CI](https://github.com/JakeR-Dev/jaker-dev.github.io/actions/workflows/deploy.yml/badge.svg)

https://jaker-dev.github.io/

Built with:
- Next.js
- Tailwind
- SCSS
- Turbopack (Next.js bundler)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deployment

The repository uses a GitHub Actions workflow to build and deploy the static `out` site automatically on pushes to the `main` branch.

If you want to deploy locally (manual), you can still run `npm run build` then push the `out` folder to your Pages configuration.