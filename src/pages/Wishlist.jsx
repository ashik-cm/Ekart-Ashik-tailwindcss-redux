import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const Wishlist = () => {

  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()

  const handleCart =(product)=>{
    dispatch(removeItem(product.id))
      dispatch(addToCart(product))
      const existingItem = userCart?.find(item=>item?.id==product.id)
      if(existingItem){
        alert("Product quantity is incremented..")
      }else{
        alert("Product added to cart..")
      }
    }

  return (
    <div>
      <Header />
      <div style={{ paddingTop: '70px' }} className="px-5">
        {userWishlist.length > 0 ?
          <>
            <h1 className='text-4xl font-bold text-red-600 mb-4'>My Wishlist</h1>
            <div className='grid grid-cols-8 gap-4'>
              {
                userWishlist.map(product => (
                  <div className="rounded border p-2 shadow-lg">
                    <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                    <div className='text-center'>
                      <h4 className='text-sm font-medium'>{product.title}</h4>
                      <h6 className='font-medium'>$ {product?.price}</h6>
                      <div className="flex justify-evenly mt-3">
                        <button onClick={()=>{
                          const disfun = dispatch(removeItem(product.id))
                          if(disfun){
                            alert("product removed !")
                          }
                        }} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                        <button onClick={()=>handleCart(product)} className='text-xl'><i className='fa-solid fa-cart-plus text-green-600'></i></button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </>
          :
          <div className='flex justify-center'>
            <div style={{ width: '500px' }} className=" flex flex-col justify-center align-middle items-center h-screen">
              <img style={{ height: '281px', width: '500px' }} src="https://nelnadu.com/images/pages/tumbleweed.gif" alt="" />
              <h1 className='text-3xl text-red-700 font-extrabold'>Your wishlist is empty ... !</h1>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Wishlist