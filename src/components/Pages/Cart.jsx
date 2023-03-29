import React from 'react';
import { Container,Badge } from 'react-bootstrap';

function Cart({cartList,removefromCart}) {
  console.log(cartList)
  return (
   <Container>
    <div className='cart-list-container'>
      <div className='cart-list-title'>
         <h3>Shopping Cart</h3>
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
                  <div className='cart-list-img' key={index}>
                   <img src={item.itemImg} alt="no image available"/>
                  </div>
                  
                  
                )
              })
             
              
                
              
            }
           </div>
          </div>
        )
      }
    
    </div>
   </Container>
    
  )
}

export default Cart
