import React from 'react'
import "./Box.css"
const Box = ({children}) => {
  return (
    <div className='box' id='box'>{children}</div>
  )
}

export default Box