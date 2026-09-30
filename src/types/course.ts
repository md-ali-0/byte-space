export interface Course {
    id: string;
    title: string;
    instructor: string;
    rating: number;
    lessons: number;
    duration: string;
    comments: number;
    level: string;
    price: number;
    priceType: string;
    image: string;
    category?: string;
    studentAvatars?: string[];
    studentCount?: string;
}

export interface CourseLesson {
    id: string;
    title: string;
    duration: string;
}

export interface CourseSneakPeak {
    id: number;
    image: string;
    title: string;
}

export interface CourseDetails {
    id: string;
    title: string;
    subtitle: string;
    instructor: string;
    instructorRole: string;
    instructorAvatar: string;
    instructorBio: string;
    level: string;
    rating: number;
    reviewsCount: number;
    studentCount: number;
    price: number;
    priceType: string;
    videoThumbnail: string;
    lessonsCount: string;
    sampleLessons: CourseLesson[];
    moreVideosText: string;
    enrollCardBlurb: string;
    courseIncludes: string[];
    description: string[];
    sneakPeaks: CourseSneakPeak[];
    keyPoints: string[];
}
