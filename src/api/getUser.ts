import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

export const getUser = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.USER);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
