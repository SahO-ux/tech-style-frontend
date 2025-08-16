import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // uses localStorage by default
import allReducers from './Reducers/allReducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // only persist user slice
}

const rootReducer = combineReducers(allReducers)

const persistedUserReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedUserReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
