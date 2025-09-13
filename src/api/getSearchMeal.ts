import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

export interface Sort {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
}

// 페이징 정보
export interface Pageable {
  offset: number;
  sort: Sort[];
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
}

// 음식 아이템
export interface Food {
  id: number;
  name: string;
  kcal: number;
  gram: number;
  carbo: number;
  protein: number;
  fat: number;
  dietaryFiber: number;
}

// 검색 결과 데이터
export interface SearchMealData {
  size: number;
  content: Food[];
  number: number;
  sort: Sort[];
  pageable: Pageable;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

// 최종 API 응답 타입
export interface SearchMealResponse {
  data: SearchMealData;
  status: string; // 'SUCCESS' | 'FAIL' 등
  serverDateTime: string; // ISO8601
  errorCode: string | null;
  errorMessage: string | null;
}
export const getSearchMealResults = async (
  query?: string,
): Promise<SearchMealResponse> => {
  try {
    const params: Record<string, string> = {};
    if (query && query.trim() !== '') {
      params.name = query;
    }

    const response = await axiosInstance.get<SearchMealResponse>(
      API_PATHS.SEARCH_MEAL,
      { params },
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};
