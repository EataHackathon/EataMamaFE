import styled from '@emotion/styled';
import { Typography } from '../common';
import { Link } from 'react-router-dom';

type NavigationItemProps = {
  icon: React.ReactNode;
  label: string;
  path: string;
  selected: boolean;
};

const NavigationItem = ({
  icon,
  label,
  path,
  selected,
}: NavigationItemProps) => {
  return (
    <Item to={path} selected={selected}>
      {icon}
      <Typography
        variant='label'
        weight={selected ? 'bold' : 'medium'}
        color={selected ? 'primary' : 'default'}
      >
        {label}
      </Typography>
    </Item>
  );
};

export default NavigationItem;

const Item = styled(Link)<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.gray[100]};
`;
