import styled from '@emotion/styled';
import type { TabProps } from '../../types';

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 12px 24px;
  background-color: ${({ isActive }) => isActive ? '#3b82f6' : 'transparent'};
  color: ${({ isActive }) => isActive ? 'white' : '#6b7280'};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${({ isActive }) => isActive ? '#2563eb' : '#f3f4f6'};
    color: ${({ isActive }) => isActive ? 'white' : '#374151'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

export const Tab: React.FC<TabProps> = ({ 
  label, 
  value, 
  isActive, 
  onClick 
}) => {
  return (
    <TabButton 
      isActive={isActive} 
      onClick={() => onClick(value)}
    >
      {label}
    </TabButton>
  );
};