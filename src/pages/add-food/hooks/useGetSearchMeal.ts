import { useInfiniteQuery } from '@tanstack/react-query';
import {
  getSearchMealResults,
  type SearchMealResponse,
} from '@/api/getSearchMeal';

export const useGetSearchMeal = (query: string) => {
  return useInfiniteQuery<SearchMealResponse>({
    queryKey: ['searchMealResults', query],
    queryFn: () => getSearchMealResults(query),
    getNextPageParam: (lastPage) =>
      lastPage.data.content.length ? undefined : lastPage.data.content[0].id,
    initialPageParam: -1,
  });
};
