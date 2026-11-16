# Brilliant Angels Academy

Official website for **Brilliant Angels Academy** (Brilliant Angels CBO), a community
school in Githogoro, Nairobi. The site presents the school's mission and programmes,
and provides ways to get involved through donations, volunteering, and partnerships.

- **Live site:** https://brilliant-angel-cbo.vercel.app
- **Repository:** https://github.com/elvisbitolo/Brilliant-Angel-CBO

## Overview

The website covers the school's work across education, environmental stewardship,
health, sports and the arts, youth and women's empowerment, and disaster response.
It also includes a photo gallery, news, partner information, and dedicated donate,
volunteer, and contact pages.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- CSS Modules
- `next/font` for self-hosted typography (Inter)
- Deployed on [Vercel](https://vercel.com)

## Features

- Multi-page marketing site with responsive layouts
- Programme pages with individual detail routes
- Photo gallery, news, partners, donate, volunteer, and contact pages
- Floating WhatsApp action, chat assistant, and back-to-top controls
- SEO: metadata, Open Graph and Twitter cards, `sitemap.xml`, `robots.txt`, and an image sitemap
- Favicon, PNG app icon, and Apple touch icon

## Getting started

### Prerequisites

- Node.js 20.9 or newer (Node.js 22 LTS recommended)
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  app/                 Route segments (App Router), layout, metadata, sitemaps
    programs/          Programme overview and detail pages
  components/          Shared UI (header, footer, hero, gallery, chat, etc.)
public/                Images, partner photos, robots.txt
```

## Deployment

The project is connected to its GitHub repository and deploys automatically on Vercel
for every push to the `main` branch. No environment variables are required.

For manual deployment, use the Vercel CLI:

```bash
npx vercel --prod
```

## License

This project and its content are proprietary to Brilliant Angels Academy. All rights
reserved. Photographs and programme information may not be reused without permission.
