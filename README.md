# Professional Portfolio

Carl Gemuel Taberna's professional portfolio: a minimal, monochrome bento-card layout that presents projects, experience, tech stack, certificates and contact links on one screen.

## Overview

A cleaner, recruiter-focused version of my portfolio. Every project links to a written case study with desktop and mobile previews and a screenshot gallery.

## Tech Stack

- Next.js
- React
- JavaScript
- CSS (Geist and Geist Mono via `next/font`)
- simple-icons (brand logos for the tech stack and social links)
- Vercel Analytics

## Features

- Profile header with quick stats and internship status
- Bento cards for About, Experience timeline, Tech Stack, Projects, Certificates and Social Links
- Project case studies with desktop/mobile previews and a screenshot viewer
- Light and dark themes
- Built-in chatbot for quick portfolio questions
- Sitemap and SEO metadata

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

- `app/page.jsx` is the home page (profile header + bento cards)
- `app/data/profile.js` holds personal details, the experience timeline, certificates and social links
- `app/data/projects.js` holds every project and its case study (add a project here and its card and `/projects/<slug>` page are generated)
- `app/data/skills.js` lists the tech stack; logos come from `app/components/brand-icon.jsx`
- `app/projects/[slug]/` renders the case study pages
- `app/api/chat/route.js` powers the portfolio chatbot
- `public/projects/<slug>/` stores project screenshots (desktop 1440x900, mobile 390x844 at 2x)
