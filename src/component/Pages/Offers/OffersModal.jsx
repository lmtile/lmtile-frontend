import React from 'react';
import { Link } from 'react-router-dom';

const OffersModal = () => {
    return (
        <div>
            <div className='bg-blue-800 py-3 lg:px-40 text-white'>
                <p className='text-center'><span className='text-3xl font-bold text-white pr-5 '>50/50/50 SALE</span>50% OFF Carpet & Flooring, 50% OFF Standard Padding & Materials, and 50% OFF Professional Installation!</p>
                <p className='text-center'>Select styles.<label htmlFor="my-modal-5" className="btn-ghost"><u>DETAILS</u></label></p>
            </div>

            {/* modal */}
            <div>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box w-11/12 max-w-7xl rounded-none">
                        <h3 className="font-bold text-3xl px-10 text-center mt-10">50% OFF* Carpet & Flooring, 50% OFF* Standard Padding & Materials, plus get 50% OFF* Professional Installation!</h3>
                        <p className="py-4 text-2xl text-center">It's Easy! Here's How it Works:</p>
                        <div className='grid gap-x-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                            <div className='text-center p-5'>
                                <span className='bg-blue-800 font-bold text-center text-white px-3 py-2 rounded-full'>1</span>
                                <h1 className='text-2xl mt-5 mb-3 font-bold'>Schedule a FREE In-Home Estimate</h1>
                                <p><Link to={'/schedule'}><u className='text-blue-600'>Schedule online</u></Link> or call
                                    866-495-4223.</p>
                            </div>
                            <div className='text-center p-5'>
                                <span className='bg-blue-800 font-bold text-center text-white px-3 py-2 rounded-full'>2</span>
                                <h1 className='text-2xl mt-5 mb-3 font-bold'>Shop-at-Home</h1>
                                <p>See hundreds of samples and get a price estimate on the spot.</p>
                            </div>
                            <div className='text-center p-5'>
                                <span className='bg-blue-800 font-bold text-center text-white px-3 py-2 rounded-full'>3</span>
                                <h1 className='text-2xl mt-5 mb-3 font-bold'>50/50/50 Sale</h1>
                                <p>Get 50% OFF* Carpet & Flooring, and get 50% OFF* Padding & Materials, plus get 50% OFF* Professional Installation!</p>
                            </div>
                            <div className='text-center p-5'>
                                <span className='bg-blue-800 font-bold text-center text-white px-3 py-2 rounded-full'>3</span>
                                <h1 className='text-2xl mt-5 mb-3 font-bold'>Get Professional Installation</h1>
                                <p>Professional installers will transform your floors, as soon as Next Day.**</p>
                            </div>
                        </div>
                        <div className='mt-10 text-center bg-base-300 p-10'>
                            <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                            <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                            <Link to={'/schedule'}><button className="btn btn-outline text-bold mt-5 rounded-none">BOOK A FREE APPOINTMENT</button></Link>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersModal;