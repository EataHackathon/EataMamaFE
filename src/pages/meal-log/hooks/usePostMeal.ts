import { postMeal } from '@/api/postMeal';
import { useMutation } from '@tanstack/react-query';

export const usePostMeal = () => {
  const { mutate: postMealMutate, isPending } = useMutation({
    mutationKey: [],
    mutationFn: postMeal,
  });

  return { postMealMutate, isPending };
};
