import { Typography } from '@/components/common';
import styled from '@emotion/styled';

type InfoItemProps = {
  label: string;
  value: string;
};

const InfoItem = ({ label, value }: InfoItemProps) => {
  return (
    <ItemWrapper>
      <Typography variant='body1' weight='medium'>
        {label}
      </Typography>
      <Typography variant='body1' weight='regular'>
        {value}
      </Typography>
    </ItemWrapper>
  );
};

export default InfoItem;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
`;
