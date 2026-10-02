# Carl Gemuel Taberna Professional Portfolio

Professional portfolio website built to present my projects, experience, technical skills, certifications, and contact details in a clean, minimal layout.

Live site: https://carltaberna.vercel.app

## Overview

This project is the professional version of my developer portfolio. It uses a minimal, monochrome bento-card layout so recruiters can see my projects, experience, and tech stack at a glance, with a written case study for every project.

## Tech Stack

- Next.js
- React
- JavaScript
- CSS
- Geist and Geist Mono fonts
- Simple Icons
- Vercel Analytics

## Features

- Profile header with quick stats and internship status
- Bento cards for About, Experience, Tech Stack, Projects, Certificates, and Social Links
- Separate experience and education timelines
- Tech stack with official brand logos
- Project case studies with desktop/mobile previews and a screenshot viewer
- Certificate pages and resume view
- Light and dark themes
- Built-in chatbot for quick portfolio questions
- Sitemap and SEO metadata for better discoverability

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

- `app/page.jsx` contains the main landing page content
- `app/data/profile.js` holds personal details, experience, education, certificates, and social links
- `app/data/projects.js` holds every project and its case study (add a project here and its card and `/projects/<slug>` page are generated)
- `app/data/skills.js` lists the tech stack shown on the home page
- `app/projects/[slug]/` renders the case study pages
- `app/components/` contains reusable UI sections
- `public/projects/<slug>/` stores project screenshots (desktop 1440x900, mobile 390x844 at 2x)
- `app/api/chat/route.js` powers the portfolio chatbot
- `public/` stores portfolio images, gallery photos, and assets

## Purpose

I use this site to present my work professionally, show my growth as a developer, and make it easy for recruiters, collaborators, and classmates to learn more about me.
