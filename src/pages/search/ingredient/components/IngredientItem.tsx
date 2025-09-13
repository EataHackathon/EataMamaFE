import { Typography } from '@/components/common';
import styled from '@emotion/styled';

type IngredientItemProps = {
  title: string;
  number: number;
  summary: string;
  whyGood: string[];
};

const IngredientItem = ({
  title,
  number,
  summary,
  whyGood,
}: IngredientItemProps) => {
  return (
    <Container>
      <Box>
        <Circle>
          <Typography variant='body2' weight='bold' color='white'>
            {number}
          </Typography>
        </Circle>
        <Typography variant='body1' weight='bold'>
          {title}
        </Typography>
      </Box>
      <Typography variant='body3'>{summary}</Typography>
      <FoodBenefit>
        <Typography variant='body3' weight='bold'>
          ✅ 이런 점이 좋아요:
        </Typography>
        {whyGood.map((benefit, index) => (
          <Typography key={`${benefit}-${index}`} variant='body3'>
            {`${index + 1}. ${benefit}`}
          </Typography>
        ))}
      </FoodBenefit>
    </Container>
  );
};

export default IngredientItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const Box = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const FoodBenefit = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;
