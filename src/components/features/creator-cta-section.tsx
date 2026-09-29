"use client";

import Image from "next/image";

export default function CreatorCtaSection() {
    return (
        <section className="relative w-full bg-[#003BE2] overflow-hidden select-none hero-grid-pattern py-20 lg:py-[115px]">
            <div
                className="absolute z-10 animate-float-slow pointer-events-none hidden lg:block"
                style={{
                    top: "-55px",
                    left: "calc(50% - 720px - 45px)",
                }}
            >
                <Image
                    src="/images/patterns/pattern-6-lime.png"
                    alt="Decorative Lime 3D Spiral"
                    width={320}
                    height={320}
                    className="w-[220px] lg:w-[280px] h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)] -rotate-[75deg]"
                />
            </div>

            <div
                className="absolute z-10 animate-float-medium pointer-events-none hidden xl:block"
                style={{
                    top: "38px",
                    left: "calc(50% - 720px + 235px)",
                }}
            >
                <Image
                    src="/images/patterns/pattern-5.png"
                    alt="Decorative White 3D Coil"
                    width={150}
                    height={150}
                    className="w-[90px] lg:w-[115px] h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)] -rotate-[24deg]"
                />
            </div>

            <div
                className="absolute z-10 animate-float-slow pointer-events-none hidden lg:block"
                style={{
                    bottom: "85px",
                    left: "calc(50% - 720px - 10px)",
                }}
            >
                <Image
                    src="/images/patterns/pattern-3.png"
                    alt="Decorative White 3D Pyramid"
                    width={160}
                    height={160}
                    className="w-[105px] lg:w-[140px] h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)] -rotate-[16deg]"
                />
            </div>

            <div
                className="absolute z-10 animate-float-reverse pointer-events-none hidden lg:block"
                style={{
                    bottom: "-65px",
                    left: "calc(50% - 720px + 60px)",
                }}
            >
                <Image
                    src="/images/patterns/pattern-4-lime.png"
                    alt="Decorative Lime 3D Torus"
                    width={340}
                    height={340}
                    className="w-[220px] lg:w-[310px] h-auto drop-shadow-[0_20px_36px_rgba(0,0,0,0.25)] rotate-[2deg]"
                />
            </div>

            <div
                className="absolute z-10 animate-float-slow pointer-events-none hidden xl:block"
                style={{
                    top: "32px",
                    left: "calc(50% + 375px)",
                }}
            >
                <Image
                    src="/images/patterns/pattern-3-lime.png"
                    alt="Decorative Lime 3D Pyramid"
                    width={150}
                    height={150}
                    className="w-[100px] lg:w-[130px] h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)] rotate-[8deg]"
                />
            </div>

            <div
                className="absolute z-10 animate-float-medium pointer-events-none hidden lg:block"
                style={{
                    top: "20px",
                    left: "calc(50% + 530px)",
                }}
            >
                <Image
                    src="/images/patterns/pattern-2-white.png"
                    alt="Decorative White 3D Cylinder"
                    width={320}
                    height={320}
                    className="w-[200px] lg:w-[280px] h-auto drop-shadow-[0_20px_36px_rgba(0,0,0,0.22)] rotate-[2deg]"
                />
            </div>

            <div
                className="absolute z-10 animate-float-reverse pointer-events-none hidden lg:block"
                style={{
                    bottom: "-38px",
                    left: "calc(50% + 440px)",
                }}
            >
                <Image
                    src="/images/patterns/pattern-6-lime.png"
                    alt="Decorative Lime 3D Coil"
                    width={230}
                    height={230}
                    className="w-[140px] lg:w-[200px] h-auto drop-shadow-[0_16px_28px_rgba(0,0,0,0.2)] -rotate-[4deg]"
                />
            </div>

            <div className="relative z-20 max-w-[960px] mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
                <h2 className="font-poppins font-semibold text-white text-[30px] sm:text-[38px] md:text-[42px] lg:text-[44px] leading-[1.18] tracking-tight max-w-[720px]">
                    Unlock Your Potential as a <br className="hidden sm:inline" />
                    Creator with ByteSpace
                </h2>

                <p className="mt-4 md:mt-5 text-[#E5E6E8] text-[14px] sm:text-[15px] lg:text-[16px] leading-[160%] font-normal max-w-[840px]">
                    Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
                </p>

                <div className="mt-7 md:mt-8">
                    <button
                        type="button"
                        className="cursor-pointer inline-flex items-center justify-center bg-[#CBFC01] hover:bg-[#d9ff1a] text-[#111111] font-poppins font-medium sm:font-semibold text-[15px] sm:text-[16px] px-7 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-sm"
                    >
                        Join as Creator
                    </button>
                </div>
            </div>
        </section>
    );
}
