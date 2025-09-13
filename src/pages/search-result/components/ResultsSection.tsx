import styled from '@emotion/styled';
import ResultItem from './ResultItem';

const ResultsSection = ({
  data,
}: {
  data: Array<{ id: number; name: string; kcal: number; gram: number }>;
}) => {
  return (
    <Results>
      {data.map((item) => (
        <ResultItem key={item.id} item={item} />
      ))}
    </Results>
  );
};

export default ResultsSection;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[20]};
`;
