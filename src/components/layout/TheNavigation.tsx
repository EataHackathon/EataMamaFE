import styled from '@emotion/styled';
import { CalendarCheck, UserRound, Utensils } from 'lucide-react';
import NavigationItem from './NavigationItem';
import { NAV_HEIGHT } from '@/constants';

const navigationItems = [
  { id: 1, icon: <CalendarCheck size={30} />, label: '캘린더' },
  { id: 2, icon: <Utensils size={30} />, label: '내식단' },
  { id: 3, icon: <UserRound size={30} />, label: '내정보' },
];

const TheNavigation = () => {
  return (
    <Navigation>
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          selected={false}
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
