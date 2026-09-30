"use client";

import { defaultStudentAvatars } from "@/data";
import { Course } from "@/types/course";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

export interface CourseCardProps {
    course: Course;
    size?: "default" | "compact";
    asLink?: boolean;
    className?: string;
    hideBadges?: Array<"lessons" | "duration" | "comments">;
    starColor?: string;
    studentAvatars?: string[];
    studentCount?: string;
    priorityImage?: boolean;
}

export default function CourseCard({
    course,
    size = "default",
    asLink = true,
    className = "",
    hideBadges = [],
    starColor,
    studentAvatars = defaultStudentAvatars,
    studentCount = "26+",
    priorityImage = false,
}: CourseCardProps) {
    const isCompact = size === "compact";

    const showLessons = !hideBadges.includes("lessons");
    const showDuration = !hideBadges.includes("duration");
    const showComments = !hideBadges.includes("comments");

    const content = (
        <div
            className={`flex flex-col justify-between h-full ${
                isCompact ? "" : "w-full"
            }`}
        >
            <div>
                <div
                    className={`relative w-full overflow-hidden bg-[#F5F5F6] ${
                        isCompact
                            ? "aspect-341/196 rounded-[14px]"
                            : "aspect-682/391 rounded-[16px] sm:rounded-[18px]"
                    }`}
                >
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes={
                            isCompact
                                ? "340px"
                                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
                        }
                        priority={priorityImage}
                        className={`object-cover transition-transform duration-500 ${
                            asLink ? "group-hover:scale-105" : ""
                        }`}
                    />

                    {(showLessons || showDuration || showComments) && (
                        <div
                            className={`absolute select-none flex items-center pointer-events-none ${
                                isCompact
                                    ? "bottom-2 left-2 right-2 justify-between gap-1"
                                    : "bottom-3 left-3 right-3 justify-between gap-1.5"
                            }`}
                        >
                            {showLessons && (
                                <div
                                    className={`truncate shadow-2xs ${
                                        isCompact
                                            ? "px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9.5px] sm:text-[10px] font-medium text-[#242528]"
                                            : "px-2.5 sm:px-3 py-1 sm:py-1.25 rounded-full text-[10.5px] sm:text-[11px] font-medium text-[#222428] bg-white/70 backdrop-blur-md"
                                    }`}
                                >
                                    {course.lessons} Lessons
                                </div>
                            )}
                            {showDuration && (
                                <div
                                    className={`truncate shadow-2xs ${
                                        isCompact
                                            ? "px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9.5px] sm:text-[10px] font-medium text-[#242528]"
                                            : "px-2.5 sm:px-3 py-1 sm:py-1.25 rounded-full text-[10.5px] sm:text-[11px] font-medium text-[#222428] bg-white/70 backdrop-blur-md"
                                    }`}
                                >
                                    {course.duration}
                                </div>
                            )}
                            {showComments && (
                                <div
                                    className={`truncate shadow-2xs ${
                                        isCompact
                                            ? "px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9.5px] sm:text-[10px] font-medium text-[#242528]"
                                            : "px-2.5 sm:px-3 py-1 sm:py-1.25 rounded-full text-[10.5px] sm:text-[11px] font-medium text-[#222428] bg-white/70 backdrop-blur-md"
                                    }`}
                                >
                                    {course.comments} Comments
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div
                    className={`flex items-center justify-between gap-2.5 ${
                        isCompact ? "mt-3" : "mt-3.5 sm:mt-4"
                    }`}
                >
                    <h3
                        className={`text-[#111111] leading-tight font-bold ${
                            isCompact
                                ? "text-[14.5px] sm:text-[16px] max-w-47.5 truncate"
                                : "text-[18px] sm:text-[19px] max-w-56.25 sm:max-w-58.75 tracking-tight truncate"
                        }`}
                        title={course.title}
                    >
                        {course.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                        <span
                            className={`leading-none ${
                                isCompact
                                    ? "text-[14px] text-[#4F4F4F] font-medium"
                                    : "text-[15.5px] sm:text-[16px] text-[#4F5562] font-normal"
                            }`}
                        >
                            {course.rating.toFixed(1)}
                        </span>
                        <AiFillStar
                            className={`${
                                starColor
                                    ? starColor
                                    : isCompact
                                    ? "text-[#CBFC01]"
                                    : "text-[#C4C7CC]"
                            } text-[16px]`}
                        />
                    </div>
                </div>

                <p
                    className={`font-normal ${
                        isCompact
                            ? "mt-0.5 text-[11px] sm:text-[11.5px] text-[#82868E]"
                            : "mt-1 text-[12.5px] sm:text-[13px] text-[#82868E]"
                    }`}
                >
                    by{" "}
                    <span className="text-[#003BE2] hover:underline cursor-pointer font-normal">
                        {course.instructor}
                    </span>
                </p>
            </div>

            <div className={isCompact ? "mt-3" : "mt-4 sm:mt-4.5"}>
                <div
                    className={`flex items-center ${
                        isCompact ? "justify-between" : "gap-3"
                    }`}
                >
                    <div
                        className={`inline-flex items-center font-medium rounded-full ${
                            isCompact
                                ? "gap-1.5 px-2 sm:px-2.5 py-0.5 bg-[#F5F5F7] text-[10.5px] sm:text-[11px] text-[#414244]"
                                : "gap-2 px-3 sm:px-3.5 py-1.5 bg-[#F4F4F6] text-[#374151] text-[12px] sm:text-[12.5px]"
                        }`}
                    >
                        <svg
                            width={isCompact ? "11" : "13"}
                            height={isCompact ? "11" : "13"}
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="shrink-0 text-[#374151]"
                            aria-hidden="true"
                        >
                            <rect x="2" y="8" width="2.5" height="6" rx="1" />
                            <rect x="6.75" y="4.5" width="2.5" height="9.5" rx="1" />
                            <rect
                                x="11.5"
                                y="1.5"
                                width="2.5"
                                height="12.5"
                                rx="1"
                                className="opacity-25"
                            />
                        </svg>
                        <span>{course.level}</span>
                    </div>

                    <div className="flex items-center">
                        {studentAvatars.map((src, i) => (
                            <div
                                key={i}
                                className={`relative rounded-full border border-white overflow-hidden shadow-2xs shrink-0 ${
                                    isCompact
                                        ? "w-5.5 h-5.5 sm:w-6 sm:h-6 -ml-1.5"
                                        : "w-7 h-7 sm:w-7.5 sm:h-7.5 border-2 " + (i !== 0 ? "-ml-2" : "")
                                }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Student ${i + 1}`}
                                    fill
                                    sizes={isCompact ? "24px" : "32px"}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                        <div
                            className={`rounded-full flex items-center justify-center shadow-2xs shrink-0 z-10 font-bold ${
                                isCompact
                                    ? "w-5.5 h-5.5 sm:w-6 sm:h-6 -ml-1.5 bg-black text-white text-[9px] sm:text-[9.5px] border border-white"
                                    : "w-7 h-7 sm:w-7.5 sm:h-7.5 -ml-2 bg-[#CBFC01] text-[#111111] text-[10px] sm:text-[10.5px] border-2 border-white"
                            }`}
                        >
                            {studentCount}
                        </div>
                    </div>
                </div>

                <div
                    className={
                        isCompact ? "mt-2.5" : "mt-3.5 sm:mt-4"
                    }
                >
                    <div className="flex items-baseline">
                        <span
                            className={`font-bold text-[#003BE2] leading-none tracking-tight ${
                                isCompact
                                    ? "text-[18px] sm:text-[20px]"
                                    : "text-[23px] sm:text-[24px]"
                            }`}
                        >
                            ${course.price}
                        </span>
                        <span
                            className={`font-normal leading-none ${
                                isCompact
                                    ? "text-[11px] sm:text-[11.5px] text-[#82868E]"
                                    : "text-[12.5px] sm:text-[13px] text-[#6B7280] ml-0.5"
                            }`}
                        >
                            {course.priceType.startsWith("/")
                                ? course.priceType
                                : `/${course.priceType}`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    const baseClass = isCompact
        ? "bg-white rounded-[24px] p-3.5 sm:p-4 pb-4.5 sm:pb-5 select-none"
        : "group relative bg-white rounded-[24px] border border-[#E5E7EB] p-3.5 sm:p-4 pb-5 sm:pb-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-[#D0D3D9]";

    if (asLink) {
        return (
            <Link
                href={`/courses/${course.id}`}
                className={`${baseClass} ${className}`}
            >
                {content}
            </Link>
        );
    }

    return <div className={`${baseClass} ${className}`}>{content}</div>;
}
