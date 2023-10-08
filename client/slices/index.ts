import { combineReducers } from '@reduxjs/toolkit'
import todos from './todos'

export const rootReducer = combineReducers({
  todos: todos,
})
