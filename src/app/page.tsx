import BrandSection from "@/components/features/brand-section";
import CoursesSection from "@/components/features/courses-section";
import HeroSection from "@/components/features/hero-section";

export default function Home() {
    return (
        <main className="flex-1 w-full">
            <HeroSection />
            <BrandSection />
            <CoursesSection />
        </main>
    );
}
