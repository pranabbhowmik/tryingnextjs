"use client";
import Link from "next/link";
import CourseData from "@/data/music.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeatyredCourses() {
  const featuredCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <>
      <div className="py-12 bg-black">
        <div>
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              FEATURED COURSES
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Learn With the Best
            </p>
          </div>
        </div>
        <div className="mt-10 mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-10 flex flex-col items-center text-center flex-grow gap-y-1.5">
                    <p className="text-xl sm:text-2xl text-white mt-4 mb-2 ">
                      {course.title}
                    </p>
                    <p className="text-sm text-white flex-grow ">
                      {course.description}
                    </p>
                    <div className=" bg-black w-28 h-10 p-2 rounded-4xl">
                      <Link href={`/courses/${course.slug}`}>Learn More</Link>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2  border border-white text-white bg-black hover:scale-105 transition duration-200 rounded-4xl"
          >
            View All courses
          </Link>
        </div>
      </div>
    </>
  );
}

export default FeatyredCourses;
