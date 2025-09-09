import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface SplashScreenProps {
  onFinish: () => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-20px) scale(1.1);
  }
  60% {
    transform: translateY(-10px) scale(1.05);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.8s ease-out;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const SunIcon = styled.div`
  font-size: 5rem;
  color: #fbbf24;
  margin-bottom: 1rem;
  animation: ${bounce} 2s infinite, ${rotate} 8s linear infinite;
  filter: drop-shadow(0 10px 20px rgba(251, 191, 36, 0.3));
`;

const AppTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  text-align: center;
  animation: ${slideUp} 1s ease-out 0.3s both;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0.5rem 0 0 0;
  text-align: center;
  animation: ${slideUp} 1s ease-out 0.6s both;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  animation: ${slideUp} 1s ease-out 0.9s both;
`;

const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const LoadingProgress = styled.div<{ progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #fbbf24, #f59e0b);
  border-radius: 2px;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
`;

const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin: 0;
  font-weight: 500;
`;

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500); // Pequeña pausa antes de terminar
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Progreso aleatorio pero consistente
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <Container>
      <LogoContainer>
        <SunIcon>☀️</SunIcon>
        <AppTitle>English Conversation Club</AppTitle>
        <Subtitle>ECC</Subtitle>
      </LogoContainer>
      
      <LoadingContainer>
        <LoadingBar>
          <LoadingProgress progress={Math.min(progress, 100)} />
        </LoadingBar>
        <LoadingText>
          {progress < 30 ? 'Iniciando aplicación...' :
           progress < 60 ? 'Cargando recursos...' :
           progress < 90 ? 'Preparando interfaz...' :
           'Casi listo...'}
        </LoadingText>
      </LoadingContainer>
    </Container>
  );
};

export default SplashScreen;