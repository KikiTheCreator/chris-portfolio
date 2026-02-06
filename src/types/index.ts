export interface Author {
  name: string;
  username: string;
  profilePicture: string;
  isVerified: boolean;
}

export interface Engagement {
  replies: number;
  reposts: number;
  likes: number;
  views: number;
}

export interface Post {
  id: string;
  author: Author;
  content: string;
  timestamp: Date;
  engagement: Engagement;
  images?: string[];
}

export interface ProfileData {
  name: string;
  username: string;
  bio: string;
  profilePicture: string;
  coverImage: string;
  isVerified: boolean;
  joinDate: string;
  followingCount: number;
  followersCount: number;
}
