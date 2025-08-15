import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div className='h-screen flex items-center justify-center w-full'>
      <div className='text-center'>
        <h1 className='text-5xl font-extrabold text-red-600'>404</h1>
        <h5><span className='text-red-600'>Oops..!</span> the page you are looking for not found.</h5>
        <button className='bg-blue-700 rounded px-4 py-1 mt-3 text-white text-sm'><Link to={'/'}>Go to Homepage</Link></button>
      </div>
    </div>
  )
}

export default Pnf