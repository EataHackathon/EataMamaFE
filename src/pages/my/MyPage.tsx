import { useTitleStore } from '@/stores';
import { useEffect } from 'react';
import { InfoSection, ProfileSection } from './components';
import styled from '@emotion/styled';

const MyPage = () => {
  const { setTitle } = useTitleStore();

  useEffect(() => {
    setTitle('내 프로필');
  }, []);

  return (
    <Container>
      <ProfileSection />
      <InfoSection />
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[6]};
`;
