import type { ReactElement } from 'react';

// App-specific types
export enum View {
  Homework,
  Classmates,
}

export interface HomeworkItem {
  id: number;
  task: string;
  icon: ReactElement;
}

export interface Classmate {
  id: number;
  name: string;
  avatarUrl: string;
}

// UI Component types
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface TabProps {
  label: string;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
}

// Admin panel types
export type AdminTab = 'students' | 'assignments' | 'stats';

export interface StudentProgress {
  id: number;
  name: string;
  age: number;
  grade: string;
  assignments: number;
  completed: number;
}

export interface Assignment {
  id: number;
  title: string;
  dueDate: string;
  status: 'pending' | 'completed' | 'overdue';
}

export interface ClassStatistics {
  totalStudents: number;
  totalClasses: number;
  totalAssignments: number;
  averageCompletion: number;
  overdueAssignments: number;
}