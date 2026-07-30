# Pull Request: Match karan-kr portfolio style

This PR adapts the current portfolio UI to match the reference design (https://karan-kr-portfolio.netlify.app/) while using personal details and assets from the repository.

What I changed

- Hero: large gradient name, typed subtitle, CTA buttons, circular profile image
- Navbar: transparent blurred nav with logo and social links
- Projects: responsive 3-column grid, project cards with live/code buttons
- About: tabbed content (Education, Skills, Certifications, Badges)
- Social icons: floating social icons with links
- Styling: component-level CSS and small Tailwind overrides to match colors and spacing
- Metadata: updated site title/description in src/app/layout.js

How to preview

1. git fetch origin
2. git checkout feature/karan-kr-portfolio-style
3. npm install
4. npm run dev
5. Open http://localhost:3000

Notes & follow-ups

- Images: I reused existing images under /images/*. If you prefer different thumbnails or better crops, I can add optimized assets in a follow-up commit.
- Netlify: I can add a netlify.toml and deployment instructions if you want automatic deploys on merge. Say "add Netlify config" and I’ll include it.
- Accessibility: basic aria labels added. I can run a focused accessibility pass if desired.

Screenshots

- See the branch preview or run locally to view the updated UI.

---

