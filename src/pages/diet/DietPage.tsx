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

const DietPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const type = urlParams.get('type') || 'FOOD';

  useEffect(() => {
    if (!urlParams.get('type')) {
      urlParams.set('type', 'FOOD');
      navigate(`${location.pathname}?${urlParams.toString()}`, {
        replace: true,
      });
    }
  }, [location.pathname, navigate, urlParams]);

  const typeButtonClick = (buttonType: string) => {
    urlParams.set('type', buttonType);
    navigate(`${location.pathname}?${urlParams.toString()}`, { replace: true });
  };

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
        <NutrientAnalysis />
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
