import { useTitleStore } from '@/stores';
import { useEffect } from 'react';
import { InfoSection, ProfileSection } from './components';
import styled from '@emotion/styled';
import { useGetUser } from './hooks';

const MyPage = () => {
  const { myData, isPending } = useGetUser();
  const { setTitle } = useTitleStore();

  useEffect(() => {
    setTitle('내 프로필');
  }, [setTitle]);

  if (isPending || !myData) return null;

  return (
    <Container>
      <ProfileSection
        nickname={myData.data.nickname}
        email={myData.data.email}
        ImageURL={myData.data.profileImageUrl}
      />
      <InfoSection
        nickname={myData.data.nickname}
        height={myData.data.height}
        weight={myData.data.weight}
        week={myData.data.week}
        conditions={myData.data.conditions}
        allergies={myData.data.allergys}
      />
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
