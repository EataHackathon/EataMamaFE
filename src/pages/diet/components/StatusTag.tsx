import styled from '@emotion/styled';

type Status = 'GOOD' | 'OK' | 'CAUTION';

type StatusTagProps = {
  status: Status;
  text: string;
};

type StyledTagProps = {
  status: Status;
};

export const StatusTag = ({ status, text }: StatusTagProps) => {
  return <StyledTag status={status}>{text}</StyledTag>;
};

const StyledTag = styled.div<StyledTagProps>`
  display: inline-block;
  padding: ${({ theme }) =>
    `${theme.spacing[1]} ${theme.spacing[2]}`}; /* 4px 8px */
  border-radius: 4px;
  font-size: ${({ theme }) => theme.typography.body2.fontSize}; /* 10px */
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  /* status 값에 따라 다른 색상 토큰을 사용합니다. */
  background-color: ${({ theme, status }) => theme.colors.status[status]};
  color: ${({ theme, status }) => theme.colors.text[status]};
`;
