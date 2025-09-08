import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { ItemInfoSection } from './components';

const SearchPage = () => {
  return (
    <Container>
      <ItemInfoSection />
      <Outlet />
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  padding: 16px;
  background-color: #f9f9f9;
`;
