import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

type PostAIIngredientParams = {
  dayLogId: number;
};

export const postDayAdvice = async ({ dayLogId }: PostAIIngredientParams) => {
  try {
    const response = await axiosInstance.post(
      API_PATHS.AI_DAY_ADVICE(dayLogId),
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching AI day advice:', error);
    throw error;
  }
};
