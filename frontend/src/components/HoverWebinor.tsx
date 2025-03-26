"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export const webinars = [
  {
    title: "Mastering React for Beginners",
    description:
      "Learn React fundamentals, component-based architecture, state management, and build dynamic web apps with hands-on coding sessions.",
    link: "https://example.com/webinar1",
  },
  {
    title: "Advanced JavaScript Techniques",
    description:
      "Explore closures, prototypes, async programming, and ES6+ features to write efficient, scalable, and high-performance JavaScript applications.",
    link: "https://example.com/webinar2",
  },
  {
    title: "Scaling Applications with Node.js",
    description:
      "Learn best practices for building scalable, high-performance Node.js applications, including database optimization, caching, and microservices.",
    link: "https://example.com/webinar3",
  },
  {
    title: "UI/UX Design Principles",
    description:
      "Understand key UX/UI principles, color theory, typography, and interaction design to create intuitive and visually appealing user interfaces.",
    link: "https://example.com/webinar4",
  },
  {
    title: "Optimizing Web Performance",
    description:
      "Boost website speed and SEO with lazy loading, code splitting, caching, and modern optimization techniques.",
    link: "https://example.com/webinar5",
  },
];

function HoverWebinor() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <HoverEffect items={webinars} />
    </div>
  );
}

export default HoverWebinor;
