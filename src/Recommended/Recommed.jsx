import React from 'react'
import Button from '../components/Button'
import "./Recommed.css"

const Recommed = ({handleclick}) => {
  return (
    <div>
        <h1 className='recommended-title'>Recommended</h1>
        <div className="recommended-flex">
      <Button onClickHandler={handleclick} value="" title="All Products" />
      <Button onClickHandler={handleclick} value="Nike" title="Nike" />
      <Button onClickHandler={handleclick} value="Adidas" title="Adidas" />
      <Button onClickHandler={handleclick} value="Puma" title="Puma" />
      <Button onClickHandler={handleclick} value="Vans" title="Vans" />
        </div>
    </div>
  )
}

export default Recommed