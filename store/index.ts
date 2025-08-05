// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import ultilReducer from './slices/ultil'

export const store = configureStore({
  reducer: {
    ultil: ultilReducer,
  },
})

// Kiểu TypeScript cho RootState và AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
