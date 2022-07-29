import React, { useState } from "react";
import data from "./data/Data";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { addCart } from "./redux/actions";
// import { useDispatch } from "react-redux";
//import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";


const Footwear = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);
  // const dispatch=useDispatch();

  // const addToCart=(product)=>{
  //   dispatch(addCart(product));
  // }
  const products = data.filter((x)=>x.category === "Footwear");

  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">Footwear</h1>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
        {products.map((item) => {
          const { id, image, title,  price } = item;

          return (
            <div className="col-md-4 mb-3" key={id}>
              <div className="h-100 text-center p-4 card">
                <div className="">
                <img className="card-img-top img-fluid d1" src={image}   alt="Shoes pic" />
                <div/>
                <div className="card-body">
                  <div className="mb-0 card-title h5">{title}</div>
                  
                  
                  <p className="lead fw-bold card-text">${price}</p>
                  <FavoriteIcon className="m-2"/>
                  <Link to={`/Shop/${id}`}>
                  <button type="button" className="btn btn-primary" >
                    Buy Now
                  </button>
                  </Link>
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
