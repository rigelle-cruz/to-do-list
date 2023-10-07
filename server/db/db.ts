import connection from './connection'
import { TaskData } from '../../models/Todos'

export async function getList(db = connection) {
  return db('todos').select()
}

export function addTask(newTask: TaskData, db = connection) {
  return db('todos').insert(newTask)
}

export async function deleteTask(id: number, db = connection) {
  await db('todos').where('id', id).del()
}
