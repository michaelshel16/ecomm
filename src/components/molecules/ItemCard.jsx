import React from 'react';
import "./ItemCard.css";

function ItemCard({itemImg,itemPrice,itemDesc,itemTitle,itemDiscount}) 
{
  return (
    <div className='item-card-container'>
        <div className='item-card-img'>
          <img src={itemImg}  alt="No image"/>
        </div>
        <div className='item-card-footer'>
          <div className='item-card-footer-content1'>
            <div className='item-card-footer-content1-title'>
             <h4>{itemTitle}</h4> 
            </div>
            <div className='item-card-footer-price'>
                {itemPrice}
            </div>
           
          </div>
        
        <div className='item-card-desc'>
        {itemDesc}
        </div>
         <div className='item-card-mrp'>
             <div className='item-card-mrp-detail'>
             MRP:{itemPrice}
             </div>
               
            <div className='item-card-mrp-disc-detail'>
            Discount:{itemDiscount}%
            </div>
         </div>
        </div>
        

    </div>
  )
}

export default ItemCard
