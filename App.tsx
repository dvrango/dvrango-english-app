import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { View } from "./types";
import HomeworkView from "./components/HomeworkView";
import ClassmatesView from "./components/ClassmatesView";

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

const Container = styled.div`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const MainCard = styled.main`
  width: 100%;
  max-width: 56rem;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  border: 4px solid rgba(255, 255, 255, 0.5);

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  color: #374151;
  margin-left: 1rem;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07));

  @media (min-width: 640px) {
    font-size: 3.75rem;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    gap: 2rem;
  }
`;

const NavButton = styled.button<{ $isActive: boolean }>`
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.3s ease;
  transform: ${props => props.$isActive ? 'scale(1.05)' : 'scale(1)'};
  outline: none;
  border: none;
  cursor: pointer;

  background-color: ${props => props.$isActive ? '#fbbf24' : 'rgba(255, 255, 255, 0.6)'};
  color: ${props => props.$isActive ? '#ffffff' : '#4b5563'};
  box-shadow: ${props => props.$isActive ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'};

  &:hover {
    background-color: ${props => props.$isActive ? '#fbbf24' : 'rgba(255, 255, 255, 0.9)'};
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.3);
  }
`;

const ContentArea = styled.div`
  min-height: 400px;
`;

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Homework);

  return (
    <Container>
      <MainCard>
        <Header>
          <SunIcon />
          <Title>
            Angel School
          </Title>
        </Header>

        <Navigation>
          <NavButton
            onClick={() => setCurrentView(View.Homework)}
            $isActive={currentView === View.Homework}
          >
            Homework
          </NavButton>
          <NavButton
            onClick={() => setCurrentView(View.Classmates)}
            $isActive={currentView === View.Classmates}
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

export default App;
