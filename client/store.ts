import { configureStore } from '@reduxjs/toolkit'
import type { ThunkAction as BaseThunkAction } from '@reduxjs/toolkit'
import type { AnyAction } from '@reduxjs/toolkit'

import { rootReducer } from './slices'

export type RootState = ReturnType<typeof store.getState>
export type ThunkAction<T = void> = BaseThunkAction<
  Promise<T>,
  RootState,
  void,
  AnyAction
>

const store = configureStore({
  reducer: rootReducer,
})

export default store
