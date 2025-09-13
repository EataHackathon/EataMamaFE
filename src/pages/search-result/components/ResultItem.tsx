import { Typography } from '@/components/common';
import styled from '@emotion/styled';
import { ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultItem = ({
  item,
}: {
  item: { id: number; name: string; kcal: number; gram: number };
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(location.search);
  const type = urlParams.get('type');
  const gotoSearchPage = () => {
    if (type === 'FOOD') {
      navigate(`/search/food?name=${item.name}`);
    } else if (type === 'INGREDIENT') {
      navigate(`/search/ingredient?name=${item.name}`);
    }
  };

  return (
    <Container onClick={gotoSearchPage}>
      <Title>
        <Typography variant='body1' weight='bold' as='h3'>
          {item.name}
        </Typography>
        <Typography variant='body2' color='sub' weight='medium'>
          {item.gram}g
        </Typography>
      </Title>
      <Box>
        <Typography variant='body2' color='sub' weight='bold'>
          {item.kcal}kcal
        </Typography>
      </Box>
      <ChevronRight />
    </Container>
  );
};

export default ResultItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  gap: ${({ theme }) => theme.spacing[2]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[20]};
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const Box = styled.div`
  flex: 1;
  text-align: right;
`;
