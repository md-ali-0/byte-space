/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { HiBars3, HiXMark } from "react-icons/hi2";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const isAuthPage =
        pathname?.startsWith("/register") ||
        pathname?.startsWith("/signup") ||
        pathname?.startsWith("/login");

    if (isAuthPage) {
        return null;
    }

    const isRegister = pathname === "/register" || pathname === "/signup";
    const isLogin = pathname === "/login";

    return (
        <header className="w-full bg-[#003BE2] text-[#F5F5F6] relative z-50 hero-grid-pattern">
            <nav className="container-page flex h-20 sm:h-24 md:h-30 items-center justify-between">
                <Link
                    href="/"
                    className="shrink-0 transition-transform hover:scale-[1.02]"
                    aria-label="ByteSpace home"
                >
                    <Image
                        src="/logo.png"
                        alt="ByteSpace"
                        width={171}
                        height={37}
                        priority
                        className="h-7 sm:h-8 md:h-9.25 w-auto"
                    />
                </Link>

                {/* Desktop Nav Items */}
                <ul className="hidden md:flex items-center gap-8 lg:gap-10">
                    {navItems.map((item) => {
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname?.startsWith(item.href);

                        return (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className={`text-[16px] transition-colors duration-200 ${
                                        isActive
                                            ? "text-white font-medium"
                                            : "text-[#F5F5F6]/80 hover:text-white font-normal"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Right Actions: Desktop & Mobile */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-7">
                    <Link
                        href="/login"
                        className={`hidden sm:inline-block text-[15px] sm:text-[16px] transition-colors duration-200 ${
                            isLogin
                                ? "text-white font-semibold underline underline-offset-8 decoration-[#CBFC01] decoration-2"
                                : "text-[#F5F5F6]/85 hover:text-white font-normal"
                        }`}
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/register"
                        className={`hidden sm:inline-block text-[15px] sm:text-[16px] transition-colors duration-200 ${
                            isRegister
                                ? "text-white font-semibold underline underline-offset-8 decoration-[#CBFC01] decoration-2"
                                : "text-[#F5F5F6]/85 hover:text-white font-normal"
                        }`}
                    >
                        Join Us
                    </Link>

                    <Link
                        href="/cart"
                        className="flex items-center justify-center p-1.5 text-white/90 hover:text-white hover:scale-110 transition-all duration-200"
                        aria-label="Shopping cart"
                    >
                        <AiOutlineShopping size={24} />
                    </Link>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <HiXMark className="w-6 h-6" />
                        ) : (
                            <HiBars3 className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-x-0 top-20 sm:top-24 bottom-0 bg-[#003BE2]/95 backdrop-blur-xl z-50 flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto">
                    <div className="flex flex-col gap-3 py-4 border-b border-white/15">
                        {navItems.map((item) => {
                            const isActive =
                                item.href === "/"
                                ? pathname === "/"
                                : pathname?.startsWith(item.href);

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-2xl text-[18px] font-medium transition-colors ${
                                        isActive
                                            ? "bg-[#CBFC01] text-[#111111] font-semibold"
                                            : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex flex-col gap-3 pt-6">
                        <Link
                            href="/login"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full h-12 rounded-full border border-white/30 text-white font-medium text-[16px] flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/register"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full h-12 rounded-full bg-[#CBFC01] text-[#111111] font-semibold text-[16px] flex items-center justify-center hover:bg-[#bbf000] shadow-sm transition-colors"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}