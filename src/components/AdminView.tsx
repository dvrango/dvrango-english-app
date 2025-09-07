import React from "react";
import { useClases } from "../hooks";
import { Button } from "../components/ui";
import {
  AdminContainer,
  AdminMainCard,
  Header,
  Title,
  BackButton,
} from "../styles";

const AdminView: React.FC = () => {
  return (
    <AdminContainer>
      <AdminMainCard>
        <Header>
          <Title>👩‍🏫 English Teacher Admin Panel</Title>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <BackButton to="/">← Back to School</BackButton>
          </div>
        </Header>
      </AdminMainCard>
    </AdminContainer>
  );
};

export default AdminView;
