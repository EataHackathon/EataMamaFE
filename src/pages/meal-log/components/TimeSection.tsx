import { Typography } from '@/components/common';
import styled from '@emotion/styled';

type TimeSectionProps = {
  mealTime: string;
  setMealTime: (time: string) => void;
};

const TimeSection = ({ mealTime, setMealTime }: TimeSectionProps) => {
  return (
    <Section>
      <Typography variant='subtitle' weight='bold' as='label'>
        식사 시간
      </Typography>
      <Input
        type='text'
        value={mealTime}
        onChange={(e) => setMealTime(e.target.value)}
      />
    </Section>
  );
};

export default TimeSection;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Input = styled.input`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  &::placeholder {
    color: inherit;
    font: inherit;
  }
`;
