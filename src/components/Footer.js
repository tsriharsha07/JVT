import React from 'react'
//import Image from './Image'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
  <>
  <div>
  <div className="container mb-1">
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><p className="nav-link px-2 text-muted" >Features</p></li>
      <li className="nav-item"><p className="nav-link px-2 text-muted">Pricing</p></li>
      <li className="nav-item"><p className="nav-link px-2 text-muted">FAQs</p></li>
      <li className="nav-item"><p className="nav-link px-2 text-muted">About</p></li>
      <li className="nav-item"><p className="nav-link px-2 text-muted">Home</p></li>
    </ul>
    <div className='d-flex flex-row'>
    <div className="col-md-4 d-flex align-items-centerd-flex">
        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
       <li className="ms-3"><p className="text-muted" ><TwitterIcon className='me-2'/></p></li>
       <li className="ms-3"><p className="text-muted" ><InstagramIcon className='me-2'/></p></li>
       <li className="ms-3"><p className="text-muted" ><FacebookIcon className='me-2'/></p></li>
       <li className="ms-3"><p className="text-muted" ><WhatsAppIcon className='me-2'/></p></li>
     </ul>
     </div>  
  </footer>
  </div>
  </div>
  </>
  )
}

export default Footer
