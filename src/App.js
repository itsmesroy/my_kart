import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Bodyimg from './components/body';
import Footer from './components/Footer';
import React,{useState} from 'react';


function App() {
  const productList=[{
    price: 50,
    name: "Spring Roll",
    quantity: 0,
  }, 
  {
    price: 99,
    name: "Pizza",
    quantity: 0,
  }, 
  {
    price: 30,
    name: "Pastries",
    quantity: 0,
  } ,
  {
    price: 25,
    name: "Cold Drinks",
    quantity: 0,
  } 
  ]
let [products , setProducts]=useState(productList);
let [totalAmount , setTotalAmount]=useState(0);

const incrementQuantity=(index)=>{
let newProducts=[...products];
let newTotalamount= totalAmount;
newProducts[index].quantity++;
newTotalamount+=products[index].price;
setTotalAmount(newTotalamount);
setProducts(newProducts);
}

const decrementQuantity=(index)=>{
  let newProducts=[...products];
  let newTotalAmount=totalAmount;
  if(newProducts[index].quantity>0){  
    newProducts[index].quantity--;
    newTotalAmount-=products[index].price;
    
  }
  setTotalAmount(newTotalAmount);
    setProducts(newProducts);
}
  return (
  <>
    <NavBar/>
     <main className='container mt-5'>
      <Products productList={products} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
     </main>
     {/* <Bodyimg/> */}
    <Footer totalAmount={totalAmount}/>  
  </>
  
  );
}

export default App;
