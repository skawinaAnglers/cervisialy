import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { userSlice } from './slices/user'

export function setupStore(preloadedState?: PreloadedState<any>) {
  return configureStore({
    reducer: {
      user: userSlice.reducer
    },
    preloadedState
  })
}

const store = setupStore()

export type RootState = ReturnType<typeof store.getState>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
