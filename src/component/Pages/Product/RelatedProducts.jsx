import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ products }) => {
    return (
        <Link>
            <div className='hover:shadow-2xl p-5 bg-base-300 w-64 mb-10'>
                <div>
                    <img src={products.picture} alt="" className='' />
                    <p>{products.name}</p>
                    <p>{products.category}</p>
                    <p>{products.color}</p>
                </div>
            </div>
        </Link>
    );
};

export default RelatedProducts;