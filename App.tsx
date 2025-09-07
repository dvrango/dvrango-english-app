import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentApp from "./src/components/StudentApp";
import AdminView from "./src/components/AdminView";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentApp />} />
      <Route path="/admin" element={<AdminView />} />
    </Routes>
  );
};

export default App;