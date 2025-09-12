import SearchBar from '@/components/common/SearchBar';
import styled from '@emotion/styled';

const SearchResultPage = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export default SearchResultPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;
