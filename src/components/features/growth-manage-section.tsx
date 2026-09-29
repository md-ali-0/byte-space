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
            {/* Ambient Multi-Color Radial Glows */}
            <div
                className="absolute top-[80px] -left-[140px] w-[650px] h-[650px] rounded-full pointer-events-none opacity-45 blur-[130px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(212, 251, 32, 0.42) 0%, rgba(212, 251, 32, 0.12) 50%, transparent 70%)",
                }}
                aria-hidden="true"
            />
            <div
                className="absolute top-[40px] -right-[120px] w-[520px] h-[520px] rounded-full pointer-events-none opacity-20 blur-[140px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0, 59, 226, 0.22) 0%, transparent 70%)",
                }}
                aria-hidden="true"
            />
            <div
                className="absolute bottom-[60px] -left-[140px] w-[640px] h-[640px] rounded-full pointer-events-none opacity-40 blur-[140px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(212, 251, 32, 0.4) 0%, rgba(212, 251, 32, 0.1) 50%, transparent 70%)",
                }}
                aria-hidden="true"
            />
            <div
                className="absolute bottom-[20px] -right-[80px] w-[520px] h-[520px] rounded-full pointer-events-none opacity-20 blur-[130px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(0, 59, 226, 0.2) 0%, transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="container-page relative z-10 pt-10 sm:pt-14 lg:pt-16 pb-0">
                {/* ============================================================ */}
                {/* ROW 1: "Your Path to Professional Growth Starts Here!"        */}
                {/* ============================================================ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Heading, Subtitle & Statistics */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <h2 className="font-poppins font-semibold text-[#111111] text-[34px] sm:text-[40px] lg:text-[46px] leading-[1.16] tracking-[-0.02em] max-w-[540px]">
                            Your Path to Professional
                            <span className="block">Growth Starts Here!</span>
                        </h2>

                        <p className="mt-6 text-[#55575B] text-[15px] sm:text-[16px] leading-[170%] font-normal max-w-[472px]">
                            Explore our curated selection of courses tailored to
                            enhance your capabilities and accelerate your career
                            journey. Whether you are looking to sharpen specific
                            skills, gain industry expertise, or embark on a new
                            career path entirely, we have the resources you
                            need.
                        </p>

                        {/* 3 Metric Stats */}
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

                    {/* Right Column: Visual Composition with Cards & Student */}
                    <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[550px] h-[500px] sm:h-[540px]">
                            {/* Layer 1: Figma Course Card Behind Student */}
                            <div className="absolute left-0 sm:left-2 top-2 sm:top-4 w-[285px] sm:w-[325px] bg-white rounded-[28px] border border-[#DDDEE0] p-3.5 sm:p-4 shadow-[0_10px_32px_rgba(0,0,0,0.06)] z-10 pointer-events-none">
                                {/* Course Thumbnail with Overlay Badges */}
                                <div className="relative w-full aspect-16/10 rounded-[20px] overflow-hidden">
                                    <Image
                                        src="/courses/course-1.png"
                                        alt="Learn Figma from Basic"
                                        fill
                                        sizes="(max-width: 640px) 285px, 325px"
                                        className="object-cover"
                                    />
                                    {/* Lessons & Duration Badges */}
                                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                                        <span className="px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-xs text-[11px] font-medium text-[#111111] shadow-xs">
                                            17 Lessons
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-xs text-[11px] font-medium text-[#111111] shadow-xs">
                                            2 hours 16 mins
                                        </span>
                                    </div>
                                </div>

                                {/* Title & Instructor */}
                                <div className="mt-3">
                                    <h3 className="font-poppins font-semibold text-[16px] sm:text-[17px] text-[#111111] leading-snug">
                                        Learn Figma from Basic
                                    </h3>
                                    <p className="mt-1 text-[13px] text-[#82868E]">
                                        by{" "}
                                        <span className="text-[#003BE2] font-medium">
                                            purepearl studio
                                        </span>
                                    </p>
                                </div>

                                {/* Beginner Badge & Price */}
                                <div className="mt-3.5 pt-3 border-t border-[#F0F1F3] flex items-center justify-between">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F3F4F6] text-[12px] font-medium text-[#414244]">
                                        <svg
                                            className="w-3.5 h-3.5 text-[#6B7280]"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M2 11h2v3H2zm5-4h2v7H7zm5-6h2v13h-2z" />
                                        </svg>
                                        <span>Beginner</span>
                                    </div>

                                    <div className="flex items-baseline">
                                        <span className="text-[20px] font-bold text-[#003BE2]">
                                            $25
                                        </span>
                                        <span className="text-[12px] text-[#82868E] ml-0.5">
                                            /lifetime
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Layer 1: 3D Decorative Lime Coil (Behind Progress Card) */}
                            <div className="absolute top-[80px] sm:top-[90px] right-2 sm:right-6 w-[125px] sm:w-[155px] z-10 pointer-events-none animate-float-slow">
                                <Image
                                    src="/images/patterns/pattern-1.png"
                                    alt="Decorative Lime 3D Spiral"
                                    width={155}
                                    height={155}
                                    className="w-full h-auto drop-shadow-[0_14px_28px_rgba(0,0,0,0.12)]"
                                />
                            </div>

                            {/* Layer 2: Student Image with Laptop (Tucked over course card) */}
                            <div className="absolute bottom-0 right-4 sm:right-8 md:right-12 w-[370px] sm:w-[450px] md:w-[485px] z-20 pointer-events-none">
                                <Image
                                    src="/images/hero-student-clean.png"
                                    alt="Student learning online"
                                    width={485}
                                    height={410}
                                    priority
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Layer 3: Floating "Learning Progress" Card (In front of student) */}
                            <div className="absolute top-[180px] sm:top-[200px] right-0 sm:right-2 z-30 bg-white/95 backdrop-blur-md rounded-[20px] p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-white/80 min-w-[175px] sm:min-w-[195px] animate-float-medium">
                                <span className="block text-[12px] sm:text-[13px] text-[#55575B] font-medium leading-none">
                                    Learning Progress
                                </span>
                                <span className="block text-[32px] sm:text-[38px] font-poppins font-bold text-[#111111] leading-none my-2.5">
                                    55%
                                </span>
                                <div className="w-full h-[6px] bg-[#EAECEF] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#CBFC01] rounded-full transition-all duration-700"
                                        style={{ width: "55%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================ */}
                {/* ROW 2: "Create & Manage Courses Easily."                     */}
                {/* ============================================================ */}
                <div className="mt-20 sm:mt-24 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
                    {/* Left Column: Visual Composition with Instructor Girl & Cards */}
                    <div className="lg:col-span-6 relative flex items-end justify-center lg:justify-start order-2 lg:order-1">
                        <div className="relative w-full max-w-[550px] h-[520px] sm:h-[580px]">
                            {/* Layer 1: Total Revenue Blue Card (Tucked Behind Girl) */}
                            <div className="absolute top-6 sm:top-10 left-0 sm:left-2 z-10 bg-[#003BE2] rounded-[18px] p-3.5 sm:p-4 text-white shadow-[0_14px_34px_rgba(0,59,226,0.32)] w-[185px] sm:w-[215px] animate-float-medium">
                                <span className="block text-[11px] sm:text-[12px] text-white/80 font-normal leading-none">
                                    Total Revenue
                                </span>
                                <span className="block text-[9px] sm:text-[10px] text-white/60 font-normal mt-1 leading-none">
                                    July 1-28
                                </span>
                                <span className="block text-[21px] sm:text-[24px] font-poppins font-bold text-white mt-2 leading-none">
                                    $120.29
                                </span>
                                <div className="w-full h-[4px] bg-white/20 rounded-full mt-3 overflow-hidden">
                                    <div
                                        className="h-full bg-[#CBFC01] rounded-full"
                                        style={{ width: "65%" }}
                                    />
                                </div>
                            </div>

                            {/* Layer 1: Year to Date Blue Card (Tucked Behind Girl) */}
                            <div className="absolute top-[175px] sm:top-[200px] left-0 sm:left-2 z-10 bg-[#003BE2] rounded-[18px] p-3.5 sm:p-4 text-white shadow-[0_14px_34px_rgba(0,59,226,0.32)] w-[155px] sm:w-[175px] animate-float-slow">
                                <span className="block text-[11px] sm:text-[12px] text-white/80 font-normal leading-none">
                                    Year to Date
                                </span>
                                <span className="block text-[9px] sm:text-[10px] text-white/60 font-normal mt-1 leading-none">
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

                            {/* Layer 1: 3D Decorative Lime Coil on the Right (Behind Girl) */}
                            <div className="absolute top-[120px] sm:top-[140px] right-6 sm:right-12 w-[125px] sm:w-[155px] z-10 pointer-events-none animate-float-reverse">
                                <Image
                                    src="/images/patterns/pattern-1.png"
                                    alt="Decorative Lime 3D Spiral"
                                    width={155}
                                    height={155}
                                    className="w-full h-auto drop-shadow-[0_14px_28px_rgba(0,0,0,0.12)]"
                                />
                            </div>

                            {/* Layer 2: Girl Instructor with Orange Tablet (Middle) */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[410px] md:w-[440px] z-20 pointer-events-none">
                                <Image
                                    src="/images/create-course-girl.png"
                                    alt="Instructor creating course"
                                    width={440}
                                    height={540}
                                    priority
                                    className="w-full h-auto object-contain block"
                                />
                            </div>

                            {/* Layer 3: Floating "Happy Students" Card (In front of Girl's tablet) */}
                            <div className="absolute bottom-6 sm:bottom-8 right-0 sm:right-4 md:right-6 z-30 bg-white/95 backdrop-blur-md rounded-[22px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-white/80 min-w-[220px] sm:min-w-[250px] animate-float-medium">
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

                                {/* Avatars Cluster */}
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
                                    {/* 2K+ Badge */}
                                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-[#111111] z-10 shrink-0 shadow-xs">
                                        2K+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Heading, Subtitle & Checklist */}
                    <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2 pb-10 lg:pb-20">
                        <h2 className="font-poppins font-semibold text-[#111111] text-[34px] sm:text-[40px] lg:text-[46px] leading-[1.16] tracking-[-0.02em] max-w-[500px]">
                            Create & Manage
                            <span className="block">Courses Easily.</span>
                        </h2>

                        <p className="mt-6 text-[#55575B] text-[15px] sm:text-[16px] leading-[170%] font-normal max-w-[490px]">
                            <strong className="text-[#111111] font-semibold">
                                ByteSpace
                            </strong>{" "}
                            supports individuals or entities in the creation,
                            publication, and administration of educational
                            courses.
                        </p>

                        {/* Checklist */}
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
