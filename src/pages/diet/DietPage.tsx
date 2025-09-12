import { Button } from '@/components/common';
import SearchBar from '@/components/common/SearchBar';
import MealCard from '@/pages/diet/components/MealCard';
import NutrientAnalysis from '@/components/layout/NutrientAnalysis';
import Summary from './components/Summary';

import breakfast from '@/assets/breakfast.png';
import lunch from '@/assets/lunch.png';
import dinner from '@/assets/dinner.png';

import styled from '@emotion/styled';

const currentIntake = [
  { id: 1, label: '탄수화물', key: 'carbohydrate', value: 92, unit: 'g' },
  { id: 2, label: '단백질', key: 'protein', value: 70, unit: 'g' },
  { id: 3, label: '지방', key: 'fat', value: 42, unit: 'g' },
  { id: 4, label: '식이섬유', key: 'dietaryFiber', value: 9, unit: 'g' },
];

// 100% 기준이 되는 일일 권장 섭취량
const intake: { [key: string]: number } = {
  carbohydrate: 350,
  protein: 70,
  fat: 70,
  dietaryFiber: 25,
};

const DietPage = () => {
  // 1. 퍼센트 계산 로직을 페이지 레벨에서 수행
  const nutrientDataForChart = currentIntake.map((data) => {
    const recommendedValue = intake[data.key];
    const percentage =
      recommendedValue > 0 ? (data.value / recommendedValue) * 100 : 0;
    return { ...data, percentage: Math.min(percentage, 200) };
  });

  return (
    <>
      <Search>
        <ButtonContainer>
          <Button variant='primary'>음식 검색</Button>
          <Button variant='disabled'>재료 검색</Button>
        </ButtonContainer>
        <SearchBar />
      </Search>

      <Meal>
        <MealCard
          title='아침'
          imageUrl={breakfast}
          description='비타민과 섬유질이 풍부하지만,단백질을 더 섭취 하는게 좋아요'
          tags='샐러드'
          calories={215}
        />
        <MealCard
          title='점심'
          imageUrl={lunch}
          description='비타민과 섬유질이 풍부하지만,단백질을 더 섭취 하는게 좋아요'
          tags='도시락'
          calories={472}
        />
        <MealCard
          title='저녁'
          imageUrl={dinner}
          description='비타민과 섬유질이 풍부하지만,단백질을 더 섭취 하는게 좋아요'
          tags='로제마라샹궈'
          calories={552}
        />
      </Meal>

      <Analysis>
        <NutrientAnalysis
          totalCalories={1239}
          nutrientData={nutrientDataForChart}
        />
      </Analysis>

      <TodaySummary>
        <Summary />
      </TodaySummary>
    </>
  );
};

export default DietPage;

const Search = styled.section`
  margin-bottom: 40px;
`;

const Meal = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.spacing[8]}`};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => `${theme.spacing[6]}`};
  padding: 0 38px;
  margin-top: 20px;
`;

const Analysis = styled.section`
  padding: ${({ theme }) => `${theme.spacing[6]}`} 0;
`;

const TodaySummary = styled.section`
  padding: 0 ${({ theme }) => theme.spacing[9]};
  padding-bottom: ${({ theme }) => theme.spacing[10]};
`;
