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

export interface CourseModuleItem {
    id: string;
    title: string;
    description: string;
}

export interface CourseLessonContent {
    exploreModulesTitle: string;
    exploreModulesDescription: string;
    lessonList: CourseModuleItem[];
    lessonContentTitle: string;
    lessonContentDescription: string;
    progressTrackingTitle: string;
    progressTrackingDescription: string;
    learningProgress: number;
}

export interface CourseReviewItem {
    id: string;
    userName: string;
    userRole: string;
    userAvatar: string;
    date: string;
    rating: number;
    comment: string;
}

export interface CourseRatingBreakdownRow {
    stars: number;
    percentage: number;
    count: number;
}

export interface CourseReviewsData {
    heading: string;
    description: string;
    averageRating: number;
    breakdown: CourseRatingBreakdownRow[];
    reviews: CourseReviewItem[];
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
    modulesData?: CourseLessonContent;
    reviewsData?: CourseReviewsData;
}
