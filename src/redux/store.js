import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from './reducers';
import logger from "redux-logger";
import { 
  persistStore,
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authRedusers from "./auth/auth-redusers";

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
}

  const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }}), logger];

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authRedusers),
    contacts: contactsReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store);

export default {store, persistor};