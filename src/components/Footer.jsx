import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='row'>
        <div className="left-section col-lg-6 col-sm-12 p-3">
            
            <a class="ms-2 fw-bold text-decoration-none text-white " style={{fontSize:"25px"}} href="#">
                <i class="fa-solid fa-music me-2" style={{fontSize:"30px"}}></i>
                Media player
            </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus ad voluptatum dicta? Quam quis corrupti placeat consequatur fugiat aut consequuntur molestias, assumenda esse ea recusandae eaque, officia deleniti tempore.</p>
        </div>
        <div className="right-section col-lg-6 col-sm-12 row py-3 gap-3 gap-md-0">
            <div className="link col-md-4 text-center text-md-start">
            <h2 className='fw-bold fs-3'>Links</h2>
            <Link to={'/'} className='text-white text-decoration-none d-block '>Landing</Link>
            <Link to={'/home'} className='text-white text-decoration-none d-block '>Home</Link>
            <Link to={'/history'} className='text-white text-decoration-none d-block '>History</Link>
            </div>
            <div className="link col-md-4 text-center text-md-start">
            <h2 className='fw-bold fs-3'>Guides</h2>
            <Link className='text-white text-decoration-none d-block '>React</Link>
            <Link className='text-white text-decoration-none d-block '>React-bootatrap</Link>
            <Link className='text-white text-decoration-none d-block '>React-router</Link>
            </div>
            <div className="link col-md-4 text-center text-md-start">
            <h2 className='fw-bold fs-3'>Contact us</h2>
            <div className="input ">
                <div className="d-flex gap-1 justify-content-center">
                <input type="email" placeholder='Enter your email' className='w-50 form-control'/>
                <button className='btn btn-danger'><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="icons d-flex gap-4 mt-3 justify-content-center">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-github"></i>     
                    <i class="fa-brands fa-linkedin"></i>     
                    <i class="fa-solid fa-phone"></i>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Footer