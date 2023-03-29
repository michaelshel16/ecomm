import React, { useState } from 'react';
import { useEffect  } from 'react';
import ItemCard from "../molecules/ItemCard";
import { Container } from 'react-bootstrap';
import axios from 'axios';
import "./ItemList.css";
import { Link } from 'react-router-dom';
function ItemList() {
   
    const [itemsList, setItemsList] = React.useState([]);

  useEffect( () => {

    axios.get("https://barterwdcash-default-rtdb.asia-southeast1.firebasedatabase.app/item-list-electronics.json")
      .then(response => {
        let itemsList = [];
        for (let key in response.data) {
          itemsList.push({...response.data[key], id: key})
        }
        setItemsList(itemsList)
        console.log(itemsList)
      })
      .catch(error => {
        console.log(error)
      })


  }, [] )
 
   
  return (
    <div>
     <Container>
     <div className='item-list-title'><h3>Electronics</h3></div>
    <div className='item-list'>
      
      {
        itemsList.length===0?<h3>No items found</h3>:
        itemsList.map((item,index)=>(
          <Link to ={`/product/${item.id}`} key={index}>
        <ItemCard 
         key = {index}
        itemImg       =     {item.itemImg}
        itemDesc      =     {item.itemDesc}
        itemPrice     =     {item.itemPrice}
        itemDiscount  =     {item.itemDiscount}
        itemTitle     =     {item.itemTitle}
        />
        </Link>
        )
        

        
        )
      }


    </div>


     </Container>
      
    </div>
  )
}

export default ItemList
