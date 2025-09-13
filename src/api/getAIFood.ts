import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

type GetAIFoodParams = {
  data: { foodName: string };
};

export const getAIFood = async ({ data }: GetAIFoodParams) => {
  try {
    const response = await axiosInstance.get(API_PATHS.AI_FOOD, {
      params: data,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching AI food:', error);
    throw error;
  }
};
