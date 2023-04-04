import React from 'react';
import { Container,Badge } from 'react-bootstrap';
import "./Cart.css";
import { useState } from 'react';


function Cart({cartList,removefromCart}) {
const [Quantity,setQuantity] = useState(1);
 
  function selectqty(e)
  {
   setQuantity(e.target.value);
     
  }
  
  
  
  console.log(cartList);
  
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
                        <select name="Qty:" className='cart-list-qty' onChange={()=>{selectqty(e)}}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>

                        </select>
                      </div>
                     </div>
                  </div>
                  <div>
                    <div className='cart-list-item-price'>
                      {item.itemPrice}
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
    {
    cartList.map((item,index)=>

    { 
      return(<div className='cart-list-total-container' key={index}>
      <div className='cart-list-total-subtotal'>
        <h3>Subtotal:{cartList.reduce((sum,item)=>{return (sum = sum + parseInt(item.itemPrice))},0)}</h3> 
      </div>
      <div>
        <h5>Delivery Charges:50</h5>
        <h5>Total:</h5>
      </div>
  
    </div>) 
    })
   
    }
    
   </Container>
    
  )
}

export default Cart
