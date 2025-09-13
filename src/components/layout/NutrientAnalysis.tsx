import styled from '@emotion/styled';
import { NutrientChart } from '../common/NutrientChart';

// 컴포넌트가 받을 props 타입 정의
export type Nutrient = {
  id: number;
  label: string;
  value: number;
  unit: string;
  percentage: number;
};

type Props = {
  totalCalories: number;
  nutrientData: Nutrient[]; // 데이터 배열을 prop로 받음
};

const NutrientAnalysis = ({ totalCalories, nutrientData }: Props) => {
  return (
    <SectionContainer>
      <Header>
        <Title>영양분석</Title>
        <TotalCalories>{totalCalories} kcal</TotalCalories>
      </Header>
      <ChartContainer>
        {nutrientData.map((data) => (
          <NutrientChart
            key={data.id}
            label={data.label}
            value={data.value}
            unit={data.unit}
            percentage={data.percentage}
          />
        ))}
      </ChartContainer>
    </SectionContainer>
  );
};

export default NutrientAnalysis;

const SectionContainer = styled.section`
  /* ... 섹션 전체 스타일 ... */
`;
const Header = styled.div`
  padding: ${({ theme }) => theme.spacing[9]};
`;
const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
`;
const TotalCalories = styled.h2`
  padding: ${({ theme }) => theme.spacing[3]} 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
`;
const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 0 ${({ theme }) => theme.spacing[9]};
`;
