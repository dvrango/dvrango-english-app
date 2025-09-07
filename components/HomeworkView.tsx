import React from "react";
import { HOMEWORK_DATA } from "../constants";

const HomeworkView: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">
        Homework!
      </h2>
      <div className="space-y-4">
        {HOMEWORK_DATA.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center p-4 bg-lime-100/70 rounded-2xl border-2 border-lime-300 shadow-md transition-transform transform hover:scale-102"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <div className="flex-shrink-0 bg-white p-2 rounded-full shadow-sm mr-4">
              {item.icon}
            </div>
            <p className="text-xl text-gray-700 font-semibold">{item.task}</p>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HomeworkView;
