import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {
  const navigate = useNavigate()
  const [cartTotal,setCartTotal] = useState()
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart.map(item=>item.totalPrice).reduce((i1,i2)=>i1+i2))
    }
  },[userCart])


  const handleDecrementQuantity =(product) =>{
    if(product?.length>1){
      dispatch(incrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkout = ()=>{
    dispatch(emptyCart())
    alert("Thank you for shopping with us...😊")
    navigate('/')
  }

  return (
    <>
      <Header />
      <div className="px-5" style={{ paddingTop: '80px' }}>
        {
          userCart.length > 0 ?
            <>
              <h1 className='text-4xl font-bold text-blue-900'>Cart Summary</h1>
              <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="col-span-2 border rounded p-5 shadow">
                  <table className='table-auto w-full'>
                    <thead>
                      <tr>
                        <td className='font font-semibold'>id</td>
                        <td className='text-center font font-semibold'>Name</td>
                        <td className='font font-semibold'>Image</td>
                        <td className='font font-semibold'>Quantity</td>
                        <td className='font font-semibold'>Price</td>
                        <td className='font font-semibold'>...</td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        userCart?.map((product, index) => (
                          <tr key={userCart.id}>
                            <td>{index+1}</td>
                            <td className='text-center'>{product.title}</td>
                            <td><img height={'70px'} width={'70px'} src={product.thumbnail} alt="" /></td>
                            <td>
                              <div className="flex">
                                <button onClick={()=>handleDecrementQuantity(product)} className="font-bold">-</button>
                                <input style={{ width: '40px' }} type="text" className='border shadow p-1 rounded mx-2 text-center' value={product.quantity} readOnly />
                                <button onClick={()=>dispatch(incrementQuantity(product.id))} className="font-bold">+</button>
                              </div>
                            </td> 
                            <td>$ {Math.ceil(product.totalPrice)}</td>
                            <td><button onClick={()=>dispatch(removeCartItem(product.id))}><i className='fa-solid fa-trash text-red-500'></i></button></td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                  <div className='float-right mt-5'>
                    <button onClick={()=>dispatch(emptyCart())} className='bg-red-700 text-white font-bold p-2 rounded text-sm'>Empty Cart</button>
                    <button className='bg-green-700 ms-3 text-white p-2 rounded font-bold text-sm'><Link to={'/'}>Shop More</Link></button>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="border rounded shadow p-5">
                    <h2 className='text-2xl font-bold my-4'>Total amount :<span className='text-red-600'> $ {Math.ceil(cartTotal)}</span></h2>
                    <hr />
                    <button onClick={checkout} className='bg-green-600 rounded p-2 w-full mt-5 font-semibold text-white shadow'>Checkout<i className="fa-solid fa-money-check-dollar ms-2"></i></button>
                  </div>
                </div>
              </div>
            </>
            :
            <div className='flex justify-center'>
              <div style={{ width: '500px' }} className=" flex flex-col justify-center align-middle items-center h-screen">
                <img style={{ height: '300px', width: '300px' }} src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
                <h1 className='text-3xl text-gray-700 font-extrabold'>Your Cart is empty ... !</h1>
              </div>
            </div>
        }
      </div>

    </>
  )
}

export default Cart