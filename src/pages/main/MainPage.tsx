import { useTitleStore } from '@/stores';
import { useEffect } from 'react';

const MainPage = () => {
  const { setTitle } = useTitleStore();

  useEffect(() => {
    setTitle('Main Page');
  }, [setTitle]);

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

export default MainPage;
