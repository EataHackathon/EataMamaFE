import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

type getAIIngredientParams = {
  data: { ingredientName: string };
};

export const getAIIngredient = async ({ data }: getAIIngredientParams) => {
  try {
    const response = await axiosInstance.get(API_PATHS.AI_INGREDIENT, {
      params: data,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching AI ingredient:', error);
    throw error;
  }
};
