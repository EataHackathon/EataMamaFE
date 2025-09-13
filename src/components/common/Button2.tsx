import { type ReactNode } from 'react';
import { type ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

// 1. props 타입 정의
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'disabled';
};

// 2. Styled component가 받을 props 타입 정의
type StyledProps = {
  variant: 'primary' | 'disabled';
};

const Button2 = ({ children, variant = 'primary', ...rest }: Props) => {
  const isDisabled = variant === 'disabled';
  return (
    <StyledButton variant={variant} disabled={isDisabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button2;

const StyledButton = styled.button<StyledProps>(({ theme, variant }) => ({
  // --- 공통 스타일 ---
  width: '100%',
  padding: `${theme.spacing[4]} 0`,
  borderRadius: '8px',
  border: 'none',
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.fontWeight.bold,
  cursor: 'pointer',
  textAlign: 'center',

  // --- 동적 스타일 ---
  backgroundColor:
    variant === 'primary' ? theme.colors.primary : theme.colors.disabled2,

  color: theme.colors.text.white,

  // --- 상태별 스타일 ---
  '&:hover:not(:disabled)': {
    filter: 'brightness(0.95)',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    filter: 'brightness(1)',
  },
}));
