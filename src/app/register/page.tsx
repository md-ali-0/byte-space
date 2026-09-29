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
        <div className="relative min-h-screen w-full bg-[#003BE2] hero-grid-pattern flex flex-col justify-between overflow-x-hidden p-6 sm:p-10 lg:p-14">
            {/* Top-Left ByteSpace "b" Brand Logo */}
            <div>
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
            <div className="w-full max-w-[1080px] mx-auto my-auto py-8 lg:py-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Column: Text + 3D Collage */}
                    <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-start">
                        <AuthShowcaseCard type="signup" />
                    </div>

                    {/* Right Column: Sign Up White Card */}
                    <div className="lg:col-span-6 xl:col-span-5 w-full max-w-[460px] mx-auto lg:max-w-none">
                        <SignupForm />
                    </div>
                </div>
            </div>

            {/* Bottom spacer to balance layout */}
            <div className="h-4 pointer-events-none" />
        </div>
    );
}
