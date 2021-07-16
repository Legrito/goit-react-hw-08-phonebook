import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from './reducers';
import logger from "redux-logger";
import { 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
}

  const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }}), logger];

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactsReducer)
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

// const persistor = persistStore(store);

export default store;