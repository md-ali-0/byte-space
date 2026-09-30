"use client";

import Image from "next/image";
import Link from "next/link";

interface Category {
    id: string;
    name: string;
    icon: string;
    href: string;
}

const categories: Category[] = [
    {
        id: "design",
        name: "Design",
        icon: "/categories/design-icon.png",
        href: "/courses/design",
    },
    {
        id: "development",
        name: "Development",
        icon: "/categories/development-icon.png",
        href: "/courses/development",
    },
    {
        id: "it-software",
        name: "IT & Software",
        icon: "/categories/it-software-icon.png",
        href: "/courses/it",
    },
    {
        id: "business",
        name: "Business",
        icon: "/categories/business-icon.png",
        href: "/courses/business",
    },
    {
        id: "marketing",
        name: "Marketing",
        icon: "/categories/marketing-icon.png",
        href: "/courses/marketing",
    },
    {
        id: "photography",
        name: "Photography",
        icon: "/categories/photography-icon.png",
        href: "/courses/photography",
    },
];

export default function LearningPathsSection() {
    return (
        <section className="w-full bg-white pt-8 pb-16 sm:pb-20 lg:pt-5 lg:pb-25 select-none">
            <div className="container-page">
                <div className="text-center max-w-250 mx-auto">
                    <h2 className="font-poppins font-semibold text-[#111111] text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] leading-[1.2] tracking-[-0.02em] whitespace-normal lg:whitespace-nowrap">
                        Explore Diverse Learning Paths at Bytespace
                    </h2>
                    <p className="mt-5 text-[#82868E] text-[15px] sm:text-[16px] leading-[160%] font-normal max-w-222.5 mx-auto">
                        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                    </p>
                </div>

                <div className="mt-12 sm:mt-18 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-10">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={cat.href}
                            className="group bg-white rounded-3xl border border-[#DDDEE0] p-4 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:border-[#111111] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 cursor-pointer"
                        >
                            <div className="w-15 h-15 rounded-full bg-[#D4FB20] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs">
                                <Image
                                    src={cat.icon}
                                    alt={cat.name}
                                    width={60}
                                    height={60}
                                    className="w-15 h-15 pointer-events-none"
                                />
                            </div>

                            <span className="mt-4.5 text-[15px] sm:text-[16px] font-medium text-[#111111] group-hover:text-black transition-colors text-center whitespace-nowrap">
                                {cat.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
