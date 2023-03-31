import React from 'react';
import OffersModal from '../../Offers/OffersModal';
import Banner from '../../../../assets/img/hardWood-category/1480e8877d924d1d7fb3aeda4_dWG22sN.jpg'
import { Link } from 'react-router-dom';

const HardwoodCare = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">Hardwood Care</h1>
                        <p className="mb-5">Proper care can help keep your flooring investment looking great for years to come. Find cleaning and maintenance tips for your Hardwood flooring.</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[1024px] lg:mx-auto shadow-2xl shadow-red-800 p-10 mx-5 mt-10'>
                <h1 className='text-4xl font-bold text-red-800 mb-10'> HARDWOOD CARE</h1>
                <div>
                    <h2 className='text-3xl mb-10'>General Hardwood Flooring Maintenance</h2>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>LM-Tile suggests always following manufacturers recommendations.</li>
                        <li>Spills and tracked-in dirt should be wiped up right away.</li>
                        <li>Sweep, dust, or vacuum using a hard floor attachment once a week or more if needed. Do not use vacuums with beater bars or hard heads.</li>
                        <li>Clean with a recommended cleaning product made for hardwood flooring as needed.</li>
                        <li>Don’t allow liquids to stand on your floor.</li>
                        <li>Never use buffing machines as they can damage your hardwood flooring.</li>
                        <li>Steel wool or scouring powder is abrasive and will damage your floor’s finish.</li>
                        <li>Steam mops may cause damage to hardwood flooring due to the high temperature of the steam. Check the manufacturer guidelines for your flooring before using a steam mop. </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-3xl my-10'>Hardwood Flooring Stain and Spot Removal</h2>
                    <p className='text-lg text-gray-500 mb-5'>Stains or spots can happen. These tips can help you address stain removal on your hardwood flooring.</p>
                    <ul className='list-disc mb-5 ml-5 '>
                        <li>Wet spills should be wiped up immediately.</li>
                        <li>A warm, damp cloth can be used to wipe up the substance from your floor.</li>
                        <li>Use a cleanser made for hardwood flooring to help clean more stubborn soil.</li>
                    </ul>
                    <p className='text-xl text-gray-500 mb-10'>For sticky substances, harden the spot with an ice cube and lightly rub with a dull plastic scraper. Do not apply too much pressure as this could damage or scrape the floor’s finish.</p>
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

export default HardwoodCare;