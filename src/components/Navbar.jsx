import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav__bar'>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/test">Test</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Home</NavLink>
        </ul>
    </div>
  )
}
