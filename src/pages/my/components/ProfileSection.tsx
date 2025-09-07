import { Typography } from '@/components/common';
import styled from '@emotion/styled';

const ProfileSection = () => {
  return (
    <Section>
      <TypoWrapper>
        <Typography variant='subtitle' weight='bold'>
          땅콩이살뺄거야
        </Typography>
        <Typography variant='body2' weight='medium' color='sub'>
          hanhui1823@gmail.com
        </Typography>
      </TypoWrapper>
      <IconWrapper>
        <IconDiv />
      </IconWrapper>
    </Section>
  );
};

export default ProfileSection;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
`;

const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconDiv = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
