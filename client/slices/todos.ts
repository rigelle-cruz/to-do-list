import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTasks, addTask, deleteTask } from '../apis/todoApi'
import { Task, TaskData } from '../../models/Todos'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return await getTasks()
})

export const postTaskThenFetch = createAsyncThunk(
  'tasks/postTask',
  async (task: TaskData) => {
    await addTask(task)
    return await getTasks()
  }
)

export const deleteTaskThenFetch = createAsyncThunk(
  'tasks/deleteTask',
  async (id: number) => {
    await deleteTask(id)
    return await getTasks()
  }
)

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      return [...state, action.payload]
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      return state.filter((task) => task !== action.payload)
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.fulfilled, (state, { payload }) => payload)
      .addCase(postTaskThenFetch.fulfilled, (state, { payload }) => payload)
      .addCase(deleteTaskThenFetch.fulfilled, (state, { payload }) => payload),
})

export default tasksSlice.reducer
