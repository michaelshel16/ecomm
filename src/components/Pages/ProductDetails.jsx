import React from 'react';
import "./ProductDetail.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import {faWallet} from '@fortawesome/free-solid-svg-icons';
import {faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons';


function ProductDetails({addtoCart}){ 
  let {id} = useParams();

  const [productDetails, setproductDetails]          = useState({});
  const [keyOne,setkeyOne]                           = useState('itemdetailimg1exp');
  const [imagerender,setimagerender]                 = useState(productDetails[keyOne]);

  useEffect (() => {
    axios.get(`https://barterwdcash-default-rtdb.asia-southeast1.firebasedatabase.app/item-list-electronics/${id}.json`)
    .then(res => {
        
         res.data === null ? console.log("no data found"):
        
         setproductDetails(res.data)
         console.log(productDetails)
        

        
    })

    axios.get(`https://barterwdcash-recomlist-default-rtdb.asia-southeast1.firebasedatabase.app/recomm-list/${id}.json`)
    .then(res=>
      { 
       res.data === null ? console.log("no data found"):
     
       setproductDetails(res.data)
       console.log(productDetails)
       
        
      })
     
  
  }, [])






function renderExp(key)
{
  setimagerender(productDetails[key]);
}
  

  return (
    
    <div className='product-details-container'>
        <Container>
      <Row>
        <Col xs={1}>
        { 
        
         <div className='product-details-feature-img'>
          <div className='product-details-feature-img-category'  onMouseEnter={()=>{setkeyOne("itemdetailimg1exp"); renderExp(keyOne) }} onClick={()=>{setkeyOne("itemdetailimg1exp"); renderExp(keyOne) }}>
          <img src={productDetails.itemdetailimg1} alt="no image"/>
          </div>
          <div className='product-details-feature-img-category'onMouseEnter={()=>{setkeyOne("itemdetailimg2exp"); renderExp(keyOne) }} onClick={()=>{setkeyOne("itemdetailimg2exp"); renderExp(keyOne) }}>
          <img src={productDetails.itemdetailimg2} alt="no image"/>
          </div>
          <div className='product-details-feature-img-category'onMouseEnter={()=>{setkeyOne("itemdetailimg3exp"); renderExp(keyOne) }} onClick={()=>{setkeyOne("itemdetailimg3exp"); renderExp(keyOne) }}>
          <img src={productDetails.itemdetailimg3} alt="no image"/>
          </div>
          <div className='product-details-feature-img-category'onMouseEnter={()=>{setkeyOne("itemdetailimg4exp"); renderExp(keyOne) }} onClick={()=>{setkeyOne("itemdetailimg4exp"); renderExp(keyOne) }}>
          <img src={productDetails.itemdetailimg4} alt="no image"/>
          </div>
          <div className='product-details-feature-img-category'onMouseEnter={()=>{setkeyOne("itemdetailimg5exp"); renderExp(keyOne) }} onClick={()=>{setkeyOne("itemdetailimg5exp"); renderExp(keyOne) }}>
          <img src={productDetails.itemdetailimg5} alt="no image"/>
          </div>
          <div className='product-details-feature-img-category'onMouseEnter={()=>{setkeyOne("itemdetailimg6exp"); renderExp(keyOne) }} onClick={()=>{setkeyOne("itemdetailimg6exp"); renderExp(keyOne) }}>
          <img src={productDetails.itemdetailimg6} alt="no image"/>
          </div>
          <div className='product-details-feature-img-category'onMouseEnter={()=>{setkeyOne("itemdetailimg7exp"); renderExp(keyOne) }} onClick={()=>{setkeyOne("itemdetailimg7exp"); renderExp(keyOne) }}>
          <img src={productDetails.itemdetailimg7} alt="no image"/>
          </div>
         </div>

           
        }
        </Col>
        <Col className='product-detail-expanded-img'>
        {
          <div>
            <img src={imagerender} alt="no image available"/>
          </div>
        }
        </Col>
        <Col>
        <div className='product-details-features-container'>
          <div className='product-details-features-title'>
          <h3>{productDetails.itemTitle}<p>{productDetails.itemDesc}</p></h3>
          </div>
          <div className ="product-details-features-brand-name">
           <span> Brand:</span>{productDetails.itemBrandname}
          </div>
          <div className='product-details-features-discount'>
             <h5>{productDetails.itemDiscount}%off</h5> <span><h4>{parseInt(productDetails.itemPrice)-parseInt(productDetails.itemDiscount)/100*parseInt(productDetails.itemPrice)}</h4></span>
          </div>
          <div className='product-details-features-mrp'>
          <span> MRP:{productDetails.itemPrice}</span>Inclusive of all taxes
          </div>
          <div className='product-details-features-delivery-details'>
              <div>
              <FontAwesomeIcon icon={faTruck} />Free delivery
              </div>
              <div>
              <FontAwesomeIcon icon={faWallet} />Cash on delivery
              </div>
              <div>
              <FontAwesomeIcon icon={faArrowRotateLeft} />Easy returns
              </div>
          </div>
          <div className='product-details-features-delivery-description'>
           <ul>
            <li>
              <p>{productDetails.itemAbout1}</p>
            </li>
            <li>
              <p>
                {productDetails.itemAbout2}
              </p>
            </li>
            <li>
              <p>
                {productDetails.itemAbout3}
              </p>
            </li>
            <li>
              <p>
                {productDetails.itemAbout4}
                </p>
            </li>
            <li>
              <p>
                {productDetails.itemAbout5}
                </p>
            </li>
            <li>
              <p>
                {productDetails.itemAbout6}
                </p>
            </li>
            </ul> 
          </div>
          <div className='product-details-features-buttons'>
           <button className='product-details-features-buttons-addtocart'  onClick={()=>addtoCart(productDetails)}>
            AddtoCart
           </button>
           <button className='product-details-features-buttons-buynow'>
            Buynow
           </button>
          </div>
        </div>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default ProductDetails
