import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Spinner = styled.div<LoadingSpinnerProps>`
  width: ${({ size }) => {
    switch (size) {
      case 'small': return '20px';
      case 'large': return '48px';
      default: return '32px';
    }
  }};
  
  height: ${({ size }) => {
    switch (size) {
      case 'small': return '20px';
      case 'large': return '48px';
      default: return '32px';
    }
  }};
  
  border: 3px solid #f3f4f6;
  border-top: 3px solid ${({ color }) => color || '#3b82f6'};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  color 
}) => {
  return (
    <SpinnerWrapper>
      <Spinner size={size} color={color} />
    </SpinnerWrapper>
  );
};