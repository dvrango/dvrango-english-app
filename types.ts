
import type { ReactElement } from 'react';

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
