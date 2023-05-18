import React from 'react';
import { Link } from 'react-router-dom';
import Beige from '../../../../assets/img/berber carpet/Beige.jpg'
import Black from '../../../../assets/img/berber carpet/Black.jpg'
import Blue from '../../../../assets/img/berber carpet/Blue.jpg'
import Brown from '../../../../assets/img/berber carpet/Brown.jpg'
import Gray from '../../../../assets/img/berber carpet/Gray.jpg'
import Green from '../../../../assets/img/berber carpet/Green.jpg'
import Multi from '../../../../assets/img/berber carpet/Multi.jpg'
import RedOrange from '../../../../assets/img/berber carpet/Red-Orange.jpg'
import BannerBg from '../../../../assets/img/hardWood-category/best-engineered-hardwood-floor-for-scratch-resistance.png'
import hardwood from '../../../../assets/img/hardWood-category/61545f46eb42c40020cbb6c2_American Reclaimed-7.jpg'
import SeeFloor from '../../SeeFloor/SeeFloor';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';
import OffersModal from '../../Offers/OffersModal';
import Banner from '../../Slider/Banner';




const HardwoodCategory = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <Banner/>
            <div className="hero mt-10" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">Hardwood Flooring</h1>
                        <p className="mb-5">One of the great things about hardwood flooring is that it never goes out of style. It’s been in use continuously for thousands of years, and despite numerous shifts and changes in style and design, it has survived the test of trends, showing that the look of this material never gets old.</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={hardwood} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Hardwood Flooring</h1>
                            <p className="py-6 text-lg">Milled from a single piece of wood, solid hardwood is the most sought-after wood flooring option, known for its attractiveness, prestige, style, and durability.</p>
                            <Link to="/products/hardwood"><button className='btn btn-outline rounded-none'>SHOP HARDWOOD FLOORING</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <SeeFloor></SeeFloor>
            <ShopHundreds></ShopHundreds>
        </div>
    );
};

export default HardwoodCategory;