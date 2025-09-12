import { Typography } from '@/components/common';
import styled from '@emotion/styled';

type MealPlusSectionProps = {
  intakes: string[];
  setIntakes: (intakes: string[]) => void;
};

const MealPlusSection = ({ intakes, setIntakes }: MealPlusSectionProps) => {
  console.log(intakes, setIntakes);

  return (
    <Section>
      <Typography variant='subtitle' weight='bold' as='label'>
        식단 추가
      </Typography>
      <Button onClick={(e) => e.preventDefault()}>
        <Typography variant='body3' weight='medium' color='white'>
          음식 검색하기
        </Typography>
      </Button>
    </Section>
  );
};

export default MealPlusSection;

const Section = styled.section`
  padding: 0 ${({ theme }) => theme.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Button = styled.button`
  width: fit-content;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[16]}`};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;
