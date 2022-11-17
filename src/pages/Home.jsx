import React from 'react'
import Img from '../components/Img'
import Teachers from '../components/Teachers'
import { Navbar } from '../components/Navbar'
import Spaces from '../components/Spaces'

export const Home = () => {
  return (
    <>
    <Navbar/>
    <Img />
    <Spaces />
    <Teachers />
    </>
  )
}
