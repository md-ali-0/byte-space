import AuthShowcaseCard from "@/components/features/auth/auth-showcase-card";
import SignupForm from "@/components/features/auth/signup-form";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Sign Up - ByteSpace",
    description: "Create an account on ByteSpace to access hundreds of courses.",
};

export default function RegisterPage() {
    return (
        <div className="relative min-h-screen w-full bg-[#003BE2] hero-grid-pattern flex flex-col justify-between overflow-x-hidden p-6 sm:p-10 lg:px-14 lg:py-10">
            {/* Top-Left ByteSpace "b" Brand Logo aligned with content */}
            <div className="w-full max-w-[1240px] mx-auto">
                <Link
                    href="/"
                    className="inline-block transition-transform hover:scale-105"
                    aria-label="ByteSpace Home"
                >
                    <Image
                        src="/icon0.svg"
                        alt="ByteSpace"
                        width={34}
                        height={37}
                        priority
                        className="w-8.5 h-auto drop-shadow-xs"
                    />
                </Link>
            </div>

            {/* Centered Main Content Area */}
            <div className="w-full max-w-[1240px] mx-auto my-auto py-6 lg:py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20">
                    {/* Left Column: Text + 3D Collage (Width ~495px) */}
                    <div className="w-full max-w-[495px] shrink-0 flex justify-center lg:justify-start">
                        <AuthShowcaseCard type="signup" />
                    </div>

                    {/* Right Column: Sign Up Card (Width ~580px) */}
                    <div className="w-full max-w-[580px] shrink-0 flex justify-center lg:justify-end">
                        <SignupForm />
                    </div>
                </div>
            </div>

            {/* Bottom spacer to balance layout */}
            <div className="h-4 pointer-events-none" />
        </div>
    );
}
