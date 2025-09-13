import styled from '@emotion/styled';
import { Plus } from 'lucide-react';
import type { Intake } from '../hooks';
import { Link } from 'react-router-dom';

type MealCardProps = {
  title: string;
  imageUrl: string;
  description: string | null;
  tags: string | null;
  calories: Intake[] | null;
};

const MealCard = ({
  tags,
  calories,
  description,
  title,
  imageUrl,
}: MealCardProps) => {
  const gotoMealLog = (title: string) =>
    `/meal-log?title=${encodeURIComponent(title)}`;

  return (
    <CardContainer>
      <MealImage src={imageUrl} />
      <ContentContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <PlusButton to={gotoMealLog(title)}>
            <Plus color='white' size={22} />
          </PlusButton>
        </TitleContainer>
        {description && <Description>{description}</Description>}
        {tags && calories && (
          <TagContainer>
            <Tag>{tags}</Tag>
            <Calories>
              {calories.reduce((sum, intake) => sum + intake.intakeKcal, 0)}{' '}
              kcal
            </Calories>
          </TagContainer>
        )}
      </ContentContainer>
    </CardContainer>
  );
};

export default MealCard;

const Tag = styled.div``;
const Calories = styled.div``;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 ${({ theme }) => `${theme.spacing[5]}`};
  gap: 50px;
`;
const MealImage = styled.img`
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.spacing[5]}`};
  border-radius: 12px;
`;
const ContentContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 10px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const Title = styled.h2``;
const Description = styled.h3`
  flex: 1;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: 16px;
`;
const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing[3]}`};
  border-radius: ${({ theme }) => `${theme.spacing[3]}`};
  color: white;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const PlusButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #e91e63;
  border: none;
  cursor: pointer;
  padding: 0;
`;
