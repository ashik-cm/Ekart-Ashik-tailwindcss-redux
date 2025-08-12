import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'


const Wishlist = () => {
  return (
    <div>
      <Header/>
      <div style={{paddingTop:'70px'}} className="px-5">
        <>
        <h1 className='text-4xl font-bold text-red-600 mb-4'>My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
          <div className="rounded border p-2 shadow-lg">
            <img width={'100%'} height={'200px'} src="https://i0.wp.com/picjumbo.com/wp-content/uploads/detailed-shot-of-ripples-at-sunset-free-image.jpeg?w=600&quality=80" alt="" />
            <div className='text-center'>
              <h4 className='text-xl font-bold'>Product Name</h4>
              <div className="flex justify-evenly mt-3">
                <button className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                <button className='text-xl'><i className='fa-solid fa-cart-plus text-green-600'></i></button>
              </div>
            </div>
          </div>
        </div>
        </>
      </div>
    </div>
  )
}

export default Wishlist