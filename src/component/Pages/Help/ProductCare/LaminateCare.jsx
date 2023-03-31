import React from 'react';
import OffersModal from '../../Offers/OffersModal';
import Banner from '../../../../assets/img/laminate-category/LaminateFlooringGuides.webp'
import { Link } from 'react-router-dom';

const LaminateCare = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">Laminate Care</h1>
                        <p className="mb-5">Proper care can help keep your flooring investment looking great for years to come. Find cleaning and maintenance tips for your Laminate flooring.</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[1024px] lg:mx-auto shadow-2xl shadow-red-800 p-10 mx-5 mt-10'>
                <h1 className='text-4xl font-bold text-red-800 mb-10'> LAMINATE CARE</h1>
                <div>
                    <h2 className='text-3xl mb-10'>General Laminate Flooring Maintenance</h2>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Use only soap-free cleaners.</li>
                        <li>Remove loose dirt with a dust mop or a gentle vacuum without a beater bar.</li>
                        <li>Wipe up spills right away.</li>
                        <li>Use a quality laminate floor cleaner - be sure to follow the directions on the bottle.</li>
                        <li>Dust or vacuum more often in problem spots and areas with a lot of foot traffic.</li>
                        <li>Only use cleaners that are designated for laminate flooring and be careful not to saturate the floor with the cleaner as it could cause damage. Try the cleaner in a small inconspicuous area first.</li>
                        <li>Do not clean using excessive water as it could cause your flooring to buckle or separate.</li>
                        <li>Certain cleaners can scratch the surface of your laminate flooring, such as steel wool or scouring powders. Do not use them to clean your flooring.</li>
                        <li>Liquids that stand on your flooring can cause damage.</li>
                        <li>Never wax, polish or use buffing machines.</li>
                        <li>Laminate flooring could sustain steam damage due to the high temperatures from steam mops. Check the manufacturer guidelines for your flooring before using a steam mop. </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-3xl my-10'>Laminate Flooring Stain and Spot Removal</h2>
                    <p className='text-lg text-gray-500 mb-5'>Accidents and spills will happen. The good news is that laminate flooring can be cleaned. But if you’re faced with a tough stain or spot, follow these simple steps:</p>
                    <ul className='list-disc mb-5 ml-5 '>
                        <li>Remove wet spills immediately.</li>
                        <li>Wipe the floor with a warm moist cloth.</li>
                        <li>More stubborn dirt can be removed using a slightly moist mop and gentle cleaner designed for laminate flooring.</li>
                        <li>For substances that may stick to your floor, try to harden the spot with ice and gently remove with a dull plastic scraper. Be sure not to apply too much pressure as this could damage the floor’s finish.</li>
                        <li>Always follow manufacturer recommendations.</li>
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

export default LaminateCare;