import { Typography } from '@/components/common';
import { ROUTE_PATH } from '@/routes/paths';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

const MealPlusSection = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const gotoAddMeal = () => {
    const title = urlParams.get('title') ?? ''; // 없으면 빈 문자열
    urlParams.set('title', title);
    return `${ROUTE_PATH.ADD_FOOD}?${urlParams.toString()}`;
  };

  return (
    <Section>
      <Typography variant='subtitle' weight='bold' as='label'>
        식단 추가
      </Typography>
      <Button to={gotoAddMeal()}>
        <Typography variant='body3' weight='medium' color='white'>
          음식 검색하기
        </Typography>
      </Button>
    </Section>
  );
};

export default MealPlusSection;

const Section = styled.section`
  padding: 0 ${({ theme }) => theme.spacing[9]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Button = styled(Link)`
  width: fit-content;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[16]}`};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;
