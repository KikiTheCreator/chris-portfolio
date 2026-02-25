import type { Post } from '../types';

export const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: "Hi, I'm Chris. This is my little corner of the internet, and I want it to feel like my own, where I can share my things and projects. Luv to all.",
    timestamp: new Date('2026-02-17T17:37:00'),
    engagement: {
      replies: 0,
      reposts: 13,
      likes: 7,
      views: 700
    },
    images: ['/firstPost.jpg']
  },
  
];
