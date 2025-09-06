import styled from '@emotion/styled';
import { Typography } from '../common';

type NavigationItemProps = {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
};

const NavigationItem = ({ icon, label, selected }: NavigationItemProps) => {
  return (
    <Item selected={selected}>
      {icon}
      <Typography variant='label' weight={selected ? 'bold' : 'regular'}>
        {label}
      </Typography>
    </Item>
  );
};

export default NavigationItem;

const Item = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.gray[100]};
`;
