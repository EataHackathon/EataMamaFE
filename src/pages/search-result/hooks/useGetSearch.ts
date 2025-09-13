import { useInfiniteQuery } from '@tanstack/react-query';
import { getSearchResults } from '@/api';

export const useGetSearch = (query: string, type: string) => {
  return useInfiniteQuery({
    queryKey: ['searchResults', query, type],
    queryFn: ({ pageParam = 0 }) => getSearchResults(query, type, pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.data.last ? undefined : lastPage.data.number + 1,
    initialPageParam: 0,
  });
};
