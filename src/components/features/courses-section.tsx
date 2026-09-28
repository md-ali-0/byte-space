"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

interface Course {
    id: string;
    title: string;
    instructor: string;
    rating: number;
    lessons: number;
    duration: string;
    comments: number;
    level: string;
    price: number;
    priceType: string;
    image: string;
    category: string;
}

const coursesData: Course[] = [
    {
        id: "1",
        title: "Learn Figma from Basic",
        instructor: "purepearl studio",
        rating: 4.5,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        level: "Beginner",
        price: 25,
        priceType: "/lifetime",
        image: "/courses/course-1.png",
        category: "UI/UX Design",
    },
    {
        id: "2",
        title: "Build Digital Asset",
        instructor: "purepearl studio",
        rating: 4.5,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        level: "Beginner",
        price: 25,
        priceType: "/lifetime",
        image: "/courses/course-2.png",
        category: "Graphic Design",
    },
    {
        id: "3",
        title: "the Power of Big Data",
        instructor: "purepearl studio",
        rating: 4.5,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        level: "Beginner",
        price: 25,
        priceType: "/lifetime",
        image: "/courses/course-3.png",
        category: "Data Science",
    },
    {
        id: "4",
        title: "User Experience & Wireframing",
        instructor: "purepearl studio",
        rating: 4.5,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        level: "Beginner",
        price: 25,
        priceType: "/lifetime",
        image: "/courses/course-4.jpg",
        category: "UI/UX Design",
    },
    {
        id: "5",
        title: "Modern Web Development",
        instructor: "purepearl studio",
        rating: 4.5,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        level: "Beginner",
        price: 25,
        priceType: "/lifetime",
        image: "/courses/course-5.jpg",
        category: "Web Development",
    },
    {
        id: "6",
        title: "Digital Product Strategy & Innovation",
        instructor: "purepearl studio",
        rating: 4.5,
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        level: "Beginner",
        price: 25,
        priceType: "/lifetime",
        image: "/courses/course-6.jpg",
        category: "Marketing",
    },
];

const categoryRows = [
    [
        "Featured",
        "Music",
        "Drawing & Painting",
        "Marketing",
        "Animation",
        "Social Media",
        "UI/UX Design",
        "Creative Marketing",
    ],
    [
        "Digital Illustration",
        "Film & Video",
        "Crafts",
        "Freelance & Entrepreneurship",
        "Graphic Design",
        "Photography",
    ],
    [
        "Productivity",
        "Web Development",
        "Data Science",
        "Cooking",
    ],
];

const studentAvatars = [
    "/avatars/avatar-1.png",
    "/avatars/avatar-2.png",
    "/avatars/avatar-3.png",
    "/avatars/avatar-4.png",
];

