# NEXUS

Personal Discovery & Knowledge OS

Capture what you discover. Connect what you know.

---

## Overview

NEXUS is a static personal knowledge management system built with Astro. It helps you capture, organize, and discover your learning journey.

## Features

- 📝 **Findings** - Capture discoveries with rich metadata
- 🚀 **Projects** - Track your work in progress
- 🌐 **Library** - Save useful websites and tools
- 💡 **Ideas** - Capture raw thoughts before they fade
- 📅 **Today** - Timeline view of your daily discoveries
- ⭐ **Important** - Highlight critical findings
- 🔍 **Search** - Full-text search across all content
- 📱 **Responsive** - Works on all devices
- 🌙 **Dark Theme** - Easy on the eyes

## Technology

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Markdown/MDX** - Content management
- **GitHub Pages** - Free hosting

## Architecture

```
nexus/
├── .github/workflows/     # GitHub Actions deployment
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages
│   └── styles/            # Global CSS
├── content/               # Markdown content
│   ├── findings/
│   ├── projects/
│   ├── websites/
│   └── ideas/
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json
```

## Content Structure

Each content item uses Markdown frontmatter:

```yaml
---
title: "Title Here"
type: finding          # finding, project, website, idea
category: AI
tags:
  - ai
  - open-source
date: 2026-09-16
importance: high       # normal, high
status: saved          # raw, exploring, developed, archived
url: https://example.com
---
```

## How to Add Content

### Adding a Finding

1. Create a new markdown file in `content/findings/`
2. Use the slug as the filename (e.g., `my-finding.md`)
3. Add frontmatter and content
4. Create a page in `src/pages/findings/my-finding.md`

### Adding a Project

1. Create a new markdown file in `content/projects/`
2. Include status (active, planning, completed) and progress percentage
3. Add related resources and notes

### Adding a Website

1. Create a new markdown file in `content/websites/`
2. Include URL, description, and categories
3. Add tags for easy filtering

### Adding an Idea

1. Create a new markdown file in `content/ideas/`
2. Set status: raw, exploring, developing, converted, archived
3. Capture the core concept before it fades

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

The site automatically deploys to GitHub Pages when you push to the main branch.

1. Push your changes to GitHub
2. GitHub Actions will build and deploy
3. Your site will be live at: `https://minjarul1.github.io/nexus`

## Search

This version uses a simple client-side search. For larger sites, consider adding:

- Pagefind for full-text search
- Algolia for advanced search
- GitHub Issues as a submission queue

## Roadmap

- [ ] Full-text search with Pagefind
- [ ] AI-powered categorization
- [ ] Knowledge graph visualization
- [ ] Public submissions via GitHub Issues
- [ ] Analytics dashboard
- [ ] Mobile app companion
- [ ] Export to Obsidian/Notion

## License

MIT License - Feel free to use this for your own knowledge system.

---

Built with ❤️ by Minjarul
