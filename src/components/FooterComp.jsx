import React from 'react'

const FooterComp = (props) => {
  return (
    <div className='grid gap-2'>
        <p className='mb-4'>{props.head}</p>
        <p>{props.one}</p>
        <p>{props.two}</p>
        <p>{props.three}</p> 
        <p>{props.four}</p>
    </div>
  )
}

export default FooterComp