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
        <section className="relative w-full overflow-hidden bg-white select-none py-18 sm:py-22 lg:py-28">
            <div
                className="absolute inset-0 max-w-[1440px] mx-auto pointer-events-none"
                aria-hidden="true"
            >
                <div
                    className="absolute top-[20px] right-[-40px] lg:right-[20px] w-[560px] sm:w-[640px] h-[560px] sm:h-[640px] rounded-full blur-[95px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(212, 251, 32, 0.55) 0%, rgba(212, 251, 32, 0.20) 45%, transparent 70%)",
                    }}
                />

                <div
                    className="absolute bottom-[-60px] left-[-40px] lg:left-[10px] w-[540px] sm:w-[600px] h-[540px] sm:h-[600px] rounded-full blur-[95px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.08) 45%, transparent 70%)",
                    }}
                />
            </div>

            <div className="container-page relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-6 max-w-[500px]">
                        <h2 className="font-poppins font-semibold text-[#111111] text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.2] tracking-[-0.02em]">
                            Discover What Our <br className="hidden sm:inline" />
                            Community Is Saying
                        </h2>
                    </div>

                    <div className="lg:col-span-6 flex lg:justify-end">
                        <p className="text-[#55575B] text-[13.5px] sm:text-[14.5px] lg:text-[15px] leading-[160%] font-normal max-w-[465px]">
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

                <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[28px] sm:rounded-[32px] p-6.5 sm:p-7.5 md:p-8 border border-[#E5E6E8]/70 shadow-[0_10px_32px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
                        >
                            <div>
                                <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden shadow-xs">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="mt-5.5">
                                    <h3 className="font-poppins font-semibold text-[17px] sm:text-[18px] text-[#111111] leading-snug">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-[13px] sm:text-[14px] font-normal text-[#003BE2]">
                                        {item.role}
                                    </p>
                                </div>

                                <p className="mt-5 sm:mt-6 text-[#55575B] text-[13.5px] sm:text-[14px] leading-[165%] font-normal">
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
