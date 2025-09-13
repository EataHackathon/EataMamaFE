import { Typography } from '@/components/common';
import styled from '@emotion/styled';

type IngredientInfoProps = {
  carbo: number;
  protein: number;
  fat: number;
  dietaryFiber: number;
};

const IngredientInfo = ({
  carbo,
  protein,
  fat,
  dietaryFiber,
}: IngredientInfoProps) => {
  return (
    <Grid>
      <Box>
        <Typography variant='body3' weight='medium' color='sub'>
          탄수화물
        </Typography>
        <Typography variant='body3' weight='medium' color='primary'>
          {carbo}g
        </Typography>
      </Box>
      <Box>
        <Typography variant='body3' weight='medium' color='sub'>
          단백질
        </Typography>
        <Typography variant='body3' weight='medium' color='primary'>
          {protein}g
        </Typography>
      </Box>
      <Box>
        <Typography variant='body3' weight='medium' color='sub'>
          지방
        </Typography>
        <Typography variant='body3' weight='medium' color='primary'>
          {fat}g
        </Typography>
      </Box>
      <Box>
        <Typography variant='body3' weight='medium' color='sub'>
          식이섬유
        </Typography>
        <Typography variant='body3' weight='medium' color='primary'>
          {dietaryFiber}g
        </Typography>
      </Box>
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
