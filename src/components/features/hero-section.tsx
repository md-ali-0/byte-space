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
        <section className="relative w-full bg-[#003BE2] overflow-hidden min-h-[820px] lg:h-[830px] hero-grid-pattern select-none">
            <div className="relative w-full max-w-[1440px] h-full min-h-[820px] lg:h-[830px] mx-auto">
                <div
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-full hidden sm:block"
                    style={{
                        width: "1120px",
                        height: "1120px",
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
                        className="w-[220px] sm:w-[250px] md:w-[280px] h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
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
                        className="w-[120px] sm:w-[150px] md:w-[180px] h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.2)]"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        top: "500px",
                        left: "calc(50% - 720px + 30px)",
                    }}
                >
                    <Image
                        src="/images/patterns/pattern-4.png"
                        alt="Decorative White 3D Torus"
                        width={180}
                        height={180}
                        priority
                        className="w-[120px] sm:w-[145px] md:w-[350px] h-auto drop-shadow-[0_20px_36px_rgba(0,0,0,0.25)]"
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
                        className="w-[160px] sm:w-[210px] md:w-[210px] h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)]"
                    />
                </div>

                {/* Pattern 3: Mid-Right White Pyramid */}
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
                        className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[170px] h-auto drop-shadow-[0_16px_32px_rgba(0,0,0,0.22)]"
                    />
                </div>

                <div
                    className="absolute z-10 pointer-events-none"
                    style={{
                        top: "550px",
                        left: "calc(50% + 410px)",
                    }}
                >
                    <Image
                        src="/images/patterns/pattern-6.png"
                        alt="Decorative White 3D Spring"
                        width={180}
                        height={180}
                        priority
                        className="w-[105px] sm:w-[130px] md:w-[280px] h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.2)]"
                    />
                </div>

                <div
                    className="relative z-20 flex flex-col items-center text-center px-4"
                    style={{ paddingTop: "32px" }}
                >

                    <h1 className="font-poppins font-semibold text-white text-[32px] sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[72px] leading-[1.12] sm:leading-[1.16] lg:leading-[118%] tracking-[-0.01em] max-w-[935px]">
                        Get Access to Hundreds <br className="hidden sm:inline" />
                        Courses Available
                    </h1>

                    <p className="mt-3 md:mt-4 text-[#E5E6E8] text-[15px] sm:text-[17px] md:text-[18px] leading-[160%] max-w-[819px] font-normal px-2">
                        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-5 md:mt-6 flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[581px]"
                    >

                        <div className="flex-1 flex items-center gap-3 bg-white rounded-[24px] px-5 sm:px-6 h-[50px] md:h-[52px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all focus-within:ring-2 focus-within:ring-[#D4FB20]">
                            <FiSearch className="text-[#82868E] text-[20px] md:text-[22px] shrink-0" />
                            <input
                                type="text"
                                placeholder="Course, topic, creator"
                                className="w-full !border-0 !outline-none !shadow-none !bg-transparent text-[#242528] placeholder-[#82868E] text-[15px] md:text-[17px] font-normal"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="!w-[96px] sm:!w-[104px] !h-[46px] sm:!h-[50px] !px-0 rounded-[24px] text-[16px] sm:text-[18px] font-medium bg-[#D4FB20] text-[#242528] hover:bg-[#c4ea1b] shrink-0 shadow-[0_4px_16px_rgba(212,251,32,0.35)]"
                        >
                            Search
                        </Button>
                    </form>
                </div>

                <div
                    className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                    style={{
                        top: "345px",
                        width: "578px",
                        height: "541px",
                    }}
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
                    className="absolute z-30 bg-white rounded-[16px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-left"
                    style={{
                        width: "208px",
                        height: "70px",
                        left: "calc(50% - 315px)",
                        top: "450px",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <h2 className="text-[16px] font-medium text-[#242528] leading-[19px]">
                        UI/UX Design
                    </h2>
                    <div className="flex items-center gap-1.5 mt-1 text-[12px] text-[#82868E] leading-[19px]">
                        <span>200 Courses</span>
                        <span>•</span>
                        <span>1000+ Students</span>
                    </div>
                </div>

                <div
                    className="absolute z-30 bg-white rounded-[16px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-left"
                    style={{
                        width: "258px",
                        height: "121px",
                        left: "calc(50% - 380px)",
                        top: "600px",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[16px] font-medium text-[#242528] leading-[19px]">
                            Happy Students
                        </span>
                        <div className="flex items-center gap-1">
                            <span className="text-[12px] text-[#242528] leading-[19px]">
                                4.5 (240)
                            </span>
                            <div className="w-4 h-4 bg-[#D4FB20] rounded-[0.5px] flex items-center justify-center">
                                <AiFillStar className="text-[#242528] text-[11px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        {studentAvatars.map((src, i) => (
                            <div
                                key={i}
                                className={`relative w-[40px] h-[40px] rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0 ${
                                    i !== 0 ? "-ml-3.5" : ""
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
                    className="absolute z-30 bg-white rounded-[16px] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer text-left"
                    style={{
                        width: "232px",
                        height: "131px",
                        left: "calc(50% + 120px)",
                        top: "460px",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <span className="text-[14px] font-medium text-[#242528] leading-[17px] block">
                        Learning Progress
                    </span>
                    <div className="text-[44px] sm:text-[48px] font-semibold font-poppins text-[#242528] leading-[54px] tracking-[-0.01em] my-0.5">
                        55%
                    </div>
                    <div className="w-[200px] h-[8px] bg-[#F6F6F6] rounded-[24px] overflow-hidden mt-1.5">
                        <div
                            className="h-[8px] bg-[#D4FB20] rounded-[24px] transition-all duration-1000 ease-out"
                            style={{ width: "112px" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
