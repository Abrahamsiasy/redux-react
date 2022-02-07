import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setProducts } from '../redux/actions/productActions'
import ProductCard from './ProductCard';

import axios from 'axios';
import { useEffect } from 'react';

const ProductListing = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state)

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log("error", err)
            })
        // console.log("producta: ", response.data)
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    console.log("Product: ", products)
    return (
        <div className='flex flex-wrap justify-between'>
            <ProductCard />
        </div>
    )

};

export default ProductListing;
