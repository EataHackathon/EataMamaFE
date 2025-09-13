import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

export const getAIIngredient = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.AI_INGREDIENT);
    return response.data;
  } catch (error) {
    console.error('Error fetching AI ingredient:', error);
    throw error;
  }
};
