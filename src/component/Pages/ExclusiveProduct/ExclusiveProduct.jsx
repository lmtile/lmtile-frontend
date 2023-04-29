import React from 'react';
import img1 from '../../../assets/img/home page/Empire_Exclusive-Homefresh-Homepage_Badges.jpg'
import img2 from '../../../assets/img/home page/Homepage_Feature_Image.jpg'
import { Link } from 'react-router-dom'


const ExclusiveProduct = () => {
    return (
        <div className='bg-base-200 '>
            <h1 className='text-4xl py-20 text-center'><span className='font-bold'>EXCLUSIVE STYLES</span> You Don't Want to Miss</h1>
            <div className="hero  bg-base-200 pb-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img2} className="shadow-2xl" alt=''/>
                    <div>
                        <h2 className='text-2xl font-bold text-warning'>New!</h2>
                        <h1 className="text-3xl font-bold">
                            Quiet, Resilient & Environmentally
                            Friendly</h1>
                        <Link to="/products/laminate"><button className="btn bg-red-800 rounded-none mt-10">BROWSE PRODUCTS</button></Link>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className=" shadow-2xl "  alt=''/>
                    <div>
                        <h2 className='text-2xl font-bold text-warning'> New!</h2>
                        <h1 className="text-3xl font-bold">The World’s Only Hypo-Allergenic & Odor-Neutralizing Carpet</h1>
                        <Link to="/products/carpet"><button className="btn bg-red-800 rounded-none mt-10">BROWSE PRODUCTS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveProduct;