import { Typography } from '@/components/common';
import InfoItem from './InfoItem';
import styled from '@emotion/styled';
import { useState } from 'react';
import EditModal from './EditModal';
import { useModal } from '@/contexts';
import type { Allergy, Condition } from '../hooks';

export const formFields = [
  { id: 'height', label: '키', unit: 'cm' },
  { id: 'weight', label: '몸무게', unit: 'kg' },
  { id: 'pregnancyWeeks', label: '임신주수', unit: '주' },
  { id: 'allergies', label: '알러지', unit: '' },
  { id: 'specialNotes', label: '특이사항', unit: '' },
] as const;

export type FormField = (typeof formFields)[number];

type InfoSectionProps = {
  nickname: string;
  height: number;
  weight: number;
  week: number;
  conditions: Condition[];
  allergies: Allergy[];
};

const InfoSection = ({
  nickname,
  height,
  weight,
  week,
  conditions,
  allergies,
}: InfoSectionProps) => {
  const { openModal } = useModal();
  const [formValues, setFormValues] = useState<Record<FormField['id'], string>>(
    {
      height: String(height || ''),
      weight: String(weight || ''),
      pregnancyWeeks: String(week || ''),
      allergies:
        (allergies?.length ?? 0) > 0
          ? allergies.map((a) => a.allergyName).join(', ')
          : '없음',
      specialNotes:
        (conditions?.length ?? 0) > 0
          ? conditions.map((c) => c.diseaseName).join(', ')
          : '없음',
    },
  );

  return (
    <Section>
      <ItemWrapper>
        <Typography variant='subtitle' weight='medium'>
          개인 정보
        </Typography>
        <button type='button' onClick={() => openModal()}>
          <Typography variant='body2' weight='medium' color='sub'>
            수정
          </Typography>
        </button>
      </ItemWrapper>
      {formFields.map(({ id, label, unit }) => (
        <InfoItem key={id} label={label} value={formValues[id] + unit} />
      ))}

      <EditModal
        nickname={nickname}
        infoData={formValues}
        setInfoData={setFormValues}
      />
    </Section>
  );
};

export default InfoSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
`;
