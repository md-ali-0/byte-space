"use client";

import Link from "next/link";
import { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
    FiAlertCircle,
    FiCheck,
    FiCheckCircle,
    FiEye,
    FiEyeOff,
    FiLock,
    FiMail,
    FiUser,
} from "react-icons/fi";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Touched states for user-friendly validation (don't show errors before interaction)
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        password: false,
        agreeTerms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    // Password strength calculation
    const calculatePasswordStrength = (pwd: string) => {
        let score = 0;
        if (pwd.length >= 8) score++;
        if (/[A-Z]/.test(pwd)) score++;
        if (/[0-9]/.test(pwd)) score++;
        if (/[^A-Za-z0-9]/.test(pwd)) score++;
        return score;
    };

    const passwordScore = calculatePasswordStrength(password);

    const getStrengthLabel = (score: number) => {
        if (!password) return { text: "", color: "bg-gray-200" };
        if (score <= 1) return { text: "Weak", color: "bg-red-500", textColor: "text-red-500" };
        if (score === 2) return { text: "Fair", color: "bg-amber-500", textColor: "text-amber-500" };
        if (score === 3) return { text: "Good", color: "bg-blue-500", textColor: "text-blue-500" };
        return { text: "Strong", color: "bg-[#16803c]", textColor: "text-[#16803c]" };
    };

    const strength = getStrengthLabel(passwordScore);

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!name.trim()) {
            newErrors.name = "Please enter your full name.";
        }

        if (!email.trim()) {
            newErrors.email = "Please enter your email address.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!password) {
            newErrors.password = "Please enter a password.";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
        }

        if (!agreeTerms) {
            newErrors.agreeTerms = "You must agree to the Terms and Privacy Policy.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleBlur = (field: keyof typeof touched) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        validate();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTouched({
            name: true,
            email: true,
            password: true,
            agreeTerms: true,
        });

        if (!validate()) return;

        setIsSubmitting(true);
        // Simulate network registration response
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="w-full bg-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.18)] border border-white/60 text-center animate-pulse-subtle">
                <div className="w-16 h-16 rounded-full bg-[#eefbf2] text-[#16803c] flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <FiCheckCircle size={36} />
                </div>
                <h2 className="font-poppins font-bold text-[26px] sm:text-[30px] text-[#111111] tracking-tight">
                    Welcome to ByteSpace!
                </h2>
                <p className="mt-2 text-[#5F5F5F] text-[15px] max-w-[380px] mx-auto leading-relaxed">
                    Your account has been created successfully for{" "}
                    <span className="font-medium text-[#111111]">{email}</span>.
                </p>
                <div className="mt-8 p-4 rounded-[16px] bg-[#F7F7F5] border border-[#E5E7EB] text-left">
                    <span className="block text-[13px] font-medium text-[#82868E] uppercase tracking-wider mb-2">
                        Next steps:
                    </span>
                    <ul className="space-y-2 text-[14px] text-[#333333]">
                        <li className="flex items-center gap-2">
                            <FiCheck className="text-[#16803c] shrink-0" />
                            Browse 350+ masterclasses
                        </li>
                        <li className="flex items-center gap-2">
                            <FiCheck className="text-[#16803c] shrink-0" />
                            Join the creator community forum
                        </li>
                        <li className="flex items-center gap-2">
                            <FiCheck className="text-[#16803c] shrink-0" />
                            Set your personalized learning goals
                        </li>
                    </ul>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/"
                        className="flex-1 h-12 rounded-[14px] bg-[#CBFC01] text-[#111111] font-poppins font-semibold text-[15px] flex items-center justify-center hover:brightness-105 transition-all shadow-sm"
                    >
                        Go to Homepage
                    </Link>
                    <Link
                        href="/courses"
                        className="flex-1 h-12 rounded-[14px] bg-[#111111] text-white font-poppins font-semibold text-[15px] flex items-center justify-center hover:bg-[#2A2A2A] transition-all shadow-sm"
                    >
                        Explore Courses
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-9 lg:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.20)] border border-white/80">
            {/* Header */}
            <div>
                <span className="text-[12.5px] font-semibold text-[#003BE2] uppercase tracking-wider bg-[#003BE2]/8 px-3 py-1 rounded-full">
                    Join ByteSpace
                </span>
                <h2 className="mt-3 font-poppins font-bold text-[28px] sm:text-[32px] text-[#111111] tracking-tight leading-tight">
                    Create an Account
                </h2>
                <p className="mt-1.5 text-[14px] sm:text-[15px] text-[#5F5F5F]">
                    Sign up to begin your personalized learning journey today.
                </p>
            </div>

            {/* Social Logins */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                    type="button"
                    className="h-12 px-4 rounded-[14px] border border-[#E2E4E8] bg-[#FAFAFA] hover:bg-[#F3F4F6] text-[#242528] text-[14px] font-medium flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] cursor-pointer"
                >
                    <FcGoogle size={20} />
                    <span>Google</span>
                </button>

                <button
                    type="button"
                    className="h-12 px-4 rounded-[14px] border border-[#E2E4E8] bg-[#FAFAFA] hover:bg-[#F3F4F6] text-[#242528] text-[14px] font-medium flex items-center justify-center gap-2.5 transition-all active:scale-[0.99] cursor-pointer"
                >
                    <AiFillApple size={20} className="text-[#111111]" />
                    <span>Apple</span>
                </button>
            </div>

            {/* Divider */}
            <div className="relative my-6 flex items-center">
                <div className="flex-grow border-t border-[#E5E7EB]" />
                <span className="shrink-0 px-3 text-[12px] sm:text-[12.5px] text-[#82868E] uppercase tracking-wider font-medium">
                    Or register with email
                </span>
                <div className="flex-grow border-t border-[#E5E7EB]" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Full Name */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-[13.5px] font-medium text-[#242528] mb-1.5"
                    >
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-[#82868E] pointer-events-none">
                            <FiUser size={18} />
                        </div>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            placeholder="e.g. Alex Morgan"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) validate();
                            }}
                            onBlur={() => handleBlur("name")}
                            className={`h-12 pl-10.5 pr-4 rounded-[12px] text-[15px] border ${
                                touched.name && errors.name
                                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                                    : "border-[#DDDEE0] focus:border-[#003BE2] focus:ring-[#003BE2]/10"
                            } focus:ring-3`}
                        />
                    </div>
                    {touched.name && errors.name && (
                        <p className="mt-1.5 text-[12px] text-red-500 flex items-center gap-1 font-medium">
                            <FiAlertCircle size={14} />
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email Address */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-[13.5px] font-medium text-[#242528] mb-1.5"
                    >
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-[#82868E] pointer-events-none">
                            <FiMail size={18} />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            inputMode="email"
                            autoComplete="username"
                            required
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) validate();
                            }}
                            onBlur={() => handleBlur("email")}
                            className={`h-12 pl-10.5 pr-4 rounded-[12px] text-[15px] border ${
                                touched.email && errors.email
                                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                                    : "border-[#DDDEE0] focus:border-[#003BE2] focus:ring-[#003BE2]/10"
                            } focus:ring-3`}
                        />
                    </div>
                    {touched.email && errors.email && (
                        <p className="mt-1.5 text-[12px] text-red-500 flex items-center gap-1 font-medium">
                            <FiAlertCircle size={14} />
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <label
                            htmlFor="new-password"
                            className="block text-[13.5px] font-medium text-[#242528]"
                        >
                            Password <span className="text-red-500">*</span>
                        </label>
                        {password && (
                            <span
                                className={`text-[12px] font-semibold ${strength.textColor}`}
                            >
                                {strength.text}
                            </span>
                        )}
                    </div>
                    <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-[#82868E] pointer-events-none">
                            <FiLock size={18} />
                        </div>
                        <input
                            id="new-password"
                            name="new-password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="new-password"
                            required
                            placeholder="Must be at least 8 characters"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (errors.password) validate();
                            }}
                            onBlur={() => handleBlur("password")}
                            className={`h-12 pl-10.5 pr-11 rounded-[12px] text-[15px] border ${
                                touched.password && errors.password
                                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                                    : "border-[#DDDEE0] focus:border-[#003BE2] focus:ring-[#003BE2]/10"
                            } focus:ring-3`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3.5 text-[#82868E] hover:text-[#111111] transition-colors p-1"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </button>
                    </div>

                    {/* Password Strength Indicator Bars */}
                    {password && (
                        <div className="mt-2 space-y-1">
                            <div className="grid grid-cols-4 gap-1.5 h-1.5">
                                {[1, 2, 3, 4].map((step) => (
                                    <div
                                        key={step}
                                        className={`rounded-full transition-all duration-300 ${
                                            passwordScore >= step
                                                ? strength.color
                                                : "bg-[#EAECEF]"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {touched.password && errors.password && (
                        <p className="mt-1.5 text-[12px] text-red-500 flex items-center gap-1 font-medium">
                            <FiAlertCircle size={14} />
                            {errors.password}
                        </p>
                    )}
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={(e) => {
                                setAgreeTerms(e.target.checked);
                                if (errors.agreeTerms) validate();
                            }}
                            className="mt-1 w-4.5 h-4.5 rounded-[4px] border-[#DDDEE0] text-[#003BE2] focus:ring-[#003BE2] shrink-0"
                        />
                        <span className="text-[13px] text-[#5F5F5F] leading-snug">
                            I agree to ByteSpace&apos;s{" "}
                            <Link
                                href="/terms"
                                className="text-[#111111] font-medium underline hover:text-[#003BE2]"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className="text-[#111111] font-medium underline hover:text-[#003BE2]"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </span>
                    </label>
                    {touched.agreeTerms && errors.agreeTerms && (
                        <p className="mt-1 text-[12px] text-red-500 flex items-center gap-1 font-medium">
                            <FiAlertCircle size={14} />
                            {errors.agreeTerms}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-13 rounded-[14px] bg-[#CBFC01] text-[#111111] font-poppins font-semibold text-[16px] flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.99] transition-all shadow-[0_4px_16px_rgba(203,252,1,0.35)] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 text-[#111111]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                <span>Creating Account...</span>
                            </>
                        ) : (
                            <span>Create Account</span>
                        )}
                    </button>
                </div>
            </form>

            {/* Switch to Sign In */}
            <div className="mt-6 pt-5 border-t border-[#F0F0F2] text-center">
                <p className="text-[14px] text-[#5F5F5F]">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold text-[#003BE2] hover:underline transition-colors"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
