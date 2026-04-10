const articles = [
  {
    name: 'getting-started-react',
    title: 'Getting Started with React',
    content: [
      'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.',
      'This article walks through the basics of creating components, handling state, and composing a simple app with routing.',
      'By the end you should have a small, functioning React app and understand the component model.'
    ]
  },
  {
    name: 'accessible-ui',
    title: 'Designing Accessible UI',
    content: [
      "Accessibility is essential. Use semantic HTML, proper labels, and ensure keyboard navigation works.",
      'Contrast, focus states, and ARIA where necessary help make your app usable by more people.',
      'Testing with screen readers and manual keyboard checks is important.'
    ]
  },
  {
    name: 'styling-tips',
    title: 'Styling Tips for Modern Apps',
    content: [
      'Keep styles modular and prefer utility classes for layout when appropriate.',
      'Use CSS variables for theme tokens and make the layout responsive using media queries.',
      'Small animations and hover effects improve perceived polish.'
    ]
  },
  {
    name: 'state-management',
    title: 'State Management Patterns',
    content: [
      'Local component state is usually enough for UI state and form inputs.',
      'Lift state up to a common ancestor to share it between components, or use context for cross-cutting concerns.',
      'For complex apps, consider external stores but prefer simple patterns first.'
    ]
  },
  {
    name: 'deploying-vite',
    title: 'Deploying a Vite App',
    content: [
      'Vite builds produce static assets ready for static hosts or CDNs.',
      'Run `vite build` and serve the `dist` folder with a static server or a platform like Netlify, Vercel, or GitHub Pages.',
      'Ensure your hosting supports SPA fallback if you use client-side routing.'
    ]
  }
];

export default articles;
