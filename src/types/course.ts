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
