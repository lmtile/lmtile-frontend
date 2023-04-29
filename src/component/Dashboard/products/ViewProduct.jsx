import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../config/axios';
import { BUCKET_DOMAIN } from '../../../helper/Helper';

const ViewProduct = () => {
    const [loading, setLoading] = useState(false);
    const [product_id, setProductId] = useState("");
    const [productDetails, setProductDetails] = useState({});
    const id = useParams()?.id;

    if (id && product_id !== id) {
        setProductId(id);
    }

    useEffect(() => {
        getProductDetails();
    }, [product_id]);

    const getProductDetails = () => {
        setLoading(true);
        if (!product_id) return;
        axios
            .get(`/api/product/product/${product_id}`)
            .then((res) => {
                setLoading(false);
                if (res.data.success) {
                    let { productDetails} = res.data;
                    setProductDetails(productDetails);

                } else {
                    message.error(res.data.message);
                }
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);

                message.error("Something went wrong!!!");
            });
    };
    console.log(productDetails);
    return (
        <div>
            <div className='m-10 '>
                <h1 className='text-4xl font-bold text-center my-10'>Product Details</h1>
                <h4 className='text-2xl font-bold text-red-800 mb-3'>{productDetails.name}</h4>
                <h4 className='text-2xl font-bold text-red-800 mb-3'>{productDetails.category}</h4>
                <h4 className='text-2xl font-bold text-red-800 mb-3'>{productDetails.type}</h4>
                <h4 className='text-2xl font-bold text-red-800 mb-3'>{productDetails.color}</h4>
                
            </div>
            <div className="grid grid-cols-5 gap-3 gap-x-3 mx-10">
                {productDetails.images?.map((image, key) => (
                    <img
                        key={key}
                        src={`${BUCKET_DOMAIN}${image}`}
                        alt="Product Image"
                        className="shadow-2xl w-80 mb-3 cursor-pointer"
                    />
                ))}
            </div>
        </div>
    );
};

export default ViewProduct;