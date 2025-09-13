import { postAIIngredient } from '@/api';
import { useQuery } from '@tanstack/react-query';

export type IngredientRecommendation = {
  title: string;
  summary: string;
  whyGood: string[];
};

// 원재료 아이템
export type IngredientItem = {
  ingredientId: number;
  ingredientName: string;
  gram: number;
  ingredientKcal: number;
  carbo: number;
  protein: number;
  fat: number;
  dietaryFiber: number;
};

// AI 분석 결과
export type AIIngredientAnalysis = {
  risk: 'GOOD' | 'OK' | 'CAUTION'; // 위험도
  recommendations: IngredientRecommendation[];
};

// 최종 응답 타입
export type PostAIIngredientResult = {
  data: {
    type: 'INGREDIENT';
    item: IngredientItem;
    ai: AIIngredientAnalysis;
  };
  status: 'SUCCESS' | 'FAIL';
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
};

type PostAIIngredientParams = {
  data: { ingredientName: string };
};

export const usePostAIIngredient = ({ data }: PostAIIngredientParams) => {
  const { data: myData, isPending } = useQuery<PostAIIngredientResult>({
    queryKey: ['aiIngredient', data.ingredientName],
    queryFn: () => postAIIngredient({ data }),
  });
  return { myData, isPending };
};
