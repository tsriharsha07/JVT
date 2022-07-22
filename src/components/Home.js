import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Card,} from 'react-bootstrap'
import b1 from "./images/b1.jpg"
import f6 from "./images//f6.jpg"
import b10 from "./images//b10.jpg"
import f5 from "./images//f5.jpg"
import f4 from "./images//f4.jpg"
import b4 from "./images//b4.jpg"
import b2 from "./images//b2.jpg"
import b17 from "./images//b17.jpg"
import b7 from "./images//b7.jpeg"
//import b5 from "./images//b5.jpg"
import b6 from "./images//b6.jpg"
import b8 from "./images//b8.jpg"


const Home = () => {
  return (
    <div>
      <Carousel fade controls={true} keyboard={true} pause={false} className='carousal-top'>
        <Carousel.Item className='carousel-item'>
          <img
            className="d-block w-100"
            src={b4}
            alt="Shop here"
          ></img>
          <Carousel.Caption>
          <h3>For You</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img
            className="d-block w-100"
            src={b10}
            alt="Shop here"
          />

          <Carousel.Caption>
            <h3>For You</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img
            className="d-block w-100"
            src={b1}
            alt="Shop here"
          />
          <Carousel.Caption>
            <h3>For You</h3>
            
          </Carousel.Caption>

        </Carousel.Item>
        

      </Carousel>
      <Card>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                CATEGORIES
              </p>
            </blockquote>
          </Card.Body>
      </Card>
      <div >
        <div className='cd '>
        
        <Card className='carditem col-4 text-align-center align-items-center card12'>
              <Card.Img className='carditem-photo' variant="top" src={b2} alt='Baby world' />
              <Card.Body >
                <Card.Title>Men Section</Card.Title>
                <Card.Text>
                  Look for more
                </Card.Text>
                <Link to='/men'><button className='btn btn-outline-primary opacity-50' variant="info">Buy</button></Link>
              </Card.Body>
        </Card>
        <Card className='carditem col-4 text-align-center align-items-center card12'>
              <Card.Img className='carditem-photo align-items-center ' variant="top" src={b17} alt='Baby world' />
              <Card.Body>
                <Card.Title>Women Section</Card.Title>
                <Card.Text>
                  Look for more
                </Card.Text>
                <Link to='/women'><button className='btn btn-outline-primary opacity-50' variant="info">Buy</button></Link>
              </Card.Body>
        </Card>
        {/* <Card className='carditem col-3 text-align-center'>
              <Card.Img className='carditem-photo' variant="top" src={b3} alt='Baby world' />
              <Card.Body>
                <Card.Title>Kids Section</Card.Title>
                <Card.Text>
                  Look for more
                </Card.Text>
                <button className='btn btn-outline-primary' variant="info"><Link to='/kids'>Buy</Link></button>
              </Card.Body>
        </Card> */}
        <Card className='carditem col-4 text-align-center align-items-center card12'>
              <Card.Img className='carditem-photo' variant="top" src={b7} alt='Baby world' />
              <Card.Body className='w-100'>
                <Card.Title>Footwear</Card.Title>
                <Card.Text>
                  Look for more
                </Card.Text>
                <Link to='/footwear'><button className='btn btn-outline-primary opacity-50' variant="info">Buy</button></Link>
              </Card.Body>
        </Card>
        </div>
      
    </div>
      <div className='row' >
        <div className='col-lg-6 text-center p-0'>
          <Carousel fade controls={true} keyboard={true} pause={false} className='carousal-middle'>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100"
              src={f6}
              alt="Shop here"
            />
            <Carousel.Caption>
              <h4>New Arrival</h4>
              <Link to='/men'><button className='btn btn-outline-danger'>Shop Now</button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100"
              src={f4}
              alt="Shop here"
            />

            <Carousel.Caption>
            <h4>New Arrival</h4>
            <Link to='/men' ><button className='btn btn-outline-danger'>Shop Now</button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100"
              src={f5}
              alt="Shop here"
            />

            <Carousel.Caption>
            <h4>New Arrival</h4>
            <Link to='/men'><button className='btn btn-outline-danger'>Shop Now</button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
        <div className='col-lg-6 text-center '>
          <Carousel fade controls={true} keyboard={true} pause={false} className='carousal-middle'>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-90"
              src={b6}
              alt="Shop here"
            />
            <Carousel.Caption>
              <h4>New Arrival</h4>
              <Link to='/Footwear'><button className='btn btn-outline-danger'>Shop Now</button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-90"
              src={b8}
              alt="Shop here"
            />

            <Carousel.Caption>
            <h4>New Arrival</h4>
            <Link to='/Footwear'><button className='btn btn-outline-danger'>Shop Now</button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carousel-item'>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNDYzMjV8MHwxfHNlYXJjaHwyfHxzaG9lc3xlbnwwfHx8fDE2NTc3NzQ5OTA&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Shop here"
            />

            <Carousel.Caption>
            <h4>New Arrival</h4>
            <Link to='/Footwear'><button className='btn btn-outline-danger'>Shop Now</button></Link>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
        
        
        
      </div>
      
      
    </div>

    

    
  )
}

export default Home
