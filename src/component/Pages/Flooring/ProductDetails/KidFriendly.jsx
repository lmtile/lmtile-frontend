import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../../assets/img/laminate-category/Best-Flooring-Options-for-Families-with-Young-Children-Cover-12-05.jpg'

const KidFriendly = () => {
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
                    <h1 className='text-4xl font-bold mb-10'>Kid-Friendly Flooring</h1>
                    <p className='text-lg text-gray-700'>Do you have a busy household with young kids? Families should be looking at carpet, flooring and blinds and shades that are hard-wearing, easy to clean, and safe for kids. Kid-friendly flooring needs to withstand spills, soil, and wear. In children’s bedrooms and play areas, you’ll need products that can accommodate an active lifestyle without compromising on safety or comfort.</p>
                </div>
                <div className='text-lg my-10'>
                    <h1 className='text-4xl font-bold mb-10'>Factors to Consider Before Shopping for Kid-Friendly Flooring</h1>
                    <ul className='list-disc text-gray-700 pl-10'>
                        <li>Kids spill food and drinks</li>
                        <li>Kids track dirt indoors</li>
                        <li>Rough play with hard toys can scratch certain floors</li>
                        <li>Not all window cords are safe</li>
                        <li>Hypoallergenic and low voc floors help with air quality</li>
                    </ul>
                    <p className='text-xl text-gray-700 mt-5'>A flooring professional can help you choose kid-friendly flooring and blinds and shades. During your FREE In-Home Estimate, he/she will explain choices to fit your home, budget and lifestyle, so your kids can play in peace!</p>
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

export default KidFriendly;