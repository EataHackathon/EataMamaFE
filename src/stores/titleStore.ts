import { create } from 'zustand';

type TitleState = {
  title: string;
  logDate: string;
  setTitle: (title: string) => void;
  setLogDate: (logDate: string) => void;
};

export const useTitleStore = create<TitleState>((set) => ({
  title: '',
  logDate: '',
  setTitle: (newTitle) =>
    set({
      title: newTitle,
    }),
  setLogDate: (newLogDate) =>
    set({
      logDate: newLogDate,
    }),
}));
