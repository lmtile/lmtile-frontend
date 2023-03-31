import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from '../../../../config/axios';
import OffersModal from '../../Offers/OffersModal';
import ProductsPage from '../ProductsPage';

const Carpet = () => {
    const [product, setProduct] = useState([]);

    const [category, setCategory] = useState([]);

    axios
        .get("/api/product/get-all-products")
        .then((res) => {
            if (res.data.success) {
                toast.success(res.data.message);
                setProduct(res.data.products);
            } else {
                toast.error(res.data.message);
            }
        })
        .catch((err) => {
            console.error(err);
        });

    useEffect(() => {
        fetch("categories.json")
            .then((res) => res.json())
            .then((data) => setCategory(data));
    }, []);
    const type = [
        {
            "id": "1",
            "category": "Nylon"
        },
        {
            "id": "2",
            "category": "Polyester"
        },
        {
            "id": "3",
            "category": "Anso"
        },
        {
            "id": "4",
            "category": "Plush"
        },
        {
            "id": "5",
            "category": "Fiber"
        }
    ]

    const color = [
        {
            "id": "6",
            "color": "Red"
        },
        {
            "id": "7",
            "color": "Blue"
        },
        {
            "id": "8",
            "color": "Green"
        },
        {
            "id": "9",
            "color": "Gray"
        },
        {
            "id": "10",
            "color": "White"
        }
    ]

    return (
        <div>
            <OffersModal></OffersModal>
            <div className='lg:flex  bg-base-100'>
                <div className='px-10 gap-x-5 mt-20'>
                    <input type="text" placeholder="Search" className="input input-bordered border-black shadow-2xl my-5" />
                    <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                        <input type="checkbox" />
                        <div className="collapse-title font-bold">
                            Categories
                        </div>
                        <div className="collapse-content">
                            {
                                category.map((cat) => <div key={cat.id}>
                                    <button className=' font-bold text-sm'>{cat.category}</button>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                        <input type="checkbox" />
                        <div className="collapse-title font-bold">
                            Type
                        </div>
                        <div className="collapse-content">
                            {
                                type.map((cat) => <div key={cat.id}>
                                    <button className=' font-bold text-sm top-0'>{cat.category}</button>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                        <input type="checkbox" />
                        <div className="collapse-title font-bold">
                            Color
                        </div>
                        <div className="collapse-content">
                            {
                                color.map((cat) => <div key={cat.id}>
                                    <button className=' font-bold text-sm'>{cat.color}</button>
                                </div>)
                            }
                        </div>
                    </div>

                </div>
                <div className='grid gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 mb-10 mt-20'>
                    {product.map((product) => (
                        <ProductsPage key={product._id} product={product}></ProductsPage>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Carpet;