import React from 'react'
import Input from '../../components/Input'

import "./Category.css"


const Category = ({handlechange}) => {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>
        <label className='sidebar-label-container'>
            <input onChange={handlechange} value=""  type="radio" name='test' />
            <span className='checkmark'></span>All
        </label>
       <Input handlechange={handlechange} value="sneakers" title="sneakers" name="test"/>
       <Input handlechange={handlechange} value="flats" title="Flats" name="test"/>
       <Input handlechange={handlechange} value="heels" title="Heels" name="test"/>
 
        
      </div>
    </div>
  )
}

export default Category
