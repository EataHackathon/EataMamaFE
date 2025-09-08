import { KakaoLogin, Logo } from '@/assets';
import styled from '@emotion/styled';

const LoginPage = () => {
  return (
    <Container>
      <Img src={Logo} alt='Logo' />
      <img src={KakaoLogin} alt='Kakao Login' />
    </Container>
  );
};
export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[16]};
`;

const Img = styled.img`
  width: 160px;
  height: 200px;
`;
