"use client";

import CourseCard from "@/components/shared/course-card";
import { categoryRows, coursesData } from "@/lib/courses-data";
import { useState } from "react";

export default function CoursesSection() {
    const [selectedCategory, setSelectedCategory] = useState("Featured");
    const [showMore, setShowMore] = useState(false);

    const filteredCourses =
        selectedCategory === "Featured"
            ? coursesData
            : coursesData.filter(
                  (c) =>
                      c.category?.toLowerCase() ===
                      selectedCategory.toLowerCase()
              );

    const displayCourses =
        filteredCourses.length > 0 ? filteredCourses : coursesData;

    return (
        <section className="w-full bg-white py-16 sm:py-20 md:py-24">
            <div className="container-page">
                <div className="text-center max-w-226 mx-auto">
                    <h2 className="font-poppins font-semibold text-[#111111] text-[32px] sm:text-[42px] md:text-[48px] leading-[1.2] tracking-[-0.02em]">
                        Discover Your Passion, <br className="hidden sm:inline" />
                        Build Your Skills
                    </h2>
                    <p className="mt-9 text-[#82868E] text-[15px] sm:text-[16px] leading-[160%] font-normal max-w-226 mx-auto">
                        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                    </p>
                </div>

                <div className="mt-10 sm:mt-12 flex flex-col items-center">
                    <div className="hidden lg:flex flex-col items-center gap-5.5 w-full">
                        <div className="flex items-center justify-center gap-2.5 flex-wrap">
                            {categoryRows[0].map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`h-10.75 px-5.5 inline-flex items-center justify-center rounded-full text-[14px] transition-all duration-200 select-none cursor-pointer ${
                                        selectedCategory === cat
                                            ? "bg-[#D4FB20] text-[#111111] font-medium shadow-xs"
                                            : "bg-[#F5F5F6] text-[#242528] hover:bg-[#EAEAEA] font-normal"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-2.5 flex-wrap">
                            {categoryRows[1].map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`h-10.75 px-5.5 inline-flex items-center justify-center rounded-full text-[14px] transition-all duration-200 select-none cursor-pointer ${
                                        selectedCategory === cat
                                            ? "bg-[#D4FB20] text-[#111111] font-medium shadow-xs"
                                            : "bg-[#F5F5F6] text-[#242528] hover:bg-[#EAEAEA] font-normal"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-2.5 flex-wrap">
                            {categoryRows[2].map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`h-10.75 px-5.5 inline-flex items-center justify-center rounded-full text-[14px] transition-all duration-200 select-none cursor-pointer ${
                                        selectedCategory === cat
                                            ? "bg-[#D4FB20] text-[#111111] font-medium shadow-xs"
                                            : "bg-[#F5F5F6] text-[#242528] hover:bg-[#EAEAEA] font-normal"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                            <button
                                type="button"
                                onClick={() => setShowMore(!showMore)}
                                className="px-3 py-2 text-[14px] font-medium text-[#003BE2] hover:underline cursor-pointer select-none transition-colors ml-1"
                            >
                                {showMore ? "- Less" : "+ More"}
                            </button>
                        </div>
                    </div>
                    <div className="lg:hidden flex flex-wrap items-center justify-center gap-2">
                        {categoryRows.flat().map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-[13px] transition-all duration-200 select-none cursor-pointer ${
                                    selectedCategory === cat
                                        ? "bg-[#D4FB20] text-[#111111] font-medium shadow-xs"
                                        : "bg-[#F5F5F6] text-[#242528] hover:bg-[#EAEAEA] font-normal"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-12 sm:mt-18.75 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
