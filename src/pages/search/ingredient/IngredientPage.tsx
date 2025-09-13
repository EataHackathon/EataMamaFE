import styled from '@emotion/styled';
import { IngredientItem } from './components';
import { ingredientData } from './mock/ingredientData';

const IngredientPage = () => {
  return (
    <Container>
      {ingredientData.map((ingredient, index) => (
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
