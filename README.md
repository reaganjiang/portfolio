# Reagan Jiang — Portfolio Website

A static, responsive portfolio for a Business Web Application Developer. The site is built with React, TypeScript, and Vite, keeps content in local TypeScript files, and requires no backend or database.

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to it.
2. Update `vite.config.ts` if needed. The default `base: "./"` works for project pages and custom domains.
3. Run:

```bash
npm run deploy
```

The `deploy` command builds the site and publishes `dist/` to the `gh-pages` branch. In the repository settings, confirm that GitHub Pages is using the `gh-pages` branch.

## Update personal information

- Contact URLs: `src/data/site.ts`
- Name, positioning, About copy, and section content: files in `src/sections/`
- Page title and social metadata: `index.html`
- Favicon: `public/favicon.svg`
- Social preview: `public/og.png`

For contact details, add full URLs:

```ts
export const siteDetails = {
  email: "mailto:your@email.com",
  whatsapp: "https://wa.me/6200000000000",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile",
};
```

## Add or edit projects

Project content is stored in `src/data/projects.ts` and follows the `Project` interface in `src/types/project.ts`.

- Add a new object to the `projects` array.
- Use a unique lowercase `id` with hyphens.
- Set the honest project status to `Portfolio Demo` or `In Progress`.
- Add live demo and repository URLs to the `links` array when available.

Example:

```ts
links: [
  { label: "Live Demo", url: "https://your-demo.example" },
  { label: "GitHub Repository", url: "https://github.com/your-username/project" },
],
```

## Replace screenshots

The current project visuals are deliberate placeholders rendered by `src/components/ProjectVisual.tsx`. To use real screenshots:

1. Add optimized WebP or AVIF files under `src/assets/projects/<project-id>/`.
2. Add screenshot paths and alt text to the `Project` interface and project data.
3. Replace `ProjectVisual` in the project card and case-study gallery with an accessible `<img>` component.

Recommended screenshot width: 1600 px or larger. Keep each image below approximately 300 KB when practical.

## Project structure

```text
src/
├── components/   Reusable interface elements
├── data/         Project and personal data
├── hooks/        Theme and hash-based routing
├── pages/        Home and case-study views
├── sections/     Homepage sections
├── types/        TypeScript data contracts
├── App.tsx       Application routing shell
└── styles.css    Responsive visual system
```

The site uses hash-based project routes so case studies work reliably on GitHub Pages without server-side rewrite configuration.
