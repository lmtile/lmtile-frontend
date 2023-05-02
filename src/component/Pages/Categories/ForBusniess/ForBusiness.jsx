import React from 'react';
import { Link } from 'react-router-dom';
import OffersModal from '../../Offers/OffersModal';
import Banner from '../../../../assets/img/home page/B1GR50-081522-091122_1920x540.jpg'
import img1 from '../../../../assets/img/home page/3b4478c7-994f-47e5-bb97-c03ee713683f.png'
import { FaCheckCircle } from 'react-icons/fa';
import SeeFloor from '../../SeeFloor/SeeFloor';
import img4 from '../../../../assets/img/discover/how_next_day2.jpg';
import img5 from '../../../../assets/img/discover/how_pricing2.jpg';
import img6 from '../../../../assets/img/discover/how_quality2.jpg';
import img7 from '../../../../assets/img/discover/how_samples2.jpg';



const ForBusiness = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})`, width: '100%' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">THE EASIEST WAY TO GET NEW FLOORS</h1>
                        <h1 className="mb-5 text-4xl font-bold">FOR YOUR BUSINESS.</h1>
                        <h1 className="mb-4 text-4xl ">Connect with a flooring pro.</h1>
                        <Link><button className='text-lg font-bold btn bg-red-800 rounded-none'>GET A FREE APPOINTMENT</button></Link>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-4xl font-bold mb-10 mt-12 text-center text-red-800'>LM-TILE® HAS YOUR COMMERCIAL FLOORING NEEDS COVERED</h1>
                <p className='text-lg text-gray-500 text-center'>From offices and retail spaces to schools and medical facilities, we can handle most any flooring project.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-32 p-12'>
                    <div className='p-10 text-center'>
                        <FaCheckCircle className='mx-auto text-5xl text-warning'></FaCheckCircle>
                        <h2 className='text-2xl font-bold mt-5 text-red-800'>All-Inclusive Service</h2>
                        <h2 className='text-lg'>No surprises. We offer full-service, start-to-finish project management so you can focus on running your business.</h2>
                    </div>
                    <div className='p-10 text-center'>
                        <FaCheckCircle className='mx-auto text-5xl text-warning'></FaCheckCircle>
                        <h2 className='text-2xl font-bold mt-5 text-red-800'>After-Hour & Weekend Installations</h2>
                        <h2 className='text-lg'>We work around your schedule to not interrupt your business or customers.</h2>
                    </div>
                    <div className='p-10 text-center'>
                        <FaCheckCircle className='mx-auto text-5xl text-warning'></FaCheckCircle>
                        <h2 className='text-2xl font-bold mt-5 text-red-800'>Local Resources - National Footprint</h2>
                        <h2 className='text-lg'>Resources of a national brand with local experts to handle your every need.</h2>
                    </div>
                </div>
            </div>
            <SeeFloor></SeeFloor>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:px-32 p-12'>
                <div>
                    <h1 className='text-4xl font-bold mb-10 mt-12 text-center text-red-800'>Commercial Flooring Resource Center</h1>
                    <h1 className='text-3xl font-bold mb-10 text-red-800'>5 Questions to Ask Yourself Before Choosing New Floors for Your Business</h1>
                    <p className='text-gray-500 text-lg'>Here at LM-Tile , we don’t expect you to be flooring experts on top of your daily business responsibilities. That’s our job. To help you along in the process, there are important questions you should ask yourself before choosing new flooring for your business. Five to be exact. <Link to={'/questions'}><u className='text-red-800 font-bold'>Read More</u></Link></p>
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
            
            <div className='text-center bg-red-800 px-10 py-5 lg:mx-40 lg:mb-20 my-10'>
                <h1 className='text-4xl font-bold text-white'>WHAT'S DIFFERENT ABOUT LM-TILE?</h1>
                <div className="hero bg-base-100 my-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img7} className=" shadow-2xl w-full md:w-3/4 lg:w-2/4" alt='' />
                        <div>
                            <h1 className=" text-2xl font-bold text-red-800">Shop-at-Home Convenience</h1>
                            <h1 className=" text-3xl font-bold">SEE FLOORING SAMPLES In Your Home</h1>
                            <p className="py-6 text-gray-600">LM-Tile brings the store to you, so don’t have to spend time driving all over town shopping. A knowledgeable flooring professional will bring hundreds of samples right to your home and help you pick the best floor for your needs and budget.</p>
                            <Link to={'/convenience'}><p className='font-bold text-lg text-red-800'><u>LEARN MORE</u></p></Link>
                        </div>
                    </div>
                </div>
                <div className="hero  bg-base-100 my-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img6} className=" shadow-2xl w-full md:w-3/4 lg:w-2/4" alt='' />
                        <div>
                            <h1 className=" text-2xl font-bold text-red-800">Quality, Name-Brand Products</h1>
                            <h1 className=" text-3xl font-bold">QUALITY You Can Count On</h1>
                            <p className="py-6 text-gray-600">Everything Lm-Tile offers is handpicked to be durable and long-lasting – from brands you know and trust, the same ones you’ll find in stores. Plus, have peace of mind because everything we offer is backed by some of the best warranties in the industry.</p>
                            <Link><p className='font-bold text-lg text-red-800'><u>LEARN MORE</u></p></Link>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-100 my-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img4} className=" shadow-2xl w-full md:w-3/4 lg:w-2/4" alt='' />
                        <div>
                            <h1 className=" text-2xl font-bold text-red-800">Professional Installation</h1>
                            <h1 className=" text-3xl font-bold">GET NEW FLOORS as soon as Next Day</h1>
                            <p className="py-6 text-gray-600">You don’t have to wait weeks for new floors. Because we stock hundreds of floors, you can get installation as soon as next day. We utilize the best crews and are here to make sure you are happy with every detail of your custom installation.</p>
                            <Link to={'/nextDay'}><p className='font-bold text-lg text-red-800'><u>LEARN MORE</u></p></Link>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-100 my-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img5} className=" shadow-2xl w-full md:w-3/4 lg:w-2/4" alt='' />
                        <div>
                            <h1 className=" text-2xl font-bold text-red-800">All-Inclusive Price Estimate</h1>
                            <h1 className=" text-3xl font-bold">UPFRONT PRICING, No Hidden Fees</h1>
                            <p className="py-6 text-gray-600">LM-Tile takes the guesswork out of knowing how much new floors will cost. During your in-home consultation, you will get an all-inclusive price estimate, so you know what your project will cost.</p>
                            <Link to={'/forBusiness'}><p className='font-bold text-lg text-red-800'><u>LEARN MORE</u></p></Link>
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

export default ForBusiness;