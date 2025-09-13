import styled from '@emotion/styled';
import { IngredientItem } from './components';
import { useLocation } from 'react-router-dom';
import { usePostAIIngredient } from '../hooks';
import { ItemInfoSection } from '../components';

const IngredientPage = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const name = urlParams.get('name') || '';
  const { myData, isPending } = usePostAIIngredient({
    data: { ingredientName: name },
  });

  if (isPending || !myData) {
    return null;
  }

  return (
    <>
      <ItemInfoSection
        name={myData.data.item.ingredientName}
        gram={myData.data.item.gram}
        kcal={myData.data.item.ingredientKcal}
        carbo={myData.data.item.carbo}
        protein={myData.data.item.protein}
        fat={myData.data.item.fat}
        dietaryFiber={myData.data.item.dietaryFiber}
      />
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
    </>
  );
};

export default IngredientPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`;
