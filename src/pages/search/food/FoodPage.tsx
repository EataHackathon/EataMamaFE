import styled from '@emotion/styled';
import { FoodItem } from './components';
import { foodData } from './mock/foodData';

const FoodPage = () => {
  return (
    <Container>
      {foodData.map((ingredient, index) => (
        <FoodItem
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

export default FoodPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`;
