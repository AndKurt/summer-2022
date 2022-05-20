import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reposReducer } from './reducers/reposSlice';
import { userReducer } from './reducers/userSlice';

const rootReducer = combineReducers({ userReducer, reposReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
