import React from 'react'

const Button = ({onClickHandler,title,value}) => {
  return (
    <div>
        <button onClick={onClickHandler} value={value} className='btns'>{title}</button>
     
    </div>
  )
}

export default Button