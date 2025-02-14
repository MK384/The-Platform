export interface Comment {
    id: number;
    userName: string;
    userImage: string;
    time: string;
    text: string;
    isAdmin?: boolean;
    replies?: Comment[];
  }