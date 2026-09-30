"use client";

import CourseCard from "@/components/shared/course-card";
import { allCoursesData, coursePageCategories } from "@/data";
import { Course } from "@/types/course";
import { useEffect, useMemo, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const sortOptions = [
    "Most relevant",
    "Highest Rated",
    "Price: Low to High",
    "Price: High to Low",
];

const levelOptions = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPageContent() {
    const [courses, setCourses] = useState<Course[]>(allCoursesData);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Featured");
    const [selectedLevel, setSelectedLevel] = useState("All Levels");
    const [selectedSort, setSelectedSort] = useState("Most relevant");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("/data/courses.json")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data: Course[]) => {
                if (Array.isArray(data) && data.length > 0) {
                    setCourses(data);
                }
            })
            .catch((err) => {
                console.error("Failed to load /data/courses.json:", err);
            });
    }, []);

    const [isCourseTypeOpen, setIsCourseTypeOpen] = useState(false);
    const [isLevelOpen, setIsLevelOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [contentType, setContentType] = useState("Courses");

    const filteredCourses = useMemo(() => {
        let list = [...courses];

        if (searchQuery.trim() !== "") {
            const query = searchQuery.toLowerCase().trim();
            list = list.filter(
                (c) =>
                    c.title.toLowerCase().includes(query) ||
                    c.instructor.toLowerCase().includes(query) ||
                    c.category?.toLowerCase().includes(query),
            );
        }

        if (selectedCategory !== "Featured") {
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
    }, [courses, searchQuery, selectedCategory, selectedLevel, selectedSort]);

    const coursesPerPage = 18;
    const totalPages = Math.max(
        1,
        Math.ceil(filteredCourses.length / coursesPerPage),
    );
    const paginatedCourses = useMemo(() => {
        const start = (currentPage - 1) * coursesPerPage;
        return filteredCourses.slice(start, start + coursesPerPage);
    }, [currentPage, filteredCourses]);

    const handleCategoryClick = (cat: string) => {
        setSelectedCategory(cat);
        setCurrentPage(1);
    };

    const resetFilters = () => {
        setSearchQuery("");
        setSelectedCategory("Featured");
        setSelectedLevel("All Levels");
        setSelectedSort("Most relevant");
        setCurrentPage(1);
    };

    return (
        <div className="w-full">
            <section className="w-full bg-[#003BE2] hero-grid-pattern text-white pt-3 sm:pt-10 pb-12 sm:pb-18.5 select-none">
                <div className="container-page">
                    <h1 className="font-poppins text-white text-[28px] sm:text-[36px]/[26px] text-center leading-[1.2]">
                        Find Your Next Course
                    </h1>

                    <div className="mt-7 sm:mt-8 flex items-center justify-center gap-2.5 sm:gap-3 max-w-162.5 mx-auto px-4 w-full">
                        <div className="group relative flex-1 bg-white h-11 sm:h-13 rounded-full flex items-center pl-4.5 sm:pl-5 pr-3 sm:pr-4 transition-all duration-200">
                            <FiSearch className="text-gray-500 group-focus-within:text-[#414244] text-[17px] sm:text-[18px] shrink-0 mr-2.5 sm:mr-3 transition-colors pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full h-full bg-transparent outline-none border-none ring-0 shadow-none focus:outline-none focus:ring-0 focus:border-none focus:shadow-none text-[14px] sm:text-[16px] text-[#111111] placeholder:text-[#9CA3AF] placeholder:font-normal font-normal leading-normal"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery("")}
                                    className="w-5 h-5 rounded-full bg-[#F0F1F3] hover:bg-[#E2E4E8] flex items-center justify-center text-[#717378] hover:text-[#111111] text-[10px] ml-1.5 shrink-0 cursor-pointer transition-colors"
                                    aria-label="Clear search"
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        <div className="relative shrink-0">
                            <button
                                type="button"
                                onClick={() =>
                                    setIsCourseTypeOpen(!isCourseTypeOpen)
                                }
                                className="bg-[#CBFC01] hover:bg-[#b8e800] text-[#111111] font-poppins font-semibold text-[14px] sm:text-[14.5px] h-11 sm:h-13 px-5 sm:px-6 rounded-full flex items-center justify-center gap-2 cursor-pointer shrink-0 transition-all active:scale-[0.98]"
                            >
                                <span>{contentType}</span>
                                <FiChevronDown
                                    className={`text-[17px] transition-transform duration-200 ${
                                        isCourseTypeOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {isCourseTypeOpen && (
                                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-[#E5E6E8] py-2 z-50">
                                    {[
                                        "Courses",
                                        "Workshops",
                                        "Tutorials",
                                        "All Content",
                                    ].map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => {
                                                setContentType(type);
                                                setIsCourseTypeOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 text-[14px] hover:bg-[#F5F5F6] transition-colors cursor-pointer ${
                                                contentType === type
                                                    ? "font-semibold text-[#003BE2]"
                                                    : "text-[#242528]"
                                            }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <main className="w-full bg-white pt-10 sm:pt-12 pb-16 sm:pb-20">
                <div className="container-page">
                    <div className="mx-auto w-full max-w-304">
                        <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap">
                            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                                <button
                                    type="button"
                                    onClick={resetFilters}
                                    className="
                    h-12
                    px-5
                    rounded-full
                    border border-[#CED0D3]
                    bg-white
                    text-[#4B4C53]
                    text-[14.5px]
                    font-medium
                    flex items-center
                    gap-2
                    transition-colors
                    cursor-pointer
                    hover:bg-[#F9FAFB]
                    whitespace-nowrap
                "
                                >
                                    <svg
                                        width="20"
                                        height="20"
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
                                        className={`
                        h-12
                        px-5
                        rounded-full
                        border
                        ${
                            selectedLevel !== "All Levels"
                                ? "border-[#003BE2] text-[#003BE2]"
                                : "border-[#CED0D3] text-[#4B4C53]"
                        }
                        bg-white
                        text-[14.5px]
                        font-medium
                        flex items-center
                        gap-2
                        transition-colors
                        cursor-pointer
                        hover:bg-[#F9FAFB]
                        whitespace-nowrap
                    `}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
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
                                                        setCurrentPage(1);
                                                    }}
                                                    className={`
                                    w-full
                                    text-left
                                    px-4
                                    py-2.5
                                    text-[14px]
                                    hover:bg-[#F5F5F6]
                                    transition-colors
                                    cursor-pointer
                                    ${
                                        selectedLevel === level
                                            ? "font-semibold text-[#003BE2]"
                                            : "text-[#242528]"
                                    }
                                `}
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
                                        className="
                        h-12
                        px-5
                        rounded-full
                        border border-[#CED0D3]
                        bg-white
                        text-[#4B4C53]
                        text-[14.5px]
                        font-medium
                        flex items-center
                        gap-2
                        transition-colors
                        cursor-pointer
                        hover:bg-[#F9FAFB]
                        whitespace-nowrap
                    "
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
                                            <path d="M12 2L6 12h12L12 2z" />
                                            <rect
                                                x="3"
                                                y="15"
                                                width="6"
                                                height="6"
                                            />
                                            <circle cx="18" cy="18" r="3" />
                                        </svg>

                                        <span>Category</span>
                                    </button>

                                    {isCategoryOpen && (
                                        <div className="absolute left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-[#E5E6E8] py-2 z-50 max-h-72 overflow-y-auto">
                                            {coursePageCategories.map((cat) => (
                                                <button
                                                    key={cat}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCategory(
                                                            cat,
                                                        );
                                                        setIsCategoryOpen(
                                                            false,
                                                        );
                                                        setCurrentPage(1);
                                                    }}
                                                    className={`
                                    w-full
                                    text-left
                                    px-4
                                    py-2.5
                                    text-[14px]
                                    hover:bg-[#F5F5F6]
                                    transition-colors
                                    cursor-pointer
                                    ${
                                        selectedCategory === cat
                                            ? "font-semibold text-[#003BE2]"
                                            : "text-[#242528]"
                                    }
                                `}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsSortOpen(!isSortOpen);
                                        setIsLevelOpen(false);
                                        setIsCategoryOpen(false);
                                    }}
                                    className="
                    h-12
                    px-5
                    rounded-full
                    border border-[#CED0D3]
                    bg-white
                    text-[#4B4C53]
                    text-[14.5px]
                    font-medium
                    flex items-center
                    gap-2.5
                    transition-colors
                    cursor-pointer
                    hover:bg-[#F9FAFB]
                    whitespace-nowrap
                "
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                    >
                                        <path d="M2 4h12v1.5H2V4zm0 3.5h8V9H2V7.5zm0 3.5h4V12.5H2V11z" />
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
                                                className={`
                                w-full
                                text-left
                                px-4
                                py-2.5
                                text-[14px]
                                hover:bg-[#F5F5F6]
                                transition-colors
                                cursor-pointer
                                ${
                                    selectedSort === opt
                                        ? "font-semibold text-[#003BE2]"
                                        : "text-[#242528]"
                                }
                            `}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 flex items-center gap-2.5 sm:gap-4 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
                            {coursePageCategories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => handleCategoryClick(cat)}
                                    className={`
                    h-11
                    px-5
                    rounded-full
                    text-[14.5px]/[21px]
                    transition-all
                    duration-200
                    select-none
                    cursor-pointer
                    whitespace-nowrap
                    shrink-0
                    ${
                        selectedCategory === cat
                            ? "bg-[#D4FB20] text-[#111111] font-medium"
                            : "bg-[#F5F5F6] text-[#4B4C53] font-normal"
                    }
                `}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {paginatedCourses.length > 0 ? (
                        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                            {paginatedCourses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-16 py-16 text-center">
                            <p className="text-[18px] font-medium text-[#111111]">
                                No courses found matching your criteria.
                            </p>
                            <p className="mt-2 text-[14px] text-[#82868E]">
                                Try clearing search terms or resetting filters.
                            </p>
                            <button
                                type="button"
                                onClick={resetFilters}
                                className="mt-6 h-11 px-6 rounded-full bg-[#003BE2] text-white text-[14px] font-medium hover:bg-[#0032b8] transition-colors cursor-pointer"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}

                    <div className="mt-14 sm:mt-20 pb-4 flex items-center justify-center select-none">
                        <button
                            type="button"
                            onClick={() =>
                                setCurrentPage((p) => Math.max(1, p - 1))
                            }
                            disabled={currentPage === 1}
                            className={`w-12 h-12 sm:w-16 sm:h-13 rounded-2xl border bg-white flex items-center justify-center transition-all ${
                                currentPage === 1
                                    ? "border-[#E5E7EB] text-[#757780] cursor-not-allowed opacity-80"
                                    : "border-[#D1D5DB] text-[#242528] hover:bg-[#F9FAFB] hover:border-[#9CA3AF] cursor-pointer"
                            }`}
                            aria-label="Previous page"
                        >
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-8 sm:gap-11 mx-8 sm:mx-12">
                            {Array.from(
                                { length: Math.min(5, totalPages) },
                                (_, i) => i + 1,
                            ).map((page) => (
                                <button
                                    key={page}
                                    type="button"
                                    onClick={() => setCurrentPage(page)}
                                    className={`text-[18px] sm:text-[19px] font-bold select-none transition-colors ${
                                        currentPage === page
                                            ? "text-[#CED0D3] cursor-default"
                                            : "text-[#242528] hover:text-[#000000] cursor-pointer"
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                setCurrentPage((p) =>
                                    Math.min(totalPages, p + 1),
                                )
                            }
                            disabled={currentPage === totalPages}
                            className={`w-12 h-12 sm:w-16 sm:h-13 rounded-2xl border bg-white flex items-center justify-center transition-all ${
                                currentPage === totalPages
                                    ? "border-[#E5E7EB] text-[#757780] cursor-not-allowed opacity-80"
                                    : "border-[#D1D5DB] text-[#242528] hover:bg-[#F9FAFB] hover:border-[#9CA3AF] cursor-pointer"
                            }`}
                            aria-label="Next page"
                        >
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
