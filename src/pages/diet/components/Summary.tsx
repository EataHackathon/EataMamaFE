import styled from '@emotion/styled';
import { useEffect } from 'react';
import { usePostDayAdvice } from '../hooks';

const Summary = ({
  dailyAdvice,
  dayLogId,
}: {
  dayLogId: number;
  dailyAdvice: string | null;
}) => {
  const { postDayAdviceMutate } = usePostDayAdvice();

  useEffect(() => {
    postDayAdviceMutate(dayLogId);
  }, [dayLogId, postDayAdviceMutate]);

  return (
    <Container>
      <Header>
        <Title>오늘 하루 요약</Title>
      </Header>
      <Content>
        <p>{dailyAdvice}</p>
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
