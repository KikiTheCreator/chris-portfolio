import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

/**
 * QueryProvider component that wraps the app with TanStack Query's QueryClientProvider.
 * 
 * This component creates and manages a QueryClient instance with appropriate defaults
 * for the application. The QueryClient is created once per component instance using
 * useState to ensure it persists across re-renders.
 * 
 * Configuration:
 * - staleTime: 5 minutes - Data is considered fresh for 5 minutes before refetching
 * - cacheTime: 10 minutes - Unused data stays in cache for 10 minutes
 * - retry: 3 - Failed queries are retried up to 3 times
 * - refetchOnWindowFocus: false - Prevents automatic refetch when window regains focus
 */
export default function QueryProvider({ children }: Props) {
  // Create QueryClient instance once per component instance
  // Using useState ensures the client persists across re-renders
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Data is considered fresh for 5 minutes
            staleTime: 5 * 60 * 1000,
            // Unused data stays in cache for 10 minutes
            gcTime: 10 * 60 * 1000,
            // Retry failed queries up to 3 times
            retry: 3,
            // Don't refetch on window focus to avoid unnecessary requests
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
