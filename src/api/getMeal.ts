import type { AxiosError } from 'axios';
import { API_PATHS } from './apiPaths';
import axiosInstance from './axiosInstance';

type GetMealParams = {
  logDate: string;
};

type ErrorResponse = {
  errorCode: string;
  errorMessage: string;
  status: string;
  serverDateTime: string;
};

export const getMeal = async ({ logDate }: GetMealParams) => {
  try {
    const response = await axiosInstance.get(API_PATHS.MEAL, {
      params: { logDate },
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;

    if (error.response?.data?.errorCode === 'COMMON.NOT_FOUND') {
      return null;
    }

    throw error;
  }
};
