import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch =useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const [product, setProduct] = useState({})
  const { id } = useParams()
  console.log(id);
  const { allProducts } = useSelector(state => state.productReducer)
  console.log(allProducts);

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      console.log(allProducts.find(item => item.id == id));
      setProduct(allProducts.find(item => item.id == id))
    }
  },[])

  const handleWishlist =()=>{
    const existingItem = userWishlist?.find(item=>item?.id==id)
    if(existingItem){
      alert("Product already added to wishlist")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart =()=>{
    dispatch(addToCart(product))
    const existingItem = userCart?.find(item=>item?.id==id)
    if(existingItem){
      alert("Product quantity is incremented..")
    }else{
      alert("Product added to cart..")
    }
  }

  

  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <div className="flex justify-center items-center">
            <img style={{ height: '400px', width: '400px' }} src={product?.thumbnail} alt="" />
          </div>
          <div className="">
            <h4 className='font-bold font-mono'>PID : {product?.id}</h4>
            <h1 className='font-bold text-5xl mb-2'>{product?.title?.slice(0, 49)}</h1>
            <h3 className='text-red-600 text-2xl mb-2 font-bold'><span className='text-red-500'>Price</span> $ {product.price}</h3>
            <p><span className='text-gray-700'>Brand </span>: {product?.brand}</p>
            <p>Catatgory : {product.category} </p>
            <p className='mb-4 mt-2'><strong>Description : </strong>{product?.description?.slice(0, 300)}</p>
            <button onClick={handleCart} className='bg-green-700 p-2 rounded font-semibold text-white'>Add to Cart</button>
            <button onClick={handleWishlist} className='bg-blue-700 p-2 rounded ms-2 font-semibold text-white'>Add to wishlist</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default View