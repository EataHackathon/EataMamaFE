import { useInfiniteQuery } from '@tanstack/react-query';
import { getSearchResults, type SearchResponse } from '@/api';

export const useGetSearch = (query: string, type: string) => {
  return useInfiniteQuery<SearchResponse>({
    queryKey: ['searchResults', query, type],
    queryFn: () => getSearchResults(query, type),
    getNextPageParam: (lastPage) =>
      lastPage.data.last ? undefined : lastPage.data.number,
    initialPageParam: -1,
  });
};
