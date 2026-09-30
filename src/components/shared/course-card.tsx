"use client";

import { defaultStudentAvatars } from "@/lib/courses-data";
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
                            : "aspect-16/10 rounded-[16px]"
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
                            className={`absolute select-none flex items-center ${
                                isCompact
                                    ? "bottom-2 left-2 right-2 justify-between gap-1"
                                    : "bottom-2.5 left-2.5 right-2.5 gap-1.5 sm:gap-2"
                            }`}
                        >
                            {showLessons && (
                                <div
                                    className={`truncate shadow-xs ${
                                        isCompact
                                            ? "px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9.5px] sm:text-[10px] font-medium text-[#242528]"
                                            : "px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-normal text-[#242528] bg-white/80 backdrop-blur-md border border-white/30"
                                    }`}
                                >
                                    {course.lessons} Lessons
                                </div>
                            )}
                            {showDuration && (
                                <div
                                    className={`truncate shadow-xs ${
                                        isCompact
                                            ? "px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9.5px] sm:text-[10px] font-medium text-[#242528]"
                                            : "px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-normal text-[#242528] bg-white/80 backdrop-blur-md border border-white/30"
                                    }`}
                                >
                                    {course.duration}
                                </div>
                            )}
                            {showComments && (
                                <div
                                    className={`truncate shadow-xs ${
                                        isCompact
                                            ? "px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[9.5px] sm:text-[10px] font-medium text-[#242528]"
                                            : "px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-normal text-[#242528] bg-white/80 backdrop-blur-md border border-white/30"
                                    }`}
                                >
                                    {course.comments} Comments
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div
                    className={`flex items-start justify-between gap-2 ${
                        isCompact ? "mt-3" : "mt-4 gap-3"
                    }`}
                >
                    <h3
                        className={`font-semibold text-[#111111] leading-tight ${
                            isCompact
                                ? "text-[14.5px] sm:text-[16px] truncate"
                                : "text-[18px] sm:text-[19px] line-clamp-1"
                        }`}
                    >
                        {course.title}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0 pt-0.5">
                        <span
                            className={`font-medium leading-none ${
                                isCompact
                                    ? "text-[13.5px] text-[#4F4F4F]"
                                    : "text-[14px] text-[#242528]"
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
                                    : "text-[#9CA3AF]"
                            } text-[15px]`}
                        />
                    </div>
                </div>

                <p
                    className={`text-[#82868E] font-normal ${
                        isCompact
                            ? "mt-0.5 text-[11px] sm:text-[11.5px]"
                            : "mt-1 text-[13px]"
                    }`}
                >
                    by{" "}
                    <span className="text-[#003BE2] hover:underline cursor-pointer font-medium">
                        {course.instructor}
                    </span>
                </p>
            </div>

            <div className={isCompact ? "mt-3" : "mt-5 pt-0.5"}>
                <div className="flex items-center justify-between">
                    {/* Level Badge */}
                    <div
                        className={`inline-flex items-center gap-1.5 rounded-full font-medium ${
                            isCompact
                                ? "px-2 sm:px-2.5 py-0.5 bg-[#F5F5F7] text-[10.5px] sm:text-[11px] text-[#414244]"
                                : "px-3 py-1 bg-[#F5F5F6] text-[#242528] text-[12px]"
                        }`}
                    >
                        <svg
                            width={isCompact ? "11" : "12"}
                            height={isCompact ? "11" : "12"}
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="shrink-0"
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
                                className={`relative rounded-full border border-white overflow-hidden shadow-xs shrink-0 ${
                                    isCompact
                                        ? "w-5.5 h-5.5 sm:w-6 sm:h-6 -ml-1.5"
                                        : "w-8 h-8 " + (i !== 0 ? "-ml-2.5 border-2" : "")
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
                            className={`rounded-full flex items-center justify-center border border-white shadow-xs shrink-0 z-10 font-bold ${
                                isCompact
                                    ? "w-5.5 h-5.5 sm:w-6 sm:h-6 -ml-1.5 bg-black text-white text-[9px] sm:text-[9.5px]"
                                    : "w-8 h-8 -ml-2.5 bg-[#D4FB20] text-[#111111] text-[11px] border-2"
                            }`}
                        >
                            {studentCount}
                        </div>
                    </div>
                </div>

                <div
                    className={`flex items-baseline ${
                        isCompact ? "mt-2.5" : "mt-5 gap-1"
                    }`}
                >
                    <span
                        className={`font-bold text-[#003BE2] leading-none ${
                            isCompact
                                ? "text-[17px] sm:text-[19px]"
                                : "text-[22px]"
                        }`}
                    >
                        ${course.price}
                    </span>
                    <span
                        className={`text-[#82868E] font-normal ${
                            isCompact
                                ? "text-[10.5px] sm:text-[11px] ml-1"
                                : "text-[12px] sm:text-[13px]"
                        }`}
                    >
                        {course.priceType}
                    </span>
                </div>
            </div>
        </div>
    );

    const baseClass = isCompact
        ? "bg-white rounded-[22px] p-3.5 sm:p-4 select-none"
        : "group relative bg-white rounded-3xl border border-[#E5E6E8] p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-[#D0D3D9]";

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
