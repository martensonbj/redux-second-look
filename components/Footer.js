import React from 'react'
import Filter from '../containers/Filter'

const Footer = () => (
  <footer>
    <Filter filter="SHOW_ALL">All Todos</Filter>
    <Filter filter="SHOW_ACTIVE">Active</Filter>
    <Filter filter="SHOW_COMPLETED">Completed</Filter>
  </footer>
)

export default Footer