export default function CoursesSection() {
    const [selectedCategory, setSelectedCategory] = useState("Featured");
    const [showMore, setShowMore] = useState(false);

    const filteredCourses =
        selectedCategory === "Featured"
            ? coursesData
            : coursesData.filter(
                  (c) =>
                      c.category.toLowerCase() ===
                      selectedCategory.toLowerCase()
              );

    const displayCourses =
        filteredCourses.length > 0 ? filteredCourses : coursesData;

    return (
        <section className="w-full bg-white py-16 sm:py-20 md:py-24">
            <div className="container-page">
                <div className="text-center max-w-212.5 mx-auto">
                    <h2 className="font-poppins font-semibold text-[#111111] text-[32px] sm:text-[42px] md:text-[48px] leading-[1.2] tracking-[-0.02em]">
                        Discover Your Passion, <br className="hidden sm:inline" />
                        Build Your Skills
                    </h2>
                    <p className="mt-4 text-[#82868E] text-[15px] sm:text-[16px] leading-[160%] font-normal max-w-[780px] mx-auto">
                        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                    </p>
                </div>

                <div className="mt-10 sm:mt-12 flex flex-col items-center gap-2.5 sm:gap-3">
                    <div className="hidden lg:flex flex-col items-center gap-2.5 w-full">

                        <div className="flex items-center justify-center gap-2.5 flex-wrap">
                            {categoryRows[0].map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-[14px] transition-all duration-200 select-none cursor-pointer ${
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
                                    className={`px-5 py-2.5 rounded-full text-[14px] transition-all duration-200 select-none cursor-pointer ${
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
                                    className={`px-5 py-2.5 rounded-full text-[14px] transition-all duration-200 select-none cursor-pointer ${
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
                                className="px-3 py-2 text-[14px] font-medium text-[#003BE2] hover:underline cursor-pointer select-none transition-colors"
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

                <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {displayCourses.map((course) => (
                        <div
                            key={course.id}
                            className="group relative bg-white rounded-[24px] border border-[#E5E6E8] p-3.5 sm:p-4 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-[#F5F5F6]">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 sm:gap-2 select-none">
                                        <div className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-normal text-[#242528] bg-white/75 backdrop-blur-md shadow-xs border border-white/30 truncate">
                                            {course.lessons} Lessons
                                        </div>
                                        <div className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-normal text-[#242528] bg-white/75 backdrop-blur-md shadow-xs border border-white/30 truncate">
                                            {course.duration}
                                        </div>
                                        <div className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-normal text-[#242528] bg-white/75 backdrop-blur-md shadow-xs border border-white/30 truncate">
                                            {course.comments} Comments
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-start justify-between gap-3">
                                    <h3 className="font-semibold text-[18px] sm:text-[19px] text-[#111111] leading-tight line-clamp-1">
                                        <Link
                                            href={`/courses/${course.id}`}
                                            className="hover:text-[#003BE2] transition-colors"
                                        >
                                            {course.title}
                                        </Link>
                                    </h3>
                                    <div className="flex items-center gap-1 shrink-0 pt-0.5">
                                        <span className="text-[14px] font-medium text-[#242528] leading-none">
                                            {course.rating.toFixed(1)}
                                        </span>
                                        <AiFillStar className="text-[#9CA3AF] text-[15px]" />
                                    </div>
                                </div>

                                <p className="mt-1 text-[13px] text-[#82868E] font-normal">
                                    by{" "}
                                    <span className="text-[#003BE2] hover:underline cursor-pointer">
                                        {course.instructor}
                                    </span>
                                </p>
                            </div>


                            <div className="mt-4 pt-1">

                                <div className="flex items-center justify-between">

                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F6] text-[#242528] text-[12px] font-medium">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="text-[#242528] shrink-0"
                                            aria-hidden="true"
                                        >
                                            <rect x="2" y="9" width="2.5" height="5" rx="1" />
                                            <rect x="6.75" y="5" width="2.5" height="9" rx="1" />
                                            <rect
                                                x="11.5"
                                                y="2"
                                                width="2.5"
                                                height="12"
                                                rx="1"
                                                opacity="0.25"
                                            />
                                        </svg>
                                        <span>{course.level}</span>
                                    </div>

                                    <div className="flex items-center">
                                        {studentAvatars.map((src, i) => (
                                            <div
                                                key={i}
                                                className={`relative w-[28px] h-[28px] rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0 ${
                                                    i !== 0 ? "-ml-2.5" : ""
                                                }`}
                                            >
                                                <Image
                                                    src={src}
                                                    alt={`Student ${i + 1}`}
                                                    fill
                                                    sizes="28px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                        <div className="-ml-2.5 w-[28px] h-[28px] rounded-full bg-[#D4FB20] text-[#111111] text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0 z-10">
                                            26+
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-baseline gap-1">
                                    <span className="text-[22px] font-bold text-[#003BE2] leading-none">
                                        ${course.price}
                                    </span>
                                    <span className="text-[12px] sm:text-[13px] text-[#82868E] font-normal">
                                        {course.priceType}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
