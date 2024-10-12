import React from 'react'

const Input = ({handlechange,value,title,name,color}) => {
  return (
    <div>
         <label className='sidebar-label-container'>
            <input type="radio" value={value} name={name} title={title} onChange={handlechange} />
            <span className='checkmark' style={{backgroundColor:color}}></span>
            {title}
        </label>
    </div>
  )
}

export default Input
