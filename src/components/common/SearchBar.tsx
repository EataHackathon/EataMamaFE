import styled from '@emotion/styled';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type='text' placeholder='음식 이름을 검색하세요' />
      <SearchIcon>
        <Search size={40} color='#e91e63' />
      </SearchIcon>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
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
const SearchIcon = styled.div`
  cursor: pointer;
`;
