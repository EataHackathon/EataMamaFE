import styled from '@emotion/styled';
import { FoodItem } from './components';
import { Typography } from '@/components/common';
import { useLocation } from 'react-router-dom';
import { useGetAIFood } from '../hooks';

const FoodPage = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const name = urlParams.get('name') || '';
  const { myData, isPending } = useGetAIFood({ data: { foodName: name } });

  if (isPending || !myData) {
    return null;
  }

  return (
    <Container>
      <Box>
        <Typography variant='subtitle' weight='bold'>
          성분 및 재료 분석
        </Typography>
      </Box>
      {myData.ai.ingredientsAnalysis.map((ingredient, index) => (
        <FoodItem
          key={ingredient.name}
          number={index + 1}
          ingredient={ingredient}
        />
      ))}
      <Box>
        <Typography variant='subtitle' weight='bold'>
          최종 정리
        </Typography>
        <Typography variant='body3'>{myData.ai.finalSummary}</Typography>
      </Box>
    </Container>
  );
};

export default FoodPage;

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
