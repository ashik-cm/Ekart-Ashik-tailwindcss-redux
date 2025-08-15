import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '240px', marginTop: '80px' }} className=" mt-5 w-full bg-violet-600 text-white p-4">
      <div className="flex justify-between p-4">
        <div className="intro" style={{ width: '400px' }}>
          <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i>E-cart</h5>
          <p>Designed and build with all the love in the world by me with the help of our contributors.</p>
          <p>Code lisenced Ashik, docs CC by 3.0</p>
          <p>Currently v5.3.2</p>
        </div>
        <div className="flex flex-col">
          <h5 className='text-xl font-bold'>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none' }} >Landing Page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none' }} >Home</Link>
          <Link to={'/history'} style={{ textDecoration: 'none' }} >Watch history Page</Link>
        </div>
        <div className="flex flex-col">
          <h5 className='text-xl font-bold'>Guides</h5>
          <a href='https://react.dev/' style={{ textDecoration: 'none' }}  target='_blank'>React</a>
          <a href='https://react-bootstrap.netlify.app/' style={{ textDecoration: 'none' }}  target='_blank'>React Bootstrap</a>
          <a href='https://www.npmjs.com/package/react-router-dom' style={{ textDecoration: 'none' }}  target='_blank'>React Router</a>
        </div>
        <div className="flex flex-col">
          <h5 className='text-xl font-bold mb-2'>Contact Us</h5>
          <div className='flex'>
            <input className='me-2 rounded p-1' type="text" placeholder='Enter your email here' />
            <button className='bg-blue-800 rounded ps-2 pe-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="flex justify-between mt-3">
            <a href="https://x.com/" style={{ textDecoration: 'none' }} target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/" style={{ textDecoration: 'none' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/" style={{ textDecoration: 'none'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/feed/" style={{ textDecoration: 'none' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/" style={{ textDecoration: 'none' }} target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="" style={{ textDecoration: 'none'}} target='_blank'><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className="text-center mt-3" style={{fontSize:'13px'}}>Copyright @ Ashik-ashi, Shopping Site, Build with react</p>
    </div>
  )
}

export default Footer