import styled from '@emotion/styled';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ size }) => {
    switch (size) {
      case 'small': return '8px 16px';
      case 'large': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  
  font-size: ${({ size }) => {
    switch (size) {
      case 'small': return '14px';
      case 'large': return '18px';
      default: return '16px';
    }
  }};
  
  background-color: ${({ variant, disabled }) => {
    if (disabled) return '#e5e7eb';
    switch (variant) {
      case 'secondary': return '#f3f4f6';
      case 'danger': return '#ef4444';
      default: return '#3b82f6';
    }
  }};
  
  color: ${({ variant, disabled }) => {
    if (disabled) return '#9ca3af';
    switch (variant) {
      case 'secondary': return '#374151';
      default: return 'white';
    }
  }};
  
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${({ variant, disabled }) => {
      if (disabled) return '#e5e7eb';
      switch (variant) {
        case 'secondary': return '#e5e7eb';
        case 'danger': return '#dc2626';
        default: return '#2563eb';
      }
    }};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ variant }) => {
      switch (variant) {
        case 'danger': return 'rgba(239, 68, 68, 0.3)';
        default: return 'rgba(59, 130, 246, 0.3)';
      }
    }};
  }
`;

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  type = 'button'
}) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
    >
      {children}
    </StyledButton>
  );
};