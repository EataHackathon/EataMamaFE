import { Typography } from '@/components/common';
import { useModal } from '@/contexts';
import styled from '@emotion/styled';
import { X } from 'lucide-react';
import { formFields, type FormField } from './InfoSection';
import { useState } from 'react';

type EditModalProps = {
  infoData: Record<FormField['id'], string>;
  setInfoData: React.Dispatch<
    React.SetStateAction<Record<FormField['id'], string>>
  >;
};

const EditModal = ({ infoData, setInfoData }: EditModalProps) => {
  const { isOpen, closeModal } = useModal();
  const [editData, setEditData] = useState(infoData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInfoData(editData);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <Backdrop onClick={closeModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Typography variant='subtitle' weight='bold'>
          내 정보 수정
        </Typography>
        <CloseBox onClick={closeModal}>
          <X />
        </CloseBox>
        <Form onSubmit={handleSubmit}>
          {formFields.map(({ id, label, unit }) => (
            <InputField key={id}>
              <Label>{label}</Label>
              <Input
                type='text'
                value={editData[id]}
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, [id]: e.target.value }))
                }
              />
              <div>{unit}</div>
            </InputField>
          ))}
          <Button type='submit'>
            <Typography variant='body1' weight='bold' color='white'>
              저장
            </Typography>
          </Button>
        </Form>
      </ModalBox>
    </Backdrop>
  );
};

export default EditModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing[6]};
`;

const ModalBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  background-color: white;
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const CloseBox = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[2]};
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Label = styled.label`
  width: 80px;
  flex-shrink: 0;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing[2]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[0]}`};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;
`;
