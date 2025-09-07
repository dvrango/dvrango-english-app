import styled from '@emotion/styled';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  padding?: 'small' | 'medium' | 'large';
  shadow?: boolean;
  hover?: boolean;
  className?: string;
}

const StyledCard = styled.div<CardProps>`
  background-color: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  
  padding: ${({ padding }) => {
    switch (padding) {
      case 'small': return '16px';
      case 'large': return '32px';
      default: return '24px';
    }
  }};
  
  box-shadow: ${({ shadow }) => 
    shadow ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
  };
  
  transition: ${({ hover }) => hover ? 'all 0.2s ease-in-out' : 'none'};
  
  ${({ hover }) => hover && `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  `}
`;

export const Card: React.FC<CardProps> = ({ 
  children, 
  padding = 'medium',
  shadow = true,
  hover = false,
  className 
}) => {
  return (
    <StyledCard 
      padding={padding} 
      shadow={shadow} 
      hover={hover}
      className={className}
    >
      {children}
    </StyledCard>
  );
};