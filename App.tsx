import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentApp from "./src/components/StudentApp";
import AdminView from "./src/components/AdminView";
import ClassDetail from "./src/components/ClassDetail";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentApp />} />
      <Route path="/admin" element={<AdminView />} />
      <Route path="/class/:id" element={<ClassDetail />} />
    </Routes>
  );
};

export default App;