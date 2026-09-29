"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

const studentAvatars = [
    "/avatars/testimonial-1.png",
    "/avatars/testimonial-2.png",
    "/avatars/testimonial-3.png",
    "/avatars/testimonial-1.png",
];

const benefits = [
    "Lifetime access to 350+ masterclasses and hands-on projects",
    "Downloadable source files, UI kits, and production code assets",
    "Verified certificates of completion recognized by tech companies",
];

export default function AuthShowcaseCard() {
    return (
        <div className="w-full flex flex-col justify-center text-white">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/12 border border-white/20 backdrop-blur-md w-fit mb-5 shadow-xs">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CBFC01] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CBFC01]" />
                </span>
                <span className="text-[13px] font-medium text-white/95 tracking-wide">
                    Join 50,000+ active ByteSpace learners
                </span>
            </div>

            {/* Headline */}
            <h1 className="font-poppins font-bold text-white text-[32px] sm:text-[40px] xl:text-[46px] leading-[1.12] tracking-tight">
                Master New Skills. <br className="hidden sm:inline" />
                Build Your Future.
            </h1>

            <p className="mt-3.5 text-white/85 text-[15px] sm:text-[16px] leading-relaxed max-w-[500px]">
                Create your ByteSpace account to get instant access to world-class courses taught by industry leaders in design, coding, and business.
            </p>

            {/* Featured Course Card Component (Pixel-perfect match to ByteSpace Design System) */}
            <div className="relative mt-8 sm:mt-10 max-w-[420px] w-full">
                {/* 3D Decorative Floating Spiral Pattern (Pattern 8) */}
                <div className="absolute -top-7 -right-6 sm:-right-8 w-[100px] sm:w-[125px] z-30 pointer-events-none animate-float-slow">
                    <Image
                        src="/images/patterns/pattern-8.png"
                        alt="Decorative Lime 3D Spiral"
                        width={125}
                        height={125}
                        priority
                        className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] -rotate-45"
                    />
                </div>

                {/* Main White Showcase Card */}
                <div className="relative bg-white rounded-[28px] sm:rounded-[32px] border border-[#DDDEE0] p-4 sm:p-5 shadow-[0_24px_50px_rgba(0,0,0,0.22)] z-10 transition-transform duration-300 hover:scale-[1.01]">
                    {/* Course Thumbnail with Floating Badges */}
                    <div className="relative w-full aspect-[341/196] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#F5F5F6]">
                        <Image
                            src="/courses/course-1.png"
                            alt="Learn Figma from Basic"
                            fill
                            sizes="(max-width: 640px) 320px, 420px"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 select-none">
                            <span className="px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] sm:text-[11.5px] font-medium text-[#242528] shadow-xs whitespace-nowrap">
                                17 Lessons
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] sm:text-[11.5px] font-medium text-[#242528] shadow-xs whitespace-nowrap">
                                2 hours 16 mins
                            </span>
                            <span className="px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md text-[11px] sm:text-[11.5px] font-medium text-[#242528] shadow-xs whitespace-nowrap">
                                59 Comments
                            </span>
                        </div>
                    </div>

                    {/* Course Info */}
                    <div className="mt-4 flex items-center justify-between gap-2">
                        <h2 className="font-poppins font-semibold text-[17px] sm:text-[18px] text-[#111111] leading-tight">
                            Learn Figma from Basic
                        </h2>
                        <div className="flex items-center gap-1 shrink-0">
                            <span className="text-[15px] sm:text-[16px] font-medium text-[#4F4F4F] leading-none">
                                4.5
                            </span>
                            <AiFillStar className="text-[#D4FB20] text-[18px] sm:text-[19px]" />
                        </div>
                    </div>

                    <p className="mt-1 text-[13px] text-[#82868E]">
                        by{" "}
                        <span className="text-[#003BE2] font-medium">
                            purepearl studio
                        </span>
                    </p>

                    {/* Metadata Row: Level & Enrolled Avatars */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F7] text-[12px] font-medium text-[#414244]">
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="text-[#414244] shrink-0"
                                aria-hidden="true"
                            >
                                <rect x="2" y="10" width="2.5" height="4" rx="1" />
                                <rect x="6.75" y="6" width="2.5" height="8" rx="1" />
                                <rect x="11.5" y="2" width="2.5" height="12" rx="1" />
                            </svg>
                            <span>Beginner</span>
                        </div>

                        <div className="flex items-center -space-x-2">
                            {studentAvatars.map((src, i) => (
                                <div
                                    key={i}
                                    className="relative w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0"
                                >
                                    <Image
                                        src={src}
                                        alt={`Student ${i + 1}`}
                                        fill
                                        sizes="30px"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                            <div className="relative w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-black text-white text-[10.5px] font-semibold flex items-center justify-center border-2 border-white shadow-xs shrink-0 z-10">
                                26+
                            </div>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mt-3.5 flex items-baseline justify-between border-t border-[#F0F0F2] pt-3">
                        <div className="flex items-baseline">
                            <span className="text-[22px] sm:text-[24px] font-bold text-[#003BE2] leading-none">
                                $25
                            </span>
                            <span className="text-[12px] sm:text-[13px] text-[#82868E] ml-1 font-normal">
                                /lifetime
                            </span>
                        </div>
                        <span className="text-[11.5px] font-medium text-[#16803c] bg-[#eefbf2] px-2.5 py-1 rounded-full">
                            Popular Choice
                        </span>
                    </div>
                </div>

                {/* Floating Progress Pill Badge */}
                <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 bg-white/95 backdrop-blur-md rounded-[20px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.18)] border border-white/80 min-w-[170px] sm:min-w-[195px] animate-float-medium">
                    <div className="flex items-center justify-between text-[12px] font-medium text-[#55575B]">
                        <span>Learning Progress</span>
                        <span className="text-[#003BE2] font-semibold">Step 3/5</span>
                    </div>
                    <div className="flex items-baseline gap-2 my-1.5">
                        <span className="text-[24px] sm:text-[28px] font-poppins font-bold text-[#111111] leading-none">
                            55%
                        </span>
                        <span className="text-[11px] text-[#82868E]">Completed</span>
                    </div>
                    <div className="w-full h-[7px] bg-[#EAECEF] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#CBFC01] rounded-full"
                            style={{ width: "55%" }}
                        />
                    </div>
                </div>
            </div>

            {/* Checklist / Value Points */}
            <div className="mt-12 sm:mt-14 space-y-3">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#CBFC01] text-[#111111] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                            <FiCheck size={12} strokeWidth={3} />
                        </div>
                        <span className="text-[14px] sm:text-[15px] text-white/90 leading-snug">
                            {benefit}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
