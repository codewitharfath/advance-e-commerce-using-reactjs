import React from 'react'
import Category from './Category/Category'
import Color from './Colors/Color'
import Price from './Price/Price'
import "./Sidebar.css"
const Sidebar = ({handlechange}) => {
  return (
   <section className='sidebar'>
     <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handlechange={handlechange}/>
        <Color handlechange={handlechange}/>
        <Price handlechange={handlechange}/>
   </section>
  )
}

export default Sidebar
