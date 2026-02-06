import { useState, useEffect, useRef } from 'react';
import type { Post as PostType } from '../types';
import Post from './Post';

interface Props {
  initialPosts: PostType[];
  allPosts: PostType[];
  batchSize?: number;
}

export default function Feed({ initialPosts, allPosts, batchSize = 10 }: Props) {
  const [posts, setPosts] = useState<PostType[]>(initialPosts);
  const [currentIndex, setCurrentIndex] = useState(initialPosts.length);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPosts.length < allPosts.length);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMorePosts();
        }
      },
      { rootMargin: '200px' }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, currentIndex]);

  const loadMorePosts = async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const nextBatch = allPosts.slice(currentIndex, currentIndex + batchSize);
    
    if (nextBatch.length > 0) {
      setPosts(prev => [...prev, ...nextBatch]);
      setCurrentIndex(prev => prev + nextBatch.length);
      
      if (currentIndex + nextBatch.length >= allPosts.length) {
        setHasMore(false);
      }
    } else {
      setHasMore(false);
    }
    
    setIsLoading(false);
  };

  return (
    <div>
      <div role="feed" aria-label="Posts feed">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      
      <div ref={observerTarget} className="py-4">
        {isLoading && (
          <div className="flex justify-center items-center py-8" role="status" aria-live="polite">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="sr-only">Loading more posts...</span>
          </div>
        )}
        
        {!hasMore && !isLoading && (
          <div 
            className="text-center py-8 text-gray-500" 
            role="status" 
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-lg font-medium">You are up to date</p>
            <p className="text-sm mt-1">You've seen all posts</p>
          </div>
        )}
      </div>
    </div>
  );
}
