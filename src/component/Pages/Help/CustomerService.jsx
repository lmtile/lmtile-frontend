import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../assets/img/help/customer-service-call-center-ss-1920-1.jpg' 
import OffersModal from '../Offers/OffersModal';

const CustomerService = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className='mt-10'>
                <h1 className='text-5xl font-bold text-center'>CUSTOMER SERVICE</h1>
                <h3 className='text-2xl text-gray-500 text-center'>We're Here to Help</h3>
                <div className="hero bg-base-100 my-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={Banner} className=" shadow-2xl w-3/4" alt='' />
                        <div className='ml-10 lg:ml-10 md:ml-24'>
                            <h1 className=" text-3xl font-bold text-red-800">CONTACT US</h1>
                            <p className="py-6 text-gray-600">Our customer service team is available to answer your questions or to schedule an appointment.</p>
                            <h1 className=" text-3xl font-bold text-red-800">CALL US</h1>
                            <p className="py-6 text-gray-600">Call us at 281-861-6970, we’re available 24/7, or you can request a call, enter your phone number and we’ll call you back.</p>
                            <h1 className=" text-3xl font-bold text-red-800">LIVE CHAT OR EMAIL US</h1>
                            <p className="py-6 text-gray-600">LIVE CHAT now with one of our customer service representatives or contact us via email, we’ll respond within 1-2 business days.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-20 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link to={'/schedule'}><button className="btn bg-red-800 rounded-none text-bold mt-5">SCHEDULE NOW</button></Link>
            </div>
        </div>
        
    );
};

export default CustomerService;