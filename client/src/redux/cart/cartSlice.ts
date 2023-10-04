import { createSlice } from '@reduxjs/toolkit';
import { CartInitialState } from '../../lib/types';

const initialState: CartInitialState = {
  products: [],
};

const cartSlice = createSlice({
  initialState: initialState,
  name: 'cart',
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    incrementItemQuantity: (state, action) => {
      const itemToIncrement = state.products.find(
        (product) => product.id === action.payload
      );
      if (itemToIncrement) {
        itemToIncrement.quantity++;
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemToIncrement = state.products.find(
        (product) => product.id === action.payload
      );
      if (itemToIncrement) {
        if (itemToIncrement.quantity === 1) {
          itemToIncrement.quantity = 1;
        } else {
          itemToIncrement.quantity--;
        }
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  deleteItem,
  decrementItemQuantity,
  incrementItemQuantity,
  resetCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
