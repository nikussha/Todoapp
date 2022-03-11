import React from 'react'
import { useState } from 'react'

function Add({ todo, settodo }) {
  let [value, setValue] = useState('')
  let handlesubmit = (e) => {
    e.preventDefault()

    let newtodo = {
      text: value,
      id: Math.floor(Math.random() * 1000),
    }
    if (value.length > 0) {
      settodo(todo.concat(newtodo))
      setValue('')
    }
  }

  return (
    <form className="add-form" onSubmit={handlesubmit}>
      <label htmlFor="add"></label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default Add
