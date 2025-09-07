import React, { useState } from "react";
import styled from "@emotion/styled";
import { View } from "../types";
import { Button } from "../components/ui";
import { 
  Container, 
  MainCard, 
  Navigation, 
  ContentArea,
  StudentTitle
} from "../styles";
import HomeworkView from "../../components/HomeworkView";
import ClassmatesView from "../../components/ClassmatesView";

const SunIconSvg = styled.svg`
  height: 3rem;
  width: 3rem;
  color: #fbbf24;
  fill: currentColor;
`;

const SunIcon = () => (
  <SunIconSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1zm0 12c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zm-6.36-8.64l-1.42-1.42c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.42 1.42c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zm12.72 0l1.42-1.42c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-1.42 1.42c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0zM6.34 17.66l-1.42 1.42c-.39.39-1.02.39-1.41 0s-.39 1.02 0 1.41l1.42-1.42c.39-.39.39-1.02 0-1.41s-1.03-.39-1.41 0zm12.72 0l1.42 1.42c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-1.42-1.42c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0z" />
  </SunIconSvg>
);

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  flex-wrap: wrap;
`;

const NavButton = styled(Button)<{ $isActive: boolean }>`
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease;
  transform: ${props => props.$isActive ? 'scale(1.05)' : 'scale(1)'};
  
  background-color: ${props => props.$isActive ? '#fbbf24' : 'rgba(255, 255, 255, 0.6)'} !important;
  color: ${props => props.$isActive ? '#ffffff' : '#4b5563'} !important;
  box-shadow: ${props => props.$isActive ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    background-color: ${props => props.$isActive ? '#fbbf24' : 'rgba(255, 255, 255, 0.9)'} !important;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.3) !important;
  }
`;

const StudentApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Homework);

  return (
    <Container>
      <MainCard>
        <Header>
          <SunIcon />
          <StudentTitle>
            Angel School
          </StudentTitle>
        </Header>

        <Navigation>
          <NavButton
            onClick={() => setCurrentView(View.Homework)}
            $isActive={currentView === View.Homework}
            variant="secondary"
            size="large"
          >
            Homework
          </NavButton>
          <NavButton
            onClick={() => setCurrentView(View.Classmates)}
            $isActive={currentView === View.Classmates}
            variant="secondary"
            size="large"
          >
            Classmates
          </NavButton>
        </Navigation>

        <ContentArea>
          {currentView === View.Homework ? (
            <HomeworkView />
          ) : (
            <ClassmatesView />
          )}
        </ContentArea>
      </MainCard>
    </Container>
  );
};

export default StudentApp;