import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { cartReducer } from './cart/cartSlice';
import { userReducer } from './user/userSlice';

// redux logger middleware
const logger = createLogger();

// root reducer
const reducer = combineReducers({
  userState: userReducer,
  cartState: cartReducer,
});

// redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
