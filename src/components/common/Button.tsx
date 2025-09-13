import { type ReactNode } from 'react';
import styled from '@emotion/styled';
import { Check } from 'lucide-react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'disabled';
  onClick?: () => void;
};

type StyledButtonProps = {
  variant: 'primary' | 'disabled';
};

const Button = ({ children, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {variant === 'primary' && <Check size={20} />}
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  width: 100%;
  max-width: 250px;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
  border-radius: 50px;
  cursor: pointer;
  gap: 10px;

  padding: ${(props) => `${props.theme.spacing[4]} ${props.theme.spacing[0]}`};

  color: ${(props) =>
    props.variant === 'primary'
      ? props.theme.colors.text.white
      : props.theme.colors.text.disabled};

  background-color: ${(props) =>
    props.variant === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.disabled};
`;
