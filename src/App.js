import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Bodyimg from './components/body';
import Footer from './components/Footer';


function App() {
  const product=[{
    price: 9999,
    name: "Iphone",
    quantity: 4,
  }, 
  {
    price: 999,
    name: "Redmi",
    quantity: 22,
  }, 
  {
    price: 9999,
    name: "Realme",
    quantity: 5,
  } 
    ]
  return (
    <>
   <NavBar/>
   <Products product={product}/>
   <Bodyimg/>
   <Footer/> 
    </>
  
  );
}

export default App;
