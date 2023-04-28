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
import BannerBg from '../../../../assets/img/SPC-category/2beaec03fcb98eb14e31382b6d78471c.jpg'
import Spc from '../../../../assets/img/SPC-category/SPC-Flooring-change-your-home_cover.jpg'
import OffersModal from '../../Offers/OffersModal';
import SeeFloor from '../../SeeFloor/SeeFloor';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';




const SpcCategory = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero mt-10" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">SPC Flooring</h1>
                        <p className="mb-5">Solux Core and Solux core deluxe with antique wood texture is a rustic wood-looking luxury SPC flooring. From light grays to dark browns, this flooring can be mistaken for authentic wood. The revolutionary SPC – stone plastic composite – is created with limestone so your floor will be comfortable to walk on, but as strong as stone, giving it the ability to last a lifetime.</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={Spc} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">SPC Flooring</h1>
                            <p className="py-6 text-lg">Solux Core and Solux core deluxe with antique wood texture is a rustic wood-looking luxury SPC flooring. From light grays to dark browns, this flooring can be mistaken for authentic wood. The revolutionary SPC – stone plastic composite – is created with limestone so your floor will be comfortable to walk on, but as strong as stone, giving it the ability to last a lifetime.</p>
                            <Link to="/products/spc"><button className='btn btn-outline rounded-none'>SHOP SPC FLOORING</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <SeeFloor></SeeFloor>
            <ShopHundreds></ShopHundreds>
        </div>
    );
};

export default SpcCategory;