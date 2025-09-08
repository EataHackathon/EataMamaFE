import { useTitleStore } from '@/stores';
import { useEffect, useState } from 'react';
import {
  ImageSection,
  MealInfoSection,
  MealPlusSection,
  TimeSection,
} from './components';
import styled from '@emotion/styled';
import { getTime } from '@/utils';

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

  return (
    <Form>
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
      <MealInfoSection />
      <button type='submit'></button>
    </Form>
  );
};

export default MealLogPage;

const Form = styled.form``;
