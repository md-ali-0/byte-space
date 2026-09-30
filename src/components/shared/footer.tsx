"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    const pathname = usePathname();
    const isHiddenPage =
        pathname?.startsWith("/register") ||
        pathname?.startsWith("/signup") ||
        pathname?.startsWith("/login")

    if (isHiddenPage) {
        return null;
    }

    return (
        <footer className="w-full bg-white border-t border-[#dbdbdb]">
            <div className="container-page pt-16 lg:pt-17.5 pb-10 lg:pb-11">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0">
                    <div className="w-full lg:max-w-126">
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
                                className="h-9.25 w-auto"
                            />
                        </Link>

                        <p className="mt-5.25 text-[14px] text-[#28292B] leading-5 whitespace-normal lg:whitespace-nowrap">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-10.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:w-94 h-13 px-6 rounded-full border border-[#DDDEE0] bg-white text-[15px] text-[#111111] placeholder:text-[#37383A] outline-none focus:border-[#111111] transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="shrink-0 w-full sm:w-26 h-11.5 rounded-full bg-[#D4FB20] text-[#111111] text-[16px] font-medium hover:bg-[#c6ee18] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center"
                            >
                                Search
                            </button>
                        </form>

                        <p className="mt-7.25 text-[12px] text-[#414244] leading-5.5 max-w-116.25">
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
                    <div className="w-full lg:w-145 lg:pt-13.25">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-start">
                            {linkColumns.map((col, idx) => (
                                <ul
                                    key={idx}
                                    className="space-y-4.5 lg:w-51.75"
                                >
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[14px] text-[#353639] hover:text-black transition-colors block leading-5"
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

                <div className="w-full h-px bg-[#DDDEE0] mt-16 lg:mt-29.75" />

                <div className="pt-6.75 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#434446]">
                    <div className="text-[12px]">
                        @ 2023 ByteSpace. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6 text-[12px] text-[#3E3F41]">
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
