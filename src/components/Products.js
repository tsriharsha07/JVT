import React from 'react'
import { useParams } from 'react-router-dom'
import data from './data/Data';
import { useDispatch } from 'react-redux';
import { addCart } from './redux/actions';
// import Favorite from '@mui/icons-material/Favorite';

// import StarIcon from '@mui/icons-material/Star';

const Products = () => {
    // const{id}=useParams();
    // console.log(id);
    // const product=(parseInt(id));
    // console.log(product);
    // const dispatch = useDispatch();
    // const addProduct = (product)=>{
    //     dispatch(addCart(product));
    // }
    const { id } = useParams();
    console.log(id);
    const cid = parseInt(id)
    const product = data.filter((x) => x.id === cid)
    console.log(product);

    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }
    return (
        <div className="container my-5 py-5" key={cid}>
            <div className="column ">
                {product.map((item) => {
                    const { id, image, title, desc, type, price } = item;

                    return (
                        <div className=" flex flex-row" key={id}>
                            <div className="h-100 text-center p-4 card">
                                <div>
                                    <img className="card-img-top img-thumbnail d1 mr-auto" src={image} height="900px" alt="Mens pic" />
                                    
                                </div>
                            </div>
                            <div className='m-5'>
                                <h1>{title}</h1>
                                <h3>{type}</h3>
                                <p><h3>Description </h3><hr/>{desc}</p>
                                <h3>{price}</h3>
                                <button type="button" className="btn btn-primary" onClick={()=>addProduct(item)} >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Products