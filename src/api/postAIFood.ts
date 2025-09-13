import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

type PostAIFoodParams = {
  data: { foodName: string };
};

export const postAIFood = async ({ data }: PostAIFoodParams) => {
  try {
    const response = await axiosInstance.post(API_PATHS.AI_FOOD, {
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching AI food:', error);
    throw error;
  }
};
