import React from 'react';
import OffersModal from '../../Offers/OffersModal';
import Banner from '../../../../assets/img/tile-category/Prestigio_Calacatta_Lucido_75x150.jpg'
import { Link } from 'react-router-dom';

const TileCare = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">Tile Care</h1>
                        <p className="mb-5">Proper care can help keep your flooring investment looking great for years to come. Find cleaning and maintenance tips for your Tile flooring.</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[1024px] lg:mx-auto shadow-2xl shadow-red-800 p-10 mx-5 mt-10'>
                <h1 className='text-4xl font-bold text-red-800 mb-10'> TILE CARE</h1>
                <div>
                    <h2 className='text-3xl mb-10'>General Ceramic & Porcelain Tile Flooring Maintenance</h2>
                    <p className='text-xl text-gray-500 mb-5'>No tile flooring is stain proof, although many are stain resistant. Prompt attention to spots and spills is essential.</p>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Clean with a damp mop at least once a week. Mop heavy-traffic areas more frequently.</li>
                        <li>Never use detergent or soap. These products can dull the tile’s surface.</li>
                        <li>Place mats at doorways to help trap soil and other substances that would otherwise be tracked onto your floor.</li>
                        <li>Add protective pads to furniture legs. You can help protect your tile by affixing felt or similar pads to tables, chairs, etc.</li>
                        <li>Steam mops may cause damage to ceramic flooring or porcelain flooring due to the high temperature of the steam. Before using a steam mop, check the manufacturer guidelines for your flooring.</li>
                    </ul>
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

export default TileCare;