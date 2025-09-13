import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Search, X } from 'lucide-react';
import FoodListItem from '@/components/common/FoodListItem';

interface FoodItem {
  id: number;
  name: string;
  amount: string;
  calories: number;
}

const mockFoodItems: FoodItem[] = [
  { id: 1, name: '샐러드', amount: '120g', calories: 147 },
  { id: 2, name: '샐러드', amount: '242g', calories: 290 },
  { id: 3, name: '샐러드볼', amount: '200g', calories: 200 },
  { id: 4, name: '콥샐러드', amount: '200g', calories: 451.6 },
  { id: 5, name: '햄샐러드', amount: '350g', calories: 110 },
];

const AddItem = () => {
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
    // 여기서 선택된 아이템들(selectedItems)을 서버로 보내는 API를 호출
    console.log('최종 추가된 음식:', selectedItems);

    // API 호출 성공 후, 이전 페이지로 이동
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <SearchInputWrapper>
          <SearchInput placeholder='샐러드' />
          <SearchIcon />
        </SearchInputWrapper>
      </Header>

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
        <Footer>
          <SelectedItems>
            {selectedItems.map((item) => (
              <SelectedItemChip key={item.id}>
                {item.name}
                <X size={14} onClick={() => handleToggleItem(item)} />
              </SelectedItemChip>
            ))}
          </SelectedItems>
          <AddButton onClick={handleConfirm}>추가하기</AddButton>
        </Footer>
      )}
    </Container>
  );
};

export default AddItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.header`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 1px solid #f06292;
  border-radius: 999px;
  font-size: 16px;
  box-sizing: border-box;
  outline-color: #ec407a;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #f06292;
`;

const ItemList = styled.ul`
  flex: 1;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Footer = styled.footer`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  bottom: 0;
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
  background-color: ${({ theme }) => theme.colors.background};
  color: #c2185b;
  border-radius: 16px;
  font-size: 14px;

  svg {
    cursor: pointer;
  }
`;

const AddButton = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  background-color: #e91e63;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`;
