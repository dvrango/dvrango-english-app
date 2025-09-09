import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import StudentApp from "./src/components/StudentApp";
import AdminView from "./src/components/AdminView";
import ClassDetail from "./src/components/ClassDetail";
import SplashScreen from "./src/components/SplashScreen";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Verificar si es la primera visita o si ha pasado suficiente tiempo
    const lastSplashTime = localStorage.getItem('lastSplashTime');
    const now = Date.now();
    const oneHour = 60 * 60 * 1000; // 1 hora en milisegundos

    if (lastSplashTime && (now - parseInt(lastSplashTime)) < oneHour) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashFinish = () => {
    localStorage.setItem('lastSplashTime', Date.now().toString());
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <Routes>
      <Route path="/" element={<StudentApp />} />
      <Route path="/admin" element={<AdminView />} />
      <Route path="/class/:id" element={<ClassDetail />} />
    </Routes>
  );
};

export default App;