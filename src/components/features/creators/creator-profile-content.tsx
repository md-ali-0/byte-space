"use client";

import CourseCard from "@/components/shared/course-card";
import {
    allCoursesData,
    coursePageCategories,
    defaultCreatorProfile,
} from "@/data";
import { Course, CreatorProfile } from "@/types/course";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const sortOptions = [
    "Most relevant",
    "Highest Rated",
    "Price: Low to High",
    "Price: High to Low",
];

const levelOptions = ["All Levels", "Beginner", "Intermediate", "Advanced"];

interface CreatorProfileContentProps {
    initialCreator?: CreatorProfile;
    initialCourses?: Course[];
}

export default function CreatorProfileContent({
    initialCreator = defaultCreatorProfile,
    initialCourses = allCoursesData.slice(0, 6),
}: CreatorProfileContentProps) {
    const [creator, setCreator] = useState<CreatorProfile>(initialCreator);
    const [courses, setCourses] = useState<Course[]>(initialCourses);
    const [isFollowing, setIsFollowing] = useState(false);

    const [selectedLevel, setSelectedLevel] = useState("All Levels");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedSort, setSelectedSort] = useState("Most relevant");

    const [isLevelOpen, setIsLevelOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    useEffect(() => {
        fetch("/data/creator.json")
            .then((res) => (res.ok ? res.json() : null))
            .then((data: CreatorProfile | null) => {
                if (data) setCreator(data);
            })
            .catch(() => {});

        fetch("/data/courses.json")
            .then((res) => (res.ok ? res.json() : null))
            .then((data: Course[] | null) => {
                if (Array.isArray(data) && data.length > 0) {
                    const creatorCourses = data.filter(
                        (c) =>
                            c.instructor?.toLowerCase() ===
                            initialCreator.name.toLowerCase(),
                    );
                    setCourses(
                        creatorCourses.length > 0
                            ? creatorCourses.slice(0, 6)
                            : data.slice(0, 6),
                    );
                }
            })
            .catch(() => {});
    }, [initialCreator.name]);

    const resetFilters = () => {
        setSelectedLevel("All Levels");
        setSelectedCategory("All Categories");
        setSelectedSort("Most relevant");
    };

    const filteredCourses = useMemo(() => {
        let list = [...courses];

        if (selectedCategory !== "All Categories") {
            list = list.filter(
                (c) =>
                    c.category?.toLowerCase() ===
                    selectedCategory.toLowerCase(),
            );
        }

        if (selectedLevel !== "All Levels") {
            list = list.filter(
                (c) => c.level.toLowerCase() === selectedLevel.toLowerCase(),
            );
        }

        if (selectedSort === "Highest Rated") {
            list.sort((a, b) => b.rating - a.rating);
        } else if (selectedSort === "Price: Low to High") {
            list.sort((a, b) => a.price - b.price);
        } else if (selectedSort === "Price: High to Low") {
            list.sort((a, b) => b.price - a.price);
        }

        return list;
    }, [courses, selectedCategory, selectedLevel, selectedSort]);

    return (
        <div className="w-full min-h-screen bg-white">
            <section className="w-full bg-[#003BE2] hero-grid-pattern text-white pt-6 sm:pt-10 lg:pt-11 pb-12 sm:pb-16 lg:pb-18 select-none font-poppins">
                <div className="container-page">
                    <div className="mx-auto w-full max-w-304">
                        <div className="flex items-center gap-4 sm:gap-5.5">
                            <div className="relative w-16 h-16 sm:w-18.5 sm:h-18.5 lg:w-23 lg:h-23 rounded-[18px] sm:rounded-[22px] overflow-hidden shrink-0 shadow-md border border-white/10">
                                <Image
                                    src={creator.avatar}
                                    alt={creator.name}
                                    width={300}
                                    height={300}
                                />
                            </div>

                            <div className="min-w-0">
                                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                                    <h1 className="font-poppins text-[26px] sm:text-[30px] lg:text-[33px] text-white tracking-[-0.01em] leading-tight">
                                        {creator.name}
                                    </h1>
                                    <span className="font-poppins font-medium bg-[#D4FB20] text-[#111111] text-[13px] sm:text-[14px] px-3.5 sm:px-4 py-1 sm:py-2.25 rounded-full shrink-0 shadow-2xs leading-none">
                                        {creator.badge}
                                    </span>
                                </div>
                                <p className="font-poppins font-normal text-white/85 text-[14.5px] sm:text-[16.5px] mt-3.5 leading-snug">
                                    {creator.role}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-7.5 space-y-3.5 font-poppins text-[16.5px] sm:text-[16px] leading-[1.62] max-w-7xl tracking-normal">
                            {creator.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-7.5 sm:mt-9 flex items-center justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-3 sm:gap-3.5">
                                <div className="bg-white rounded-full h-10 sm:h-11 px-5 sm:px-6 text-[#111111] font-poppins text-[14.5px] sm:text-[15px] font-normal flex items-center gap-2 shadow-xs select-none">
                                    <span className="text-[#003BE2] font-semibold text-[15px] sm:text-[16px]">
                                        {creator.productsCount}
                                    </span>
                                    <span>Products</span>
                                </div>

                                <div className="bg-white rounded-full h-10 sm:h-11 px-5 sm:px-6 text-[#111111] font-poppins text-[14.5px] sm:text-[15px] font-normal flex items-center gap-2 shadow-xs select-none">
                                    <span className="text-[#003BE2] font-semibold text-[15px] sm:text-[16px]">
                                        {isFollowing
                                            ? creator.followersCount + 1
                                            : creator.followersCount}
                                    </span>
                                    <span>Followers</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsFollowing(!isFollowing)}
                                className={`font-poppins font-medium text-[15px] h-10 sm:h-11 px-8 rounded-full shadow-xs cursor-pointer transition-all duration-200 active:scale-98 flex items-center justify-center ${
                                    isFollowing
                                        ? "bg-white text-[#003BE2] hover:bg-gray-100"
                                        : "bg-[#D4FB20] hover:bg-[#c3e81b] text-[#111111]"
                                }`}
                            >
                                {isFollowing ? "Following" : "Follow"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <main className="w-full bg-white pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-24">
                <div className="container-page">
                    <div className="mx-auto w-full max-w-304">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="h-11 sm:h-12 px-5 rounded-full border border-[#CED0D3] bg-white text-[#4B4C53] text-[14.5px] font-medium flex items-center gap-2 transition-colors cursor-pointer hover:bg-[#F9FAFB] whitespace-nowrap"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                    </svg>
                                    <span>Filter</span>
                                </button>

                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsLevelOpen(!isLevelOpen);
                                            setIsCategoryOpen(false);
                                            setIsSortOpen(false);
                                        }}
                                        className={`h-11 sm:h-12 px-5 rounded-full border ${
                                            selectedLevel !== "All Levels"
                                                ? "border-[#003BE2] text-[#003BE2]"
                                                : "border-[#CED0D3] text-[#4B4C53]"
                                        } bg-white text-[14.5px] font-medium flex items-center gap-2 transition-colors cursor-pointer hover:bg-[#F9FAFB] whitespace-nowrap`}
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                        >
                                            <rect
                                                x="2"
                                                y="10"
                                                width="2.5"
                                                height="4"
                                                rx="0.5"
                                            />
                                            <rect
                                                x="6.75"
                                                y="6"
                                                width="2.5"
                                                height="8"
                                                rx="0.5"
                                            />
                                            <rect
                                                x="11.5"
                                                y="2"
                                                width="2.5"
                                                height="12"
                                                rx="0.5"
                                            />
                                        </svg>
                                        <span>
                                            {selectedLevel === "All Levels"
                                                ? "Level"
                                                : selectedLevel}
                                        </span>
                                    </button>

                                    {isLevelOpen && (
                                        <div className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-[#E5E6E8] py-2 z-50">
                                            {levelOptions.map((level) => (
                                                <button
                                                    key={level}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedLevel(level);
                                                        setIsLevelOpen(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-[#F5F5F6] transition-colors cursor-pointer ${
                                                        selectedLevel === level
                                                            ? "font-semibold text-[#003BE2]"
                                                            : "text-[#242528]"
                                                    }`}
                                                >
                                                    {level}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsCategoryOpen(!isCategoryOpen);
                                            setIsLevelOpen(false);
                                            setIsSortOpen(false);
                                        }}
                                        className={`h-11 sm:h-12 px-5 rounded-full border ${
                                            selectedCategory !== "All Categories"
                                                ? "border-[#003BE2] text-[#003BE2]"
                                                : "border-[#CED0D3] text-[#4B4C53]"
                                        } bg-white text-[14.5px] font-medium flex items-center gap-2 transition-colors cursor-pointer hover:bg-[#F9FAFB] whitespace-nowrap`}
                                    >
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="12 2 2 22 22 22" />
                                        </svg>
                                        <span>
                                            {selectedCategory === "All Categories"
                                                ? "Category"
                                                : selectedCategory}
                                        </span>
                                    </button>

                                    {isCategoryOpen && (
                                        <div className="absolute left-0 mt-2 w-52 max-h-72 overflow-y-auto bg-white rounded-2xl shadow-xl border border-[#E5E6E8] py-2 z-50">
                                            {["All Categories", ...coursePageCategories].map(
                                                (cat) => (
                                                    <button
                                                        key={cat}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedCategory(cat);
                                                            setIsCategoryOpen(false);
                                                        }}
                                                        className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-[#F5F5F6] transition-colors cursor-pointer ${
                                                            selectedCategory === cat
                                                                ? "font-semibold text-[#003BE2]"
                                                                : "text-[#242528]"
                                                        }`}
                                                    >
                                                        {cat}
                                                    </button>
                                                ),
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="relative ml-auto">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsSortOpen(!isSortOpen);
                                        setIsLevelOpen(false);
                                        setIsCategoryOpen(false);
                                    }}
                                    className="h-11 sm:h-12 px-5 rounded-full border border-[#CED0D3] bg-white text-[#4B4C53] text-[14.5px] font-medium flex items-center gap-2 transition-colors cursor-pointer hover:bg-[#F9FAFB] whitespace-nowrap"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="6" y1="12" x2="18" y2="12" />
                                        <line x1="9" y1="18" x2="15" y2="18" />
                                    </svg>
                                    <span>{selectedSort}</span>
                                </button>

                                {isSortOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-[#E5E6E8] py-2 z-50">
                                        {sortOptions.map((opt) => (
                                            <button
                                                key={opt}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedSort(opt);
                                                    setIsSortOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-[#F5F5F6] transition-colors cursor-pointer ${
                                                    selectedSort === opt
                                                        ? "font-semibold text-[#003BE2]"
                                                        : "text-[#242528]"
                                                }`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7.5 mt-8 sm:mt-10">
                            {filteredCourses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    course={course}
                                    className="w-full"
                                />
                            ))}
                        </div>

                        {filteredCourses.length === 0 && (
                            <div className="py-20 text-center text-[#717378]">
                                <p className="text-[17px] font-medium">
                                    No courses found matching your filter criteria.
                                </p>
                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="mt-4 text-[#003BE2] underline font-medium cursor-pointer"
                                >
                                    Reset all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
