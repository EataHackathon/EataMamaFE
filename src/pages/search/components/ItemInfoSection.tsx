import { RatingButton, Typography } from '@/components/common';
import styled from '@emotion/styled';
import IngredientInfo from './IngredientInfo';

type ItemInfoSectionProps = {
  name: string;
  gram: number;
  kcal: number;
  carbo: number;
  protein: number;
  fat: number;
  dietaryFiber: number;
};

const ItemInfoSection = ({
  name,
  gram,
  kcal,
  carbo,
  protein,
  fat,
  dietaryFiber,
}: ItemInfoSectionProps) => {
  return (
    <Section>
      <Box>
        <Title>
          <Typography variant='subtitle' weight='bold' as='h2'>
            {name}
          </Typography>
          <RatingButton variant='GOOD' />
        </Title>
        <Typography variant='body3' color='sub' weight='medium'>
          {gram}g
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1' weight='bold'>
          영양분석
        </Typography>
        <Typography variant='body1' color='primary' weight='bold'>
          {kcal} kcal
        </Typography>
      </Box>
      <IngredientInfo
        carbo={carbo}
        protein={protein}
        fat={fat}
        dietaryFiber={dietaryFiber}
      />
    </Section>
  );
};

export default ItemInfoSection;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[4]};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[4]};
`;
