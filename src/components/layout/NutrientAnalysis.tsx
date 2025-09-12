import styled from '@emotion/styled';
import { NutrientChart } from '../common/NutrientChart';

const nutrientData = [
  {
    id: 1,
    label: '탄수화물',
    value: 92,
    unit: 'g',
    percentage: 75,
    color: '#e91e63',
  },
  {
    id: 2,
    label: '단백질',
    value: 70,
    unit: 'g',
    percentage: 60,
    color: '#e91e63',
  },
  {
    id: 3,
    label: '지방',
    value: 42,
    unit: 'g',
    percentage: 50,
    color: '#e91e63',
  },
  {
    id: 4,
    label: '식이섬유',
    value: 9,
    unit: 'g',
    percentage: 30,
    color: '#e91e63',
  },
];

const NutrientAnalysis = () => {
  return (
    <SectionContainer>
      <Header>
        <Title>영양분석</Title>
        <TotalCalories>1,239 kcal</TotalCalories>
      </Header>
      <ChartContainer>
        {nutrientData.map((data) => (
          <NutrientChart
            key={data.id}
            label={data.label}
            value={data.value}
            unit={data.unit}
            percentage={data.percentage}
            color={data.color}
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
  padding: 0 ${({ theme }) => theme.spacing[9]};
`;
const Title = styled.h2`
  /* ... */
`;
const TotalCalories = styled.h2`
  padding: ${({ theme }) => theme.spacing[3]} 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;
const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 0 ${({ theme }) => theme.spacing[9]};
  margin-top: ${({ theme }) => theme.spacing[4]};
`;
