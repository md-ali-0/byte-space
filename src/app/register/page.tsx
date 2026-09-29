import AuthShowcaseCard from "@/components/features/auth/auth-showcase-card";
import SignupForm from "@/components/features/auth/signup-form";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiShield } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Sign Up - ByteSpace | Join 50,000+ Students",
    description:
        "Create your free ByteSpace account to get instant access to hundreds of courses taught by industry professionals.",
};

export default function RegisterPage() {
    return (
        <main className="relative min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-120px)] w-full bg-[#003BE2] hero-grid-pattern flex flex-col justify-center overflow-hidden py-10 sm:py-14 lg:py-18">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 bg-radial-[at_top_right] from-blue-400/20 via-transparent to-black/30 pointer-events-none" />

            {/* Decorative Floating 3D Lime Patterns */}
            <div className="absolute top-12 left-4 sm:left-12 w-16 sm:w-20 pointer-events-none opacity-80 animate-float-slow hidden md:block">
                <Image
                    src="/images/patterns/pattern-3-lime.png"
                    alt="Decorative pattern"
                    width={80}
                    height={80}
                    className="w-full h-auto drop-shadow-lg"
                />
            </div>

            <div className="absolute bottom-16 left-8 sm:left-20 w-18 sm:w-24 pointer-events-none opacity-80 animate-float-medium hidden lg:block">
                <Image
                    src="/images/patterns/pattern-4-lime.png"
                    alt="Decorative pattern"
                    width={96}
                    height={96}
                    className="w-full h-auto drop-shadow-lg"
                />
            </div>

            <div className="absolute top-20 right-6 sm:right-16 w-16 sm:w-22 pointer-events-none opacity-75 animate-float-reverse hidden lg:block">
                <Image
                    src="/images/patterns/pattern-6-lime.png"
                    alt="Decorative pattern"
                    width={88}
                    height={88}
                    className="w-full h-auto drop-shadow-lg"
                />
            </div>

            {/* Content Container */}
            <div className="container-page relative z-10 w-full">
                {/* Back to Home Link */}
                <div className="mb-6 sm:mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[14px] font-medium transition-colors duration-200 group"
                    >
                        <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
                        <span>Back to Home</span>
                    </Link>
                </div>

                {/* Split Two-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Column: Course Preview Showcase */}
                    <div className="lg:col-span-6 xl:col-span-7">
                        <AuthShowcaseCard />
                    </div>

                    {/* Right Column: Sign Up Form Card */}
                    <div className="lg:col-span-6 xl:col-span-5 w-full max-w-[500px] mx-auto lg:max-w-none">
                        <SignupForm />
                    </div>
                </div>

                {/* Bottom Trust & Security Reassurance */}
                <div className="mt-12 text-center flex items-center justify-center gap-2 text-white/60 text-[13px]">
                    <FiShield size={14} className="text-[#CBFC01]" />
                    <span>
                        Protected by 256-bit SSL encryption • Free account, no credit card required
                    </span>
                </div>
            </div>
        </main>
    );
}
