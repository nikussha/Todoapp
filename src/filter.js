import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

export default function Filter({ filter, setfilter }) {
  console.log(filter)
  return (
    <form className="filter-form">
      <label>
        <input
          type="text"
          onChange={(e) => setfilter(e.target.value)}
          placeholder="Search"
        ></input>
      </label>
    </form>
  )
}
