import React from 'react'

const Button = ({type, event, text}) => {
  return (
    <button type={type} onClick={event}>
        {text}
    </button>
  )
}

export default Button