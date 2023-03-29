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
  BrowserRouter as Router,
  Switch,
  Route
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
       

         <Router>
      
            <Navbar
            cartList ={cartList}
            />
           
             <Switch>
             
              <Route exact path="/">
                <Home/>
              </Route>
        
              <Route  path="/about">
                <About/>
               </Route>

              <Route  path ="/signin">
               <Signin/>
              </Route>

               <Route  path ="/signup">
                <Signup/>
              </Route>
               
               <Route  path ="/product/:id">
                <ProductDetails
                addtoCart={addtoCart}/>
               </Route>

               <Route exact path ="/cart">
                 <Cart cartList = {cartList}
                       removefromCart={removefromCart} 
                        />
               </Route>

            </Switch> 
            
            
        </Router>
        <Footer/>
         
         
        

  
      </div>
      
  )
}

export default App
