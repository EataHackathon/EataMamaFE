import { getMeal } from '@/api';
import { useQuery } from '@tanstack/react-query';

// 개별 음식 섭취 정보
export interface Intake {
  intakeId: number;
  intakeName: string;
  intakeKcal: number;
}

// 한 끼 식사 정보
export interface Meal {
  mealId: number;
  mealType: 'BREAKFAST' | 'LUNCH' | 'DINNER';
  mealName: string;
  mealAdvice: string;
  intakes: Intake[];
}

// 하루 기록 정보
export interface DayLog {
  dayLogId: number;
  logDate: string; // ISO 날짜 문자열 (예: "2025-09-03")
  dailyAdvice: string;
  meals: Meal[];
}

// 전체 API 응답 타입
export interface MealResponse {
  data: DayLog;
  status: 'SUCCESS' | 'FAILURE';
  serverDateTime: string; // ISO datetime (예: "2025-09-03T14:10:00")
  errorCode: string | null;
  errorMessage: string | null;
}

type UseGetMealParams = {
  logDate: string;
};

export const useGetMeal = ({ logDate }: UseGetMealParams) => {
  const { data: mealData, isPending } = useQuery<MealResponse>({
    queryKey: ['meal', logDate],
    queryFn: () => getMeal({ logDate }),
  });
  return { mealData, isPending };
};
