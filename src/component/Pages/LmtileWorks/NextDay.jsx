import React from 'react';
import { Link } from 'react-router-dom';
import BannerBg from '../../../assets/img/discover/how-to-install-laminate-floor.jpg'
import best from '../../../assets/img/discover/pick-the-best.jpg'
import handle from '../../../assets/img/discover/we-handle.jpg'
import untile from '../../../assets/img/discover/until-you-are.jpg'
import OffersModal from '../Offers/OffersModal';

const NextDay = () => {
    return (
        <div className='mb-10'>
            <OffersModal></OffersModal>
            <div className="hero mt-10" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-overlay bg-opacity-24"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">CUSTOM, PROFESSIONAL INSTALLATION</h1>
                        <p className="mb-5 text-2xl">Get New Floors as Soon as Next Day</p>
                    </div>
                </div>
            </div>

            <div className='grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:mx-auto mx-auto gap-10 px-10 mt-20 mb-10'>
                <div>
                    <h2 className='text-3xl font-bold my-8'>We Aim toBe the Best</h2>
                    <p className='text-gray-600 text-lg mb-5'>Quality workmanship is in the details. Even the highest-grade floor wouldn’t look good without the very best professional installation.</p>
                    <Link to={'/schedule'}><p className='btn btn-primary'>MAKE AN APPOINTMENT</p></Link>
                </div>
                <div>
                    <img src={best} alt="" className='w-96' />
                    <h3 className='text-3xl font-bold'>LM-Tile®</h3>
                    <p className='text-xl text-gray-600'>Picks the Best Crews</p>
                    <p className='pt-2 text-gray-600'>They are licensed, insured, and screened regularly to meet our stringent standards.</p>
                </div>
                <div>
                    <img src={handle} alt="" className='w-96' />
                    <h3 className='text-3xl font-bold'>WE HANDLE</h3>
                    <p className='text-xl text-gray-600'>the Details</p>
                    <p className='pt-2 text-gray-600'>Installers move your furniture, remove your old floors, install your new floors, clean up, and move your furniture back.</p>
                </div>
                <div>
                    <img src={untile} alt="" className='w-96' />
                    <h3 className='text-3xl font-bold'>SATISFACTION</h3>
                    <p className='text-xl text-gray-600'>is Our Priority</p>
                    <p className='pt-2 text-gray-600'>Installers walk with you through your job after it is completed to ensure you are happy.</p>
                </div>
            </div>

            <div className='p-10 bg-blue-800'>
                <h1 className='text-4xl text-white font-bold text-center mb-5'>You Don't Have to Wait Weeks for New Floors </h1>
                <p className='text-xl text-white text-center lg:px-40'>
                    We stock hundreds of floors, directly from some of the best flooring brands in the world,
                    so we’re ready to install whenever you want. Unlike other flooring and home improvement stores,
                    Empire can install as soon as </p>
                <div className="">
                    <div className=" grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-10 px-10 mt-20 mb-10'">
                        <div className=''>
                            <h1 className='text-4xl font-bold text-white mb-5'>LM-Tile</h1>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 1</span>
                                <h3 className='text-2xl font-bold'>IN-HOME APPOINTMENT</h3>
                                <h4 className='text-lg'>See samples in your home, room measurements, receive all-inclusive price estimate, apply for financing, schedule installation</h4>
                            </div>
                            <div className='bg-base-100 p-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 2</span>
                                <h3 className='text-2xl font-bold'> INSTALLATION</h3>
                                <h4 className='text-lg'>Have your new floors installed as soon as Next Day!</h4>
                            </div>
                        </div> 
                        <div>
                            <h1 className='text-4xl font-bold text-white mb-5'>Others Flooring Store</h1>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 1</span>
                                <h3 className='text-2xl font-bold'>STORE VISIT</h3>
                                <h4 className='text-lg'>Browse products, check out samples (may have to pay a fee)</h4>
                            </div>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 2</span>
                                <h3 className='text-2xl font-bold'>VIEW SAMPLES AT HOME</h3>
                                <h4 className='text-lg'>Narrow down selection of samples</h4>
                            </div>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 3</span>
                                <h3 className='text-2xl font-bold'>STORE VISIT #2</h3>
                                <h4 className='text-lg'>Return samples, checkout new samples</h4>
                            </div>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 5</span>
                                <h3 className='text-2xl font-bold'>STORE VISIT #3</h3>
                                <h4 className='text-lg'>Return samples, schedule room measure</h4>
                            </div>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 9</span>
                                <h3 className='text-2xl font-bold'>ROOM MEASURING</h3>
                            </div>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 12</span>
                                <h3 className='text-2xl font-bold'>PRICE ESTIMATE</h3>
                            </div>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 14</span>
                                <h3 className='text-2xl font-bold'>PRODUCT ORDERED FROM MANUFACTURER</h3>
                            </div>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 20</span>
                                <h3 className='text-2xl font-bold'>SCHEDULE INSTALLATION</h3>
                                <h4 className='text-lg'>Product arrives from manufacturer</h4>
                            </div>
                            <div className='bg-base-100 p-5 mb-5 rounded-xl'>
                                <span className='text-center text-red-700 border border-black rounded-xl font-bold px-3'>Day 28</span>
                                <h3 className='text-2xl font-bold'>INSTALLATION</h3>
                                <h4 className='text-lg'>It takes over a month for your new floors to be installed</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-10 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link><button className="btn btn-primary text-bold mt-5 rounded-none">SCHEDULE NOW</button></Link>
            </div>
        </div>
    );
};

export default NextDay;