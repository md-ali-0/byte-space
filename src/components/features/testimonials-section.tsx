"use client";

import Image from "next/image";

interface Testimonial {
    id: string;
    name: string;
    role: string;
    avatar: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: "/avatars/testimonial-1.png",
        quote:
            "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
        id: "2",
        name: "James L.",
        role: "Lifelong Learner",
        avatar: "/avatars/testimonial-2.png",
        quote:
            "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
        id: "3",
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: "/avatars/testimonial-3.png",
        quote:
            "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white select-none pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
            <div
                className="absolute inset-0 max-w-360 mx-auto pointer-events-none"
                aria-hidden="true"
            >
                <div
                    className="absolute -top-7.5 -right-15 lg:-right-5 w-165 sm:w-190 lg:w-210 h-165 sm:h-190 lg:h-210 rounded-full blur-[105px] lg:blur-[125px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(203, 252, 1, 0.62) 0%, rgba(212, 251, 32, 0.32) 38%, rgba(212, 251, 32, 0.10) 58%, transparent 75%)",
                    }}
                />
                <div
                    className="absolute -bottom-17.5 -left-17.5 lg:-left-7.5 w-145 sm:w-165 h-145 sm:h-165 rounded-full blur-[105px] lg:blur-[120px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.08) 46%, transparent 72%)",
                    }}
                />
            </div>

            <div className="container-page relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-6">
                        <h2 className="font-poppins font-semibold text-[#111111] text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-[1.18] tracking-[-0.02em]">
                            Discover What Our <br className="hidden sm:inline" />
                            Community Is Saying
                        </h2>
                    </div>

                    <div className="lg:col-span-6 flex lg:justify-end">
                        <p className="text-[#55575B] text-[15px] sm:text-[15px]/[28px] font-normal max-w-lg">
                            At ByteSpace, our vibrant community of learners and
                            creators is at the heart of what we do. Hear
                            directly from those who have experienced the
                            transformative journey of learning and creating on
                            our platform. Explore testimonials that reflect the
                            diverse perspectives of enthusiastic learners and
                            accomplished creators.
                        </p>
                    </div>
                </div>

                <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[28px] sm:rounded-4xl p-7 sm:p-8 lg:p-9 border border-[#EFEFF1] shadow-[0_6px_28px_rgba(0,0,0,0.035)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-fit"
                        >
                            <div>
                                <div className="relative w-15 h-15 sm:w-15.5 sm:h-15.5 rounded-full overflow-hidden shrink-0">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        fill
                                        sizes="62px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-6">
                                    <h3 className="font-poppins font-semibold text-[18px] sm:text-[19px] text-[#111111] leading-tight">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1.5 text-[14px] font-normal text-[#003BE2] leading-none">
                                        {item.role}
                                    </p>
                                </div>
                                <p className="mt-6 sm:mt-7 text-[#52525B] text-[16.5px]/[28px] font-normal">
                                    &quot;{item.quote}&quot;
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
