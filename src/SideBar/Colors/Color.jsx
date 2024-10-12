import React from 'react'
import "./Color.css"
import Input from '../../components/Input'

const Color = ({handlechange}) => {
  return (
    <div>
    <h2 className='sidebar-title color-title'>Color</h2>
    <div>
    <label className='sidebar-label-container'>
            <input onChange={handlechange} value=""  type="radio" name='test1' />
            <span className='checkmark all'></span>All
        </label>
       <Input handlechange={handlechange} value="black" title="Black" name="test1"/>
       <Input handlechange={handlechange} value="blue" title="Blue" name="test1"/>
       <Input handlechange={handlechange} value="red" title="Red" name="test1"/>
       <Input handlechange={handlechange} value="green" title="Green" name="test1"/>
    
      
    </div>
  </div>
  )
}

export default Color