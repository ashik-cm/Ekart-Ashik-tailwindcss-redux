import React, { useEffect, useState,  } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  const dispatch = useDispatch()

  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  console.log(allProducts, loading, errorMsg);

  const [currentPage,setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPages = Math.ceil(allProducts.length/productPerPage)
  const currentPageProductLastIndex =currentPage * productPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex-productPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const navigateToNextPage =()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPrevPage =()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
        {
          loading ?
            <div className='flex justify-center items-center my-5 text-lg'>
              <img width={'70px'} height={'70px'} src="https://cdn.pixabay.com/animation/2023/11/30/10/11/10-11-02-622_512.gif" alt="" />
              <p className='text-blue-600 text-xl font-bold'>Loading....</p>
            </div>
            :
            <>
              <div className='grid grid-cols-4 gap-4'>
                {
                  allProducts.length>0 ?
                  visibleAllProducts.map(product=>(
                <div key={product.id} className="rounded border p-2 shadow-lg">
                  <img width={'150px'} height={'150px'} src={product.thumbnail} alt="" className='mx-auto d-block'/>
                  <div className='text-center'>
                    <p className='font-bold text-gray-500'>{product.brand}</p>
                    <h3 className='text-lg font-bold'>{product.title.slice(0,20)}</h3>
                    <h3 className='font-semibold text-sm'>$ {product.price}<span className='ms-5 text-red-700'>{product.discountPercentage}% off</span></h3>
                    <Link to={`/${product.id}/view`} className='bg-violet-600 rounded ps-2 pe-2 mt-2 text-white inline-block text-sm font-semibold'>View More <i className="fa-solid fa-angles-right"></i></Link>
                  </div>
                </div>
                  ))
                :
                <div className="flex justify-center items-center font-bold text-red-600 text-lg">
                  <img src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-4064375-3363936.png" alt="" />
                  Product not found....!
                </div>
                }
              </div>
              <div className="text-xl text-center font-bold mt-20">
                <button onClick={navigateToPrevPage} className=" text-gray-700"><i class="fa-solid fa-backward"></i></button>
                <span className=" mx-2">{currentPage} of {totalPages}</span>
                <button onClick={navigateToNextPage} className=" text-gray-700"><i class="fa-solid fa-forward"></i></button>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default Home