# Omar Gamal - Portfolio

Personal portfolio website for **Omar Gamal** — Backend, Cloud & Full-Stack Engineer.

Deployed live at **[omar0gamal.vercel.app](https://omar0gamal.vercel.app)**.

## Overview

A performance-first, accessible personal site showcasing distributed systems engineering, cloud infrastructure, and tested full-stack web products. Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

### Featured Projects

- **[Nexus Commerce](https://github.com/Omar0Gamal/Nexus-Commerce)** — Multi-tenant e-commerce platform with a 25-module Go modular monolith, Cloudflare Worker + KV edge routing, Redis distributed inventory locks, and a Next.js 16 storefront.
- **[JobTrack](https://github.com/Omar0Gamal/JobTrack)** ([Live Demo](https://jobtrack-demo.vercel.app)) — Full-stack job application tracker with signed guest sessions, SSRF-hardened autofill, 207 Vitest unit/integration tests + 5 Playwright E2E tests in CI.
- **[Cartwright Saga](https://github.com/Omar0Gamal/cartwright-saga)** — Distributed transaction coordinator implementing the Saga Pattern with orchestrator and choreography modes, Redis state stores, and automated compensation flows.
- **[AxiomGraph](https://github.com/Omar0Gamal/AxiomGraph)** — High-performance concurrent graph compute engine written in modern C++20 with cache-conscious memory layouts.
- **[llama.cpp (Contribution)](https://github.com/ggml-org/llama.cpp/pull/7936)** — Open-source performance optimization PR to ggml tensor quantization.
- **[DarkFire](https://github.com/Omar0Gamal/DarkFire)** — Modular 2D game engine in C++17 with custom memory arenas and data-oriented ECS.

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS & Framer Motion
- **Markdown & Syntax**: Unified, Remark, Rehype, highlight.js
- **Auditing**: Lighthouse 100/100/100 (Accessibility, SEO, Best Practices)
- **Deployment**: Vercel

## Local Development

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Verify linting and production build:
```bash
npm run lint
npm run build
```

## Project Structure

- `/app` — Next.js App Router routes, metadata, sitemap, and robots.txt
- `/components` — Reusable, accessible UI components (Hero, Projects, Experience, Articles, etc.)
- `/content` — Markdown technical articles and blog posts
- `/data` — Structured TypeScript data files (projects, experience, skills, education)
- `/lib` — Content parsers and markdown utilities
- `/public` — Static assets (optimized images, SVG graphics, icons, OpenGraph previews)

## License

MIT
