import styled from '@emotion/styled';
import Typography from './Typography';

type RatingButtonProps = {
  variant: 'GOOD' | 'OK' | 'CAUTION';
};

const RatingText = {
  GOOD: '좋음 👍',
  OK: '보통 👌',
  CAUTION: '나쁨 👎',
};

const RatingButton = ({ variant }: RatingButtonProps) => {
  return (
    <Box variant={variant}>
      <Typography variant='body3' color={variant}>
        {RatingText[variant]}
      </Typography>
    </Box>
  );
};

export default RatingButton;

const Box = styled.div<{ variant: 'GOOD' | 'OK' | 'CAUTION' }>`
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border-radius: 8px;
  background-color: ${({ variant, theme }) => theme.colors.status[variant]};
`;
