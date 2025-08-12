import React from 'react'
import Header from '../Components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className="flex flex-col mx-5">
      <div className="grid grid-cols-2 items-center h-screen">
        <img width={'450px'} height={'200px'} src="https://i0.wp.com/picjumbo.com/wp-content/uploads/detailed-shot-of-ripples-at-sunset-free-image.jpeg?w=600&quality=80" alt="" />
        <div className="">
          <h4 className='font-bold'>Product id</h4>
          <h1 className='font-bold text-5xl mb-2'>Product Name</h1>
          <h3 className='text-red-600 text-2xl mb-2'>$20.55</h3>
          <p><span className='text-gray-700'>Brand </span>: Brand</p>
          <p>Catatgory : Category</p>
          <p className='mb-2 mt-2'><strong>Description : </strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus ea eveniet libero fuga corrupti nostrum modi quas ipsum qui necessitatibus repellendus nisi eaque quaerat, hic nulla sunt exercitationem deleniti.</p>
          <button className='bg-green-700 p-2 rounded font-semibold text-white'>Add to Cart</button>
          <button className='bg-blue-700 p-2 rounded ms-2 font-semibold text-white'>Add to wishlist</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default View