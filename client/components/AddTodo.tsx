import { useState, ChangeEvent, FormEvent } from 'react'
import { useAppDispatch } from '../hooks'
import { postTaskThenFetch } from '../slices/todos'

interface InputState {
  task: string
}

function AddTodo() {
  const dispatch = useAppDispatch()

  const [input, setInput] = useState<InputState>({
    task: '',
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    dispatch(postTaskThenFetch(input))
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="task"
        className="new-todo"
        placeholder="What needs to be done?"
        value={input.task}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default AddTodo
