import React from 'react';
import { Container,Badge } from 'react-bootstrap';
import "./Cart.css";
import { useState ,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Cart({cartList,removefromCart,setcartList}) {
const [Quantity,setQuantity]     = useState(1);
const [totalPrice,settotalPrice] = useState(1);


 
console.log(cartList);
 
axios.get("https://barterwdcash-cartlist-default-rtdb.asia-southeast1.firebasedatabase.app/cart-list.json")
.then(response=>
  {
    let cartList = [];
    for(let key in response.data)
    {
      cartList.push({...response.data[key],cartId:key})
    }
    setcartList(cartList)
  })



  
  return (
   <Container>
    
    <div className='cart-list-container'>
      <div className='cart-list-title'>
         <h3>Shopping Cart</h3> <h4>SubTotal</h4>
      </div>
      {
        cartList.length === 0?
        (<div>
          <h4>Cart is empty</h4>
        </div>):
        (
          <div className='cart-body'>
           <div className='cart-list'>
            {
              cartList.map((item,index)=>
              {
                return(
                  <div className='cart-list-body'key={index}>
                  <div className='cart-list-img' >
                   <img src={item.itemImg} alt="no image available"/>
                  </div>
                  <div className='cart-list-details'>
                     <div>{item.itemTitle}</div>
                     <div>{item.itemDesc}</div>
                     <div>In stock</div>
                     <div>
                      <div>
                        <label>Qty:</label>
                        <select name="Qty:" className='cart-list-qty' onChange={(e)=>setQuantity(e.target.value)}>
                          <option></option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>

                        </select>
                      </div>
                     </div>
                  </div>
                  <div>
                    <div className='cart-list-item-price'>
                      {item.itemPrice*item.itemQuantity}
                    </div>
                    <div className='cart-list-remove'>
                     
                      <FontAwesomeIcon icon={faTrash} onClick={()=>removefromCart(item)} />
                      
                    </div>
                  </div>
                 </div> 
                  
                )
              })
             
              
                
              
            }
           </div>
          </div>
        )
      }
    
    </div>
    
   

    
      <div className='cart-list-total-container' >
      <div className='cart-list-total-subtotal'>
        <h3>Subtotal:{cartList.reduce((sum,item)=> (sum = sum + parseInt(item.itemPrice)),0)}</h3> 
      </div>
      <div>
        <h5>Delivery Charges:50</h5>
        <h5>Total:{cartList.reduce((sum,item)=> (sum = sum + parseInt(item.itemPrice)),0)+50}</h5>
      </div>
     
        <button className='cart-list-checkout'>Checkout</button>
    
  
    </div>
   
   
    
    
   </Container>
    
  )
}

export default Cart
