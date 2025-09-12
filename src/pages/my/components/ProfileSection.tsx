import { Typography } from '@/components/common';
import styled from '@emotion/styled';

type ProfileSectionProps = {
  nickname: string;
  email: string;
  ImageURL: string;
};

const ProfileSection = ({ nickname, email, ImageURL }: ProfileSectionProps) => {
  return (
    <Section>
      <TypoWrapper>
        <Typography variant='subtitle' weight='bold'>
          {nickname}
        </Typography>
        <Typography variant='body2' weight='medium' color='sub'>
          {email}
        </Typography>
      </TypoWrapper>
      <IconWrapper>
        <Img src={ImageURL} alt={nickname} />
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

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;
