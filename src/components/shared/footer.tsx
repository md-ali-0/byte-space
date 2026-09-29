"use client";

import Image from "next/image";
import Link from "next/link";

const linkColumns = [
    {
        title: "Column 1",
        links: [
            { label: "Featured Courses", href: "/courses" },
            { label: "Featured Categories", href: "/categories" },
            { label: "Business", href: "/courses/business" },
            { label: "IT", href: "/courses/it" },
            { label: "Design", href: "/courses/design" },
        ],
    },
    {
        title: "Column 2",
        links: [
            { label: "Development", href: "/courses/development" },
            { label: "Marketing", href: "/courses/marketing" },
            { label: "Photography", href: "/courses/photography" },
            { label: "Finance", href: "/courses/finance" },
            { label: "Sport", href: "/courses/sport" },
        ],
    },
    {
        title: "Column 3",
        links: [
            { label: "Become a Creator", href: "/creators" },
            { label: "Affiliate Program", href: "/affiliate" },
            { label: "Contact", href: "/contact" },
            { label: "Help", href: "/help" },
            { label: "About", href: "/about" },
        ],
    },
];

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Settings", href: "/cookies" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-white select-none">
            <div className="container-page pt-16 lg:pt-[70px] pb-10 lg:pb-[44px]">
                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0">
                    {/* Left Column: Brand & Newsletter */}
                    <div className="w-full lg:max-w-[504px]">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="block w-fit transition-transform hover:scale-[1.02]"
                            aria-label="ByteSpace Home"
                        >
                            <Image
                                src="/logo-dark.png"
                                alt="ByteSpace"
                                width={171}
                                height={37}
                                priority
                                unoptimized
                                style={{ width: "auto", height: "37px" }}
                                className="h-[37px] w-auto"
                            />
                        </Link>

                        {/* Newsletter Title */}
                        <p className="mt-[21px] text-[14px] text-[#28292B] leading-[20px] whitespace-normal lg:whitespace-nowrap">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        {/* Newsletter Subscription Form */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-[42px] flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-[24px]"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:w-[376px] h-[52px] px-6 rounded-full border border-[#DDDEE0] bg-white text-[15px] text-[#111111] placeholder:text-[#37383A] outline-none focus:border-[#111111] transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="shrink-0 w-full sm:w-[104px] h-[46px] rounded-full bg-[#D4FB20] text-[#111111] text-[16px] font-medium hover:bg-[#c6ee18] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
                            >
                                Search
                            </button>
                        </form>

                        {/* Disclaimer */}
                        <p className="mt-[29px] text-[12px] text-[#414244] leading-[22px] max-w-[465px]">
                            By subscribing, you agree to our{" "}
                            <Link
                                href="/privacy"
                                className="text-[#111111] underline hover:text-black transition-colors"
                            >
                                Privacy Policy
                            </Link>{" "}
                            and consent to receive updates from our company.
                        </p>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="w-full lg:w-[580px] lg:pt-[53px]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-start">
                            {linkColumns.map((col, idx) => (
                                <ul
                                    key={idx}
                                    className="space-y-[18px] lg:w-[207px]"
                                >
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[14px] text-[#353639] hover:text-black transition-colors block leading-[20px]"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-[#DDDEE0] mt-16 lg:mt-[119px]" />

                {/* Bottom Bar: Copyright & Legal */}
                <div className="pt-[27px] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#434446]">
                    <div className="text-[12px]">
                        @ 2023 ByteSpace. All rights reserved.
                    </div>

                    <div className="flex items-center gap-[24px] text-[12px] text-[#3E3F41]">
                        {legalLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-black transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
