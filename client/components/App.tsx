import Todos from './Todos'
import AddTodo from './AddTodo'

function App() {
  return (
    <>
    <div className='container'>
      <h1>todos</h1>

      <div className="todoapp">
        <AddTodo />
        <Todos />

        <footer className="footer"></footer>
      </div>

    </div>
    </>
  )
}

export default App
