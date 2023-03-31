import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../../assets/img/carpet-caterogy/maxresdefault.jpg'

const EcoFriendly = () => {
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
                    <h1 className='text-4xl font-bold mb-10'>Eco-Friendly Carpet and Flooring</h1>
                    <p className='text-lg text-gray-700'>Having a healthier home is more than a trend. Today more and more homeowners are becoming interested in eco-friendly carpet, flooring, and window treatments that are beautiful for their homes and the environment. Whether you’re looking for carpet made from recycled plastic bottles or sustainable flooring options, Empire Today® offers “green,” non-toxic products that will help you feel confident you’re making a choice that is good for your home and for the planet.</p>
                    <p className='text-lg text-gray-700 my-10'>Several qualities can categorize a product as eco-friendly, such as how the product is made, what the product is made from, and how it is disposed. And, you can be even “greener” by selecting a product that can help reduce your home’s energy consumption, like honeycomb blinds and shades – a choice that is good for the environment as well as your pocketbook.</p>
                    <p className='text-lg text-gray-700'>We understand that being environmentally responsible also means having safer air to breath in your home, which is why we have carpet and flooring products with low volatile organic compound (VOC) emissions that can help promote better indoor air quality. Your flooring professional can help you choose the right carpet, flooring and window treatments to make your home earth-friendly.</p>
                </div>
                <div className='text-lg my-10'>
                    <h1 className='text-4xl font-bold mb-10'>Considerations for Eco-Friendly Flooring</h1>
                    <ul className='list-disc text-gray-700 pl-10'>
                        <li>Manufactured from recycled materials</li>
                        <li>Sustainable and renewable product</li>
                        <li>Low VOC emissions</li>
                        <li>Promotes energy efficiency</li>
                        <li>Recyclable</li>
                        <li>Resources used in manufacturing</li>
                    </ul>
                    <p className='text-xl text-gray-700 mt-5'>During your FREE In-Home Estimate, a flooring professional will bring eco-friendly flooring samples that fit your home, budget, and lifestyle.</p>
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

export default EcoFriendly;