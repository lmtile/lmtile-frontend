import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../../assets/img/carpet-caterogy/Nylon-Carpet-Pros-And-Cons-FI-scaled.jpg'

const PetFriendly = () => {
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
                    <h1 className='text-4xl font-bold mb-10'>Pet-Friendly Flooring</h1>
                    <p className='text-lg text-gray-700'>Pets are family. Their needs will affect your pet-proof carpet and flooring choices. You’ll want to pet-proof your home with durable, easy-care flooring that accommodates the size, age, and temperament of your dog or cat. Empire Today®'s pet-friendly flooring products are also eco-friendly: good for your pets, and good for the earth. Your flooring professional can discuss pet-friendly flooring options during your FREE <Link to={'/schedule'}><u className='text-blue-600'>In-Home Estimate</u></Link> . Ask about our safe blinds & shades to help keep pets out of danger.</p>
                </div>
                <div className='text-lg my-10'>
                    <h1 className='text-4xl font-bold mb-10'>What Can Pets Do to Floors?</h1>
                    <ul className='list-disc text-gray-700 pl-10'>
                        <li>Pet nails can scratch or snag</li>
                        <li>Pet urine can stain and leave/create odors</li>
                        <li>Stains and soil are more likely</li>
                        <li>Dogs and pets may track dirt indoors</li>
                        <li>Spills from water or food bowls</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl font-bold mb-10'>Featured Product: Pet-Friendly Carpet</h1>
                    <p className='text-xl text-gray-700 mb-10'>Empire provides some of the best carpet and flooring options for cat and dog owners:</p>
                    <ul className='text-gray-700 list-disc pl-10'>
                        <li>Special treatments such as R2X® Stain & Soil Resistance and Stainmaster® help prevent spills and “accidents” from leaving a lasting impression on carpet.</li>
                        <li>Our special PUP® Pet Urine Protection carpets are designed to help resist penetration of pet urine and other liquids.</li>
                        <li>Built-in stain resistant technology: the latest carpet fibers are constructed to help resist stains and soil, as well as moisture and residue in some cases.</li>
                        <li><Link to={'/carpets'}><u className='text-blue-600'>HOME Fresh carpet</u></Link>, the world’s first and only hypoallergenic and odor-neutralizing carpet, is another excellent pet-friendly choice.</li>
                    </ul>
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

export default PetFriendly;