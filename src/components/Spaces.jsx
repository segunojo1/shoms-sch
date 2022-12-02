import React from 'react'
import { Parallax } from 'react-parallax'

const Spaces = () => {
  return (
    <Parallax className='h-[100vh] '   bgImage="" bgImageAlt="spaces" strength={400}>
      <div className='w-[80%] mx-auto'>
        <div className='font-bold text-3xl md:text-6xl mt-[5rem] mb-[2rem] w-[80%]'>Spaces still available in our Primary and Secondary Classes for 2022-2023</div> 
        <p className='w-[80%]'>Our cooperative learning community brings together children, parents, and teachers in meaningful play. We develop collaborative relationships and explore environments, experiences, and activities that encourage curiosity and wonder. We value who children are, celebrate their unique gifts, believe in their capabilities, encourage their interests, and honor their feelings and ideas.</p>

      </div>
    </Parallax>
  )
}

export default Spaces