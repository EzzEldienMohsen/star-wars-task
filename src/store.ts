import { Action, configureStore } from '@reduxjs/toolkit';
import starWarsReducer from '../src/features/starWars/starWarsSlice';
import { ThunkAction } from 'redux-thunk';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

// Define the store configuration with typed reducers
export const store = configureStore({
  reducer: {
    starWars: starWarsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable state check
    }),
});

// Define RootState type which represents the entire state of the Redux store
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// Define AppDispatch type which represents the dispatch function with the store's actions
export type AppDispatch = typeof store.dispatch;

// Define AppThunk type with proper typing for the state
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
