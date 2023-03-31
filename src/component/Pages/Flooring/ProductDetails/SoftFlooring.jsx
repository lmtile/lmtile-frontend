import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../../assets/img/carpet-caterogy/SoftSurfaces-copy.jpg'

const SoftFlooring = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content p-32 lg:p-64">
                    <div className="max-w-lg">
                    </div>
                </div>
            </div>
            <div className='p-12 lg:mx-32 mx-12'>
                <div>
                    <h1 className='text-4xl font-bold mb-10'>Soft Flooring</h1>
                    <p className='text-lg text-gray-700'>Kicking off your shoes and having a comfortable floor to walk on is one of the best feelings, yet it can mean completely different things depending on who you are and how you use a room. Whether you want to sink your toes into an incredibly soft carpet in your bedroom, or you’re looking for a smoother, quieter step, there are so many options to choose from. We’ll help you find a product that is pleasing to both the eye and the touch.</p>
                </div>
                <div className='text-lg my-10'>
                    <h1 className='text-4xl font-bold mb-10'>Factors to Consider When Shopping for Soft Flooring</h1>
                    <ul className='list-disc text-gray-700 pl-10'>
                        <li>Softer feel underfoot</li>
                        <li>Feels warm on cool days</li>
                        <li>Retains and conducts heat</li>
                        <li>Comfortable look and feel</li>
                    </ul>
                    <p className='text-xl text-gray-700 mt-5'>A flooring professional can help you choose highly durable flooring. During your FREE In-Home Estimate, he/she will explain choices to fit your home, budget and lifestyle, so you can enjoy beautiful floors for generations to come.</p>
                </div>

            </div>
            <div className='my-20 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link to={'/schedule'}><button className="btn btn-primary rounded-none text-bold mt-5">SCHEDULE NOW</button></Link>
            </div>
        </div>
    );
};

export default SoftFlooring;