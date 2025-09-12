import styled from '@emotion/styled';
import { StatusTag } from './StatusTag';

const Summary = () => {
  return (
    <Container>
      <Header>
        <Title>오늘 하루 요약</Title>
        <StatusTag status='CAUTION' text='당 과다' />
      </Header>
      <Content>
        <p>
          임산부가 당을 과하게 섭취하면 혈당이 급격히 올라 임신성 당뇨병 위험이
          커져요. 당이 당길 때는 단백질이 풍부한 간식을 먹어요. 액상과당을
          피하고, 단맛은 천연 감미료로 대체하는 게 좋아요.
        </p>
      </Content>
    </Container>
  );
};

export default Summary;

const Container = styled.section``;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]} 0;
`;
const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
`;
const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[10]};
  padding: ${({ theme }) => theme.spacing[5]};
  line-height: ${({ theme }) => theme.typography.body3.lineHeight};
`;
