import { Breakfast } from '@/assets';
import styled from '@emotion/styled';

type ImageSectionProps = {
  mealName: string;
  setMealName: (name: string) => void;
};

const ImageSection = ({ mealName, setMealName }: ImageSectionProps) => {
  return (
    <Section>
      <ImageBox>
        <Img src={Breakfast} alt='Breakfast' />
        <Input
          type='text'
          placeholder='음식명 입력'
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        />
      </ImageBox>
    </Section>
  );
};

export default ImageSection;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[6]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Img = styled.img`
  width: 100%;
  max-width: 210px;
  height: 100%;
  max-height: 210px;
`;

const Input = styled.input`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  padding: ${({ theme }) => theme.spacing[2]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    color: inherit;
    font: inherit;
  }
`;
