import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

export type Sort = {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
};

export type SearchItem = {
  id: number;
  name: string;
  kcal: number;
  gram: number;
  type: 'FOOD' | 'INGREDIENT';
};

export type Pageable = {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
  sort: Sort[];
};

export type SearchContent = {
  first: boolean;
  last: boolean;
  size: number;
  number: number;
  content: SearchItem[];
  numberOfElements: number;
  empty: boolean;
  pageable: Pageable;
};

export type SearchResponse = {
  data: SearchContent;
  status: string;
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
};

export const getSearchResults = async (
  query: string,
  type: string,
): Promise<SearchResponse> => {
  try {
    const response = await axiosInstance.get<SearchResponse>(API_PATHS.SEARCH, {
      params: { name: query, type },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};
