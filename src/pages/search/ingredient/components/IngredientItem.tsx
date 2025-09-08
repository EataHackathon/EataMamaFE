import { RatingButton, Typography } from '@/components/common';
import styled from '@emotion/styled';

type IngredientItemProps = {
  number: number;
  ingredient: {
    name: string;
    rating: 'GOOD' | 'OK' | 'CAUTION';
    content: string;
  };
};

const IngredientItem = ({ number, ingredient }: IngredientItemProps) => {
  return (
    <Container>
      <Box>
        <Typography
          variant='subtitle'
          weight='bold'
          as='h3'
        >{`${number}. ${ingredient.name}`}</Typography>
        <RatingButton variant={ingredient.rating} />
      </Box>
      <Typography variant='body3'>{ingredient.content}</Typography>
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
`;
