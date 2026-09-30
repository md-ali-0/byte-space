import AuthShowcaseCard from "@/components/features/auth/auth-showcase-card";
import LoginForm from "@/components/features/auth/login-form";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Sign In - ByteSpace",
    description: "Sign in to your ByteSpace account to access your courses.",
};

export default function LoginPage() {
    return (
        <div className="relative min-h-screen w-full bg-[#003BE2] hero-grid-pattern flex flex-col justify-between overflow-x-hidden p-6 sm:p-10 lg:px-14 lg:py-10">
            <div className="w-full max-w-310 mx-auto">
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

            <div className="w-full max-w-310 mx-auto my-auto py-6 lg:py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20">
                    <div className="w-full max-w-123.75 shrink-0 flex justify-center lg:justify-start">
                        <AuthShowcaseCard type="login" />
                    </div>

                    <div className="w-full max-w-145 shrink-0 flex justify-center lg:justify-end">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div className="h-4 pointer-events-none" />
        </div>
    );
}
