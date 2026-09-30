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
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsSubmitting(false);
    };

    return (
        <div className="w-full max-w-145 bg-white rounded-4xl sm:rounded-[36px] px-8 sm:px-12 lg:px-14 py-10 sm:py-12 shadow-[0_24px_60px_rgba(0,0,0,0.18)] min-h-180 flex flex-col justify-between">
            <div>
                <div>
                    <span className="block text-[15px] sm:text-[16px] font-medium text-[#003BE2] mb-1.5">
                        Create an Account
                    </span>
                    <h2 className="font-poppins font-bold text-[38px] sm:text-[44px] text-[#111111] leading-[1.08] tracking-[-0.02em]">
                        Welcome to <br />
                        ByteSpace
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 sm:mt-9 space-y-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-[15px] font-medium text-[#1E2024] mb-2"
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
                            className="w-full h-14 px-5 rounded-[16px] border border-[#DDDEE0] bg-transparent text-[15px] text-[#111111] placeholder:text-[#9CA3AF] focus:bg-white focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-[15px] font-medium text-[#1E2024] mb-2"
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
                            className="w-full h-14 px-5 rounded-[16px] border border-[#DDDEE0] bg-transparent text-[15px] text-[#111111] placeholder:text-[#9CA3AF] focus:bg-white focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="new-password"
                            className="block text-[15px] font-medium text-[#1E2024] mb-2"
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
                            className="w-full h-14 px-5 rounded-[16px] border border-[#DDDEE0] bg-transparent text-[15px] text-[#111111] placeholder:text-[#9CA3AF] focus:bg-white focus:border-[#003BE2] focus:ring-1 focus:ring-[#003BE2] outline-none transition-all"
                        />
                    </div>

                    <div className="flex justify-end pt-3">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-11.5 px-9 rounded-full bg-[#CBFC01] hover:bg-[#bbf000] text-[#111111] font-poppins font-semibold text-[15px] flex items-center justify-center transition-all active:scale-[0.98] shadow-xs cursor-pointer disabled:opacity-70"
                        >
                            {isSubmitting ? "Submitting..." : "Continue"}
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="pt-8 pb-1 text-center">
                <p className="text-[14px] text-[#717378]">
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
