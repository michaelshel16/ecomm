import { useState } from 'react'

import './App.css'
import Navbar from "./components/molecules/Navbar";

import Cart from "./components/Pages/Cart";
import About from "./components/Pages/About";
import Home from './components/Pages/Home';
import Footer from './components/molecules/Footer';
import Signup from "./components/Pages/Signup";
import Signin from './components/Pages/Signin';
import ProductDetails from './components/Pages/ProductDetails';
import
{
  Routes,Route
}from "react-router-dom";


function App() {

  const [cartList,setcartList] = useState([]);

  const addtoCart = (item) => {
    setcartList([...cartList, item])
  }
  console.log(cartList);

  const removefromCart = (item) =>
  {
    setcartList(cartList.filter((cartItem)=>{cartItem.id !== item.id}))
  }
  

  return (
    
      <div>
       <Navbar
            cartList ={cartList}
            />

         <Routes>
      
            
           
            
             
              <Route exact path="/" element={<Home/>}/>
               
        
              <Route  path="/about" element={<About/>}/>
               
               

              <Route  path ="/signin" element={<Signin/>}/>
               

               <Route  path ="/signup" element={<Signup/>}/>
              
               <Route  path ="/product/:id" element={ <ProductDetails
                addtoCart={addtoCart}/>}/>
               
           

               <Route exact path ="/cart" element={ <Cart cartList = {cartList}
                       removefromCart={removefromCart} 
                        />}/>
                
            

            
            
        </Routes>
        <Footer/>
         
         
        

  
      </div>
      
  )
}

export default App
