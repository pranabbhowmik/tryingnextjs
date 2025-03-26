"use client";

import { cn } from "@/utils/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Amazing experience! The service was exceptional and beyond expectations.",
    name: "Amit Sharma",
    title: "Software Engineer",
  },
  {
    quote:
      "I highly recommend this platform. Professional and efficient in every way.",
    name: "Priya Kapoor",
    title: "Marketing Manager",
  },
  {
    quote:
      "Outstanding quality and attention to detail. Will definitely use it again!",
    name: "Rahul Mehta",
    title: "Business Owner",
  },
  {
    quote: "Great customer service! They went above and beyond to assist me.",
    name: "Sneha Verma",
    title: "Graphic Designer",
  },
  {
    quote:
      "Quick, reliable, and high quality. Very satisfied with the results!",
    name: "Vikram Choudhary",
    title: "Project Manager",
  },
];

function TestomonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      <h1 className="text-3xl font-bold text-center mb-8 z-10">
        TestomonialCards
      </h1>

      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}

export default TestomonialCards;
