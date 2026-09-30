"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const studentAvatars = [
    "/avatars/avatar-1.png",
    "/avatars/avatar-2.png",
    "/avatars/avatar-3.png",
    "/avatars/avatar-4.png",
    "/avatars/avatar-5.png",
    "/avatars/avatar-6.png",
];

export default function HeroSection() {
    return (
        <section className="relative w-full bg-[#003BE2] overflow-hidden min-h-205 lg:h-220 hero-grid-pattern select-none">
            <div className="relative w-full max-w-360 h-full min-h-205 lg:h-207.5 mx-auto">
                <div
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full hidden sm:block"
                    style={{
                        width: "1200px",
                        height: "1200px",
                        top: "420px",
                        border: "300px solid #CBFC01",
                        boxSizing: "border-box",
                        filter: "drop-shadow(0 0 50px rgba(203, 252, 1, 0.22))",
                    }}
                    aria-hidden="true"
                />
                <div
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full sm:hidden"
                    style={{
                        width: "560px",
                        height: "560px",
                        top: "450px",
                        border: "140px solid #CBFC01",
                        boxSizing: "border-box",
                    }}
                    aria-hidden="true"
                />

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        top: "40px",
                        left: "calc(50% - 720px - 25px)",
                    }}
                >
                    <Image
                        src="/images/patterns/pattern-1.png"
                        alt="Decorative Lime 3D Spiral"
                        width={385}
                        height={385}
                        priority
                        className="w-55 sm:w-62.5 md:w-70 h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        top: "320px",
                        left: "calc(50% - 720px + 180px)",
                    }}
                >
                    <Image
                        src="/images/patterns/pattern-5.png"
                        alt="Decorative White 3D Coil"
                        width={180}
                        height={180}
                        priority
                        className="w-30 sm:w-37.5 md:w-48 h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.2)]"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        top: "530px",
                        left: "calc(50% - 740px)",
                    }}
                >
                    <Image
                        src="/images/patterns/pattern-4.png"
                        alt="Decorative White 3D Torus"
                        width={180}
                        height={180}
                        priority
                        className="w-30 sm:w-36.25 md:w-90 h-auto drop-shadow-[0_20px_36px_rgba(0,0,0,0.25)]"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        top: "30px",
                        right: "calc(50% - 720px - 25px)",
                    }}
                >
                    <Image
                        src="/images/patterns/pattern-2.png"
                        alt="Decorative Lime 3D Cylinder"
                        width={290}
                        height={290}
                        priority
                        className="w-40 sm:w-52.5 md:w-52.5 h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none animate-float-slow"
                    style={{
                        top: "290px",
                        left: "calc(50% + 395px)",
                    }}
                >
                    <Image
                        src="/images/patterns/pattern-3.png"
                        alt="Decorative White 3D Pyramid"
                        width={170}
                        height={170}
                        priority
                        className="w-25 sm:w-32.5 md:w-37.5 h-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.22)]"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        top: "550px",
                        left: "calc(50% + 430px)",
                    }}
                >
                    <Image
                        src="/images/patterns/pattern-6.png"
                        alt="Decorative White 3D Spring"
                        width={180}
                        height={180}
                        priority
                        className="w-26.25 sm:w-32.5 md:w-70 h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.2)]"
                    />
                </div>

                <div
                    className="relative z-20 flex flex-col items-center text-center px-4"
                    style={{ paddingTop: "32px" }}
                >

                    <h1 className="font-poppins font-semibold text-white text-[32px] sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[72px] leading-[1.12] sm:leading-[1.16] lg:leading-[118%] tracking-[-0.01em] max-w-233.75">
                        Get Access to Hundreds <br className="hidden sm:inline" />
                        Courses Available
                    </h1>

                    <p className="mt-3 md:mt-4 text-[#E5E6E8] text-[15px] sm:text-[17px] md:text-[18px] leading-[160%] max-w-204.75 font-normal px-2">
                        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-5 md:mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-145.25"
                    >

                        <div className="flex-1 flex items-center gap-3 bg-white rounded-3xl px-5 sm:px-6 h-12.5 md:h-13 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all focus-within:ring-2 focus-within:ring-[#D4FB20]">
                            <FiSearch className="text-[#82868E] text-[20px] md:text-[22px] shrink-0" />
                            <input
                                type="text"
                                placeholder="Course, topic, creator"
                                className="w-full border-0! outline-0! shadow-0! bg-transparent text-[#242528] placeholder-[#82868E] text-[15px] md:text-[17px] font-normal"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-24 sm:w-26 h-12.5 sm:h-13 px-0 rounded-3xl text-[16px] sm:text-[18px] font-medium bg-[#D4FB20] text-[#242528] hover:bg-[#c4ea1b] shrink-0 shadow-[0_4px_16px_rgba(212,251,32,0.35)]"
                        >
                            Search
                        </Button>
                    </form>
                </div>

                <div
                    className="absolute right-90 translate z-20 pointer-events-none w-85 sm:w-110 md:w-130 lg:w-144.5 h-80 sm:h-100 md:h-120 lg:h-144.5 top-82.5 sm:top-83.75 md:top-75.25"
                >
                    <Image
                        src="/images/hero-student-clean.png"
                        alt="Smiling student with laptop and headphones"
                        width={578}
                        height={541}
                        priority
                        className="w-full h-full object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.32)]"
                    />
                </div>

                <div
                    className="hidden lg:block absolute z-30 bg-white rounded-[16px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.14)]"
                    style={{
                        width: "220px",
                        height: "75px",
                        left: "calc(50% - 330px)",
                        top: "480px",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <h2 className="text-[16px] font-medium text-[#242528] leading-4.75">
                        UI/UX Design
                    </h2>
                    <div className="flex items-center gap-1.5 mt-1 text-[12px] text-[#82868E] leading-4.75">
                        <span>200 Courses</span>
                        <span>•</span>
                        <span>1000+ Students</span>
                    </div>
                </div>

                <div
                    className="hidden lg:block absolute z-30 bg-white rounded-[16px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.14)]"
                    style={{
                        width: "228px",
                        height: "121px",
                        left: "calc(50% - 360px)",
                        top: "680px",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <div className="flex flex-col gap-1 mb-1.5">
                        <span className="text-[16px] font-medium text-[#242528] leading-4.75">
                            Happy Students
                        </span>
                        <div className="flex items-center gap-1">
                            <span className="text-[12px] text-[#242528] leading-4.75">
                                4.5 <span className="text-gray-500">(240)</span>
                            </span>
                            <div className="rounded-[0.5px] flex items-center justify-center">
                                <AiFillStar className="text-[#D4FB20] text-[16px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        {studentAvatars.map((src, i) => (
                            <div
                                key={i}
                                className={`relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0 ${i !== 0 ? "-ml-3.5" : ""
                                    }`}
                            >
                                <Image
                                    src={src}
                                    alt={`Student ${i + 1}`}
                                    fill
                                    sizes="40px"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                        <div className="-ml-3.5 size-10 rounded-full bg-[#D4FB20] text-[#242528] text-[12px] font-bold flex items-center justify-center border-2 border-white shadow-xs shrink-0 z-10">
                            2K+
                        </div>
                    </div>
                </div>

                <div
                    className="hidden lg:block absolute z-30 bg-white rounded-[16px] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-left"
                    style={{
                        width: "232px",
                        height: "131px",
                        left: "calc(50% + 120px)",
                        top: "460px",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <span className="text-[14px] font-medium text-[#242528] leading-4.25 block">
                        Learning Progress
                    </span>
                    <div className="text-[44px] sm:text-[48px] font-semibold font-poppins text-[#242528] leading-13.5 tracking-[-0.01em] my-0.5">
                        55%
                    </div>
                    <div className="w-50 h-2 bg-[#F6F6F6] rounded-3xl overflow-hidden mt-1.5">
                        <div
                            className="h-2 bg-[#D4FB20] rounded-3xl transition-all duration-1000 ease-out"
                            style={{ width: "112px" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
