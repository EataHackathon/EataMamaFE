import styled from '@emotion/styled';
import { IngredientItem } from './components';
import { useLocation } from 'react-router-dom';
import { useGetAIIngredient } from '../hooks';

const IngredientPage = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const name = urlParams.get('name') || '';
  const { myData, isPending } = useGetAIIngredient({
    data: { ingredientName: name },
  });

  if (isPending || !myData) {
    return null;
  }

  return (
    <Container>
      {myData.data.ai.recommendations.map((ingredient, index) => (
        <IngredientItem
          key={ingredient.title}
          title={ingredient.title}
          number={index + 1}
          summary={ingredient.summary}
          whyGood={ingredient.whyGood}
        />
      ))}
    </Container>
  );
};

export default IngredientPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`;
