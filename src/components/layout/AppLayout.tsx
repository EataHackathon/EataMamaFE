import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import TheHeader, { type HeaderType } from './TheHeader';
import TheNavigation from './TheNavigation';

export type LayoutType = 'none' | HeaderType;

type AppLayoutProps = {
  layoutType?: LayoutType;
};

const AppLayout = ({ layoutType = 'none' }: AppLayoutProps) => {
  return (
    <Background>
      <Container>
        {layoutType !== 'none' && <TheHeader type={layoutType} />}
        <Main>
          <Outlet />
        </Main>
        {layoutType !== 'none' && <TheNavigation />}
      </Container>
    </Background>
  );
};

export default AppLayout;

const Background = styled.div`
  width: 100%;
  min-height: 100dvh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 auto;
  padding: 0;
`;

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[4]};
`;
