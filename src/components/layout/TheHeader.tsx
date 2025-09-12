import styled from '@emotion/styled';
import Typography from '../common/Typography';
import { HEADER_HEIGHT } from '@/constants';

export type HeaderType = 'left' | 'center';

type TheHeaderProps = {
  type: HeaderType;
};

const TheHeader = ({ type }: TheHeaderProps) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getDate()).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <Header type={type}>
      <Typography variant='title' weight='bold' as='h1'>
        {formattedDate}
      </Typography>
    </Header>
  );
};

export default TheHeader;

const Header = styled.header<{ type: HeaderType }>`
  position: sticky;
  top: 0;
  z-index: 100;
  height: ${HEADER_HEIGHT}px;
  text-align: ${(props) => props.type};
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.background};
`;
