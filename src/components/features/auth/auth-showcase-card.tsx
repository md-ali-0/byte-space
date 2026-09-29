"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const studentAvatars = [
    "/avatars/testimonial-1.png",
    "/avatars/testimonial-2.png",
    "/avatars/testimonial-3.png",
    "/avatars/testimonial-1.png",
];

interface AuthShowcaseCardProps {
    type?: "signup" | "login";
}

export default function AuthShowcaseCard({ type = "signup" }: AuthShowcaseCardProps) {
    const isSignup = type === "signup";

    return (
        <div className="w-full flex flex-col justify-center text-white select-none">
            {/* Header Text */}
            <div className="max-w-[420px]">
                <h1 className="font-poppins font-semibold text-white text-[24px] sm:text-[28px] leading-tight">
                    {isSignup ? "Sign up and come in" : "Sign in with ease"}
                </h1>
                <p className="mt-2.5 text-white/80 text-[13px] sm:text-[14px] leading-relaxed">
                    {isSignup
                        ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
                        : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
                </p>
            </div>

            {/* Collage Container (Back card, Front card, 3D shapes, Happy Students) */}
            <div className="relative w-full max-w-[440px] h-[340px] sm:h-[370px] mt-8 sm:mt-10">
                {/* 1. Lime Torus 3D Pattern (Top-Left of Cards) */}
                <div className="absolute -top-5 sm:-top-7 left-8 sm:left-12 z-30 w-16 sm:w-19 pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
                    <Image
                        src="/images/patterns/pattern-4-lime.png"
                        alt="Lime Torus"
                        width={80}
                        height={80}
                        priority
                        className="w-full h-auto"
                    />
                </div>

                {/* 2. Back Card: "Build Digital Asset" */}
                <div className="absolute top-8 left-0 w-[245px] sm:w-[275px] bg-white rounded-[22px] p-3 sm:p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.14)] border border-[#E5E7EB] z-10 opacity-95">
                    {/* Course Thumbnail */}
                    <div className="relative w-full aspect-[341/196] rounded-[14px] overflow-hidden bg-[#F5F5F6]">
                        <Image
                            src="/courses/course-2.png"
                            alt="Build Digital Asset"
                            fill
                            sizes="275px"
                            className="object-cover"
                        />
                        <div className="absolute bottom-2 left-2 select-none">
                            <span className="px-2 py-0.5 rounded-full bg-white/85 backdrop-blur-md text-[10px] font-medium text-[#242528] shadow-xs">
                                17 Lessons
                            </span>
                        </div>
                    </div>

                    {/* Course Info */}
                    <h3 className="mt-2.5 font-poppins font-semibold text-[14px] text-[#111111] leading-tight truncate">
                        Build Digit...
                    </h3>
                    <p className="mt-0.5 text-[11px] text-[#82868E]">
                        by <span className="text-[#003BE2] font-medium">purepearl studio</span>
                    </p>

                    {/* Level & Avatars */}
                    <div className="mt-2.5 flex items-center gap-2">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F5F5F7] text-[10.5px] font-medium text-[#414244]">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                                <rect x="2" y="10" width="2.5" height="4" rx="1" />
                                <rect x="6.75" y="6" width="2.5" height="8" rx="1" />
                                <rect x="11.5" y="2" width="2.5" height="12" rx="1" />
                            </svg>
                            <span>Beginner</span>
                        </div>

                        <div className="flex items-center -space-x-1.5">
                            {studentAvatars.slice(0, 3).map((src, i) => (
                                <div
                                    key={i}
                                    className="relative w-5.5 h-5.5 rounded-full border border-white overflow-hidden shadow-xs"
                                >
                                    <Image src={src} alt="Student" fill sizes="22px" className="object-cover" />
                                </div>
                            ))}
                            <div className="relative w-5.5 h-5.5 rounded-full bg-black text-white text-[9px] font-semibold flex items-center justify-center border border-white">
                                26+
                            </div>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mt-2 flex items-baseline">
                        <span className="text-[17px] font-bold text-[#003BE2] leading-none">$25</span>
                        <span className="text-[10.5px] text-[#82868E] ml-1">/lifetime</span>
                    </div>
                </div>

                {/* 3. Front Card: "the Power of Big Data" */}
                <div className="absolute top-0 right-0 sm:right-3 w-[275px] sm:w-[305px] bg-white rounded-[22px] p-3.5 sm:p-4 shadow-[0_20px_45px_rgba(0,0,0,0.22)] border border-[#E5E7EB] z-20">
                    {/* Course Thumbnail */}
                    <div className="relative w-full aspect-[341/196] rounded-[16px] overflow-hidden bg-[#1E2024]">
                        <Image
                            src="/courses/course-3.png"
                            alt="the Power of Big Data"
                            fill
                            sizes="305px"
                            priority
                            className="object-cover"
                        />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 select-none">
                            <span className="px-2 py-0.5 rounded-full bg-white/85 backdrop-blur-md text-[9.5px] sm:text-[10px] font-medium text-[#242528] shadow-xs">
                                17 Lessons
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-white/85 backdrop-blur-md text-[9.5px] sm:text-[10px] font-medium text-[#242528] shadow-xs">
                                2 hours 16 mins
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-white/85 backdrop-blur-md text-[9.5px] sm:text-[10px] font-medium text-[#242528] shadow-xs">
                                59 Comments
                            </span>
                        </div>
                    </div>

                    {/* Title & Rating */}
                    <div className="mt-3 flex items-center justify-between gap-1">
                        <h2 className="font-poppins font-semibold text-[15px] sm:text-[16px] text-[#111111] leading-tight">
                            the Power of Big Data
                        </h2>
                        <div className="flex items-center gap-0.5 shrink-0">
                            <span className="text-[13.5px] font-medium text-[#4F4F4F]">4.5</span>
                            <AiFillStar className="text-[#D4FB20] text-[15px]" />
                        </div>
                    </div>

                    <p className="mt-0.5 text-[11.5px] text-[#82868E]">
                        by <span className="text-[#003BE2] font-medium">purepearl studio</span>
                    </p>

                    {/* Level & Avatars */}
                    <div className="mt-3 flex items-center gap-2.5">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F5F5F7] text-[11px] font-medium text-[#414244]">
                            <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                                <rect x="2" y="10" width="2.5" height="4" rx="1" />
                                <rect x="6.75" y="6" width="2.5" height="8" rx="1" />
                                <rect x="11.5" y="2" width="2.5" height="12" rx="1" />
                            </svg>
                            <span>Beginner</span>
                        </div>

                        <div className="flex items-center -space-x-1.5">
                            {studentAvatars.map((src, i) => (
                                <div
                                    key={i}
                                    className="relative w-6 h-6 rounded-full border border-white overflow-hidden shadow-xs"
                                >
                                    <Image src={src} alt="Student" fill sizes="24px" className="object-cover" />
                                </div>
                            ))}
                            <div className="relative w-6 h-6 rounded-full bg-black text-white text-[9.5px] font-semibold flex items-center justify-center border border-white">
                                26+
                            </div>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mt-2.5 flex items-baseline">
                        <span className="text-[19px] font-bold text-[#003BE2] leading-none">$25</span>
                        <span className="text-[11px] text-[#82868E] ml-1">/lifetime</span>
                    </div>
                </div>

                {/* 4. Lime 3D Pyramid / Tetrahedron (Bottom-Left) */}
                <div className="absolute -bottom-6 -left-3 sm:-left-5 z-30 w-22 sm:w-26 pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]">
                    <Image
                        src="/images/patterns/pattern-3-lime.png"
                        alt="Lime Pyramid"
                        width={105}
                        height={105}
                        priority
                        className="w-full h-auto"
                    />
                </div>

                {/* 5. White Zigzag 3D Ribbon / Coil (Right overlapping) */}
                <div className="absolute bottom-10 sm:bottom-12 right-6 sm:right-5 z-35 w-20 sm:w-23 pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] rotate-6">
                    <Image
                        src="/images/patterns/pattern-5.png"
                        alt="White Zigzag Ribbon"
                        width={95}
                        height={95}
                        priority
                        className="w-full h-auto"
                    />
                </div>

                {/* 6. Happy Students Lime Card (Bottom-Right) */}
                <div className="absolute -bottom-6 sm:-bottom-7 right-0 sm:right-1 z-30 bg-[#CBFC01] rounded-[18px] p-3 sm:p-3.5 shadow-[0_14px_30px_rgba(0,0,0,0.18)] w-[190px] sm:w-[210px]">
                    <div className="flex items-center justify-between">
                        <h4 className="font-poppins font-semibold text-[13px] text-[#111111] leading-tight">
                            Happy Students
                        </h4>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[11px] font-medium text-[#111111]">4.5</span>
                        <span className="text-[10.5px] text-[#111111]/80">(240)</span>
                        <AiFillStar className="text-[#111111] text-[11px]" />
                    </div>

                    <div className="mt-2 flex items-center -space-x-1.5">
                        {studentAvatars.map((src, i) => (
                            <div
                                key={i}
                                className="relative w-6 h-6 rounded-full border border-white overflow-hidden shadow-xs"
                            >
                                <Image src={src} alt="Happy student" fill sizes="24px" className="object-cover" />
                            </div>
                        ))}
                        <div className="relative w-6 h-6 rounded-full bg-black text-white text-[9px] font-semibold flex items-center justify-center border border-white">
                            2K+
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
