
import React from 'react';
import type { HomeworkItem, Classmate } from './types';

const DrawingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
  </svg>
);

const MathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const MusicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-12c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
    </svg>
);

const ReadingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);


export const HOMEWORK_DATA: HomeworkItem[] = [
  { id: 1, task: "Draw a big, happy sun!", icon: <DrawingIcon /> },
  { id: 2, task: "Count all the red toys in your room.", icon: <MathIcon /> },
  { id: 3, task: "Sing 'Twinkle, Twinkle, Little Star' with your family.", icon: <MusicIcon /> },
  { id: 4, task: "Find three things that start with the letter 'B'.", icon: <ReadingIcon /> },
];

export const CLASSMATES_DATA: Classmate[] = [
    { id: 1, name: "Lily", avatarUrl: "https://picsum.photos/seed/Lily/200/200" },
    { id: 2, name: "Leo", avatarUrl: "https://picsum.photos/seed/Leo/200/200" },
    { id: 3, name: "Daisy", avatarUrl: "https://picsum.photos/seed/Daisy/200/200" },
    { id: 4, name: "Max", avatarUrl: "https://picsum.photos/seed/Max/200/200" },
    { id: 5, name: "Rosie", avatarUrl: "https://picsum.photos/seed/Rosie/200/200" },
    { id: 6, name: "Sam", avatarUrl: "https://picsum.photos/seed/Sam/200/200" },
    { id: 7, name: "Chloe", avatarUrl: "https://picsum.photos/seed/Chloe/200/200" },
    { id: 8, name: "Ben", avatarUrl: "https://picsum.photos/seed/Ben/200/200" },
];
