import { Outlet } from 'react-router-dom';

export type LayoutType = 'none' | 'header' | 'navigation';

type AppLayoutProps = {
  layoutType?: LayoutType;
};

const AppLayout = ({ layoutType = 'none' }: AppLayoutProps) => {
  return (
    <div>
      {layoutType === 'header' && <header>Header</header>}
      <Outlet />
      {layoutType === 'navigation' && <footer>Footer</footer>}
    </div>
  );
};

export default AppLayout;
