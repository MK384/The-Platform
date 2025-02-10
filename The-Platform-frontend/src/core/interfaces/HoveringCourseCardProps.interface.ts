export interface DetailedCourseCardProps {
    title: string;
    category:string;
    instructor: string;
    instructorImageUrl: string;
    price: number;
    oldPrice?: number;
    discount?: boolean;
    rating: number;
    reviewCount: number;
    enrolledStudents: number;
    difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: number; 
    learningPoints: string[];
  }
  