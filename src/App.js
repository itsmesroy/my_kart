import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Bodyimg from './components/body';
import Footer from './components/Footer';
import React,{useState} from 'react';


function App() {
  const productList=[{
    price: 9999,
    name: "Iphone",
    quantity: 0,
  }, 
  {
    price: 999,
    name: "Redmi",
    quantity: 0,
  }, 
  {
    price: 9999,
    name: "Realme",
    quantity: 0,
  } 
  ]
let [products , setProducts]=useState(productList);

function incrementQuantity(index){
let newProducts=[...productList]
}
  return (
  <>
    <NavBar/>
     <main className='container mt-5'>
      <Products productList={products}/>
     </main>
    {/* <Bodyimg/>
    <Footer/>  */}
  </>
  
  );
}

export default App;
