import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import './index.css'
import Filter from './filter'
import Add from './add'
import Todos from './todos'

function App() {
  let [todo, setTodo] = useState([])
  let [filter, setFilter] = useState('')

  return (
    <>
      <Filter filter={filter} setfilter={setFilter}></Filter>
      <Todos
        todo={todo}
        setfilter={setFilter}
        settodo={setTodo}
        filter={filter}
      ></Todos>
      <Add todo={todo} settodo={setTodo}></Add>
    </>
  )
}

export default App
