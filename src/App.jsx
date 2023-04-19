import { useState , useEffect} from 'react'

import './App.css'
import Navbar from "./components/molecules/Navbar";
import axios from 'axios';
import Cart from "./components/Pages/Cart";
import About from "./components/Pages/About";
import Home from './components/Pages/Home';
import Footer from './components/molecules/Footer';
import Signup from "./components/Pages/Signup";
import Signin from './components/Pages/Signin';
import ProductDetails from './components/Pages/ProductDetails';
import
{
  Routes,
  Route
}from "react-router-dom";


function App() {

  const [cartList,setcartList] = useState([]);

  const addtoCart = (item) => {
    setcartList([...cartList, item ])
   
    console.log(cartList);
  
    axios.post("https://barterwdcash-cartlist-default-rtdb.asia-southeast1.firebasedatabase.app/cart-list.json",
    {
      
        
            "itemAbout1"    : `${item.itemAbout1}`,
            "itemAbout2"    : `${item.itemAbout2}`,
            "itemAbout3"    : `${item.itemAbout3}`,
            "itemAbout4"    : `${item.itemAbout4}`,
            "itemAbout5"    : `${item.itemAbout5}`,
            "itemBrandname" :`${item.itemBrandname}`,
            "itemDesc"      :`${item.itemDesc}`, 
            "itemDiscount"  :`${item.itemDiscount}` ,
            "itemId"        : `${item.itemId}`,
            "itemImg"       :`${item.itemImg}` ,
            "itemPrice"     :`${item.itemPrice}` ,
            "itemQuantity"  :`${item.itemQuantity}` ,
            "itemTitle"     :`${item.itemTitle}` ,
            "itemdetailimg1":`${item.itemdetailimg1}`,
            "itemdetailimg1exp":`${item.itemdetailimg1exp}` ,
            "itemdetailimg2":`${item.itemdetailimg2}` ,
            "itemdetailimg2exp":`${item.itemdetailimg2exp}` ,
            "itemdetailimg3":`${item.itemdetailimg3}` ,
            "itemdetailimg3exp":`${item.itemdetailimg3exp}` ,
            "itemdetailimg4":`${item.itemdetailimg4}` ,
            "itemdetailimg4exp":`${item.itemdetailimg4exp}` ,
            "itemdetailimg5":`${item.itemdetailimg5}` ,
            "itemdetailimg5exp":`${item.itemdetailimg5exp}` ,
            "itemdetailimg6":`${item.itemdetailimg6}` ,
            "itemdetailimg6exp": `${item.itemdetailimg6exp}`,
            "itemdetailimg7": `${item.itemdetailimg7}`,
            "itemdetailimg7exp":`${item.itemdetailimg7exp}` 
        
        
    })
  }
  

  const removefromCart = (item) =>
  {
   
    axios.delete(`https://barterwdcash-cartlist-default-rtdb.asia-southeast1.firebasedatabase.app/cart-list/${item.cartId}.json`)
    
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
                       removefromCart={removefromCart} setcartList ={setcartList}
                        />}/>
                
            

            
            
        </Routes>
        <Footer/>
         
         
        

  
      </div>
      
  )
}

export default App
