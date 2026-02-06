import type { Post } from '../types';

/**
 * Mock posts data for Twitter Profile Clone
 * Contains 50 posts with realistic content, timestamps, and engagement metrics
 */
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
  {
    id: '15',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Learning in public is scary but so rewarding. Don\'t be afraid to share your journey!',
    timestamp: new Date('2024-01-01T10:00:00'),
    engagement: {
      replies: 34,
      reposts: 78,
      likes: 567,
      views: 4100
    },
    images: ['/avatar.jpg']
  },
  {
    id: '16',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Web performance matters. Every millisecond counts when it comes to user experience.',
    timestamp: new Date('2023-12-31T16:20:00'),
    engagement: {
      replies: 19,
      reposts: 56,
      likes: 412,
      views: 2900
    }
  },
  {
    id: '17',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Just finished reading "Clean Code". My perspective on software development has completely changed.',
    timestamp: new Date('2023-12-30T12:45:00'),
    engagement: {
      replies: 41,
      reposts: 67,
      likes: 489,
      views: 3500
    }
  },
  {
    id: '18',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Responsive design isn\'t just about breakpoints. It\'s about creating experiences that work everywhere.',
    timestamp: new Date('2023-12-29T09:30:00'),
    engagement: {
      replies: 12,
      reposts: 45,
      likes: 334,
      views: 2400
    }
  },
  {
    id: '19',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Testing isn\'t about finding bugs. It\'s about building confidence in your code.',
    timestamp: new Date('2023-12-28T15:15:00'),
    engagement: {
      replies: 23,
      reposts: 89,
      likes: 612,
      views: 4300
    }
  },
  {
    id: '20',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'The web platform is amazing. We have so many powerful APIs available now. Time to use them!',
    timestamp: new Date('2023-12-27T11:00:00'),
    engagement: {
      replies: 15,
      reposts: 52,
      likes: 378,
      views: 2700
    },
    images: ['/banner.jpg']
  },
  {
    id: '21',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Pair programming is underrated. Two heads really are better than one when solving complex problems.',
    timestamp: new Date('2023-12-26T14:40:00'),
    engagement: {
      replies: 18,
      reposts: 43,
      likes: 289,
      views: 2100
    }
  },
  {
    id: '22',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'CSS animations can make or break a user experience. Subtle is usually better than flashy.',
    timestamp: new Date('2023-12-25T10:20:00'),
    engagement: {
      replies: 9,
      reposts: 34,
      likes: 223,
      views: 1800
    }
  },
  {
    id: '23',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Developer tools are getting better every year. Chrome DevTools is basically a superpower now.',
    timestamp: new Date('2023-12-24T16:55:00'),
    engagement: {
      replies: 27,
      reposts: 61,
      likes: 445,
      views: 3200
    }
  },
  {
    id: '24',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Don\'t chase the latest framework. Master the fundamentals first. JavaScript, HTML, CSS - they\'re not going anywhere.',
    timestamp: new Date('2023-12-23T13:30:00'),
    engagement: {
      replies: 56,
      reposts: 134,
      likes: 923,
      views: 6200
    },
    images: ['/avatar.jpg']
  },
  {
    id: '25',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Code comments should explain WHY, not WHAT. The code itself should explain what it does.',
    timestamp: new Date('2023-12-22T09:45:00'),
    engagement: {
      replies: 31,
      reposts: 78,
      likes: 567,
      views: 4100
    }
  },
  {
    id: '26',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Semantic HTML is the foundation of accessible web development. Use the right element for the job!',
    timestamp: new Date('2023-12-21T15:10:00'),
    engagement: {
      replies: 14,
      reposts: 49,
      likes: 356,
      views: 2600
    }
  },
  {
    id: '27',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Version control is a time machine for your code. Commit early, commit often!',
    timestamp: new Date('2023-12-20T11:25:00'),
    engagement: {
      replies: 8,
      reposts: 42,
      likes: 278,
      views: 2000
    }
  },
  {
    id: '28',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'The best developers are the ones who can explain complex concepts in simple terms.',
    timestamp: new Date('2023-12-19T14:50:00'),
    engagement: {
      replies: 22,
      reposts: 67,
      likes: 489,
      views: 3500
    }
  },
  {
    id: '29',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Mobile-first design isn\'t just a buzzword. It forces you to prioritize what really matters.',
    timestamp: new Date('2023-12-18T10:15:00'),
    engagement: {
      replies: 17,
      reposts: 54,
      likes: 401,
      views: 2900
    }
  },
  {
    id: '30',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Error messages should be helpful, not cryptic. Your users will appreciate the clarity!',
    timestamp: new Date('2023-12-17T16:30:00'),
    engagement: {
      replies: 11,
      reposts: 38,
      likes: 267,
      views: 1900
    }
  },
  {
    id: '31',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Progressive enhancement > graceful degradation. Build a solid foundation first, then enhance.',
    timestamp: new Date('2023-12-16T12:40:00'),
    engagement: {
      replies: 19,
      reposts: 56,
      likes: 423,
      views: 3100
    }
  },
  {
    id: '32',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Design systems are game-changers for consistency and productivity. Invest in them early!',
    timestamp: new Date('2023-12-15T09:20:00'),
    engagement: {
      replies: 24,
      reposts: 71,
      likes: 512,
      views: 3700
    }
  },
  {
    id: '33',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Performance budgets keep your site fast. Set them early and stick to them!',
    timestamp: new Date('2023-12-14T15:35:00'),
    engagement: {
      replies: 13,
      reposts: 47,
      likes: 334,
      views: 2500
    }
  },
  {
    id: '34',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Code reviews are learning opportunities, not criticism sessions. Approach them with curiosity!',
    timestamp: new Date('2023-12-13T11:50:00'),
    engagement: {
      replies: 29,
      reposts: 83,
      likes: 601,
      views: 4300
    }
  },
  {
    id: '35',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'The console is your friend. console.log() has saved me countless times during debugging.',
    timestamp: new Date('2023-12-12T14:15:00'),
    engagement: {
      replies: 38,
      reposts: 92,
      likes: 678,
      views: 4900
    }
  },
  {
    id: '36',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Web standards matter. They ensure the web remains open and accessible to everyone.',
    timestamp: new Date('2023-12-11T10:30:00'),
    engagement: {
      replies: 16,
      reposts: 59,
      likes: 445,
      views: 3200
    }
  },
  {
    id: '37',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Naming things is hard. Take the time to choose clear, descriptive names. Your team will thank you.',
    timestamp: new Date('2023-12-10T16:45:00'),
    engagement: {
      replies: 42,
      reposts: 98,
      likes: 734,
      views: 5100
    }
  },
  {
    id: '38',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Dark mode isn\'t just trendy - it\'s better for accessibility and battery life. Implement it!',
    timestamp: new Date('2023-12-09T13:20:00'),
    engagement: {
      replies: 21,
      reposts: 64,
      likes: 489,
      views: 3600
    }
  },
  {
    id: '39',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Continuous learning is the key to staying relevant in tech. Never stop being curious!',
    timestamp: new Date('2023-12-08T09:40:00'),
    engagement: {
      replies: 27,
      reposts: 76,
      likes: 556,
      views: 4000
    }
  },
  {
    id: '40',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Browser compatibility is still important. Don\'t forget to test in different browsers!',
    timestamp: new Date('2023-12-07T15:55:00'),
    engagement: {
      replies: 14,
      reposts: 51,
      likes: 378,
      views: 2800
    }
  },
  {
    id: '41',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'API design is user experience design. Make your APIs intuitive and well-documented.',
    timestamp: new Date('2023-12-06T12:10:00'),
    engagement: {
      replies: 18,
      reposts: 62,
      likes: 467,
      views: 3400
    }
  },
  {
    id: '42',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Security isn\'t an afterthought. Build it into your development process from day one.',
    timestamp: new Date('2023-12-05T10:25:00'),
    engagement: {
      replies: 33,
      reposts: 87,
      likes: 623,
      views: 4500
    }
  },
  {
    id: '43',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Keyboard shortcuts make you more productive. Learn them, use them, love them!',
    timestamp: new Date('2023-12-04T14:40:00'),
    engagement: {
      replies: 25,
      reposts: 69,
      likes: 501,
      views: 3700
    }
  },
  {
    id: '44',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Open source contributions are a great way to learn and give back to the community. Start small!',
    timestamp: new Date('2023-12-03T11:15:00'),
    engagement: {
      replies: 19,
      reposts: 73,
      likes: 534,
      views: 3900
    }
  },
  {
    id: '45',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Form validation should be helpful, not frustrating. Guide users to success!',
    timestamp: new Date('2023-12-02T16:30:00'),
    engagement: {
      replies: 12,
      reposts: 44,
      likes: 312,
      views: 2300
    }
  },
  {
    id: '46',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Build tools are powerful, but don\'t let them become a distraction. Focus on shipping!',
    timestamp: new Date('2023-12-01T13:45:00'),
    engagement: {
      replies: 16,
      reposts: 58,
      likes: 423,
      views: 3100
    }
  },
  {
    id: '47',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'User feedback is gold. Listen to it, learn from it, and iterate based on it.',
    timestamp: new Date('2023-11-30T10:00:00'),
    engagement: {
      replies: 22,
      reposts: 66,
      likes: 489,
      views: 3600
    }
  },
  {
    id: '48',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Loading states matter. Don\'t leave users wondering if something is happening!',
    timestamp: new Date('2023-11-29T15:20:00'),
    engagement: {
      replies: 14,
      reposts: 52,
      likes: 367,
      views: 2700
    }
  },
  {
    id: '49',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'Mentorship goes both ways. Teaching others helps you learn and grow too.',
    timestamp: new Date('2023-11-28T12:35:00'),
    engagement: {
      replies: 28,
      reposts: 81,
      likes: 612,
      views: 4400
    }
  },
  {
    id: '50',
    author: {
      name: 'Kiki',
      username: 'mfChrus',
      profilePicture: '/avatar.jpg',
      isVerified: true
    },
    content: 'The web is for everyone. Let\'s build it that way! 🌐✨',
    timestamp: new Date('2023-11-27T09:50:00'),
    engagement: {
      replies: 45,
      reposts: 112,
      likes: 823,
      views: 5800
    }
  }
];
