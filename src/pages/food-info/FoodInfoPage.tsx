import styled from '@emotion/styled';
import NutrientAnalysis from '@/components/layout/NutrientAnalysis';
import Button2 from '@/components/common/Button2';
import { Minus, Plus } from 'lucide-react';

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

const FoodInfoPage = () => {
  const nutrientDataForChart = currentIntake.map((data) => {
    const recommendedValue = intake[data.key];
    const percentage =
      recommendedValue > 0 ? (data.value / recommendedValue) * 100 : 0;
    return { ...data, percentage: Math.min(percentage, 200) };
  });
  return (
    <PageContainer>
      <FoodInfo>
        <Name>샐러드볼</Name>
        <Gram>200g</Gram>
      </FoodInfo>

      <QuantitySection>
        <QuantityInput />
        <UnitSelect />
      </QuantitySection>

      <NutrientSection>
        <NutrientAnalysis
          totalCalories={462}
          nutrientData={nutrientDataForChart}
        />
      </NutrientSection>

      <ButtonSection>
        <Button2 variant='primary'>저장하기</Button2>
      </ButtonSection>
    </PageContainer>
  );
};

export default FoodInfoPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FoodInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[9]};
`;

const Name = styled.h2``;
const Gram = styled.p`
  color: ${({ theme }) => theme.colors.text.disabled};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
`;

const NutrientSection = styled.div`
  min-height: 600px;
`;

const ButtonSection = styled.footer`
  display: flex;
  justify-content: center;
  position: sticky;
  background-color: ${({ theme }) => theme.colors.background};
  bottom: 0;

  padding: ${({ theme }) => `${theme.spacing[8]}`};
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  max-width: 600px;
`;

const QuantitySection = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[9]};
`;

const QuantityInput = () => (
  <QuantityInputWrapper>
    <QuantityButton type='button'>
      <Minus size={20} />
    </QuantityButton>
    <AmountDisplay>200</AmountDisplay>
    <QuantityButton type='button'>
      <Plus size={20} />
    </QuantityButton>
  </QuantityInputWrapper>
);

const QuantityInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray[20]};
  border-radius: 8px;
  flex: 1;
  justify-content: space-between;
`;

const AmountDisplay = styled.span`
  padding: 0 ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const QuantityButton = styled.button`
  padding: ${({ theme }) => theme.spacing[3]};
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.sub};
`;

const UnitSelect = () => (
  <UnitSelectWrapper>
    <span>g</span>
  </UnitSelectWrapper>
);

const UnitSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.gray[20]};
  border-radius: 8px;
  flex: 1;
  justify-content: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
`;
