import { postDayAdvice } from '@/api';
import { useMutation } from '@tanstack/react-query';

export const usePostDayAdvice = () => {
  const { mutate: postDayAdviceMutate, isPending } = useMutation({
    mutationKey: [],
    mutationFn: (dayLogId: number) => postDayAdvice({ dayLogId }),
  });

  return { postDayAdviceMutate, isPending };
};
