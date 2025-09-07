import { Typography } from '@/components/common';
import InfoItem from './InfoItem';
import styled from '@emotion/styled';

const infoData = [
  { id: 1, label: '키', value: '170cm' },
  { id: 2, label: '몸무게', value: '60kg' },
  { id: 3, label: '임신주수', value: '12주' },
  { id: 4, label: '알러지', value: '땅콩' },
  { id: 5, label: '특이사항', value: '없음' },
];

const InfoSection = () => {
  return (
    <Section>
      <ItemWrapper>
        <Typography variant='subtitle' weight='medium'>
          개인 정보
        </Typography>
        <Typography variant='body2' weight='medium' color='sub'>
          수정
        </Typography>
      </ItemWrapper>
      {infoData.map((item) => (
        <InfoItem key={item.id} label={item.label} value={item.value} />
      ))}
    </Section>
  );
};

export default InfoSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
`;
