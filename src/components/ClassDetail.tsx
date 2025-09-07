import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import { useClases } from "../hooks";
import { Card, LoadingSpinner, Button } from "../components/ui";
import { Container, MainCard, Header, StudentTitle } from "../styles";

const BackButton = styled(Button)`
  margin-bottom: 1rem;
`;

const ClassDetailCard = styled(Card)`
  max-width: none;
  margin: 0;
`;

const ClassHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ClassTitle = styled.h1`
  font-size: 2rem;
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
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
`;

const Description = styled.div`
  background-color: #f8fafc;
  border-left: 4px solid #3b82f6;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 0 0.5rem 0.5rem 0;
  font-style: italic;
  color: #4b5563;
`;

const MarkdownContent = styled.div`
  color: #374151;
  line-height: 1.7;
  max-width: none;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1f2937;
    margin: 2rem 0 1.5rem 0;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.75rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin: 1.75rem 0 1rem 0;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #4b5563;
    margin: 1.5rem 0 0.75rem 0;
  }

  p {
    margin: 1rem 0;
    text-align: justify;
  }

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin: 0.5rem 0;
  }

  code {
    background-color: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-family: "Monaco", "Menlo", monospace;
    font-size: 0.875rem;
    color: #374151;
  }

  pre {
    background-color: #1f2937;
    color: #f9fafb;
    padding: 1.5rem;
    border-radius: 0.75rem;
    overflow-x: auto;
    margin: 1.5rem 0;
    border: 1px solid #374151;

    code {
      background-color: transparent;
      padding: 0;
      color: inherit;
      font-size: 0.875rem;
    }
  }

  blockquote {
    border-left: 4px solid #10b981;
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
    background-color: #f0fdf4;
    border-radius: 0 0.5rem 0.5rem 0;
    color: #065f46;
  }

  strong {
    font-weight: 600;
    color: #1f2937;
  }

  em {
    font-style: italic;
    color: #4b5563;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  th,
  td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }

  th {
    background-color: #f9fafb;
    font-weight: 600;
    color: #374151;
  }
`;

const ClassStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e5e7eb;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3730a3;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  background-color: #fee2e2;
  color: #991b1b;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border: 1px solid #fca5a5;
  text-align: center;
`;

const NotFound = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #6b7280;

  h2 {
    font-size: 1.5rem;
    color: #374151;
    margin: 1rem 0 0.5rem 0;
  }

  p {
    margin: 0.5rem 0;
  }
`;

const ClassDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { clases, loading, error } = useClases();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <Container>
        <MainCard>
          <LoadingSpinner size="large" />
        </MainCard>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <MainCard>
          <BackButton onClick={handleBack} variant="secondary">
            ← Volver
          </BackButton>
          <ErrorMessage>Error loading class: {error}</ErrorMessage>
        </MainCard>
      </Container>
    );
  }

  const clase = clases.find((c) => c.id === parseInt(id || ""));

  if (!clase) {
    return (
      <Container>
        <MainCard>
          <BackButton onClick={handleBack} variant="secondary">
            ← Volver
          </BackButton>
          <NotFound>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📚</div>
            <h2>Class Not Found</h2>
            <p>
              The class you're looking for doesn't exist or may have been
              removed.
            </p>
            <p>Please check the class list and try again.</p>
          </NotFound>
        </MainCard>
      </Container>
    );
  }

  return (
    <Container>
      <MainCard>
        <BackButton onClick={handleBack} variant="secondary" size="small">
          ← Volver a Classes
        </BackButton>

        <ClassDetailCard padding="large">
          <ClassHeader>
            <ClassTitle>
              {clase.attributes?.nombre || `Class ${clase.id}`}
            </ClassTitle>
          </ClassHeader>

          {clase.attributes?.descripcion && (
            <Description>
              <strong>Description:</strong> {clase.attributes.descripcion}
            </Description>
          )}

          {clase.content ? (
            <MarkdownContent>
              <ReactMarkdown>{clase.content}</ReactMarkdown>
            </MarkdownContent>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "3rem",
                color: "#9ca3af",
                backgroundColor: "#f9fafb",
                borderRadius: "0.75rem",
                border: "2px dashed #e5e7eb",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
              <h3 style={{ color: "#6b7280", margin: "0.5rem 0" }}>
                No Content Available
              </h3>
              <p>This class doesn't have any content yet. Check back later!</p>
            </div>
          )}
        </ClassDetailCard>
      </MainCard>
    </Container>
  );
};

export default ClassDetail;
