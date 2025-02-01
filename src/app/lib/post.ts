interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Introduction to Next.js: Key Features and Benefits',
    content: `Next.js is a cutting-edge React framework that simplifies the development of high-performance web applications. With features like server-side rendering (SSR), static site generation (SSG), and API routing, it provides an all-in-one solution for building scalable websites. Developers benefit from automatic code splitting, dynamic imports, and prefetching, ensuring optimal performance even in complex applications. The flexible routing system and intuitive page creation process make Next.js an excellent choice for modern web development.`,
    image: '/blog3.png',
    date: '15-May-2024',
  },
  {
    id: 2,
    title: 'Exploring Web Development: A Comprehensive Guide for Beginners',
    content: `Web development encompasses the creation of websites and web applications, ranging from simple pages to complex, interactive platforms. Beginners start with foundational technologies like HTML (structure), CSS (styling), and JavaScript (functionality). This guide introduces front-end and back-end development, alongside essential tools and frameworks, equipping you with the knowledge to create your first functional website.`,
    image: '/blog1.jpg',
    date: '22-July-2023',
  },
  {
    id: 3,
    title: 'React Basics: A Complete Beginner’s Guide',
    content: `React is a widely-used JavaScript library designed for building dynamic and reusable user interface components. It allows developers to manage application state effectively and compose scalable UIs. This guide covers the essentials of React, including environment setup, understanding JSX syntax, and using props and state. By mastering these concepts, you'll be prepared to create engaging, interactive web applications.`,
    image: '/blog2.jpg',
    date: '10-June-2023',
  },
  {
    id: 4,
    title: 'Beginner’s Guide to Tailwind CSS: Simplify Your Styling',
    content: `Tailwind CSS is a utility-first framework that makes styling your web projects faster and easier. Unlike traditional frameworks, it lets you design directly in HTML by applying utility classes. This guide explains how to set up Tailwind, utilize its classes, and customize your designs efficiently, empowering you to create responsive and visually appealing interfaces with minimal effort.`,
    image: '/blog4.jpg',
    date: '05-August-2023',
  },
  {
    id: 5,
    title: 'API Security Essentials: Authentication and Authorization',
    content: `API security ensures data protection by implementing authentication and authorization mechanisms. Authentication verifies user identity, while authorization determines their access rights. This guide explores security techniques like JWT, OAuth, and OpenID Connect, along with best practices like input validation, HTTPS enforcement, and data encryption, helping developers build secure APIs.`,
    image: '/blog5.jpg',
    date: '10-March-2024',
  },
  {
    id: 6,
    title: 'Understanding Artificial Intelligence: A Beginner’s Overview',
    content: `Artificial Intelligence (AI) enables machines to simulate human-like intelligence, performing tasks such as decision-making, speech recognition, and language translation. This field includes subdomains like machine learning and natural language processing. AI systems analyze vast datasets to learn and improve over time, revolutionizing industries like healthcare and finance.`,
    image: '/blog6.png',
    date: '05-May-2022',
  },
  {
    id: 7,
    title: 'How AI is Revolutionizing Web Development in 2024',
    content: `AI is transforming web development by automating repetitive tasks, enhancing user experiences, and enabling smarter solutions. Tools powered by AI assist with code generation, design creation, and performance optimization. AI-driven personalization and testing improve site functionality, making websites more intuitive and efficient for users.`,
    image: '/blog7.jpg',
    date: '08-October-2023',
  },
  {
    id: 8,
    title: 'ChatGPT: Strategic Applications for Teams and Startups',
    content: `ChatGPT, developed by OpenAI, is an advanced language model designed to understand and generate human-like text. It supports tasks such as content creation, customer service, and code assistance. For startups and teams, ChatGPT enhances productivity by automating workflows, generating ideas, and streamlining operations, making it a valuable business asset.`,
    image: '/blog8.jpg',
    date: '08-January-2022',
  },
  {
    id: 9,
    title: 'An Introduction to TypeScript: Writing Reliable Code',
    content: `TypeScript is a typed superset of JavaScript that helps developers write robust, scalable code. By introducing optional type annotations and catching errors during development, TypeScript improves code quality and supports advanced tooling like autocompletion. It compiles to standard JavaScript, ensuring compatibility while enabling easier maintenance for large projects.`,
    image: '/blog9.png',
    date: '15-April-2022',
  },
  {
    id: 10,
    title: 'Creating Type-Safe Fullstack Apps with GraphQL Codegen',
    content: `GraphQL Codegen simplifies type-safe application development by generating TypeScript types for GraphQL queries, mutations, and schemas. This automation ensures consistency between front-end and back-end code, reducing errors and boosting efficiency. By using GraphQL Codegen, developers can focus on features while maintaining a clean, maintainable codebase.`,
    image: '/blog10.jpg',
    date: '18-September-2023',
  },
];

// Function to retrieve all posts
export function getPosts(): Post[] {
  return posts;
}

// Function to fetch a post by its ID
export function getPostById(id: number): Post | undefined {
  return posts.find(post => post.id === id);
}
