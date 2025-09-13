import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { X } from 'lucide-react';

import SearchBar from '@/components/common/SearchBar';
import Button2 from '@/components/common/Button2';
import FoodListItem from '@/components/common/FoodListItem';

interface FoodItem {
  id: number;
  name: string;
  amount: string;
  calories: number;
}

// 목업 데이터
const mockFoodItems: FoodItem[] = [
  { id: 1, name: '샐러드', amount: '120g', calories: 147 },
  { id: 2, name: '샐러드', amount: '242g', calories: 290 },
  { id: 3, name: '샐러드볼', amount: '200g', calories: 200 },
  { id: 4, name: '콥샐러드', amount: '200g', calories: 451.6 },
  { id: 5, name: '햄샐러드', amount: '350g', calories: 110 },
];

const AddFoodPage = () => {
  const navigate = useNavigate();
  const [items] = useState<FoodItem[]>(mockFoodItems);
  const [selectedItems, setSelectedItems] = useState<FoodItem[]>([]);

  const handleToggleItem = (item: FoodItem) => {
    setSelectedItems((prev) =>
      prev.find((prevItem) => prevItem.id === item.id)
        ? prev.filter((prevItem) => prevItem.id !== item.id)
        : [...prev, item],
    );
  };

  const handleConfirm = () => {
    if (selectedItems.length === 0) return; // 선택된 아이템 없으면 동작 안 함
    console.log('최종 추가된 음식:', selectedItems);
    navigate(-1);
  };

  return (
    <Container>
      <SearchBar />

      <ItemList>
        {items.map((item) => {
          const isSelected = selectedItems.some(
            (selected) => selected.id === item.id,
          );
          return (
            <FoodListItem
              key={item.id}
              item={item}
              isSelected={isSelected}
              onToggle={() => handleToggleItem(item)}
            />
          );
        })}
      </ItemList>

      {selectedItems.length > 0 && (
        <SelectedItems>
          {selectedItems.map((item) => (
            <SelectedItemChip key={item.id}>
              {item.name}
              <X size={14} onClick={() => handleToggleItem(item)} />
            </SelectedItemChip>
          ))}
        </SelectedItems>
      )}

      <ButtonSection>
        <Button2
          variant={selectedItems.length > 0 ? 'primary' : 'disabled'}
          onClick={handleConfirm}
        >
          추가하기
        </Button2>
      </ButtonSection>
    </Container>
  );
};

export default AddFoodPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ItemList = styled.ul`
  flex: 1;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ButtonSection = styled.div`
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing[8]};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;

const SelectedItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const SelectedItemChip = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 16px;
  font-size: 14px;

  svg {
    cursor: pointer;
  }
`;
