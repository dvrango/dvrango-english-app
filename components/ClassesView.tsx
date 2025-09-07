import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useClases } from "../src/hooks";
import { Card, LoadingSpinner } from "../src/components/ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`;

const ClassCard = styled(Card)`
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.15);
  }
`;

const ClassHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ClassTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  flex: 1;
`;

const ClassMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const ClassId = styled.span`
  background-color: #e0e7ff;
  color: #3730a3;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.75rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #6b7280;

  h3 {
    margin: 1rem 0 0.5rem 0;
    color: #374151;
  }

  p {
    margin: 0.5rem 0;
  }
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  background-color: #fee2e2;
  color: #991b1b;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #fca5a5;
  text-align: center;
`;

const ClassesView: React.FC = () => {
  const { clases, loading, error } = useClases();
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleClassClick = (claseId: number) => {
    console.log("Navigating to class:", claseId);
    navigate(`/class/${claseId}`);
  };

  if (loading) {
    return (
      <Container>
        <LoadingSpinner size="large" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>Error loading classes: {error}</ErrorMessage>
      </Container>
    );
  }

  if (clases.length === 0) {
    return (
      <Container>
        <EmptyState>
          <EmptyIcon>📚</EmptyIcon>
          <h3>No Classes Available</h3>
          <p>There are no classes to display at the moment.</p>
          <p>Check back later for new class content!</p>
        </EmptyState>
      </Container>
    );
  }

  return (
    <Container>
      {clases.map((clase) => (
        <ClassCard
          key={clase.id}
          padding="large"
          onClick={() => handleClassClick(clase.id)}
        >
          <ClassHeader>
            <ClassTitle>
              {clase.attributes?.nombre || `Class ${clase.id}`}
            </ClassTitle>
            <ClassMeta>
              <ClassId>ID: {clase.id}</ClassId>
              {clase.createdAt && (
                <span>Created: {formatDate(clase.createdAt)}</span>
              )}
            </ClassMeta>
          </ClassHeader>

          {clase.attributes?.descripcion && (
            <p
              style={{
                color: "#6b7280",
                fontSize: "0.95rem",
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}
            >
              {clase.attributes.descripcion}
            </p>
          )}

          <div
            style={{
              color: "#6b7280",
              fontSize: "0.875rem",
              marginBottom: "1rem",
              fontStyle: "italic",
            }}
          >
            {clase.description ? (
              <p>
                {clase.description.length > 150
                  ? `${clase.description.substring(0, 150)}...`
                  : clase.description}
              </p>
            ) : (
              <p>📝 No content preview available</p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                color: "#3b82f6",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              Click to read more →
            </span>
          </div>

          {(clase.attributes?.estudiantes?.length ||
            clase.attributes?.tareas?.length) && (
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1.5rem",
                paddingTop: "1rem",
                borderTop: "1px solid #e5e7eb",
                fontSize: "0.875rem",
                color: "#6b7280",
              }}
            >
              {clase.attributes.estudiantes?.length > 0 && (
                <span>👥 {clase.attributes.estudiantes.length} students</span>
              )}
              {clase.attributes.tareas?.length > 0 && (
                <span>📋 {clase.attributes.tareas.length} tasks</span>
              )}
            </div>
          )}
        </ClassCard>
      ))}
    </Container>
  );
};

export default ClassesView;
