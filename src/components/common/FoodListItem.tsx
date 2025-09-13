import { memo } from 'react';
import styled from '@emotion/styled';
import { Plus, Check } from 'lucide-react';

interface FoodItem {
  id: number;
  name: string;
  amount: string;
  calories: number;
}

interface FoodListItemProps {
  item: FoodItem;
  isSelected: boolean;
  onToggle: () => void;
}

const FoodListItem = memo(
  ({ item, isSelected, onToggle }: FoodListItemProps) => {
    return (
      <ItemWrapper onClick={onToggle}>
        <Info>
          <Name>{item.name}</Name>
          <Amount>{item.amount}</Amount>
        </Info>
        <Calories>{item.calories.toLocaleString()}kcal</Calories>
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
  padding: 16px;
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
  color: #868e96;
`;

const Calories = styled.p`
  margin: 0 16px;
  font-size: 16px;
  font-weight: bold;
  color: #343a40;
`;

const ActionButton = styled.button<{ isSelected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ isSelected }) => (isSelected ? '#e91e63' : '#dee2e6')};
  background-color: ${({ isSelected }) => (isSelected ? '#e91e63' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#495057')};
  cursor: pointer;
`;
