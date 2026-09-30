"use client";

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

const checklistItems = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

export default function GrowthManageSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white select-none">
            <div
                className="absolute inset-0 max-w-360 mx-auto pointer-events-none"
                aria-hidden="true"
            >
                <div
                    className="absolute -top-12.5 left-5 lg:left-10 w-160 h-150 rounded-full blur-[85px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(212, 251, 32, 0.72) 0%, rgba(212, 251, 32, 0.28) 45%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute -top-5 right-5 lg:right-10 w-160 h-150 rounded-full blur-[95px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(0, 59, 226, 0.38) 0%, rgba(0, 59, 226, 0.14) 48%, transparent 70%)",
                    }}
                />

                <div
                    className="absolute top-142.5 -left-5 lg:-left-2.5 w-145 h-125 rounded-full blur-[90px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(0, 59, 226, 0.40) 0%, rgba(0, 59, 226, 0.15) 45%, transparent 70%)",
                    }}
                />

                <div
                    className="absolute -bottom-10 -left-7.5 lg:-left-5 w-145 h-125 rounded-full blur-[80px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(212, 251, 32, 0.78) 0%, rgba(212, 251, 32, 0.30) 45%, transparent 70%)",
                    }}
                />

                <div
                    className="absolute -bottom-7.5 right-5 lg:right-12.5 w-160 h-150 rounded-full blur-[95px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(0, 59, 226, 0.42) 0%, rgba(0, 59, 226, 0.16) 48%, transparent 70%)",
                    }}
                />
            </div>

            <div className="container-page relative z-10 pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <h2 className="font-poppins font-semibold text-[#111111] text-[34px] sm:text-[40px] lg:text-[46px] leading-[1.16] tracking-[-0.02em] max-w-135">
                            Your Path to Professional
                            <span className="block">Growth Starts Here!</span>
                        </h2>

                        <p className="mt-6 text-[#55575B] text-[15px] sm:text-[16px] leading-[170%] font-normal max-w-118">
                            Explore our curated selection of courses tailored to
                            enhance your capabilities and accelerate your career
                            journey. Whether you are looking to sharpen specific
                            skills, gain industry expertise, or embark on a new
                            career path entirely, we have the resources you
                            need.
                        </p>

                        <div className="mt-10 sm:mt-12 flex items-center gap-10 sm:gap-14 lg:gap-16">
                            <div>
                                <span className="block font-poppins font-bold text-[#003BE2] text-[32px] sm:text-[36px] leading-none tracking-tight">
                                    12K
                                </span>
                                <span className="block mt-2 text-[#82868E] text-[14px] font-normal leading-tight">
                                    Students
                                </span>
                            </div>

                            <div>
                                <span className="block font-poppins font-bold text-[#003BE2] text-[32px] sm:text-[36px] leading-none tracking-tight">
                                    70+
                                </span>
                                <span className="block mt-2 text-[#82868E] text-[14px] font-normal leading-tight">
                                    Courses
                                </span>
                            </div>

                            <div>
                                <span className="block font-poppins font-bold text-[#003BE2] text-[32px] sm:text-[36px] leading-none tracking-tight">
                                    16
                                </span>
                                <span className="block mt-2 text-[#82868E] text-[14px] font-normal leading-tight">
                                    Creators
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-137.5 h-125 sm:h-135">
                            <div className="absolute left-0 sm:-left-12 top-2 sm:top-4 w-78.75 sm:w-88.75 md:w-92.5 bg-white rounded-[28px] sm:rounded-4xl border border-[#DDDEE0] p-4 sm:p-4.5 shadow-[0_12px_36px_rgba(0,0,0,0.06)] z-10 pointer-events-none">
                                <div className="relative w-full aspect-341/196 rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#F5F5F6]">
                                    <Image
                                        src="/courses/course-1.png"
                                        alt="Learn Figma from Basic"
                                        fill
                                        sizes="(max-width: 640px) 315px, 370px"
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 select-none">
                                        <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10.5px] sm:text-[11.5px] font-medium text-[#242528] shadow-xs whitespace-nowrap">
                                            17 Lessons
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10.5px] sm:text-[11.5px] font-medium text-[#242528] shadow-xs whitespace-nowrap">
                                            2 hours 16 mins
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10.5px] sm:text-[11.5px] font-medium text-[#242528] shadow-xs whitespace-nowrap">
                                            59 Comments
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between gap-2">
                                    <h3 className="font-poppins font-semibold text-[17px] sm:text-[18px] text-[#111111] leading-tight">
                                        Learn Figma from Basic
                                    </h3>
                                    <div className="flex items-center gap-1 shrink-0">
                                        <span className="text-[15px] sm:text-[16px] font-medium text-[#4F4F4F] leading-none">
                                            4.5
                                        </span>
                                        <AiFillStar className="text-[#D4FB20] text-[18px] sm:text-[19px]" />
                                    </div>
                                </div>

                                <p className="mt-1 sm:mt-1.5 text-[13px] text-[#82868E]">
                                    by{" "}
                                    <span className="text-[#003BE2] font-medium">
                                        purepearl studio
                                    </span>
                                </p>

                                <div className="mt-4 sm:mt-4.5 flex items-center gap-2.5 sm:gap-3">
                                    <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#F5F5F7] text-[12px] sm:text-[13px] font-medium text-[#414244]">
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
                                        {happyStudentAvatars.slice(0, 4).map((src, i) => (
                                            <div
                                                key={i}
                                                className="relative w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0"
                                            >
                                                <Image
                                                    src={src}
                                                    alt={`Student ${i + 1}`}
                                                    fill
                                                    sizes="32px"
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                        <div className="relative w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-black text-white text-[10.5px] sm:text-[11px] font-semibold flex items-center justify-center border-2 border-white shadow-xs shrink-0 z-10">
                                            26+
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3.5 sm:mt-4 flex items-baseline">
                                    <span className="text-[22px] sm:text-[24px] font-bold text-[#003BE2] leading-none">
                                        $25
                                    </span>
                                    <span className="text-[12px] sm:text-[13px] text-[#82868E] ml-1 font-normal">
                                        /lifetime
                                    </span>
                                </div>
                            </div>

                            <div className="absolute top-18.75 sm:top-23.75 right-2 sm:-right-5 w-31.25 sm:w-47.5 z-50 pointer-events-none">
                                <Image
                                    src="/images/patterns/pattern-8.png"
                                    alt="Decorative Lime 3D Spiral"
                                    width={155}
                                    height={155}
                                    className="w-full h-auto drop-shadow-[0_14px_28px_rgba(0,0,0,0.12)] -rotate-45"
                                />
                            </div>

                            <div className="absolute bottom-0 -left-16 w-92.5 sm:w-112.5 md:w-180 z-20 pointer-events-none">
                                <Image
                                    src="/images/hero-student.png"
                                    alt="Student learning online"
                                    width={485}
                                    height={410}
                                    priority
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            <div className="absolute top-45 sm:top-57.5 right-0 sm:right-1 z-30 bg-white/95 backdrop-blur-md rounded-5xl p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-white/80 min-w-43.75 sm:min-w-58.75">
                                <span className="block text-[12px] sm:text-[13px] text-[#55575B] font-medium leading-none">
                                    Learning Progress
                                </span>
                                <span className="block text-[32px] sm:text-[38px] font-poppins font-bold text-[#111111] leading-none my-4.5">
                                    55%
                                </span>
                                <div className="w-full h-2 bg-[#EAECEF] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#CBFC01] rounded-full transition-all duration-700"
                                        style={{ width: "55%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 sm:mt-24 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
                    <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative w-full max-w-137.5 h-130 sm:h-145">
                            <div className="absolute top-6 sm:top-10 left-0 z-10 bg-[#003BE2] rounded-[18px] p-3.5 sm:p-4 text-white shadow-[0_14px_34px_rgba(0,59,226,0.32)] w-46.25 sm:w-65">
                                <span className="block text-[11px] sm:text-[14px] text-white/80 font-normal leading-none">
                                    Total Revenue
                                </span>
                                <span className="block text-[9px] sm:text-[11px] text-white/60 font-normal mt-1 leading-none">
                                    July 1-28
                                </span>
                                <span className="block text-[21px] sm:text-[24px] font-poppins font-bold text-white mt-2 leading-none">
                                    $120.29
                                </span>
                                <div className="w-full h-2 bg-white rounded-full mt-3 overflow-hidden">
                                    <div
                                        className="h-full bg-[#CBFC01] rounded-full"
                                        style={{ width: "65%" }}
                                    />
                                </div>
                            </div>
                            <div className="absolute top-43.75 sm:top-50 left-0 z-10 bg-[#003BE2] rounded-[18px] p-3.5 sm:p-4 text-white shadow-[0_14px_34px_rgba(0,59,226,0.32)] w-38.75 sm:w-37.5">
                                <span className="block text-[11px] sm:text-[13px] text-white/80 font-normal leading-none">
                                    Year to Date
                                </span>
                                <span className="block text-[9px] sm:text-[11px] text-white/60 font-normal mt-1 leading-none">
                                    2023
                                </span>
                                <span className="block text-[21px] sm:text-[24px] font-poppins font-bold text-white mt-2 leading-none">
                                    $1,200.38
                                </span>
                                <div className="mt-2.5">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#CBFC01] text-[#111111] text-[10px] sm:text-[11px] font-bold shadow-xs">
                                        +12$
                                    </span>
                                </div>
                            </div>

                            <div className="absolute top-30 sm:top-30 right-5 w-31.25 sm:w-52.5 z-50 pointer-events-none">
                                <Image
                                    src="/images/patterns/pattern-8.png"
                                    alt="Decorative Lime 3D Spiral"
                                    width={155}
                                    height={155}
                                    className="w-full h-auto drop-shadow-[0_14px_28px_rgba(0,0,0,0.12)]"
                                />
                            </div>

                            <div className="absolute top-0 left-80 -translate-x-1/2 w-87.5 sm:w-105 md:w-137.5 z-20 pointer-events-none">
                                <Image
                                    src="/images/create-course-girl.png"
                                    alt="Instructor creating course"
                                    width={530}
                                    height={640}
                                    priority
                                    className="w-full h-auto object-contain block"
                                />
                            </div>

                            <div className="absolute bottom-6 sm:bottom-16 right-0 z-30 bg-white/95 backdrop-blur-md rounded-[22px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-white/80 min-w-55 sm:min-w-62.5">
                                <span className="block text-[13px] sm:text-[14px] font-poppins font-semibold text-[#111111] leading-none">
                                    Happy Students
                                </span>
                                <div className="flex items-center gap-1.5 mt-1.5 text-[11px] sm:text-[12px]">
                                    <span className="font-semibold text-[#111111]">
                                        4.5
                                    </span>
                                    <span className="text-[#82868E]">
                                        (240)
                                    </span>
                                    <AiFillStar className="text-[#FBBF24] text-[13px]" />
                                </div>

                                <div className="flex items-center -space-x-1.5 sm:-space-x-2 mt-2.5">
                                    {happyStudentAvatars.map((src, idx) => (
                                        <div
                                            key={idx}
                                            className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white overflow-hidden shrink-0 shadow-xs"
                                        >
                                            <Image
                                                src={src}
                                                alt={`Student ${idx + 1}`}
                                                fill
                                                sizes="28px"
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-[#111111] z-10 shrink-0 shadow-xs">
                                        2K+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2 pb-10 lg:pb-20">
                        <h2 className="font-poppins font-semibold text-[#111111] text-[34px] sm:text-[40px] lg:text-[46px] leading-[1.16] tracking-[-0.02em] max-w-125">
                            Create & Manage
                            <span className="block">Courses Easily.</span>
                        </h2>

                        <p className="mt-6 text-[#55575B] text-[15px] sm:text-[16px] leading-[170%] font-normal max-w-122.5">
                            <strong className="text-[#111111] font-semibold">
                                ByteSpace
                            </strong>{" "}
                            supports individuals or entities in the creation,
                            publication, and administration of educational
                            courses.
                        </p>

                        <ul className="mt-8 sm:mt-10 space-y-4">
                            {checklistItems.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-3 sm:gap-3.5"
                                >
                                    <svg
                                        className="w-5 h-5 text-[#003BE2] shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-[15px] sm:text-[16px] font-medium text-[#111111]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
