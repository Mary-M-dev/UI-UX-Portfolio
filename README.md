# Mary Mwirigi - Premium Portfolio Website

A modern, elegant portfolio website for Mary Mwirigi, a Product Owner and AI-Augmented Product Designer based in Nairobi.

## 🎨 Design Features

- **Elegant, Minimal Aesthetic**: Black, white, and soft gold color palette
- **Premium Feel**: Sophisticated typography and spacious layout
- **Smooth Animations**: Subtle transitions using Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: Professional dark theme throughout
- **Accessibility**: Semantic HTML and keyboard navigation

## 🛠 Tech Stack

- **React 18**: Modern UI library
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations and transitions
- **Vite**: Fast build tool and dev server

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Sticky navigation with smooth scroll
│   ├── Button.jsx      # Reusable button component
│   ├── Section.jsx     # Section wrapper with animations
│   ├── ProjectCard.jsx # Featured work cards
│   └── Footer.jsx      # Footer with social links
├── pages/              # Page components
│   ├── Home.jsx        # Main portfolio page
│   └── CaseStudy.jsx   # Dynamic case study template
├── data/
│   └── projects.js     # Projects, experience, and skills data
├── App.jsx             # Main app component with routing
├── main.jsx            # React entry point
├── index.css           # Global styles and animations
└── App.css             # App-level styles

public/
└── index.html          # HTML template

Configuration files:
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mary-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to Netlify (requires Netlify CLI)

## 🎯 Key Sections

### Hero Section
- Impactful headline and subheadline
- Call-to-action buttons
- Animated background gradients

### Featured Work
- 5 premium case study projects
- Project cards with hover effects
- Tags and descriptions
- Links to detailed case studies

### Case Study Pages
- Dynamic routing with project details
- Sticky table of contents
- Sections: Overview, Problem, Research, User Journey, Wireframes, Design Decisions, High Fidelity Screens, Impact
- Image placeholders for future content

### About Section
- Professional storytelling
- Career timeline
- Background and philosophy

### Experience Section
- Vertical timeline of roles
- Companies, durations, and achievements
- Expandable details

### Skills & Tools
- Categorized skill cards
- Product Strategy, UX/UI Design, AI-Assisted Prototyping, Collaboration, Design Tools

### Contact Section
- Contact form
- Social media links
- Call-to-action

## 🎨 Customization

### Update Projects
Edit `src/data/projects.js` to add or modify projects:
```javascript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Short description',
  icon: '🎯',
  role: 'Your Role',
  tags: ['Tag1', 'Tag2'],
  // ... other fields
}
```

### Update Experience
Modify the `experience` array in `src/data/projects.js`

### Update Skills
Modify the `skills` array in `src/data/projects.js`

### Change Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  yellow: {
    400: '#fbbf24',
    500: '#eab308',
  },
}
```

### Add Images
Replace emoji placeholders with actual images:
1. Add images to `public/` folder
2. Update component imports and src attributes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Deploy to Netlify

#### Option 1: Using Netlify CLI
```bash
npm install -g netlify-cli
npm run deploy
```

#### Option 2: Connect GitHub Repository
1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy

#### Option 3: Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to Netlify via drag-and-drop
```

### Environment Variables
No environment variables required for basic deployment.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast meets WCAG standards
- Alt text for images (add when using real images)

## 🔧 Performance Optimization

- Code splitting with React Router
- Lazy loading of components
- Optimized images (use WebP format)
- CSS minification via Tailwind
- JavaScript minification via Vite

## 📚 Component Documentation

### Navbar
- Sticky positioning
- Smooth scroll to sections
- Mobile hamburger menu
- Active section highlighting

### Button
- Variants: primary, secondary, ghost
- Sizes: sm, md, lg
- Hover animations
- Accessible focus states

### Section
- Reusable section wrapper
- Title and subtitle support
- Scroll animations
- Dark/light variants

### ProjectCard
- Hover effects
- Tag display
- Link to case study
- Icon support

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild Tailwind: `npm run build`

## 📄 License

This portfolio is a custom design for Mary Mwirigi.

## 📞 Support

For issues or questions, please contact Mary Mwirigi.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
