import { ROUTE_PATH } from '@/routes/paths';
import { useTitleStore } from '@/stores';
import { useLoginStore } from '@/stores/login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const { setTitle } = useTitleStore();
  const { token } = useLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    setTitle('Main Page');
  }, [setTitle]);

  useEffect(() => {
    if (!token) {
      navigate(ROUTE_PATH.LOGIN);
    } else {
      navigate(ROUTE_PATH.DIET);
    }
  }, [token, navigate]);

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

export default MainPage;
