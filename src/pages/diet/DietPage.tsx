import { Button } from '@/components/common';
import styled from '@emotion/styled';

const DietPage = () => {
  return (
    <div>
      <SearchButton>
        <Button variant='primary'>음식 검색</Button>
        <Button variant='disabled'>재료 검색</Button>
      </SearchButton>
    </div>
  );
};

export default DietPage;

const SearchButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
