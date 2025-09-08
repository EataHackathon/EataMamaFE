import { Outlet } from 'react-router-dom';
import { ItemInfoSection } from './components';

const SearchPage = () => {
  return (
    <>
      <ItemInfoSection />
      <Outlet />
    </>
  );
};

export default SearchPage;
