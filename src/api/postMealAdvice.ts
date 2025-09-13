import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

type PostAIIngredientParams = {
  mealId: number;
};

export const postMealAdvice = async ({ mealId }: PostAIIngredientParams) => {
  try {
    const response = await axiosInstance.post(API_PATHS.AI_MEAL_ADVICE(mealId));
    return response.data;
  } catch (error) {
    console.error('Error fetching AI meal advice:', error);
    throw error;
  }
};
