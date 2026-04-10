export const articles = [
  {
    name: 'building-accessible-web',
    title: 'Building Accessible Web Experiences',
    date: 'Feb 15, 2024',
    author: 'Sam Irian Villaluna',
    content: [
      'Accessibility is not an afterthought—it\'s a fundamental aspect of web development. When we build accessible web experiences, we\'re not just following guidelines; we\'re ensuring that everyone, regardless of their abilities, can use and enjoy our applications.',
      'WCAG 2.1 guidelines provide a comprehensive framework for accessibility. These guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust. Each principle contains testable criteria that help developers create inclusive digital experiences.',
      'Some key practices include: using semantic HTML, providing alt text for images, ensuring keyboard navigation, maintaining proper color contrast, and testing with real assistive technologies. These practices might seem simple, but they have a profound impact on user experience.',
      'Start small—audit one page at a time. Use tools like WAVE, Axe, or Lighthouse to identify issues. But remember, automated tools catch only 25-30% of accessibility issues. Manual testing with screen readers and keyboard-only navigation is crucial.',
      'Accessibility benefits everyone. Clear navigation helps users with cognitive disabilities and also improves SEO. Captions help people in noisy environments. Readable fonts benefit users with and without visual impairments. When we design accessibly, we create better experiences for all users.'
    ]
  },
  {
    name: 'react-hooks-explained',
    title: 'Mastering React Hooks: A Deep Dive',
    date: 'Feb 10, 2024',
    author: 'Ana Cruz',
    content: [
      'React Hooks revolutionized how we write React components. Before Hooks, managing state in functional components was impossible—you had to use class components. Hooks changed that, allowing functional components to have state and lifecycle features.',
      'The useState hook is the foundation. It returns an array with the current state value and a function to update it. When you call the setter function, React re-renders the component with the new state. This simple pattern is powerful and encourages immutable state management.',
      'useEffect is your gateway to side effects. Whether you\'re fetching data, subscribing to events, or manipulating the DOM, useEffect handles it. The dependency array controls when the effect runs: empty array runs once, no array runs every render, or list specific dependencies.',
      'Custom hooks let you extract component logic into reusable functions. They follow the "use" naming convention and can call other hooks. This pattern promotes code reuse and makes your components cleaner and more focused on their primary responsibility.',
      'Performance optimization is key. useMemo and useCallback prevent unnecessary computations and re-renders. useContext eliminates prop drilling. useReducer manages complex state logic. Together, these hooks give you fine-grained control over your component\'s behavior and performance.'
    ]
  },
  {
    name: 'css-grid-mastery',
    title: 'CSS Grid: From Basics to Mastery',
    date: 'Feb 5, 2024',
    author: 'Leo Santos',
    content: [
      'CSS Grid is a two-dimensional layout system that changed how we think about web design. Unlike Flexbox, which is primarily one-dimensional, Grid lets you work with rows and columns simultaneously, giving you unprecedented control over complex layouts.',
      'Getting started is simple: set display: grid on a container, define your grid with grid-template-columns and grid-template-rows, then place items using grid-column and grid-row. You can use fixed sizes, fractions (fr), or auto to create flexible, responsive layouts.',
      'The fr unit is Grid\'s secret weapon. One fr represents one fraction of the available space. If you have three columns at 1fr each, they divide the space equally. This responsive behavior eliminates the need for media queries in many cases.',
      'Named grid areas make complex layouts readable. Define areas with grid-template-areas, then assign items to areas with grid-area. Your CSS becomes self-documenting, and rearranging layouts is as simple as reordering lines in your template.',
      'Combine Grid with Flexbox for powerful layouts. Use Grid for page-level structure and Flexbox for component-level arrangements. Subgrid (CSS Grid Level 2) takes this further, allowing nested grids to inherit parent grid lines. The future of web layout is here.'
    ]
  },
  {
    name: 'typescript-for-beginners',
    title: 'TypeScript for Beginners: Type Safety Made Easy',
    date: 'Jan 28, 2024',
    author: 'Sam Irian Villaluna',
    content: [
      'TypeScript adds a type system to JavaScript, catching errors at compile-time rather than runtime. This might seem like extra work, but the benefits in code reliability and developer experience are substantial, especially in larger projects.',
      'Basic types are straightforward: string, number, boolean, and more. You can also create union types (string | number) for flexibility and literal types for specific values. Interfaces define object shapes, ensuring consistency across your codebase.',
      'Functions benefit greatly from types. Specify parameter types and return types. TypeScript ensures you\'re passing correct arguments and using return values correctly. This catches mistakes before they become bugs in production.',
      'Generics make reusable code type-safe. A generic function or component can work with any type while maintaining type information. This is crucial for utilities and libraries that need to be flexible yet type-safe.',
      'Start typing gradually. TypeScript allows mixing typed and untyped code. Begin with strict types in new code and gradually add types to existing files. The investment pays off quickly through fewer bugs and better IDE support.'
    ]
  },
  {
    name: 'web-performance-optimization',
    title: 'Web Performance Optimization: Speed Matters',
    date: 'Jan 20, 2024',
    author: 'Ana Cruz',
    content: [
      'Web performance directly impacts user experience and business metrics. Slow websites cause users to leave, increasing bounce rates and reducing conversions. Optimization should be part of your development process from day one.',
      'Core Web Vitals measure user experience: Largest Contentful Paint (LCP) measures loading performance, First Input Delay (FID) measures responsiveness, and Cumulative Layout Shift (CLS) measures visual stability. Google uses these metrics for search rankings.',
      'Image optimization is often the biggest win. Compress images, use modern formats like WebP, and serve responsive images. Lazy loading defers off-screen images. These techniques alone can dramatically reduce page load time.',
      'Code splitting and lazy loading components reduce initial bundle size. Only load code when needed. Critical CSS inline in the head, deferred CSS loads asynchronously. Minification and tree-shaking remove unused code.',
      'Measure everything. Use Lighthouse, WebPageTest, or real user monitoring to understand your performance. Set performance budgets and automate checks in your CI/CD pipeline. Performance is a continuous journey, not a destination.'
    ]
  },
  {
    name: 'state-management-patterns',
    title: 'State Management Patterns: Finding Your Solution',
    date: 'Jan 15, 2024',
    author: 'Leo Santos',
    content: [
      'Managing application state is one of the hardest problems in frontend development. As applications grow, keeping track of what data exists, where it lives, and how it changes becomes complex. The right patterns help organize this chaos.',
      'Local component state (useState) works for small, isolated pieces of state. When multiple components need the same state, you lift state up to a common parent. Props drilling—passing props through many levels—signals that you need a different approach.',
      'Context API solves prop drilling by providing a way to pass data through the component tree without passing props at every level. It\'s lightweight and built into React, making it perfect for themes, authentication, or global UI state.',
      'For complex state with many interactions, useReducer provides a structured approach. Define actions and a reducer function that processes them. This pattern scales well and makes state transitions explicit and testable.',
      'External state management libraries like Redux or Zustand centralize your entire application state. They excel in large applications with complex state logic, time-travel debugging, and middleware support. Choose based on your application\'s needs, not hype.'
    ]
  }
];
