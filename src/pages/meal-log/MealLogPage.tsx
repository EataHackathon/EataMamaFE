import { useTitleStore } from '@/stores';
import { useEffect, useState } from 'react';
import NutrientAnalysis from '@/components/layout/NutrientAnalysis';
import { ImageSection, MealPlusSection, TimeSection } from './components';
import styled from '@emotion/styled';
import { getTime } from '@/utils';
import Button2 from '@/components/common/Button2';

const MealLogPage = () => {
  const { setTitle } = useTitleStore();

  const [formValues, setFormValues] = useState({
    logDate: '', // 이후 날짜 받아와서 처리
    mealType: '', // 이후 식사 종류 받아와서 처리
    mealName: '',
    mealTime: getTime(),
    intakes: [''],
  });

  useEffect(() => {
    // TODO: 메인에서 클릭했을 때 URL 쿼리스트링으로 받아 title 설정하기
    setTitle('Meal Log');
  }, [setTitle]);

  const emptyData = [
    { id: 1, label: '탄수화물', value: 0, unit: 'g', percentage: 0 },
    { id: 2, label: '단백질', value: 0, unit: 'g', percentage: 0 },
    { id: 3, label: '지방', value: 0, unit: 'g', percentage: 0 },
    { id: 4, label: '식이섬유', value: 0, unit: 'g', percentage: 0 },
  ];

  return (
    <Form onSubmit={() => {}}>
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
      <MealPlusSection
        intakes={formValues.intakes}
        setIntakes={(intakes) =>
          setFormValues((prev) => ({ ...prev, intakes }))
        }
      />

      <NutrientSection>
        <NutrientAnalysis totalCalories={0} nutrientData={emptyData} />
      </NutrientSection>

      <ButtonSection>
        <Button2 variant='disabled'>저장하기</Button2>
      </ButtonSection>
    </Form>
  );
};

export default MealLogPage;

const Form = styled.form``;

const ButtonSection = styled.footer`
  bottom: 0;
  padding: ${({ theme }) => `${theme.spacing[8]}`};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
`;

const NutrientSection = styled.div`
  margin-bottom: ${({ theme }) => `${theme.spacing[15]}`};
`;
