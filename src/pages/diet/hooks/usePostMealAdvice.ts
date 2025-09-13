import { postMealAdvice } from '@/api';
import { useMutation } from '@tanstack/react-query';

export const usePostMealAdvice = () => {
  const { mutate: postMealAdviceMutate, isPending } = useMutation({
    mutationKey: [],
    mutationFn: (mealId: number) => postMealAdvice({ mealId }),
  });

  return { postMealAdviceMutate, isPending };
};
