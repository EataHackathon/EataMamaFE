import { type ReactNode } from 'react';
import styled from '@emotion/styled';
import { Check } from 'lucide-react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'disabled';
  onClick?: () => void;
};

type StyledButtonProps = {
  variant: 'primary' | 'disabled';
};

const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {variant === 'primary' && <Check size={20} />}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
  font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
  border-radius: 50px;
  cursor: 'pointer';
  gap: 10px;

  padding: ${(props) =>
    props.variant === 'primary'
      ? `${props.theme.spacing[4]} ${props.theme.spacing[6]}`
      : `${props.theme.spacing[4]} ${props.theme.spacing[6]}`};

  color: ${(props) =>
    props.variant === 'primary'
      ? props.theme.colors.text.white
      : props.theme.colors.text.disabled};

  background-color: ${(props) =>
    props.variant === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.disabled};
`;

export default Button;
