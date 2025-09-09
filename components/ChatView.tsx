import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
  min-height: 300px;
`;

const ComingSoonText = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #4b5563;
  margin-bottom: 1rem;
`;

const ChatIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.7;
`;

const SubText = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0.5rem 0;
  line-height: 1.6;
`;

const FeatureList = styled.div`
  background-color: #f8fafc;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-top: 2rem;
  border: 2px solid #e2e8f0;
  max-width: 500px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #4b5563;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureIcon = styled.span`
  font-size: 1.25rem;
`;

const ChatView: React.FC = () => {
  return (
    <Container>
      <ChatIcon>💬</ChatIcon>
      <ComingSoonText>Estamos Trabajando</ComingSoonText>
      <SubText>
        Aquí podrás chatear en inglés con tus compañeros y obtener feedback
        automático por IA para mejorar tus mensajes
      </SubText>

      <FeatureList>
        <FeatureItem>
          <FeatureIcon>🌍</FeatureIcon>
          <span>Chat en tiempo real en inglés con compañeros de clase</span>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>🤖</FeatureIcon>
          <span>
            Feedback automático de IA para mejorar gramática y vocabulario
          </span>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>📈</FeatureIcon>
          <span>Sugerencias personalizadas para perfeccionar tu inglés</span>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>🎯</FeatureIcon>
          <span>Práctica conversacional adaptada a tu nivel</span>
        </FeatureItem>
      </FeatureList>
    </Container>
  );
};

export default ChatView;
