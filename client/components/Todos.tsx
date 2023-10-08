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
    <ul>
      {tasks.map((task: Task) => (
        <li
          style={{
            fontSize: '20px',
            listStyleType: 'none',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
          }}
          key={task.id}
        >
          <label>
            <input type="checkbox" className="checkbox" />
            {task.task}
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
