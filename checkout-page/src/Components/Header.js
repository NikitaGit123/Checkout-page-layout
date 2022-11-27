import React from 'react'
import './style.css';

function Header(props) {
  return (
    <div className='header'>
      <span className='heading'>{props.prodname}</span>
      <span className='btn'>Sales Complete</span>
    </div>
  )
}

export default Header
