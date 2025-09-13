import SearchBar from '@/components/common/SearchBar';
import styled from '@emotion/styled';
// import { useLocation } from 'react-router-dom';
// import { useGetSearch } from './hooks';
import { searchData } from './mock/search';
import { ResultsSection } from './components';

const SearchResultPage = () => {
  // const location = useLocation();
  // const urlParams = new URLSearchParams(location.search);
  // const query = urlParams.get('query') || '';
  // const type = urlParams.get('type') || 'INGREDIENT';

  // const { data, fetchNextPage, hasNextPage, isPending } = useGetSearch(
  //   query,
  //   type,
  // );

  // if (isPending || !data) return null;

  return (
    <Container>
      <SearchBar />
      <ResultsSection data={searchData.content} />
    </Container>
  );
};

export default SearchResultPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;
