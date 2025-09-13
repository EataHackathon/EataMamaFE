import { useTitleStore } from '@/stores';
import { useEffect, useState } from 'react';
import NutrientAnalysis from '@/components/layout/NutrientAnalysis';
import { ImageSection, MealPlusSection, TimeSection } from './components';
import styled from '@emotion/styled';
import Button2 from '@/components/common/Button2';
import { usePostMeal } from './hooks';
import type { Intake, PostMealRequest } from '@/api/postMeal';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFoodStore } from '@/stores/foodStore';
import type { Food } from '@/api/getSearchMeal';
import { ROUTE_PATH } from '@/routes/paths';

const dataToIntake = (data: Food[]): Intake[] => {
  return data.map((item) => ({
    intakeName: item.name,
    intakeKcal: item.kcal,
    gram: item.gram,
    carbo: item.carbo,
    protein: item.protein,
    fat: item.fat,
    dietaryFiber: item.dietaryFiber,
  }));
};

const MealLogPage = () => {
  const { setTitle } = useTitleStore();
  const { postMealMutate } = usePostMeal();
  const logDate = useTitleStore((state) => state.logDate);
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const title = urlParams.get('title') as 'BREAKFAST' | 'LUNCH' | 'DINNER';
  const data = useFoodStore((state) => state.selectedFoods);
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<PostMealRequest>({
    logDate: logDate,
    mealType: title,
    mealName: '',
    mealTime: new Date().toISOString(),
    intakes: [],
  });

  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      intakes: dataToIntake(data),
    }));
  }, [data]);

  useEffect(() => {
    // TODO: 메인에서 클릭했을 때 URL 쿼리스트링으로 받아 title 설정하기
    setTitle('Meal Log');
  }, [setTitle]);

  const submitMeal = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: PostMealRequest = {
      ...formValues,
    };
    postMealMutate(payload);

    navigate(ROUTE_PATH.DIET);
  };

  const emptyData = [
    { id: 1, label: '탄수화물', value: 0, unit: 'g', percentage: 0 },
    { id: 2, label: '단백질', value: 0, unit: 'g', percentage: 0 },
    { id: 3, label: '지방', value: 0, unit: 'g', percentage: 0 },
    { id: 4, label: '식이섬유', value: 0, unit: 'g', percentage: 0 },
  ];

  return (
    <Form onSubmit={submitMeal}>
      <ImageSection
        mealName={formValues.mealName}
        setMealName={(name) =>
          setFormValues((prev) => ({ ...prev, mealName: name }))
        }
      />
      <TimeSection
        mealTime={formValues.mealTime}
        setMealTime={(time) =>
          setFormValues((prev) => ({ ...prev, mealTime: time }))
        }
      />
      <MealPlusSection />

      <NutrientSection>
        <NutrientAnalysis totalCalories={0} nutrientData={emptyData} />
      </NutrientSection>

      <ButtonSection>
        <Button2>저장하기</Button2>
      </ButtonSection>
    </Form>
  );
};

export default MealLogPage;

const Form = styled.form``;

const ButtonSection = styled.footer`
  position: sticky;
  background-color: ${({ theme }) => theme.colors.background};
  bottom: 0;
  padding: ${({ theme }) => `${theme.spacing[8]}`};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
`;

const NutrientSection = styled.div`
  margin-bottom: ${({ theme }) => `${theme.spacing[15]}`};
`;
