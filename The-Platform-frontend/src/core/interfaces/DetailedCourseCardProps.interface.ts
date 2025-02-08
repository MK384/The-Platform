export interface DetailedCourseCardProps {
    title: string;
    category:string;
    instructor: string;
    instructorImageUrl: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviewCount: number;
    enrolledStudents: number;
    difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: number; // e.g., "10h 30m"
    imageUrl: string;
  }
  