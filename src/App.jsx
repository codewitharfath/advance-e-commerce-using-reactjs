import { useState } from 'react'

import Navigation from "./Navigation/Nav"

import products from "./db/data"

import Products from './products/Product'
import Recommended from "./Recommended/Recommed"
import './App.css'
import Sidebar from './SideBar/Sidebar'
import Card from './components/Card'



function App() {
const [selectCategory,setselectCategory] = useState(null)

const [query,setquery] = useState("")


const handleInputChange = (e)=>{
  setquery(e.target.value)
}

const filteredItems = products.filter((product)=>(
product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
))

const handlechange = (e)=>{
  setselectCategory(e.target.value)

}
const handleclick = (e)=>{
  setselectCategory(e.target.value)
}

function filteredData(products,select,query){
  let filteredproducts = products
  if(query){
    filteredproducts = filteredItems
  }
  if(select){
    filteredproducts = filteredproducts.filter(({category,color,company,newPrice,title})=>
    category === select || color === select || company === select ||  newPrice === select || title === select 
    )
  }
  return filteredproducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
    <Card key={Math.random()} img={img} title={title} star={star} reviews={reviews} prevPrice={prevPrice} newPrice={newPrice} />
  ))

}
const result = filteredData(products,selectCategory,query)

  return (
    <>
    <Sidebar handlechange={handlechange}/>
    <Navigation handleInputChange={handleInputChange} query={query}/>
    <Recommended handleclick={handleclick}/>
    <Products result={result} />
    </>
  )
}

export default App
