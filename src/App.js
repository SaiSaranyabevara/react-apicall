import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Productcard from './product-cards';
function App() {
  const [products,updateProducts] =useState([])
useEffect(
  ()=>{
    getProducts()
  },[]
)
async function getProducts() {
  let res= await fetch('https://fakestoreapi.com/products');
  
let productlist= await res.json();
updateProducts(productlist)

}
  if(products.length===0)
  {
    return (<h1>fetching data...</h1>)
  }
  return(
    <>
    <div className='product-list'>
      {
        products.map((p)=> <Productcard {...p} key={p.id}></Productcard>)
      }
    </div>
    </>
  )
}
export default App
