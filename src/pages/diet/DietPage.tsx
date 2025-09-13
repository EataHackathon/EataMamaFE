import { Button } from '@/components/common';
import SearchBar from '@/components/common/SearchBar';
import MealCard from '@/pages/diet/components/MealCard';
import NutrientAnalysis from '@/components/layout/NutrientAnalysis';
import Summary from './components/Summary';

import breakfast from '@/assets/breakfast.png';
import lunch from '@/assets/lunch.png';
import dinner from '@/assets/dinner.png';

import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useGetMeal } from './hooks';
import { useTitleStore } from '@/stores';

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

const nutrientDataForChart = currentIntake.map((data) => {
  const recommendedValue = intake[data.key];
  const percentage =
    recommendedValue > 0 ? (data.value / recommendedValue) * 100 : 0;
  return { ...data, percentage: Math.min(percentage, 200) };
});

const DietPage = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const { setTitle, setLogDate } = useTitleStore();

  useEffect(() => {
    setTitle(`${year}월 ${month}월 ${day}일`);
    setLogDate(
      `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(
        2,
        '0',
      )}`,
    );
  }, [setTitle, setLogDate, year, month, day]);

  const location = useLocation();
  const navigate = useNavigate();
  const urlParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const type = urlParams.get('type') || 'FOOD';
  const logDate = useTitleStore((state) => state.logDate);
  const { mealData, isPending } = useGetMeal({ logDate });

  useEffect(() => {
    if (!urlParams.get('type')) {
      urlParams.set('type', 'FOOD');
      navigate(`${location.pathname}?${urlParams.toString()}`, {
        replace: true,
      });
    }
  }, [location.pathname, navigate, urlParams]);

  if (isPending) {
    return null;
  }

  const typeButtonClick = (buttonType: string) => {
    urlParams.set('type', buttonType);
    navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
  };

  if (!mealData) {
    return (
      <>
        <Search>
          <ButtonContainer>
            <Button
              variant={type === 'FOOD' ? 'primary' : 'disabled'}
              onClick={() => {
                typeButtonClick('FOOD');
              }}
            >
              음식 검색
            </Button>
            <Button
              variant={type === 'INGREDIENT' ? 'primary' : 'disabled'}
              onClick={() => {
                typeButtonClick('INGREDIENT');
              }}
            >
              재료 검색
            </Button>
          </ButtonContainer>
          <SearchBar />
        </Search>

        <Meal>
          <MealCard
            title='아침'
            type='BREAKFAST'
            imageUrl={breakfast}
            description={null}
            tags={null}
            calories={null}
          />
          <MealCard
            title='점심'
            type='LUNCH'
            imageUrl={lunch}
            description={null}
            tags={null}
            calories={null}
          />
          <MealCard
            title='저녁'
            type='DINNER'
            imageUrl={dinner}
            description={null}
            tags={null}
            calories={null}
          />
        </Meal>
      </>
    );
  }

  const breakfastMeal = mealData.data.meals.find(
    (meal) => meal.mealType === 'BREAKFAST',
  );
  const lunchMeal = mealData.data.meals.find(
    (meal) => meal.mealType === 'LUNCH',
  );
  const dinnerMeal = mealData.data.meals.find(
    (meal) => meal.mealType === 'DINNER',
  );

  // 1. 퍼센트 계산 로직을 페이지 레벨에서 수행

  return (
    <>
      <Search>
        <ButtonContainer>
          <Button
            variant={type === 'FOOD' ? 'primary' : 'disabled'}
            onClick={() => {
              typeButtonClick('FOOD');
            }}
          >
            음식 검색
          </Button>
          <Button
            variant={type === 'INGREDIENT' ? 'primary' : 'disabled'}
            onClick={() => {
              typeButtonClick('INGREDIENT');
            }}
          >
            재료 검색
          </Button>
        </ButtonContainer>
        <SearchBar />
      </Search>

      <Meal>
        <MealCard
          mealId={breakfastMeal?.mealId}
          title='아침'
          type='BREAKFAST'
          imageUrl={breakfast}
          description={breakfastMeal?.mealAdvice || null}
          tags={breakfastMeal?.mealName || null}
          calories={breakfastMeal?.intakes || null}
        />
        <MealCard
          title='점심'
          type='LUNCH'
          mealId={lunchMeal?.mealId}
          imageUrl={lunch}
          description={lunchMeal?.mealAdvice || null}
          tags={lunchMeal?.mealName || null}
          calories={lunchMeal?.intakes || null}
        />
        <MealCard
          title='저녁'
          type='DINNER'
          mealId={dinnerMeal?.mealId}
          imageUrl={dinner}
          description={dinnerMeal?.mealAdvice || null}
          tags={dinnerMeal?.mealName || null}
          calories={dinnerMeal?.intakes || null}
        />
      </Meal>

      <Analysis>
        <NutrientAnalysis
          totalCalories={
            breakfastMeal?.intakes.reduce(
              (sum, intake) => sum + intake.intakeKcal,
              0,
            ) ||
            0 +
              (lunchMeal?.intakes.reduce(
                (sum, intake) => sum + intake.intakeKcal,
                0,
              ) || 0) +
              (dinnerMeal?.intakes.reduce(
                (sum, intake) => sum + intake.intakeKcal,
                0,
              ) || 0)
          }
          nutrientData={nutrientDataForChart}
        />
      </Analysis>

      <TodaySummary>
        <Summary
          dayLogId={mealData.data.dayLogId}
          dailyAdvice={mealData.data.dailyAdvice}
        />
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
