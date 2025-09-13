import SearchBar from '@/components/common/SearchBar';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { useGetSearch } from './hooks';
import { ResultsSection } from './components';

const SearchResultPage = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const query = urlParams.get('query') || '';
  const type = urlParams.get('type') || 'INGREDIENT';

  const { data, isPending } = useGetSearch(query, type);

  if (isPending || !data) return null;
  const items = data?.pages.flatMap((page) => page.data.content) ?? [];

  return (
    <Container>
      <SearchBar />
      <ResultsSection data={items} />
    </Container>
  );
};

export default SearchResultPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;
