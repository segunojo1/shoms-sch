import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav__bar'>
        <ul className='flex w-[80%] justify-between items-center h-[6rem] mx-auto'>
            <NavLink to="/" className="nav__item">OUR SCHOOL</NavLink>
            <NavLink to="/test" className="nav__item">CLASSES</NavLink>
            <NavLink to="/" className="nav__item">REGISTRATION</NavLink>
            <NavLink to="/" className="btn__enroll nav__item">ENROLL NOW</NavLink>
        </ul>
    </div>
  )
}
