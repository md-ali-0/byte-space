"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate registration response
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSubmitting(false);
    };

    return (
        <div className="w-full bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            {/* Header */}
            <div>
                <span className="block text-[13.5px] font-medium text-[#003BE2] mb-1.5">
                    Create an Account
                </span>
                <h2 className="font-poppins font-bold text-[32px] sm:text-[38px] text-[#111111] leading-[1.12] tracking-tight">
                    Welcome to <br />
                    ByteSpace
                </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {/* Full Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-[13px] font-medium text-[#222222] mb-1.5"
                    >
                        Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Jamie Davis"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-12 px-4 rounded-[10px] border border-[#E5E7EB] bg-white text-[14.5px] text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-[13px] font-medium text-[#222222] mb-1.5"
                    >
                        Email
                    </label>
                    <input
                        id="email"
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
                        htmlFor="new-password"
                        className="block text-[13px] font-medium text-[#222222] mb-1.5"
                    >
                        Password
                    </label>
                    <input
                        id="new-password"
                        name="new-password"
                        type="password"
                        autoComplete="new-password"
                        required
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 px-4 rounded-[10px] border border-[#E5E7EB] bg-white text-[14.5px] text-[#111111] placeholder:text-[#9CA3AF] focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] transition-colors"
                    />
                </div>

                {/* Continue Button (Aligned to the Right) */}
                <div className="flex justify-end pt-3">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-10 px-8 rounded-full bg-[#CBFC01] hover:bg-[#bbf000] text-[#111111] font-poppins font-medium text-[14px] flex items-center justify-center transition-all active:scale-[0.98] shadow-xs cursor-pointer disabled:opacity-70"
                    >
                        {isSubmitting ? "Submitting..." : "Continue"}
                    </button>
                </div>
            </form>

            {/* Bottom Link */}
            <div className="mt-10 sm:mt-12 text-center">
                <p className="text-[13.5px] text-[#55575B]">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-[#003BE2] hover:underline font-normal"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
