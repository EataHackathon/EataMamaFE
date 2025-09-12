import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // 기본 스타일 import

type NutrientChartProps = {
  label: string;
  value: number;
  unit: string;
  percentage: number;
};

export const NutrientChart = ({
  label,
  value,
  unit,
  percentage,
}: NutrientChartProps) => {
  const theme = useTheme();

  return (
    <ChartWrapper>
      <ProgressBarWrapper>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: theme.colors.primary, // 프로그레스 바 색상
            trailColor: '#FFEDF3', // 배경 트랙 색상
          })}
        />
        <ValueText>{`${value}${unit}`}</ValueText>
      </ProgressBarWrapper>
      <LabelText>{label}</LabelText>
    </ChartWrapper>
  );
};

// --- Styled Components ---

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]}; /* 8px */
`;

const ProgressBarWrapper = styled.div`
  position: relative;
`;

const ValueText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const LabelText = styled.div`
  font-size: ${({ theme }) => theme.typography.body3.fontSize};
  color: ${({ theme }) => theme.colors.text.sub};
`;
