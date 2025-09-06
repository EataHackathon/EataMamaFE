import styled from '@emotion/styled';
import { CalendarCheck, UserRound, Utensils } from 'lucide-react';
import NavigationItem from './NavigationItem';
import { NAV_HEIGHT } from '@/constants';
import { ROUTE_PATH } from '@/routes/paths';
import { useLocation } from 'react-router-dom';

const navigationItems = [
  {
    id: 1,
    icon: <CalendarCheck size={30} />,
    label: '캘린더',
    path: ROUTE_PATH.CALENDAR,
  },
  {
    id: 2,
    icon: <Utensils size={30} />,
    label: '내식단',
    path: ROUTE_PATH.DIET,
  },
  {
    id: 3,
    icon: <UserRound size={30} />,
    label: '내정보',
    path: ROUTE_PATH.MY,
  },
];

const TheNavigation = () => {
  const location = useLocation();

  return (
    <Navigation>
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          path={item.path}
          selected={location.pathname === item.path}
        />
      ))}
    </Navigation>
  );
};

export default TheNavigation;

const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: ${NAV_HEIGHT}px;
  align-items: center;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.1);
`;
