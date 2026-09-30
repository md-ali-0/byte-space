"use client";

import Link from "next/link";

export default function NotFoundContent() {
    return (
        <main className="w-full flex-1 min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-120px)] bg-[#003BE2] hero-grid-pattern text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 select-none overflow-hidden font-poppins relative">
                <div className="relative text-center flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
                    <span
                        className="font-poppins font-bold text-[220px] sm:text-[300px] md:text-[360px] lg:text-[400px] xl:text-[440px] leading-[0.8] tracking-tight select-none pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.75) 35%, rgba(212, 251, 32, 0.2) 75%, rgba(212, 251, 32, 0.0) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        404
                    </span>

                    <h1 className="font-poppins font-bold text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.15] text-white tracking-[-0.015em] -mt-14 sm:-mt-20 md:-mt-24 lg:-mt-28 max-w-4xl mx-auto px-4 z-10 text-center">
                        <span className="block sm:whitespace-nowrap">
                            The page you are looking
                        </span>
                        <span className="block sm:whitespace-nowrap">
                            for doesn&apos;t exist
                        </span>
                    </h1>

                    <p className="font-poppins font-normal text-white/80 text-[13px] sm:text-[14.5px] mt-4 sm:mt-5 text-center max-w-xl mx-auto px-4 z-10">
                        Try to use a correct url or go back to homepage to start again
                    </p>

                    <Link
                        href="/"
                        className="mt-5 sm:mt-6 inline-flex items-center justify-center h-9 sm:h-10 px-5 sm:px-6 rounded-full bg-[#D4FB20] hover:bg-[#c2e81b] text-[#111111] font-poppins font-medium text-[13.5px] sm:text-[14px] shadow-xs cursor-pointer transition-all duration-200 active:scale-98 z-10"
                    >
                        Back to Home
                    </Link>
                </div>
            </main>
    );
}
