import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import RelatedProducts from './RelatedProducts';
import OffersModal from '../Offers/OffersModal';
import axios from '../../../config/axios';
import { toast } from 'react-hot-toast';
import SingleProductDetails from './SingleProductDetails';


const SingleProduct = () => {
    
    const [products, setProducts] = useState([]);
    const id =useParams()
    axios
        .get(`/api/product/product/:${id}`)
        .then((res) => {
            if (res.data.success) {
                toast.success(res.data.message);
                setProducts();
            } else {
                toast.error(res.data.message);
            }
        })
        .catch((err) => {
            console.error(err);
        });
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("relatedProduct.json")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    return (
        <div>
            <OffersModal></OffersModal>
            {
                products.map((product)=><SingleProductDetails key={product._id} product={product}></SingleProductDetails>)
            }
            <div className=''>
                <h2 className='text-4xl font-bold text-center my-10'>Related Products</h2>
                <div className='grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10'>
                    {product.map((products) => (
                        <RelatedProducts key={products._id} products={products}></RelatedProducts>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
