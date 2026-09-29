import BrandSection from "@/components/features/brand-section";
import CoursesSection from "@/components/features/courses-section";
import CreatorCtaSection from "@/components/features/creator-cta-section";
import GrowthManageSection from "@/components/features/growth-manage-section";
import HeroSection from "@/components/features/hero-section";
import LearningPathsSection from "@/components/features/learning-paths-section";
import TestimonialsSection from "@/components/features/testimonials-section";

export default function Home() {
    return (
        <main className="flex-1 w-full">
            <HeroSection />
            <BrandSection />
            <CoursesSection />
            <LearningPathsSection />
            <GrowthManageSection />
            <CreatorCtaSection />
            <TestimonialsSection />
        </main>
    );
}
