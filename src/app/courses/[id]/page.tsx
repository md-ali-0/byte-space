import CourseDetailsContent from "@/components/features/courses/course-details-content";
import { allCoursesData, defaultCourseDetails } from "@/data";
import { CourseDetails } from "@/types/course";
import type { Metadata } from "next";

interface CourseDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({
    params,
}: CourseDetailsPageProps): Promise<Metadata> {
    const { id } = await params;
    const matched = allCoursesData.find((c) => c.id === id);
    const title = matched
        ? `${matched.title} - ByteSpace`
        : "Build Digital Asset: A Comprehensive Guide - ByteSpace";
    const description =
        defaultCourseDetails.subtitle ||
        "Unlock the Power of Digital Creation with Expert Guidance.";

    return {
        title,
        description,
    };
}

export default async function CourseDetailsPage({
    params,
}: CourseDetailsPageProps) {
    const { id } = await params;
    const matched = allCoursesData.find((c) => c.id === id);

    let courseData: CourseDetails = defaultCourseDetails;

    if (matched && matched.id !== "2") {
        courseData = {
            ...defaultCourseDetails,
            id: matched.id,
            title: matched.title,
            instructor: matched.instructor,
            rating: matched.rating,
            level: matched.level,
            price: matched.price,
            priceType: matched.priceType,
        };
    }

    return <CourseDetailsContent course={courseData} />;
}
