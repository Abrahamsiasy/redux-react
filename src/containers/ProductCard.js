import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    const products = useSelector((state) => state.allProducts.products)
    // const {id, title } = products[0]
    const renderList = products.map((product) => {
        const { id, title, description, category, image, rating, price } = product
        return (
            <div className='my-10' key={id}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg" >
                    <Link to={`/products/${id}`}>
                    <img className="w-full" src={image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">
                            {description}
                        </p>
                    </div>
                    </Link>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{rating.rate}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {price}</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {renderList}

        </>
    )

};

export default ProductCard;
