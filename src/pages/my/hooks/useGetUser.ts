import { getUser } from '@/api/getUser';
import { useQuery } from '@tanstack/react-query';

export type Condition = {
  conditionId: number;
  diseaseName: string;
};

export type Allergy = {
  allergyId: number;
  allergyName: string;
};

type UserData = {
  Id: number;
  profileImageUrl: string; // 이미지 주소
  email: string;
  nickname: string;
  height: number;
  weight: number;
  week: number;
  conditions: Condition[];
  allergys: Allergy[]; // 원본 key가 allergys라 그대로 사용
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
};

export type GetUserResult = {
  data: UserData;
  status: 'SUCCESS' | 'FAIL'; // 예시로 SUCCESS/FAIL만 지정
  serverDateTime: string;
  errorCode: string | null;
  errorMessage: string | null;
};

export const useGetUser = () => {
  const { data: myData, isPending } = useQuery<GetUserResult>({
    queryKey: ['user'],
    queryFn: getUser,
  });
  return { myData, isPending };
};
