import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/lib/data';

interface FavoritesState {
  items: Product[];
  count: number;
}

const initialState: FavoritesState = {
  items: [],
  count: 0,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.items.push(action.payload);
        state.count = state.items.length;
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.count = state.items.length;
    },
    clearFavorites: (state) => {
      state.items = [];
      state.count = 0;
    },
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        state.items.push(action.payload);
      }
      state.count = state.items.length;
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
  toggleFavorite,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
