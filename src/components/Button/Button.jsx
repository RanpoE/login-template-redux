import React from 'react'
import './Button.css'

const Button = ({ type, variant, event, text }) => {
  return (
    <button className={`button ${variant}`} onClick={event}>
      {text}
    </button>
  )
}

export default Button