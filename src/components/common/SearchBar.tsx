import styled from '@emotion/styled';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const [searchTerm, setSearchTerm] = useState(
    () => urlParams.get('query') || '',
  );

  const searchClick = () => {
    urlParams.set('query', searchTerm);
    navigate(`/search-result?${urlParams.toString()}`);
  };

  return (
    <SearchContainer>
      <SearchInput
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='음식 이름을 검색하세요'
      />
      <SearchIcon onClick={searchClick}>
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
