import express from 'express'
import * as db from '../db/db'
import { TaskData } from '../../models/Todos'

const route = express.Router()

// lists all of the tasks
route.get('/', async (req, res) => {
  try {
    const todos = await db.getList()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

// adds new task
route.post('/', async (req, res) => {
  try {
    const newTask: TaskData = {
      ...req.body,
    }
    const id = await db.addTask(newTask)
    res.status(201).json({ id: id[0], ...newTask })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

// deletes task by id
route.delete('/:id', async (req, res) => {
  try {
    const taskId = Number(req.params.id)
    await db.deleteTask(taskId)
    res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default route
