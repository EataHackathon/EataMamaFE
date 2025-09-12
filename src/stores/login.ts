import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LoginState = {
  token: string;
  login: (token: string) => void;
  logout: () => void;
};

export const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      token: '',
      login: (newToken) => {
        set({ token: newToken });
      },
      logout: () => {
        set({ token: '' });
      },
    }),
    {
      name: 'login-storage',
    },
  ),
);
