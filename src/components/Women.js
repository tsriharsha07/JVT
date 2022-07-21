import React, { useState } from "react";
import data from "./data/Womens";
import FavoriteIcon from "@mui/icons-material/Favorite";
//import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { addCart } from "./redux/actions"
import { useDispatch } from "react-redux";


const Women = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);
  const dispatch=useDispatch();

  const addToCart=(product)=>{
    dispatch(addCart(product));
  }

  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">Womens Dresses</h1>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
        {items.map((item) => {
          const { id, image, title, desc, price } = item;

          return (
            <div className="col-md-4 mb-3" key={id}>
              <div className="h-100 text-center p-4 card">
                <div>
                <img className="card-img-top img-thumbnail d1" src={image}   alt="Womens pic" />
                </div>
                <div className="card-body">
                  <div className="mb-0 card-title h5">{title}</div>
                  <p>{desc}</p>
                  <p className="lead fw-bold card-text">${price}</p>
                  <FavoriteIcon className="m-2"/>
                  <button type="button" className="btn btn-primary" onClick={()=>addToCart(item)}>
                    Buy Now
                  </button>
                </div>
                
              
            </div>
            </div>
          );
        })}
        </div>
        </div>
    
    
    </>
  );
};

export default Women;
