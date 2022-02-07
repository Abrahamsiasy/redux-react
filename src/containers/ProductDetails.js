import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';



const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const { id, title, description, category, image, rating, price } = product

  const { programID } = useParams()
  const dispatch = useDispatch()
  console.log(product)

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${programID}`)
      .catch(err => {
        console.log('ERR', err)
      })
    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (programID && programID !== '') fetchProductDetail()

    return () => {
      dispatch( removeSelectedProduct())
    }
  }, [programID])
  return (
    <div className='flex flex-wrap'>
      <div className='my-10' key={id}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg" >
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">
                {description}
              </p>
            </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {price}</span>
          </div>
        </div>
      </div>











      
    </div>
  )
};

export default ProductDetails;
