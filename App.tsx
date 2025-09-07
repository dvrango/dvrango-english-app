import React from "react";
import { useState } from "react";
import { View } from "./types";
import HomeworkView from "./components/HomeworkView";
import ClassmatesView from "./components/ClassmatesView";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1zm0 12c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zm-6.36-8.64l-1.42-1.42c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.42 1.42c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zm12.72 0l1.42-1.42c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-1.42 1.42c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0zM6.34 17.66l-1.42 1.42c-.39.39-1.02.39-1.41 0s-.39 1.02 0 1.41l1.42-1.42c.39-.39.39-1.02 0-1.41s-1.03-.39-1.41 0zm12.72 0l1.42 1.42c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-1.42-1.42c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0z" />
  </svg>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Homework);

  const navButtonClasses = (view: View) =>
    `px-8 py-4 rounded-full text-2xl font-bold transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-yellow-300 ${
      currentView === view
        ? "bg-yellow-400 text-white shadow-lg scale-105"
        : "bg-white/60 text-gray-600 hover:bg-white/90 hover:scale-105"
    }`;

  return (
    <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center font-sans">
      <main className="w-full max-w-4xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 border-4 border-white/50">
        <header className="flex items-center justify-center mb-8 text-center flex-wrap">
          <SunIcon />
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-700 ml-4 drop-shadow-md">
            Angel School
          </h1>
        </header>

        <nav className="flex justify-center items-center gap-4 sm:gap-8 mb-8">
          <button
            onClick={() => setCurrentView(View.Homework)}
            className={navButtonClasses(View.Homework)}
          >
            Homework
          </button>
          <button
            onClick={() => setCurrentView(View.Classmates)}
            className={navButtonClasses(View.Classmates)}
          >
            Classmates
          </button>
        </nav>

        <div className="content-area min-h-[400px]">
          {currentView === View.Homework ? (
            <HomeworkView />
          ) : (
            <ClassmatesView />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
