import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoList from "./Components/TodoList"
import NotFounde from "./Components/NotFounde"
import UpdateTodo from "./Components/UpdateTodo"
import { useState } from "react"


function App() {

  const [todolist,setTodolist] = useState([{id: 1, todo: "exrcices React" }, {id: 2, todo: "exrcices React" }])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoList todolist={todolist }  setTodolist={setTodolist} />} />
        <Route path='/update/:id' element={<UpdateTodo todolist={todolist} />} />
        <Route path='*' element={<NotFounde />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
