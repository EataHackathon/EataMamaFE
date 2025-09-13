import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

type PostAIIngredientParams = {
  data: { ingredientName: string };
};

export const postAIIngredient = async ({ data }: PostAIIngredientParams) => {
  try {
    const response = await axiosInstance.post(API_PATHS.AI_INGREDIENT, {
      params: data,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching AI ingredient:', error);
    throw error;
  }
};
