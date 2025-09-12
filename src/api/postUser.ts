import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

export type UserData = {
  nickname: string;
  height: number;
  weight: number;
  week: number;
  conditions: { diseaseName: string }[];
  allergies: { allergyName: string }[];
};

export const postUser = async (userData: UserData) => {
  try {
    const response = await axiosInstance.post(API_PATHS.USER, userData);
    return response.data;
  } catch (error) {
    console.error('Error posting user:', error);
    throw error;
  }
};
