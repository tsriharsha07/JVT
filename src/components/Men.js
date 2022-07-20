import React, { useState } from "react";
import data from "./data/Mens";
import FavoriteIcon from "@mui/icons-material/Favorite";
//import ShoppingCart from '@mui/icons-material/ShoppingCart';


const Men = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);
  //const item={data};
  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log("Added to cart");
    console.log(data.id);
  };

  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">Mens Dresses</h1>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
        {items.map((item) => {
          const { id, image, title, desc, price } = item;

          return (
            <div className="col-md-4 mb-3" key={id}>
              <div className="h-100 text-center p-4 card">
                <div className="">
                <img className="card-img-top img-thumbnail d1" src={image} height="900px"   alt="Mens pic" />
                <div/>
                <div className="card-body">
                  <div className="mb-0 card-title h5">{title}</div>
                  <p>{desc}</p>
                  <p className="lead fw-bold card-text">{price}</p>
                  <FavoriteIcon className="m-2"/>
                  <button type="button" className="btn btn-primary" onClick={addToCart}>
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

export default Men;
