import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Bodyimg from "./components/body";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem"
import React, { useState } from "react";

function App() {
  const productList = [
    {
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
    },
    {
      price: 25,
      name: "Cold Drinks",
      quantity: 0,
    },
  ];
  let [products, setProducts] = useState(productList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProducts = [...products];
    let newTotalamount = totalAmount;
    newProducts[index].quantity++;
    newTotalamount += products[index].price;
    setTotalAmount(newTotalamount);
    setProducts(newProducts);
  };

  const decrementQuantity = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    if (newProducts[index].quantity > 0) {
      newProducts[index].quantity--;
      newTotalAmount -= products[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProducts(newProducts);
  };

  const handleReset = () => {
    const resetProducts = products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProducts(resetProducts);
    setTotalAmount(0);
  };

  const removeItem=(index)=>{
    let newProducts=[...products];
    let newTotalAmount= totalAmount;
    newTotalAmount-= newProducts[index].quantity*newProducts[index].price;
    newProducts.splice(index,1);
    setProducts(newProducts);
    setTotalAmount(newTotalAmount);
  }

  const addItem=(name,price)=>{
    let newProducts= [...products];
    newProducts.push({name,price,quantity:0});

    setProducts(newProducts);
    
  }
    
  return (
    <>
      <NavBar />
      <AddItem addItem={addItem}/>
      <main className="container mt-5">
        <Products
          productList={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      {/* <Bodyimg/> */}
      <Footer totalAmount={totalAmount} handleReset={handleReset} />
    </>
  );
}

export default App;
