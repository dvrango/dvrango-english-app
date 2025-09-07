import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useClases } from "../src/hooks";
import { Card, LoadingSpinner, Button } from "../src/components/ui";

const Container = styled.div`
  min-height: 100vh;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const MainCard = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #6366f1;
  color: white;
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4f46e5;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
  }
`;

const ErrorMessage = styled.div`
  background-color: #fee2e2;
  color: #991b1b;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #fca5a5;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ClaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ClaseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const ClaseDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ClaseInfo = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InfoNumber = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: #6366f1;
`;

const InfoLabel = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
  font-weight: 500;
`;

const ClaseDate = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #6b7280;
`;

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const AdminView: React.FC = () => {
  const { clases, loading, error, refetch: fetchClases } = useClases();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Container>
      <MainCard>
        <Header>
          <Title>👩‍🏫 English Teacher Admin Panel</Title>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Button
              onClick={fetchClases}
              disabled={loading}
              variant="secondary"
            >
              🔄 {loading ? "Loading..." : "Refresh"}
            </Button>
            <BackButton to="/">← Back to School</BackButton>
          </div>
        </Header>

        <Section>
          <SectionTitle>📚 Classes from Strapi</SectionTitle>

          {error && <ErrorMessage>Error loading classes: {error}</ErrorMessage>}

          {loading ? (
            <LoadingSpinner size="large" />
          ) : clases.length === 0 ? (
            <EmptyState>
              <EmptyIcon>📋</EmptyIcon>
              <h3>No Classes Found</h3>
              <p>No classes were found in the Strapi "Clase" collection.</p>
              <p>
                Make sure your Strapi instance is running and the API key is
                correct.
              </p>
            </EmptyState>
          ) : (
            <ClaseGrid>
              {clases.map((clase) => (
                <Card key={clase.id} hover shadow>
                  <ClaseTitle>
                    {clase.attributes?.nombre || `Class ${clase.id}`}
                  </ClaseTitle>
                  {clase.attributes?.descripcion && (
                    <ClaseDescription>
                      {clase.attributes.descripcion}
                    </ClaseDescription>
                  )}
                  {clase.content && (
                    <ClaseDescription>
                      {clase.content.length > 100
                        ? `${clase.content.substring(0, 100)}...`
                        : clase.content}
                    </ClaseDescription>
                  )}

                  <ClaseInfo>
                    <InfoItem>
                      <InfoNumber>{clase.id}</InfoNumber>
                      <InfoLabel>Class ID</InfoLabel>
                    </InfoItem>

                    <InfoItem>
                      <InfoNumber>
                        {clase.attributes.estudiantes?.length || 0}
                      </InfoNumber>
                      <InfoLabel>Students</InfoLabel>
                    </InfoItem>

                    <InfoItem>
                      <InfoNumber>
                        {clase.attributes.tareas?.length || 0}
                      </InfoNumber>
                      <InfoLabel>Tasks</InfoLabel>
                    </InfoItem>
                  </ClaseInfo>

                  <ClaseDate>
                    {clase.createdAt && (
                      <>Created: {formatDate(clase.createdAt)}</>
                    )}
                    {clase.updatedAt && clase.updatedAt !== clase.createdAt && (
                      <span> • Updated: {formatDate(clase.updatedAt)}</span>
                    )}
                    {clase.publishedAt && (
                      <span> • Published: {formatDate(clase.publishedAt)}</span>
                    )}
                  </ClaseDate>
                </Card>
              ))}
            </ClaseGrid>
          )}
        </Section>

        {clases.length > 0 && (
          <Section>
            <SectionTitle>📊 Summary Statistics</SectionTitle>
            <ClaseGrid>
              <Card>
                <ClaseTitle>Total Classes</ClaseTitle>
                <div style={{ textAlign: "center", padding: "1rem 0" }}>
                  <InfoNumber style={{ fontSize: "2rem" }}>
                    {clases.length}
                  </InfoNumber>
                </div>
              </Card>

              <Card>
                <ClaseTitle>Total Students</ClaseTitle>
                <div style={{ textAlign: "center", padding: "1rem 0" }}>
                  <InfoNumber style={{ fontSize: "2rem" }}>
                    {clases.reduce(
                      (total, clase) =>
                        total + (clase.attributes.estudiantes?.length || 0),
                      0
                    )}
                  </InfoNumber>
                </div>
              </Card>

              <Card>
                <ClaseTitle>Total Tasks</ClaseTitle>
                <div style={{ textAlign: "center", padding: "1rem 0" }}>
                  <InfoNumber style={{ fontSize: "2rem" }}>
                    {clases.reduce(
                      (total, clase) =>
                        total + (clase.attributes.tareas?.length || 0),
                      0
                    )}
                  </InfoNumber>
                </div>
              </Card>
            </ClaseGrid>
          </Section>
        )}
      </MainCard>
    </Container>
  );
};

export default AdminView;
