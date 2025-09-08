import { Typography } from '@/components/common';
import styled from '@emotion/styled';

type IngredientInfoProps = {
  ingredientData: {
    name: string;
    amount: string;
  }[];
};

const IngredientInfo = ({ ingredientData }: IngredientInfoProps) => {
  return (
    <Grid>
      {ingredientData.map((ingredient) => (
        <Box key={ingredient.name}>
          <Typography variant='body3' weight='medium' color='sub'>
            {ingredient.name}
          </Typography>
          <Typography variant='body3' weight='medium' color='primary'>
            {ingredient.amount}
          </Typography>
        </Box>
      ))}
    </Grid>
  );
};

export default IngredientInfo;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  justify-content: center;
  align-items: center;
`;
