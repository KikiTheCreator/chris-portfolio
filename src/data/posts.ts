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
    content: 'Just shipped a new feature using Astro! The performance is incredible. Static site generation + partial hydration = 🚀',
    timestamp: new Date('2024-01-15T10:30:00'),
    engagement: {
      replies: 12,
      reposts: 45,
      likes: 234,
      views: 1500
    },
    images: ['/banner.jpg']
  },
  {
    id: '2',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Working on implementing infinite scroll with Intersection Observer API. Much more performant than scroll event listeners!',
    timestamp: new Date('2024-01-14T15:45:00'),
    engagement: {
      replies: 8,
      reposts: 23,
      likes: 156,
      views: 980
    }
  },
  {
    id: '3',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'TypeScript tip: Use discriminated unions for better type safety. Your future self will thank you! 💡',
    timestamp: new Date('2024-01-13T09:20:00'),
    engagement: {
      replies: 15,
      reposts: 67,
      likes: 389,
      views: 2100
    }
  },
  {
    id: '4',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Debugging CSS for 2 hours only to realize I had a typo in the class name. Classic developer moment 😅',
    timestamp: new Date('2024-01-12T18:30:00'),
    engagement: {
      replies: 24,
      reposts: 12,
      likes: 445,
      views: 3200
    }
  },
  {
    id: '5',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Hot take: Writing good documentation is just as important as writing good code. Maybe even more important.',
    timestamp: new Date('2024-01-11T14:15:00'),
    engagement: {
      replies: 45,
      reposts: 89,
      likes: 678,
      views: 4500
    },
    images: ['/avatar.jpg']
  },
  {
    id: '6',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Finally got around to learning property-based testing. Mind = blown 🤯 Why didn\'t I start this sooner?',
    timestamp: new Date('2024-01-10T11:00:00'),
    engagement: {
      replies: 18,
      reposts: 34,
      likes: 267,
      views: 1800
    }
  },
  {
    id: '7',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Tailwind CSS has completely changed how I think about styling. Utility-first FTW!',
    timestamp: new Date('2024-01-09T16:45:00'),
    engagement: {
      replies: 31,
      reposts: 56,
      likes: 423,
      views: 2900
    }
  },
  {
    id: '8',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Remember: Premature optimization is the root of all evil. Make it work, make it right, then make it fast.',
    timestamp: new Date('2024-01-08T10:30:00'),
    engagement: {
      replies: 9,
      reposts: 78,
      likes: 512,
      views: 3400
    }
  },
  {
    id: '9',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Just discovered the power of CSS Grid. Where has this been all my life? Flexbox + Grid = unstoppable combo',
    timestamp: new Date('2024-01-07T13:20:00'),
    engagement: {
      replies: 14,
      reposts: 41,
      likes: 298,
      views: 2100
    }
  },
  {
    id: '10',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Accessibility isn\'t optional. It\'s a fundamental part of web development. Let\'s build for everyone! ♿️',
    timestamp: new Date('2024-01-06T09:15:00'),
    engagement: {
      replies: 52,
      reposts: 123,
      likes: 891,
      views: 5600
    },
    images: ['/banner.jpg']
  },
  {
    id: '11',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Code review tip: Always assume positive intent. We\'re all learning and growing together.',
    timestamp: new Date('2024-01-05T15:40:00'),
    engagement: {
      replies: 21,
      reposts: 67,
      likes: 445,
      views: 3100
    }
  },
  {
    id: '12',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'The best code is code you don\'t have to write. Sometimes the simplest solution is the best solution.',
    timestamp: new Date('2024-01-04T11:25:00'),
    engagement: {
      replies: 16,
      reposts: 89,
      likes: 623,
      views: 4200
    }
  },
  {
    id: '13',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Spent the morning refactoring. No new features, but the codebase is so much cleaner now. Worth it!',
    timestamp: new Date('2024-01-03T08:50:00'),
    engagement: {
      replies: 7,
      reposts: 34,
      likes: 189,
      views: 1400
    }
  },
  {
    id: '14',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Git tip: Write commit messages like you\'re explaining to your future self. You\'ll thank yourself later!',
    timestamp: new Date('2024-01-02T14:30:00'),
    engagement: {
      replies: 28,
      reposts: 91,
      likes: 534,
      views: 3800
    }
  },
];
