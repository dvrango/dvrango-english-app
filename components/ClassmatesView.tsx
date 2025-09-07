
import React from 'react';
import { CLASSMATES_DATA } from '../constants';

const ClassmatesView: React.FC = () => {
  const cardColors = [
    'bg-sky-100/70 border-sky-300',
    'bg-rose-100/70 border-rose-300',
    'bg-amber-100/70 border-amber-300',
    'bg-violet-100/70 border-violet-300',
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-sky-600 mb-6">My Awesome Friends!</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {CLASSMATES_DATA.map((classmate, index) => (
          <div
            key={classmate.id}
            className={`flex flex-col items-center p-4 rounded-2xl border-2 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl ${cardColors[index % cardColors.length]}`}
          >
            <img
              src={classmate.avatarUrl}
              alt={classmate.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mb-3"
            />
            <h3 className="text-xl font-bold text-gray-700">{classmate.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassmatesView;
