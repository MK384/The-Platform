export interface DetailedCourseCard {
    title: string;
    category:string;
    instructor: string;
    instructorImageUrl: string;
    price: string;
    oldPrice?: string;
    rating: string;
    reviewCount: string;
    enrolledStudents: string;
    difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: number; // e.g., "10h 30m"
    imageUrl: string;
  }
  