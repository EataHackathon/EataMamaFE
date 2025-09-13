import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

export interface Intake {
  intakeName: string;
  intakeKcal: number;
  gram: number;
  carbo: number;
  protein: number;
  fat: number;
  dietaryFiber: number;
}

export interface PostMealRequest {
  logDate: string; // ISO Date (YYYY-MM-DD)
  mealType: 'BREAKFAST' | 'LUNCH' | 'DINNER';
  mealName: string;
  mealTime: string; // ISO8601 datetime
  intakes: Intake[];
}

export const postMeal = async (data: PostMealRequest) => {
  try {
    const response = await axiosInstance.post(API_PATHS.MEAL, data);
    return response.data;
  } catch (error) {
    console.error('Error posting meal:', error);
    throw error;
  }
};
