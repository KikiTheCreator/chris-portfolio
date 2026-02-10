import QueryProvider from './QueryProvider';
import Feed from './Feed';
import type { Post as PostType } from '../types';

interface Props {
  initialPosts: PostType[];
  allPosts: PostType[];
  batchSize?: number;
}

/**
 * Wrapper component that provides QueryClient context to the Feed component.
 * This ensures TanStack Query works correctly in the client-side environment.
 */
export default function FeedWithProvider({ initialPosts, allPosts, batchSize }: Props) {
  return (
    <QueryProvider>
      <Feed 
        initialPosts={initialPosts}
        allPosts={allPosts}
        batchSize={batchSize}
      />
    </QueryProvider>
  );
}
