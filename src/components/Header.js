import React from 'react'
import NewButton from './NewButton'

const Header = ({ user }) => {
  return (
    <header style={{ margin: '0 0 10px 0', backgroundColor: 'steelblue' }}>
      <h1>{user.toUpperCase()}'S DIARY</h1>
      <NewButton />
    </header>
  )
}

export default Header
