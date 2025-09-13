import { memo } from 'react';
import styled from '@emotion/styled';
import { Plus, Check } from 'lucide-react';
import type { Food } from '@/api/getSearchMeal';

interface FoodListItemProps {
  item: Food;
  isSelected: boolean;
  onToggle: () => void;
}

const FoodListItem = memo(
  ({ item, isSelected, onToggle }: FoodListItemProps) => {
    return (
      <ItemWrapper onClick={onToggle}>
        <Info>
          <Name>{item.name}</Name>
          <Amount>{item.gram}g</Amount>
        </Info>
        <Calories>{item.kcal}kcal</Calories>
        <ActionButton isSelected={isSelected}>
          {isSelected ? <Check size={20} /> : <Plus size={20} />}
        </ActionButton>
      </ItemWrapper>
    );
  },
);

export default FoodListItem;

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid #f1f3f5;
  cursor: pointer;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const Amount = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.sub};
`;

const Calories = styled.p`
  margin: 0 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[80]};
`;

const ActionButton = styled.button<{ isSelected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.primary : theme.colors.gray[10]};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.gray[0]};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.text.white : theme.colors.gray[80]};
  cursor: pointer;
`;
