import React, { useState } from "react";
import data2 from "./data/Footwears";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addCart } from "./redux/actions";
import { useDispatch } from "react-redux";
//import ShoppingCart from '@mui/icons-material/ShoppingCart';



const Footwear = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data2);
  const dispatch=useDispatch();

  const addToCart=(product)=>{
    dispatch(addCart(product));
  }

  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">Footwear</h1>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
        {items.map((item) => {
          const { id, image, title, desc,  price } = item;

          return (
            <div className="col-md-4 mb-3" key={id}>
              <div className="h-100 text-center p-4 card">
                <div className="">
                <img className="card-img-top img-fluid d1" src={image}   alt="Shoes pic" />
                <div/>
                <div className="card-body">
                  <div className="mb-0 card-title h5">{title}</div>
                  
                  <p>{desc}</p>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Select Size</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    
                  </select>
                  <p className="lead fw-bold card-text">${price}</p>
                  <FavoriteIcon className="m-2"/>
                  <button type="button" className="btn btn-primary" onClick={()=>addToCart(item)}>
                    Buy Now
                  </button>
                </div>
                
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

export default Footwear;
