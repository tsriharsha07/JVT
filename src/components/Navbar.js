import React from 'react'
import { Link } from 'react-router-dom'
//import Image from './Image'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-white bg-success bg-opacity-25">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mk h5 text-white">
                <li className="nav-item ">
                <Link to='/' underline='none'  className='text-decoration-none'><p className="nav-link text-white text-decoration-none">Logo </p></Link>
                </li>
                <li className="nav-item">
                <Link to='/men' className='text-decoration-none'><p className="nav-link text-white">Men</p></Link>
                </li>
                <li className="nav-item">
                <Link to='/women' className='text-decoration-none'><p className="nav-link px-2 text-white">Women</p></Link>
                </li>
		        {/*    <li className="nav-item">
                    <Link to='/kids'><p className="nav-link px-2 text-white">Kids</p></Link>
                </li> */}
                <li className="nav-item">
                <Link to='/footwear' className='text-decoration-none'><p className="nav-link px-2 text-white ">Footwear</p></Link>
                </li>


            </ul>
            <form className="form-inline my-2 my-lg-0 d-flex flex-row">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <Link to='/'><button className="btn btn-outline-warning mx-2" type="submit"><SearchIcon className='align-items-center btn-outline-warning'/></button></Link>
            </form>
            <div className="mx-2 ">
                <Link to='/login'><button className='btn btn-outline-warning m-2'>Login</button></Link>
                <Link to='/signup'><button className='btn btn-outline-warning m-2'>SignUp</button></Link>
                <Link to='/cart'><button className='btn btn-outline-warning m-2'><ShoppingCartIcon/></button></Link>
                
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
