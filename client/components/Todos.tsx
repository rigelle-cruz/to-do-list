import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTasks, deleteTaskThenFetch } from '../slices/todos'
import { Task } from '../../models/Todos'

function Todos() {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const handleDelete = (id: number) => {
    dispatch(deleteTaskThenFetch(id))
  }

  return (
    <ul className="todo-list">
      {tasks.map((task: Task) => (
        <li key={task.id} className="slide-in-from-above">
          <label>
            <input type="checkbox" className="checkbox" />
            <span className="task-text">{task.task}</span>
            <button
              className="delete-button"
              onClick={() => handleDelete(task.id)}
            >
              x
            </button>
          </label>
        </li>
      ))}
    </ul>
  )
}

export default Todos
