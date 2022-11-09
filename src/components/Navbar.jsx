import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav__bar'>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/test">About</NavLink>
            <NavLink to="/">Contact</NavLink>
            <NavLink to="/">Form</NavLink>
        </ul>
    </div>
  )
}
