import React from 'react';
import img from '../../../assets/img/home page/home_for-business.jpg'
import { Link } from 'react-router-dom'



const FlooringForBusiness = () => {
    return (
        <div className='p-20'>
            <div className="hero bg-base-200 border border-red-800">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className=" shadow-2xl" alt='' />
                    <div className='lg:ml-20'>
                        <h1 className="text-4xl font-bold">FLOORING FOR BUSINESS</h1>
                        <h1 className='text-3xl text-red-800'>Full-Service Commercial Flooring Solutions</h1>
                        <p className="py-6">We serve businesses of all sizes from corporate and healthcare facilities, to small businesses, and property management groups.</p>
                        <Link to={'/forBusiness'}><button className="btn rounded-none bg-red-800">LEARN MORE</button></Link> 
                    </div>
                </div>
            </div>
            <div className='mt-20 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link to={'/schedule'}><button className="btn bg-red-800 rounded-none text-bold mt-5">SCHEDULE NOW</button></Link>
            </div>
        </div>
    );
};

export default FlooringForBusiness;