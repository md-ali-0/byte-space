import CoursesPageContent from "@/components/features/courses/courses-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Courses - ByteSpace",
    description: "Discover life-changing courses and master new skills with ByteSpace.",
};

export default function CoursesPage() {
    return <CoursesPageContent />;
}
