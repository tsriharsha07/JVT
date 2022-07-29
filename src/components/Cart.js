import React from 'react'
import {useSelector} from 'react-redux'
//import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch } from 'react-redux';
import { Card } from '@mui/material';
import { addCart, delCart } from './redux/actions';

function Cart() {
  const state=useSelector((state) => state.handleCart)
  var total=0;
  const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }
    const delProduct = (product)=>{
      dispatch(delCart(product));
    }
  return (
    <div className='cart'>
      <div className='container py-4 row justify-content-center'>
        <h3>Total number of items : {state.length}</h3>
        {state.map((product)=>{
            total=(product.qty*product.price)+total;
          return(
            <>
            <div className="col-md-4 mb-3" key={product.id}>
              <div className="h-100 text-center p-4 card">
                <div className="">
                <img className="card-img-top img-thumbnail d1" src={product.image} height="900px"   alt="Mens pic" />
                <div/>
                <div className="card-body">
                  <div className="mb-0 card-title h5">{product.title}</div>
                  
                  <p className="lead fw-bold card-text">${product.price}</p>
                  
                  
                  <ButtonGroup aria-label="Basic example">
                    <button className='btn btn-outline-primary' onClick={()=>delProduct(product)}>-</button>
                    <button className='btn btn-outline-primary'>{product.qty}</button>
                    <button className='btn btn-outline-primary' onClick={()=>addProduct(product)}>+</button>
                  </ButtonGroup>
                  <p className='display-6 my-4 lead card-text'>
                    Total Price : {product.price*product.qty}₹
                  </p>
                      
                
                </div>
                
              </div>
            </div>
            </div>
            </>
          )
        })}
        <div className='container m-auto p-auto'>
        <Card>
        <h3>Total Price :{total} </h3>
        </Card>
        </div>
        <div className='container'>
        <button className='my-3 btn btn-outline-primary opacity-10'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Cart