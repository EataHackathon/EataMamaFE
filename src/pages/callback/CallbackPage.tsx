import { useLoginStore } from '@/stores/login';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CallbackPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useLoginStore((state) => state.token);
  const loginFunc = useLoginStore((state) => state.login);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paramToken = params.get('token');

    if (paramToken) {
      loginFunc(paramToken);
      navigate('/', { replace: true });
    } else if (token) {
      navigate('/', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }, [navigate, location.search, token, loginFunc]);

  return <div>Callback Page</div>;
};

export default CallbackPage;
