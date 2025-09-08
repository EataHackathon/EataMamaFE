import { RatingButton, Typography } from '@/components/common';
import styled from '@emotion/styled';
import IngredientInfo from './IngredientInfo';

const ingredientData = [
  { name: '탄수화물', amount: '5.5g' },
  { name: '단백질', amount: '1g' },
  { name: '지방', amount: '0.2g' },
  { name: '식이섬유', amount: '0.8g' },
];

const ItemInfoSection = () => {
  return (
    <Section>
      <Box>
        <Title>
          <Typography variant='subtitle' weight='bold' as='h2'>
            삼계탕
          </Typography>
          <RatingButton variant='GOOD' />
        </Title>
        <Typography variant='body3' color='sub' weight='medium'>
          150g
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1' weight='bold'>
          영양분석
        </Typography>
        <Typography variant='body1' color='primary' weight='bold'>
          26.6 kcal
        </Typography>
      </Box>
      <IngredientInfo ingredientData={ingredientData} />
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
