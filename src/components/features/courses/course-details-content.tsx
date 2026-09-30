"use client";

import { CourseDetails } from "@/types/course";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCirclePlay } from "react-icons/fa6";
import { FiCheck, FiShare2, FiX } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";

interface CourseDetailsContentProps {
    course: CourseDetails;
}

export default function CourseDetailsContent({
    course,
}: CourseDetailsContentProps) {
    const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">(
        "about",
    );
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [shareToast, setShareToast] = useState(false);
    const [heroBgHeight, setHeroBgHeight] = useState<number | null>(null);

    const mainRef = useRef<HTMLElement>(null);
    const videoCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateHeight = () => {
            if (videoCardRef.current && mainRef.current) {
                const mainRect = mainRef.current.getBoundingClientRect();
                const videoRect = videoCardRef.current.getBoundingClientRect();
                const calculated = videoRect.bottom - mainRect.top + 61;
                setHeroBgHeight(calculated);
            }
        };

        updateHeight();
        const timer1 = setTimeout(updateHeight, 100);
        const timer2 = setTimeout(updateHeight, 400);
        window.addEventListener("resize", updateHeight);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    const handleShare = async () => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);
            }
            setShareToast(true);
            setTimeout(() => setShareToast(false), 3000);
        } catch {
            setShareToast(true);
            setTimeout(() => setShareToast(false), 3000);
        }
    };

    return (
        <main ref={mainRef} className="relative w-full bg-white min-h-screen">
            <div
                className="absolute top-0 left-0 right-0 bg-[#003BE2] hero-grid-pattern z-0 pointer-events-none transition-[height] duration-200"
                style={{
                    height: heroBgHeight ? `${heroBgHeight}px` : "780px",
                }}
            />

            <div className="container-page relative z-10 pt-8 sm:pt-10 lg:pt-12">
                <div className="flex flex-row items-start justify-between gap-4 sm:gap-6">
                    <div className="flex-1 min-w-0 pr-2">
                        <h1 className="text-white text-[25px] sm:text-[30px] md:text-[34px] lg:text-[38px] tracking-tight leading-[1.18] whitespace-normal lg:whitespace-nowrap overflow-hidden text-ellipsis">
                            {course.title}
                        </h1>
                        <p className="text-white text-[18px] sm:text-[19px] md:text-[22px]">
                            {course.subtitle}
                        </p>
                        <p className="mt-5 text-[15.5px] sm:text-[16px] text-white/90">
                            by{" "}
                            <span className="text-[#D4FB20] font-medium cursor-pointer hover:underline">
                                {course.instructor}
                            </span>
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                            <div className="bg-white rounded-full h-9 px-4.5 text-[#111111] text-[12.5px] sm:text-[15px] font-medium flex items-center gap-2 shadow-xs select-none">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="text-[#003BE2] shrink-0"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="2"
                                        y="8"
                                        width="2.5"
                                        height="6"
                                        rx="1"
                                    />
                                    <rect
                                        x="6.75"
                                        y="4.5"
                                        width="2.5"
                                        height="9.5"
                                        rx="1"
                                    />
                                    <rect
                                        x="11.5"
                                        y="1.5"
                                        width="2.5"
                                        height="12.5"
                                        rx="1"
                                    />
                                </svg>
                                <span>{course.level}</span>
                            </div>

                            <div className="bg-white rounded-full h-9 px-4.5 text-[#111111] text-[12.5px] sm:text-[15px] font-medium flex items-center gap-2 shadow-xs select-none">
                                <AiFillStar className="text-[#003BE2] text-[20px] shrink-0" />
                                <span>
                                    {course.rating.toFixed(1)} (
                                    {course.reviewsCount} reviews)
                                </span>
                            </div>

                            <div className="bg-white rounded-full h-9 px-4.5 text-[#111111] text-[12.5px] sm:text-[15px] font-medium flex items-center gap-2 shadow-xs select-none">
                                <HiOutlineUsers className="text-[#003BE2] text-[20px] shrink-0" />
                                <span>{course.studentCount} Students</span>
                            </div>
                        </div>
                    </div>

                    <div className="shrink-0 pt-3 sm:pt-4">
                        <button
                            onClick={handleShare}
                            className="bg-[#D4FB20] hover:bg-[#c4eb1a] text-[#111111] font-medium text-[13px] sm:text-[13.5px] px-4.5 h-9 rounded-full flex items-center gap-2 shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
                            aria-label="Share this course"
                        >
                            <FiShare2 className="text-[14px] shrink-0" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>

                <div className="mt-8 sm:mt-11 lg:mt-13 flex flex-col lg:flex-row items-start gap-8 lg:gap-16.5 pb-24">
                    <div className="w-full lg:w-180 max-w-180 flex-1 min-w-0 flex flex-col">
                        <div
                            ref={videoCardRef}
                            className="relative w-full aspect-1440/958 rounded-3xl sm:rounded-[28px] overflow-hidden shadow-2xl bg-[#EAEAEA] border border-white/20 select-none group"
                        >
                            <Image
                                src={course.videoThumbnail}
                                alt={course.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 720px"
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            />

                            <button
                                onClick={() => setIsVideoModalOpen(true)}
                                aria-label="Play course preview"
                                className="absolute top-5 left-5 inset-0 m-auto w-16 h-16 sm:w-22 sm:h-22 rounded-lg bg-black/20 hover:bg-black/55 backdrop-blur-md border border-black/30 flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                <FaCirclePlay className="text-white text-[35px] sm:text-[55px] ml-1 drop-shadow-sm" />
                            </button>
                        </div>

                        <div className="pt-20 sm:pt-24 lg:pt-31.5">
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <button
                                    onClick={() => setActiveTab("about")}
                                    className={`px-5 h-10 rounded-full text-[16px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-center ${
                                        activeTab === "about"
                                            ? "bg-[#D4FB20] text-[#111111] shadow-xs"
                                            : "bg-[#F4F4F6] text-[#414244] hover:bg-[#EAEAEA]"
                                    }`}
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => setActiveTab("lessons")}
                                    className={`px-5 h-10 rounded-full text-[16px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-center ${
                                        activeTab === "lessons"
                                            ? "bg-[#D4FB20] text-[#111111] shadow-xs"
                                            : "bg-[#F4F4F6] text-[#414244] hover:bg-[#EAEAEA]"
                                    }`}
                                >
                                    Lessons
                                </button>
                                <button
                                    onClick={() => setActiveTab("reviews")}
                                    className={`px-5 h-10 rounded-full text-[16px] font-medium transition-all duration-200 cursor-pointer flex items-center justify-center ${
                                        activeTab === "reviews"
                                            ? "bg-[#D4FB20] text-[#111111] shadow-xs"
                                            : "bg-[#F4F4F6] text-[#414244] hover:bg-[#EAEAEA]"
                                    }`}
                                >
                                    Reviews
                                </button>
                            </div>

                            {activeTab === "about" && (
                                <div className="mt-7 lg:mt-9">
                                    <h2 className="font-bold text-[21px] text-[#111111] mb-3 tracking-tight">
                                        Description
                                    </h2>
                                    <div className="space-y-3.5 text-[#5F6368] text-[16px] leading-[1.68] font-normal">
                                        {course.description.map(
                                            (paragraph, i) => (
                                                <p key={i}>{paragraph}</p>
                                            ),
                                        )}
                                    </div>

                                    <h2 className="font-bold text-[19px] text-[#111111] mt-8 mb-3.5 tracking-tight">
                                        Sneak Peak
                                    </h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                                        {course.sneakPeaks.map((peak) => (
                                            <div
                                                key={peak.id}
                                                className="relative aspect-4/3 rounded-[14px] sm:rounded-[16px] overflow-hidden bg-[#F5F5F6] border border-black/5 shadow-2xs group cursor-pointer"
                                                onClick={() =>
                                                    setIsVideoModalOpen(true)
                                                }
                                            >
                                                <Image
                                                    src={peak.image}
                                                    alt={peak.title}
                                                    fill
                                                    sizes="(max-width: 640px) 50vw, 180px"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <h2 className="font-bold text-[19px] text-[#111111] mt-8 mb-4.5 tracking-tight">
                                        Key Points
                                    </h2>
                                    <ul className="space-y-3.5">
                                        {course.keyPoints.map(
                                            (point, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-2.5 text-slate-600 text-[16px] font-normal leading-[1.68]"
                                                >
                                                    <div className="size-6 rounded-full bg-[#003BE2] flex items-center justify-center text-white shrink-0 shadow-2xs">
                                                        <FiCheck className="text-[18px] stroke-3" />
                                                    </div>
                                                    <span>{point}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            )}

                            {activeTab === "lessons" && (
                                <div className="mt-8 space-y-4">
                                    <h2 className="font-bold text-[21px] text-[#111111] mb-2 tracking-tight">
                                        Curriculum & Lessons
                                    </h2>
                                    <p className="text-[#5F6368] text-[13.5px] mb-5">
                                        Detailed breakdown of all 112 modules
                                        included in this masterclass.
                                    </p>
                                    <div className="border border-[#E5E7EB] rounded-[20px] divide-y divide-[#E5E7EB] overflow-hidden">
                                        {course.sampleLessons.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between p-4 sm:p-4.5 hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="flex items-center gap-3.5">
                                                    <span className="w-7 h-7 rounded-full bg-[#003BE2]/10 text-[#003BE2] font-semibold text-[12.5px] flex items-center justify-center">
                                                        {item.id}
                                                    </span>
                                                    <span className="font-medium text-[#111111] text-[13.5px]">
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <span className="text-[#003BE2] text-[12.5px] font-medium">
                                                    {item.duration}
                                                </span>
                                            </div>
                                        ))}
                                        <div className="p-4 sm:p-4.5 bg-[#F9FAFB] text-center text-[#717378] text-[13px]">
                                            + 99 more lessons available upon
                                            enrollment
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "reviews" && (
                                <div className="mt-8">
                                    <h2 className="font-bold text-[21px] text-[#111111] mb-2 tracking-tight">
                                        Student Reviews
                                    </h2>
                                    <div className="flex items-center gap-4 p-5 bg-[#F9FAFB] rounded-[20px] mb-6 border border-[#E5E7EB]">
                                        <span className="text-[34px] font-bold text-[#111111]">
                                            {course.rating.toFixed(1)}
                                        </span>
                                        <div>
                                            <div className="flex text-[#003BE2] text-[17px]">
                                                {"★".repeat(5)}
                                            </div>
                                            <span className="text-[#717378] text-[12.5px]">
                                                Course rating based on{" "}
                                                {course.reviewsCount} verified
                                                student reviews
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full lg:w-103 max-w-103 shrink-0 lg:sticky lg:top-8 z-20">
                        <div className="bg-white rounded-[26px] border border-[#D9DCE1] p-9.75 shadow-none">
                            <h3 className="font-bold text-[#222222] text-[19px] leading-[1.2] tracking-[-0.4px] mb-6.25">
                                {course.lessonsCount}
                            </h3>

                            <div className="space-y-2.5">
                                {course.sampleLessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        className="flex items-start justify-between gap-3 text-[15px] leading-[1.3]"
                                    >
                                        <div className="flex items-start gap-2.75 text-[#202124] font-normal min-w-0">
                                            <span className="shrink-0 leading-[1.3]">
                                                {lesson.id}
                                            </span>

                                            <span className="max-w-51.25 leading-[1.3]">
                                                {lesson.title}
                                            </span>
                                        </div>

                                        <span className="text-[#003BE2] font-normal text-[14px] leading-[1.3] shrink-0 mt-px">
                                            {lesson.duration}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p
                                onClick={() => setActiveTab("lessons")}
                                className="mt-3.25 text-[#717378] text-[14px] leading-[1.3] hover:text-[#003BE2] cursor-pointer transition-colors"
                            >
                                {course.moreVideosText}
                            </p>

                            <p className="mt-7.5 text-[#5F6368] text-[14px] leading-[1.65] max-w-72.5">
                                {course.enrollCardBlurb}
                            </p>

                            <div className="mt-6 flex items-baseline">
                                <span className="text-[36px] font-bold text-[#003BE2] leading-none tracking-[-1.2px]">
                                    ${course.price}
                                </span>

                                <span className="text-[#5F6368] text-[14px] font-normal ml-0.5">
                                    {course.priceType}
                                </span>
                            </div>

                            <button
                                className="
                mt-6.25
                w-full
                h-11.5
                bg-[#D4FB20]
                hover:bg-[#c4eb1a]
                text-[#111111]
                font-medium
                text-[16px]
                rounded-full
                transition-all
                duration-200
                flex
                items-center
                justify-center
                cursor-pointer
                active:scale-[0.98]
            "
                            >
                                Enroll Now
                            </button>

                            <div className="mt-6.25">
                                <h4 className="font-bold text-[#222222] text-[20px] leading-[1.2] mb-6.25 tracking-[-0.3px]">
                                    This course include
                                </h4>

                                <div className="space-y-4.25 text-[15px] text-[#5F6368]">
                                    <div className="flex items-center gap-2.5">
                                        <svg
                                            className="w-5.25 h-5.25 text-[#003BE2] shrink-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                                            <line
                                                x1="8"
                                                y1="13"
                                                x2="16"
                                                y2="13"
                                            />
                                        </svg>

                                        <span>Learning Resources</span>
                                    </div>

                                    <div className="flex items-center gap-2.5">
                                        <svg
                                            className="w-5.25 h-5.25 text-[#003BE2] shrink-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="23 7 16 12 23 17 23 7" />
                                            <rect
                                                x="1"
                                                y="5"
                                                width="15"
                                                height="14"
                                                rx="2"
                                                ry="2"
                                            />
                                        </svg>

                                        <span>Quality Lesson Videos</span>
                                    </div>

                                    <div className="flex items-center gap-2.5">
                                        <svg
                                            className="w-5.25 h-5.25 text-[#003BE2] shrink-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect
                                                x="3"
                                                y="4"
                                                width="18"
                                                height="16"
                                                rx="2"
                                                ry="2"
                                            />
                                            <line
                                                x1="7"
                                                y1="8"
                                                x2="17"
                                                y2="8"
                                            />
                                            <line
                                                x1="7"
                                                y1="12"
                                                x2="13"
                                                y2="12"
                                            />
                                            <circle cx="16" cy="14" r="2" />
                                        </svg>

                                        <span>Certificate of Completion</span>
                                    </div>

                                    <div className="flex items-center gap-2.5">
                                        <svg
                                            className="w-5.25 h-5.25 text-[#003BE2] shrink-0"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>

                                        <span>Private Consultation</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6.25 border-t border-[#D5D5D5]" />
                            <div className="mt-6">
                                <div className="flex items-center gap-3.25">
                                    <div className="relative w-13 h-13 rounded-full overflow-hidden shrink-0">
                                        <Image
                                            src={course.instructorAvatar}
                                            alt={course.instructor}
                                            fill
                                            sizes="52px"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h5 className="font-normal text-[#202124] text-[17px] leading-[1.2]">
                                            PurePearl Studio
                                        </h5>

                                        <p className="text-[#717378] text-[14px] mt-1 leading-[1.2]">
                                            Professional Creator
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-6.75 text-[#5F6368] text-[14px] leading-[1.65] max-w-72.5">
                                    Ready to Dive In? Enroll Now and Start
                                    Building Your Digital Future!
                                </p>
                                <button
                                    className="
                    mt-6.25
                    border
                    border-[#D1D5DB]
                    hover:border-[#111111]
                    text-[#34373B]
                    rounded-full
                    px-4
                    h-8.75
                    text-[14px]
                    font-normal
                    transition-colors
                    cursor-pointer
                "
                                >
                                    See Full Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isVideoModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={() => setIsVideoModalOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsVideoModalOpen(false)}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Close modal"
                        >
                            <FiX className="text-[20px]" />
                        </button>
                        <div className="relative aspect-video w-full">
                            <video
                                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}

            {shareToast && (
                <div className="fixed bottom-6 right-6 z-50 bg-[#111111] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-[14px] font-medium animate-in slide-in-from-bottom-5 duration-300">
                    <div className="w-5 h-5 rounded-full bg-[#D4FB20] text-[#111111] flex items-center justify-center shrink-0">
                        <FiCheck className="text-[12px] stroke-3" />
                    </div>
                    <span>Course link copied to clipboard!</span>
                </div>
            )}
        </main>
    );
}
