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
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSubmitting(false);
    };

    return (
        <div className="w-full max-w-145 bg-white rounded-[28px] sm:rounded-4xl lg:rounded-[36px] px-6 sm:px-10 lg:px-14 py-8 sm:py-10 lg:py-12 shadow-[0_24px_60px_rgba(0,0,0,0.18)] min-h-auto lg:min-h-180 flex flex-col justify-between">
            <div>
                <div>
                    <span className="block text-[15px] sm:text-[16px] font-medium text-[#003BE2] mb-1.5">
                        Sign In
                    </span>
                    <h2 className="font-poppins font-bold text-[38px] sm:text-[44px] text-[#111111] leading-tight tracking-[-0.02em]">
                        Welcome Back
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 sm:mt-9 space-y-5">
                    <div>
                        <label
                            htmlFor="login-email"
                            className="block text-[15px] font-medium text-[#1E2024] mb-2"
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
                            className="w-full h-14 px-5 rounded-[16px] border border-[#DDDEE0] bg-transparent text-[15px] text-[#111111] placeholder:text-[#9CA3AF] focus:bg-white focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="current-password"
                            className="block text-[15px] font-medium text-[#1E2024] mb-2"
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
                            className="w-full h-14 px-5 rounded-[16px] border border-[#DDDEE0] bg-transparent text-[15px] text-[#111111] placeholder:text-[#9CA3AF] focus:bg-white focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] outline-none transition-all"
                        />
                    </div>

                    <div className="flex justify-end pt-3">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-11.5 px-8.5 rounded-full bg-[#CBFC01] hover:bg-[#bbf000] text-[#111111] font-poppins font-semibold text-[15px] flex items-center justify-center transition-all active:scale-[0.98] shadow-xs cursor-pointer disabled:opacity-70"
                        >
                            {isSubmitting ? "Signing in..." : "Sign In"}
                        </button>
                    </div>
                </form>

                <div className="relative my-7 sm:my-8 flex items-center">
                    <div className="grow border-t border-[#DDDEE0]" />
                    <span className="shrink-0 px-4 text-[14px] text-[#82868E]">
                        or
                    </span>
                    <div className="grow border-t border-[#DDDEE0]" />
                </div>

                <div className="flex items-center justify-center gap-5">
                    <button
                        type="button"
                        className="w-16 h-16 rounded-[22px] border border-[#DDDEE0] bg-transparent hover:bg-white/80 flex items-center justify-center text-[#111111] transition-all cursor-pointer shadow-2xs"
                        aria-label="Sign in with Facebook"
                    >
                        <FaFacebookF className="text-[22px]" />
                    </button>
                    <button
                        type="button"
                        className="w-16 h-16 rounded-[22px] border border-[#DDDEE0] bg-transparent hover:bg-white/80 flex items-center justify-center text-[#111111] transition-all cursor-pointer shadow-2xs"
                        aria-label="Sign in with Google"
                    >
                        <span className="font-poppins font-bold text-[24px]">G</span>
                    </button>
                </div>
            </div>

            <div className="pt-6 pb-1 text-center">
                <p className="text-[14px] text-[#717378]">
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
