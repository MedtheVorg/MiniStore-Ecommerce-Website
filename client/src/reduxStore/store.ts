import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

// redux logger middleware
const logger = createLogger();

// redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './features/user/userSlice';
import { cartReducer } from './features/cart/cartSlice';

const cartPersistedReducer = persistReducer(
  { key: 'cartPersistedData', storage: storage },
  cartReducer
);
const userPersistedReducer = persistReducer(
  { key: 'userPersistedData', storage: storage },
  userReducer
);

export const store = configureStore({
  reducer: {
    userState: userPersistedReducer,
    cartState: cartPersistedReducer,
  },
  middleware: (getDefaultMiddlewares) => [...getDefaultMiddlewares()],
});

export let storePersistor = persistStore(store);
const storeStateType = store.getState();
export type StoreType = typeof storeStateType;
