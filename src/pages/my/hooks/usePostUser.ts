import { postUser } from '@/api/postUser';
import { useMutation } from '@tanstack/react-query';

export const usePostUser = () => {
  const { mutate: createUser } = useMutation({
    mutationKey: ['user'],
    mutationFn: postUser,
  });
  return { createUser };
};
