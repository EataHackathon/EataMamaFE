import { Typography } from '@/components/common';
import styled from '@emotion/styled';

type TimeSectionProps = {
  mealTime: string;
  setMealTime: (time: string) => void;
};

const TimeSection = ({ mealTime, setMealTime }: TimeSectionProps) => {
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  const updateTime = (hhmm: string) => {
    const [hours, minutes] = hhmm.split(':').map(Number);
    const date = new Date(mealTime);
    date.setHours(hours, minutes, 0, 0);
    setMealTime(date.toISOString());
  };

  return (
    <Section>
      <Typography variant='subtitle' weight='bold' as='label'>
        식사 시간
      </Typography>
      <Input
        type='text'
        value={formatTime(mealTime)}
        onChange={(e) => updateTime(e.target.value)}
      />
    </Section>
  );
};

export default TimeSection;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[9]};
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
