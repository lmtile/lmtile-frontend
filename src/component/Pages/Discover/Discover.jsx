import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";

const Discover = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:mx-auto text-center text-white'>
            <div className='text-white bg-red-800 px-5 pt-10 border border-slate-300 text-center'>
                <h1 className='text-3xl font-extrabold '>DISCOVER THE LM TILE</h1>
                <h1 className='text-3xl'>DIFFERENCE</h1>
                <h4 className='text-lg mb-5'>We make getting beautiful new floors easy.</h4>
                <div className='text-center'>
                    <Link to={'/lmtileWorks'}><h5 className='text-lg font-bold'><u> SEE HOW LM TILE WORKS</u></h5></Link>
                </div>
                
            </div>
            <div className='p-5 border border-slate-300 bg-red-800'>
                <FaCheckCircle className='mx-auto text-5xl'></FaCheckCircle>
                <h2 className='text-2xl font-bold mt-5'>Shop-at-Home Convenience</h2>
                <h2 className='text-lg'>See hundreds of samples in your home. Empire® brings the store to you.</h2>
                <div className='text-center'>
                    <Link to={'/convenience'}><p className='text-lg font-bold mt-5'><u>LEARN MORE</u></p></Link>
                </div>
            </div>
            <div className='p-5 border border-slate-300 bg-red-800'>
                <FaCheckCircle className='mx-auto text-5xl'></FaCheckCircle>
                <h2 className='text-2xl font-bold mt-5'>Professional Installation, even <Link to={'/nextDay'}><u>Next Day</u></Link></h2>
                <h2 className='text-lg'>Don't wait weeks for your new floors. You can get a custom installation as soon as tomorrow.</h2>
                <div className='text-center'>
                    <Link to={'/nextDay'}><p className='text-lg  font-bold mt-5'><u>LEARN MORE</u></p></Link>
                </div>
            </div>
            <div className='p-5 border border-slate-300 bg-red-800'>
                <FaCheckCircle className='mx-auto text-5xl'></FaCheckCircle>
                <h2 className='text-2xl font-bold mt-5'>All-Inclusive Price Estimate</h2>
                <h2 className='text-lg'>Know what your project will cost, up front with no hidden fees.</h2>
                <div className='text-center'>
                    <Link to={'/forBusiness'}><p className='text-lg  font-bold mt-5'><u>LEARN MORE</u></p></Link>
                </div>
            </div>
        </div>
    );
};

export default Discover;