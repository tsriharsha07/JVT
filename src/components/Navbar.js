import React from 'react'
import { Link } from 'react-router-dom'
//import Image from './Image'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';





const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-dark">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mk h5 text-white">
            <li className="nav-item ">
              <Link to='/' underline='none' className='text-decoration-none'><p className="nav-link text-white text-decoration-none">Logo </p></Link>
            </li>
            <li className="nav-item">
              <Link to='/men' className='text-decoration-none'><p className="nav-link text-white">Men</p></Link>
            </li>
            <li className="nav-item">
              <Link to='/women' className='text-decoration-none'><p className="nav-link text-white">Women</p></Link>
            </li>

            <li className="nav-item">
              <Link to='/footwear' className='text-decoration-none'><p className="nav-link text-white ">Footwear</p></Link>
            </li>


          </ul>
          <form className="form-inline my-2 my-lg-0 d-flex flex-row">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <Link to='/'><button className="btn btn-outline-warning mx-2" type="submit"><SearchIcon className='align-items-center btn-outline-warning' /></button></Link>
          </form>
          <div className="mx-2 d-flex flex-row">
            <Link to='/login'><button className='btn btn-outline-warning m-2'>Login</button></Link>
            <Link to='/signup'><button className='btn btn-outline-warning m-2'>SignUp</button></Link>
            
            
            <Link to='/cart'><button className='btn btn-outline-warning m-2'><Badge><ShoppingCartIcon />{state.length}</Badge></button></Link>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
