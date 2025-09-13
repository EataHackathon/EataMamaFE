import { getAIFood } from '@/api';
import { useQuery } from '@tanstack/react-query';

// 각 성분 분석 결과
export type IngredientAnalysis = {
  name: string;
  rating: 'GOOD' | 'OK' | 'CAUTION'; // 서버에서 오는 값 제한
  reason: string;
};

// 음식 아이템
export type FoodItem = {
  foodId: number;
  foodName: string;
  gram: number;
  foodKcal: number;
  carbo: number;
  protein: number;
  fat: number;
  dietaryFiber: number;
};

// AI 분석 결과
export type AIFoodAnalysis = {
  risk: 'GOOD' | 'OK' | 'CAUTION'; // 예: 전체 위험도
  ingredientsAnalysis: IngredientAnalysis[];
  finalSummary: string;
};

// 최종 응답 타입
export type GetAIFoodResult = {
  type: 'FOOD' | 'INGREDIENT'; // 서버에서 두 가지 가능성
  item: FoodItem;
  ai: AIFoodAnalysis;
};

export type UseGetAIFoodParams = {
  data: { foodName: string };
};

export const useGetAIFood = ({ data }: UseGetAIFoodParams) => {
  const { data: myData, isPending } = useQuery<GetAIFoodResult>({
    queryKey: ['aiFood', data.foodName],
    queryFn: () => getAIFood({ data }),
  });
  return { myData, isPending };
};
