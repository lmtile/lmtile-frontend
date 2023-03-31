import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../../assets/img/hardWood-category/1480e8877d924d1d7fb3aeda4_dWG22sN.jpg'

const DurableFlooring = () => {
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
                    <h1 className='text-4xl font-bold mb-10'>Durable Flooring</h1>
                    <p className='text-lg text-gray-700'>Durable flooring comes in many styles and options – whether you’re choosing carpet, hardwood, laminate, vinyl, tile, or even window treatments. You probably want flooring that can stand up to high traffic and look great doing so. That’s why we've selected highly durable products that are built to last and resist stains, soil, and wear.</p>
                </div>
                <div className='text-lg my-10'>
                    <h1 className='text-4xl font-bold mb-10'>Factors to Consider with Durable Flooring</h1>
                    <ul className='list-disc text-gray-700 pl-10'>
                        <li>How does the floor handle spills and stains?</li>
                        <li>Is the flooring abrasion resistant?</li>
                        <li>Does wear resistance matter?</li>
                        <li>Does the room have excess moisture?</li>
                    </ul>
                    <p className='text-xl text-gray-700 mt-5'>A flooring professional can help you choose highly durable flooring, as well as blinds and shades. During your FREE In-Home Estimate, he/she will explain choices to fit your home, budget and lifestyle, so you can enjoy beautiful floors for generations to come.</p>
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

export default DurableFlooring;