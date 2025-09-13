import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Search, X } from 'lucide-react';

import Button2 from '@/components/common/Button2';
import FoodListItem from '@/components/common/FoodListItem';
import { useGetSearchMeal } from './hooks';
import type { Food } from '@/api/getSearchMeal';
import { useFoodStore } from '@/stores/foodStore';

const AddFoodPage = () => {
  const navigate = useNavigate();

  const { selectedFoods, toggleFood } = useFoodStore();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const [searchTerm, setSearchTerm] = useState(
    () => urlParams.get('query') || '',
  );
  const { data, isPending } = useGetSearchMeal(searchTerm);
  const items = data?.pages.flatMap((page) => page.data.content) ?? [];

  if (isPending || !items) return null;
  const handleToggleItem = (item: Food) => {
    toggleFood(item);
  };

  const handleConfirm = () => {
    if (selectedFoods.length === 0) return; // 선택된 아이템 없으면 동작 안 함
    navigate(-1);
  };

  const searchClick = () => {
    urlParams.set('query', searchTerm);
    navigate(`${location.pathname}?${urlParams.toString()}`);
  };

  return (
    <Container>
      <SearchContainer
        onSubmit={(e) => {
          e.preventDefault();
          searchClick();
        }}
      >
        <SearchInput
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='음식 이름을 검색하세요'
        />
        <SearchIcon type='submit'>
          <Search size={40} color='#e91e63' />
        </SearchIcon>
      </SearchContainer>

      <ItemList>
        {items.map((item, index) => {
          const isSelected = selectedFoods.some(
            (selected) => selected.id === item.id,
          );
          return (
            <FoodListItem
              key={`${item.id}-${index}`}
              item={item}
              isSelected={isSelected}
              onToggle={() => handleToggleItem(item)}
            />
          );
        })}
      </ItemList>

      <SelectBox>
        {selectedFoods.length > 0 && (
          <SelectedItems>
            {selectedFoods.map((item, index) => (
              <SelectedItemChip key={`${item.id}-${index}`}>
                {item.name}
                <X size={14} onClick={() => handleToggleItem(item)} />
              </SelectedItemChip>
            ))}
          </SelectedItems>
        )}
      </SelectBox>

      <ButtonSection>
        <Button2
          variant={selectedFoods.length > 0 ? 'primary' : 'disabled'}
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
  min-height: 100dvh;
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

const SearchContainer = styled.form`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  align-items: center;
  justify-content: center;
`;
const SearchInput = styled.input`
  width: 78%;
  height: 56px;
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  padding: 0 ${(props) => props.theme.spacing[4]};

  box-sizing: border-box;
`;
const SearchIcon = styled.button`
  cursor: pointer;
`;

const SelectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: ${({ theme }) => theme.spacing[6]};
`;
