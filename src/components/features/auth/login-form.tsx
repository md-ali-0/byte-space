"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sign in response
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSubmitting(false);
    };

    return (
        <div className="w-full bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            {/* Header */}
            <div>
                <span className="block text-[13.5px] font-medium text-[#003BE2] mb-1.5">
                    Sign In
                </span>
                <h2 className="font-poppins font-bold text-[32px] sm:text-[38px] text-[#111111] leading-[1.12] tracking-tight">
                    Welcome Back
                </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {/* Email */}
                <div>
                    <label
                        htmlFor="login-email"
                        className="block text-[13px] font-medium text-[#222222] mb-1.5"
                    >
                        Email
                    </label>
                    <input
                        id="login-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="username"
                        required
                        placeholder="designer@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 px-4 rounded-[10px] border border-[#E5E7EB] bg-white text-[14.5px] text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                    />
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="current-password"
                        className="block text-[13px] font-medium text-[#222222] mb-1.5"
                    >
                        Password
                    </label>
                    <input
                        id="current-password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 px-4 rounded-[10px] border border-[#E5E7EB] bg-white text-[14.5px] text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                    />
                </div>

                {/* Sign In Button (Aligned to the Right) */}
                <div className="flex justify-end pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-10 px-8 rounded-full bg-[#CBFC01] hover:bg-[#bbf000] text-[#111111] font-poppins font-medium text-[14px] flex items-center justify-center transition-all active:scale-[0.98] shadow-xs cursor-pointer disabled:opacity-70"
                    >
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                </div>
            </form>

            {/* Divider */}
            <div className="relative my-7 sm:my-8 flex items-center">
                <div className="flex-grow border-t border-[#E5E7EB]" />
                <span className="shrink-0 px-3 text-[13px] text-[#82868E]">
                    or
                </span>
                <div className="flex-grow border-t border-[#E5E7EB]" />
            </div>

            {/* Social Circle Buttons */}
            <div className="flex items-center justify-center gap-4">
                {/* Facebook Button */}
                <button
                    type="button"
                    className="w-12 h-12 rounded-full border border-[#DDDEE0] bg-white hover:bg-[#F9FAFB] flex items-center justify-center text-[#111111] transition-all cursor-pointer shadow-2xs"
                    aria-label="Sign in with Facebook"
                >
                    <FaFacebookF size={18} />
                </button>

                {/* Google Button */}
                <button
                    type="button"
                    className="w-12 h-12 rounded-full border border-[#DDDEE0] bg-white hover:bg-[#F9FAFB] flex items-center justify-center text-[#111111] font-bold text-[18px] transition-all cursor-pointer shadow-2xs"
                    aria-label="Sign in with Google"
                >
                    <span className="font-poppins font-bold text-[18px]">G</span>
                </button>
            </div>

            {/* Bottom Link */}
            <div className="mt-8 sm:mt-9 text-center">
                <p className="text-[13.5px] text-[#55575B]">
                    New user?{" "}
                    <Link
                        href="/register"
                        className="text-[#003BE2] hover:underline font-normal"
                    >
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
}
