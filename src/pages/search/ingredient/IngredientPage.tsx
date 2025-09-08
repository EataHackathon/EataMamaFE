import styled from '@emotion/styled';
import { IngredientItem } from './components';
import { foodIngredients } from './mock/foodIngredient';
import { Typography } from '@/components/common';

const IngredientPage = () => {
  return (
    <Container>
      <Box>
        <Typography variant='subtitle' weight='bold'>
          성분 및 재료 분석
        </Typography>
      </Box>
      {foodIngredients.map((ingredient, index) => (
        <IngredientItem
          key={ingredient.name}
          number={index + 1}
          ingredient={ingredient}
        />
      ))}
      <Box>
        <Typography variant='subtitle' weight='bold'>
          최종 정리
        </Typography>
        <Typography variant='body3'>
          삼계탕은 인삼을 제외한 모든 재료가 임산부에게 매우 유익해. 몸이 차고
          기력이 없을 때 인삼을 소량 곁들여 먹는 것은 좋지만, 몸에 열이 많거나
          임신 초기, 혹은 고혈압이 걱정된다면 인삼은 빼고 끓여 먹는 것을
          추천할게!
        </Typography>
      </Box>
    </Container>
  );
};

export default IngredientPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
`;
