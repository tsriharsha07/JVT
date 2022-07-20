import React from 'react'
import { Card } from 'react-bootstrap'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Cart = ({cart,addToCart}) => {
  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">Mens Dresses</h1>
      <section className="p-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20 ">
        {cart.map((item) => {
          const { id, image, title, desc, category, type, price } = item
          
          return (
            <div key={id} className="bg-gray-200  rounded-lg p-5 m-5 d-flex flex-row">
              <Card className='carditem col-3  w-100 d-flex align-items-center '>
              <Card.Img className='carditem-photo w-75' variant="top" src={image} alt='Baby world' />
              <Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {desc}
                  {category}
                  {type}<hr/>
                  Rs {price}
                </Card.Text>
                
                <FavoriteIcon className='m-2'/>
                <button className='btn btn-outline-info' variant="info" onClick={addToCart} >Buy Now</button>
              </Card.Body>
        </Card>
            </div>
          )
          
        })}
      </section>
    </>
  )
}

export default Cart
