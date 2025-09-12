import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import TheHeader, { type HeaderType } from './TheHeader';
import TheNavigation from './TheNavigation';

export type HeaderLayoutType = 'none' | HeaderType;

export type NavigationLayoutType = 'none' | 'navigation';

type AppLayoutProps = {
  headerLayoutType?: HeaderLayoutType;
  navigationLayoutType?: NavigationLayoutType;
};

const AppLayout = ({
  headerLayoutType = 'none',
  navigationLayoutType = 'none',
}: AppLayoutProps) => {
  return (
    <Background>
      <Container>
        {headerLayoutType !== 'none' && <TheHeader type={headerLayoutType} />}
        <Main>
          <Outlet />
        </Main>
        {navigationLayoutType !== 'none' && <TheNavigation />}
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
`;
