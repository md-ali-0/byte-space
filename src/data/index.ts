import categoriesData from "./categories.json";
import courseDetailsJson from "./course-details.json";
import coursesDataJson from "./courses.json";
import creatorDataJson from "./creator.json";
import testimonialsData from "./testimonials.json";
import { Course, CourseDetails, CreatorProfile } from "@/types/course";

export const allCoursesData: Course[] = coursesDataJson as Course[];
export const coursesData: Course[] = allCoursesData.slice(0, 6);
export const pageOneCoursesData: Course[] = allCoursesData.slice(0, 18);
export const coursePageCategories: string[] = categoriesData;
export const testimonials = testimonialsData;
export const defaultCourseDetails: CourseDetails = courseDetailsJson as CourseDetails;
export const defaultCreatorProfile: CreatorProfile = creatorDataJson as CreatorProfile;

export const defaultStudentAvatars = [
    "/avatars/avatar-2.png",
    "/avatars/student-2.jpg",
    "/avatars/testimonial-1.png",
    "/avatars/student-4.jpg",
];

export const showcaseStudentAvatars = [
    "/avatars/avatar-2.png",
    "/avatars/student-2.jpg",
    "/avatars/testimonial-1.png",
    "/avatars/student-4.jpg",
];

export const categoryRows = [
    [
        "Featured",
        "Music",
        "Drawing & Painting",
        "Marketing",
        "Animation",
        "Social Media",
    ],
    [
        "Digital Illustration",
        "UI/UX Design",
        "Film & Video",
        "Creative Writing",
    ],
    ["Crafts", "Gaming", "Graphic Design", "Freelance & Entrepreneurship"],
];

// Helper functions using default fetch
export async function fetchCourses(): Promise<Course[]> {
    const res = await fetch("/data/courses.json");
    if (!res.ok) {
        throw new Error("Failed to fetch courses data");
    }
    return res.json();
}

export async function fetchCategories(): Promise<string[]> {
    const res = await fetch("/data/categories.json");
    if (!res.ok) {
        throw new Error("Failed to fetch categories data");
    }
    return res.json();
}

export async function fetchTestimonials() {
    const res = await fetch("/data/testimonials.json");
    if (!res.ok) {
        throw new Error("Failed to fetch testimonials data");
    }
    return res.json();
}

export async function fetchCourseDetails(): Promise<CourseDetails> {
    try {
        const res = await fetch("/data/course-details.json");
        if (res.ok) {
            return await res.json();
        }
    } catch {
        // Fallback to defaultCourseDetails if fetch fails
    }
    return defaultCourseDetails;
}
