"use client";

import CourseCard from "@/components/shared/course-card";
import { coursesData, showcaseStudentAvatars } from "@/lib/courses-data";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const happyStudentAvatars = [
    "/avatars/avatar-1.png",
    "/avatars/avatar-2.png",
    "/avatars/avatar-3.png",
    "/avatars/avatar-4.png",
    "/avatars/avatar-5.png",
    "/avatars/avatar-6.png",
    "/avatars/avatar-7.png",
];

interface AuthShowcaseCardProps {
    type?: "signup" | "login";
}

export default function AuthShowcaseCard({
    type = "signup",
}: AuthShowcaseCardProps) {
    const isSignup = type === "signup";

    return (
        <div className="w-full flex flex-col justify-center text-white select-none">
            <div className="max-w-[480px]">
                <h1 className="font-poppins font-bold text-white text-[32px] sm:text-[36px] leading-[1.15] tracking-tight">
                    {isSignup ? "Sign up and come in" : "Sign in with ease"}
                </h1>
                <p className="mt-3 text-white/85 text-[14.5px] sm:text-[15px] leading-[1.6]">
                    {isSignup
                        ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
                        : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
                </p>
            </div>

            <div className="relative w-full max-w-[495px] h-[480px] mt-6 sm:mt-8">

                <div className="absolute top-[75px] left-0 w-[335px] sm:w-[345px] z-10 opacity-95">
                    <CourseCard
                        course={coursesData[1]}
                        size="compact"
                        asLink={false}
                        hideBadges={["duration", "comments"]}
                        studentAvatars={showcaseStudentAvatars}
                        studentCount="26+"
                        className="shadow-[0_16px_36px_rgba(0,0,0,0.18)] border border-[#E5E7EB]"
                    />
                </div>

                <div className="absolute top-0 left-[98px] sm:left-[102px] w-[355px] sm:w-[368px] z-20">
                    <CourseCard
                        course={coursesData[2]}
                        size="compact"
                        asLink={false}
                        starColor="text-[#CBFC01]"
                        priorityImage
                        studentAvatars={showcaseStudentAvatars}
                        studentCount="26+"
                        className="shadow-[0_22px_50px_rgba(0,0,0,0.25)] border border-[#E5E7EB]"
                    />
                </div>

                <div className="absolute top-[44px] left-[42px] z-30 w-[102px] pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] rotate-[22deg]">
                    <Image
                        src="/images/patterns/pattern-4-lime.png"
                        alt="Lime Torus"
                        width={102}
                        height={92}
                        priority
                        className="w-full h-auto"
                    />
                </div>

                <div className="absolute top-[345px] -left-3 z-30 w-[126px] pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]">
                    <Image
                        src="/images/patterns/pattern-3-lime.png"
                        alt="Lime Pyramid"
                        width={126}
                        height={137}
                        priority
                        className="w-full h-auto"
                    />
                </div>

                <div className="absolute top-[275px] left-[360px] z-35 w-[118px] pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] rotate-6">
                    <Image
                        src="/images/patterns/pattern-5.png"
                        alt="White Zigzag Ribbon"
                        width={118}
                        height={140}
                        priority
                        className="w-full h-auto"
                    />
                </div>

                <div className="absolute top-[355px] left-[230px] z-30 bg-[#CBFC01] rounded-[24px] p-4 shadow-[0_14px_30px_rgba(0,0,0,0.18)] w-[252px]">
                    <div className="flex items-center justify-between">
                        <h4 className="font-poppins font-semibold text-[13.5px] text-[#111111] leading-tight">
                            Happy Students
                        </h4>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[11.5px] font-semibold text-[#111111]">
                            4.5
                        </span>
                        <span className="text-[11px] text-[#111111]/80">
                            (240)
                        </span>
                        <AiFillStar className="text-[#003BE2] text-[12px]" />
                    </div>

                    <div className="mt-2.5 flex items-center -space-x-1.5 overflow-hidden">
                        {happyStudentAvatars.map((src, i) => (
                            <div
                                key={i}
                                className="relative w-6 h-6 rounded-full border border-white overflow-hidden shadow-xs shrink-0"
                            >
                                <Image
                                    src={src}
                                    alt="Happy student"
                                    fill
                                    sizes="24px"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                        <div className="relative w-6 h-6 rounded-full bg-black text-white text-[9px] font-semibold flex items-center justify-center border border-white shrink-0">
                            2K+
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
