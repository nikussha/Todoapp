import React from 'react'

export default function Todos({ todo, settodo, filter, setfilter }) {
  let deleteitem = (id) => {
    let filtered = todo.filter((item) => {
      return item.id !== id
    })
    settodo(filtered)
  }

  return (
    <div className="todo-container">
      <ul>
        {todo
          .filter((item) => {
            if (filter === '') {
              return todo
            } else if (item.text.toLowerCase().includes(filter)) {
              return item
            }
          })
          .map((each) => {
            return (
              <>
                <li key={each.id}>
                  {each.text}
                  <span onClick={(e) => deleteitem(each.id)}>X</span>
                </li>
              </>
            )
          })}
      </ul>
    </div>
  )
}
