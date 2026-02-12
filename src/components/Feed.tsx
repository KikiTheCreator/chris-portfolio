import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { Post as PostType } from '../types';
import Post from './Post';

interface Props {
  initialPosts: PostType[];
  allPosts: PostType[];
  batchSize?: number;
}

/**
 * Feed component that displays an infinite scrolling list of posts.
 * 
 * Uses TanStack Query's useInfiniteQuery hook for state management and data fetching.
 * Implements prefetching behavior to load posts before they become visible, creating
 * a seamless scrolling experience.
 * 
 * @param initialPosts - Posts to display on initial render (used for SSR/initial data)
 * @param allPosts - Complete dataset for pagination simulation
 * @param batchSize - Number of posts to load per batch (default: 10)
 */
export default function Feed({ initialPosts, allPosts, batchSize = 10 }: Props) {
  const observerTarget = useRef<HTMLDivElement>(null);

  /**
   * TanStack Query infinite query hook for managing paginated post data.
   * 
   * Configuration:
   * - queryKey: Unique identifier for this query in the cache
   * - queryFn: Async function that fetches a page of posts given a page parameter
   * - getNextPageParam: Computes the next page cursor from the last loaded page
   * - initialPageParam: Starting page index (0)
   * - initialData: Hydrates the query with initial posts from props (SSR support)
   */
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ['posts', 'infinite'],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      // Simulate network delay (500ms) for realistic loading behavior
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Calculate slice indices for this page
      const start = pageParam * batchSize;
      const end = start + batchSize;
      
      // Slice the posts for this page from the complete dataset
      const pagePosts = allPosts.slice(start, end);
      
      // Return page data with posts and next cursor
      // nextCursor is undefined if we've reached the end of the dataset
      return {
        posts: pagePosts,
        nextCursor: end < allPosts.length ? pageParam + 1 : undefined,
      };
    },
    /**
     * Compute the next page parameter from the last loaded page.
     * Returns undefined when no more pages exist, which sets hasNextPage to false.
     */
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
    initialData: {
      pages: [{ 
        posts: initialPosts, 
        nextCursor: initialPosts.length < allPosts.length ? 1 : undefined 
      }],
      pageParams: [0],
    },
  });

  // Flatten all pages into a single posts array for rendering
  const posts = data?.pages.flatMap(page => page.posts) ?? [];

  /**
   * Intersection Observer setup for triggering prefetch loads.
   * 
   * The observer monitors the observerTarget element and triggers fetchNextPage()
   * when it enters the viewport (with rootMargin buffer). This enables prefetching
   * posts before they become visible to the user.
   * 
   * Prefetch Distance (rootMargin: 800px):
   * - The observer fires when the target element is 800px below the viewport bottom
   * - This creates a buffer zone where posts load invisibly in the background
   * - With typical scrolling speeds, posts complete loading before becoming visible
   * - Result: Users rarely see the loading indicator during normal scrolling
   * - The 800px distance was chosen to balance prefetch timing with network latency
   * 
   * Prefetch Timing:
   * - Early trigger: Posts start loading well before users reach the end
   * - Network delay: 500ms simulated delay gives time for smooth loading
   * - Fast scrolling: If users scroll faster than prefetch, loader appears as fallback
   * - Sequential loads: TanStack Query handles multiple rapid triggers gracefully
   * 
   * Observer Callback Logic:
   * - entries[0].isIntersecting: True when target enters the 800px prefetch zone
   * - hasNextPage: Computed by TanStack Query from last page's nextCursor
   * - isFetchingNextPage: Prevents duplicate fetches during active load
   * - fetchNextPage(): TanStack Query function that loads the next page
   * 
   * Guards:
   * - hasNextPage: Only fetch if more pages are available (prevents unnecessary requests)
   * - isFetchingNextPage: Prevent concurrent fetches (TanStack Query also deduplicates)
   * 
   * Edge Cases:
   * - Fast scrolling: If user scrolls past 800px buffer before load completes, 
   *   the loader becomes visible (acceptable fallback behavior)
   * - End of feed: When hasNextPage becomes false, observer stops triggering
   * - Multiple triggers: TanStack Query automatically deduplicates concurrent requests
   * 
   * Cleanup: Observer disconnects on unmount to prevent memory leaks
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Trigger fetch when observer target intersects and conditions are met
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { 
        // 800px rootMargin creates prefetch buffer zone for seamless scrolling
        // Posts load before becoming visible, minimizing loader visibility
        rootMargin: '800px' 
      }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    // Cleanup: Disconnect observer when component unmounts or dependencies change
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div>
      <div role="feed" aria-label="Posts feed">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      
      {/**
       * Observer target and loader/end-of-feed UI container.
       * 
       * This div serves as the Intersection Observer target element. It's positioned
       * at the end of the feed, after all rendered posts. The observer monitors this
       * element to trigger prefetch loads.
       * 
       * Loader Visibility Logic:
       * 
       * The loader (spinning indicator) displays ONLY when isFetchingNextPage is true.
       * This state indicates an active fetch operation is in progress.
       * 
       * Key Behavior:
       * - During prefetch: When posts load within the 800px buffer zone (before visible),
       *   isFetchingNextPage is true BUT the loader may not be visible to users because
       *   this element is still below the viewport. This is the desired behavior - posts
       *   load invisibly in the background.
       * 
       * - During visible fetch: If users scroll fast enough to reach this element while
       *   isFetchingNextPage is true, the loader becomes visible. This is an acceptable
       *   fallback for fast scrolling scenarios.
       * 
       * - Not fetching: When isFetchingNextPage is false, the loader is hidden. This
       *   prevents showing the loader during idle states or after loads complete.
       * 
       * Why isFetchingNextPage (not isLoading):
       * - isFetchingNextPage: Specific to fetching the NEXT page in infinite scroll
       * - isLoading: Would be true during initial load, which we don't want to show here
       * - This distinction ensures the loader only appears for pagination, not initial load
       * 
       * Prefetch Success Scenario (typical):
       * 1. User scrolls → Observer target enters 800px prefetch zone
       * 2. isFetchingNextPage becomes true → Loader renders but is below viewport
       * 3. Posts load (500ms delay) → New posts append to feed
       * 4. isFetchingNextPage becomes false → Loader hidden
       * 5. User continues scrolling → Sees new posts, never saw loader
       * 
       * Fast Scroll Scenario (fallback):
       * 1. User scrolls rapidly → Observer target enters prefetch zone
       * 2. isFetchingNextPage becomes true → Loader renders below viewport
       * 3. User scrolls past 800px buffer → Observer target becomes visible
       * 4. Loader is now visible to user (acceptable fallback)
       * 5. Posts load → Loader disappears, new posts appear
       */}
      <div ref={observerTarget} className="py-4">
        {isFetchingNextPage && (
          <div className="flex justify-center items-center py-8" role="status" aria-live="polite">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            <span className="sr-only">Loading more posts...</span>
          </div>
        )}
        
        {isError && (
          <div 
            className="text-center py-8 text-red-600" 
            role="alert" 
            aria-live="assertive"
            aria-atomic="true"
          >
            <p className="text-lg font-medium">Failed to load posts</p>
            <p className="text-sm mt-1 text-red-500">
              {error instanceof Error ? error.message : 'An error occurred while loading posts'}
            </p>
            <button
              onClick={() => fetchNextPage()}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Retry loading posts"
            >
              Retry
            </button>
          </div>
        )}
        
        {!hasNextPage && !isFetchingNextPage && !isError && (
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
