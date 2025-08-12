import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
  <Header/>
  <div className="px-5" style={{paddingTop:'80px'}}>
    <>
    <h1 className='text-4xl font-bold text-blue-900'>Cart Summary</h1>
    <div className="grid grid-cols-3 gap-4 mt-5">
      <div className="col-span-2 border rounded p-5 shadow">
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <td className='font font-semibold'>id</td>
              <td className='font font-semibold'>Name</td>
              <td className='font font-semibold'>Image</td>
              <td className='font font-semibold'>Quantity</td>
              <td className='font font-semibold'>Price</td>
              <td className='font font-semibold'>...</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Product Name</td>
              <td><img height={'70px'} width={'70px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></td>
              <td>
                <div className="flex">
                  <button className="font-bold">-</button>
                  <input style={{width:'40px'}} type="text" className='border p-1 rounded mx-2 text-center' value={2} readOnly/>
                  <button className="font-bold">+</button>
                </div>
              </td>
              <td>$ 20</td>
              <td><button><i className='fa-solid fa-trash text-red-500'></i></button></td>
            </tr>
            
          </tbody>
        </table>
        <div className='float-right mt-5'>
          <button className='bg-red-700 text-white p-2 rounded'>Empty Cart</button>
          <button className='bg-green-700 ms-3 text-white p-2 rounded'><Link to={'/'}>Shop More</Link></button>
        </div>
      </div>
      <div className="col-span-1">
        <div className="border rounded shadow p-5">
          <h2 className='text-2xl font-bold my-4'>Total amount :<span className='text-red-600'> $ 9.99</span></h2>
          <hr/>
          <button className='bg-green-600 rounded p-2 w-full mt-5 font-semibold text-white'>Checkout</button>
        </div>
      </div>
    </div>
    </>
  </div>
    </>
  )
}

export default Cart