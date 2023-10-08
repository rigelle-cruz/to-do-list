import Todos from './Todos'
import AddTodo from './AddTodo'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        <Todos />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
