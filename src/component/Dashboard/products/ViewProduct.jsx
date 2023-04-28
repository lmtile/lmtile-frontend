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
    return (
        <div>
            <div className="grid grid-cols-3 mt-5 mr-5">
                {productDetails.images?.map((image, key) => (
                    <img
                        key={key}
                        src={`${BUCKET_DOMAIN}${image}`}
                        alt="Product Image"
                        className="shadow-2xl w-96 mb-3 cursor-pointer"
                    />
                ))}
            </div>
        </div>
    );
};

export default ViewProduct;