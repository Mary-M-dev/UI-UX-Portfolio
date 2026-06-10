# Public Assets Folder

This folder contains static assets that are served directly by Vite without processing.

## What goes here:
- **Images**: Profile photos, project screenshots, logos
- **Favicons**: favicon.ico, apple-touch-icon.png
- **Fonts**: Custom font files (if not using web fonts)
- **Documents**: PDFs, resumes, etc.
- **Other static files**: robots.txt, sitemap.xml, etc.

## Usage:
Files in this folder are served at the root path. For example:
- `public/profile.jpg` → `/profile.jpg`
- `public/images/project.png` → `/images/project.png`
- `public/resume.pdf` → `/resume.pdf`

## In your React code:
Reference public assets using absolute paths:
```jsx
<img src="/profile.jpg" alt="Profile" />
<a href="/resume.pdf">Download Resume</a>
```

## Note:
- Vite automatically copies everything in this folder to the `dist/` folder during build
- No processing is done on these files (no minification, optimization, etc.)
- For images that need optimization, consider importing them directly in your components instead
