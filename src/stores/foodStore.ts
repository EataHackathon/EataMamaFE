import { create } from 'zustand';
import type { Food } from '@/api/getSearchMeal';

interface FoodState {
  selectedFoods: Food[];
  addFood: (food: Food) => void;
  removeFood: (foodId: number) => void;
  toggleFood: (food: Food) => void;
  clearFoods: () => void;
}

export const useFoodStore = create<FoodState>((set) => ({
  selectedFoods: [],
  addFood: (food) =>
    set((state) => ({
      selectedFoods: [...state.selectedFoods, food],
    })),
  removeFood: (foodId) =>
    set((state) => ({
      selectedFoods: state.selectedFoods.filter((f) => f.id !== foodId),
    })),
  toggleFood: (food) =>
    set((state) => {
      const exists = state.selectedFoods.some((f) => f.id === food.id);
      return {
        selectedFoods: exists
          ? state.selectedFoods.filter((f) => f.id !== food.id)
          : [...state.selectedFoods, food],
      };
    }),
  clearFoods: () => set({ selectedFoods: [] }),
}));
