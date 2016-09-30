import React from 'react'

const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    <a
      href="#"
      onClick={ (e) => {
        e.preventDefault()
        onClick()
      }}
    >
    { children }
    </a>
  }
}

export default FilterLink
