import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

export type LayoutType = 'none' | 'left' | 'center';

type AppLayoutProps = {
  layoutType?: LayoutType;
};

const AppLayout = ({ layoutType = 'left' }: AppLayoutProps) => {
  return (
    <Background>
      <Container>
        {layoutType !== 'none' && <Header type={layoutType}>Header</Header>}
        <Outlet />
        <footer>Footer</footer>
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
  max-width: 600px;
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 auto;
  padding: 0;
`;

const Header = styled.header<{ type: LayoutType }>`
  height: 64px;
  text-align: ${(props) => props.type};
`;
