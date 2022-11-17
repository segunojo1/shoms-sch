import React from 'react'

const Teacher = (props) => {
  return (
    <div className='flex flex-col  p-[3rem] bg-white justify-between items-center rounded-md w-[20rem] mb-[3rem]'>
        <img src={props.imgSrc} alt={props.title} className="rounded-full"/>
        <h1 className='font-semibold'>{props.title}</h1>
        <p>{props.position}</p>

    </div>
  )
}

export default Teacher