import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleProductDetails = ({ product }) => {
    const { images, name, category, color, type } = product;
    const [mainImage, setMainImage] = useState(null);
    const [pictures,setImage] = useState([images])
    const handleImageClick = (image) => {
        setMainImage(image);
    };
    return (
        <div>
            <div className='lg:flex md:flex '>
                <div className='w-96 md:w-[400px] lg:w-[600px] lg:ml-60 md:ml-10 mt-10 flex p-5'>
                    <div className='gap-y-10 mt-5 mr-5'>
                        {pictures.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Product Image ${index}`}
                                onClick={() => handleImageClick(image)}
                                className="shadow-2xl w-24 mb-3"
                            />
                        ))}
                    </div>
                    <div className='mt-5'>
                        <img src={mainImage || pictures[0]} alt="Main Product Image" className='shadow-2xl w-80 md:w-[300px] lg:w-[400px] justify-center' />
                    </div>

                </div>
                <div className='lg:w-[350px] md:w-[250px]  lg:ml-20 mt-10 p-5'>
                    <h2 className='text-3xl font-bold mb-3'>{name}</h2>
                    <h3 className='text-2xl mb-3'>{color}</h3>
                    <Link><button className='btn btn-outline hover:btn-dark text-lg font-bold rounded-none my-5'><FaCamera className='text-xl mr-2' />View in my Room</button></Link>
                    <div className='bg-base-300 shadow-2xl p-5 mb-5'>
                        <h3 className='text-2xl font-bold'>About</h3>
                        <p>Warm up rooms and reduce energy bills with the natural insulation and comfort of carpet. With many styles to choose from and the best stain-fighting technology in the industry, Shaw carpet brings color, texture and value to your floors. Create distinctively stylish looks when you play with texture, loop, pattern and twist options.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;