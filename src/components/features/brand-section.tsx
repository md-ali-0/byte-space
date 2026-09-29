import Image from "next/image";

const brands = [
    {
        name: "Logoipsum Wave",
        src: "/brands/brand1.png",
        width: 334,
        height: 82,
    },
    {
        name: "Logoipsum Sunburst",
        src: "/brands/brand2.png",
        width: 336,
        height: 82,
    },
    {
        name: "Logoipsum Lightning",
        src: "/brands/brand3.png",
        width: 340,
        height: 82,
    },
    {
        name: "Logoipsum Clover",
        src: "/brands/brand4.png",
        width: 340,
        height: 82,
    },
    {
        name: "Logoipsum Ripple",
        src: "/brands/brand5.png",
        width: 338,
        height: 84,
    },
];

export default function BrandSection() {
    return (
        <section
            className="w-full bg-[#F5F5F6] py-12 sm:py-16 lg:pt-20.25 lg:pb-20 select-none"
            aria-label="Trusted brands"
        >
            <div className="w-full container-page mx-auto px-6 xl:px-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between gap-8 sm:gap-10 lg:gap-0">
                    {brands.map((brand, index) => (
                        <div
                            key={brand.src}
                            className={`flex items-center justify-center transition-opacity duration-200 hover:opacity-70 ${index === brands.length - 1
                                    ? "col-span-2 sm:col-span-1"
                                    : ""
                            }`}
                        >
                            <Image
                                src={brand.src}
                                alt={brand.name}
                                width={brand.width}
                                height={brand.height}
                                className="h-7 sm:h-8 md:h-10 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
