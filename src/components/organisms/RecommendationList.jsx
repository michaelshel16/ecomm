import React from 'react';
import { useState ,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import ItemCard from '../molecules/ItemCard';
import "./RecommendationList.css";
import { Link } from 'react-router-dom';

function RecommendationList() {
   const[recommendationList, setrecommendationList] = useState([]);
   
  useEffect( ()=>{
    axios.get("https://barterwdcash-recomlist-default-rtdb.asia-southeast1.firebasedatabase.app/recomm-list.json")
    .then(response=>{
       let recommendationList =[];
       for(let key in response.data){
       recommendationList.push({...response.data[key],id:key}) 
    }
       setrecommendationList(recommendationList)
       console.log(recommendationList)
  })
    .catch(error =>
        {
            console.log(error)
        })
    },[])
  return (
    <div>
        <Container>
        <div className='recomm-list-title'><h3>Electronics</h3></div>
    <div className='recomm-list'>
      
      {
        recommendationList.length===0?<h3>No items found</h3>:
        recommendationList.map((item,index)=>(
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

export default RecommendationList
