import styled from '@emotion/styled';
import { useTitleStore } from '@/stores';
import Typography from '../common/Typography';

export type HeaderType = 'left' | 'center';

type TheHeaderProps = {
  type: HeaderType;
};

const TheHeader = ({ type }: TheHeaderProps) => {
  const { title } = useTitleStore();

  return (
    <Header type={type}>
      <Typography variant='title' weight='bold'>
        {title}
      </Typography>
    </Header>
  );
};

export default TheHeader;

const Header = styled.header<{ type: HeaderType }>`
  height: 64px;
  text-align: ${(props) => props.type};
  padding: ${({ theme }) => theme.spacing[4]};
`;
