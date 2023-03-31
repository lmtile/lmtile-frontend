import React from 'react';
import BannerBg from '../../../assets/img/SPC-category/2beaec03fcb98eb14e31382b6d78471c.jpg'
import OffersModal from './OffersModal';
import ShopHundreds from '../ShopHundreds/ShopHundreds';
import OfferProduct from './OfferProduct';
import { Link } from 'react-router-dom';



const Offers = () => {
    const offerPoster = [
        {
            id: '1',
            title: 'OUR BIGGEST SALE',
            offer1: '50% OFF',
            offer1_about:'Carpet &Laminate',
            offer2: '50% OFF',
            offer2_about:'Carpet &Laminate',
            offer3: '50% OFF',
            offer3_about:'Carpet &Laminate',
        }
    ]
    return (
        <div>
            <OffersModal></OffersModal>
            
            {/* banner */}
            <div>
                <div className='text-center p-20 bg-base-300'>
                    <h1 className='text-4xl font-bold mb-5'>OFFERS</h1>
                    <p className='text-lg'>Coupons, Promo Codes, and the Latest Deals on Carpet, Laminate, Hardwood, Vinyl and Tile.
                        These offers won't last long, so Schedule a FREE In-Home Estimate now!</p>
                </div>
                <div className="hero" style={{ backgroundImage: `url(${BannerBg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content lg:p-32">
                        <div className="shadow-red-800 shadow-2xl">
                            {
                                offerPoster.map((poster) => <div className='bg-base-100 p-10'>
                                    <h1 className='text-white text-3xl font-bold p-5 bg-blue-800  text-center rounded-tl-3xl rounded-br-3xl mx-10'>{poster.title}</h1>
                                    <div className='grid grid-cols-3 gap-x-5'>
                                        <div className='bg-red-800 font-bold text-white p-5 mt-10 rounded-2xl'>
                                            <h1 className='text-4xl'>{poster.offer1}</h1>
                                            <p>{poster.offer1_about}</p>
                                        </div>
                                        <div className='bg-red-800 font-bold text-white p-5 mt-10 rounded-2xl'>
                                            <h1 className='text-4xl'>{poster.offer2}</h1>
                                            <p>{poster.offer2_about}</p>
                                        </div>
                                        <div className='bg-red-800 font-bold text-white p-5 mt-10 rounded-2xl'>
                                            <h1 className='text-4xl'>{poster.offer3}</h1>
                                            <p >{poster.offer3_about}</p>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <Link to={'/offerSchedule'}><button className="btn btn-outline rounded-bl-2xl rounded-tr-2xl rounded-none w-2/4 text-lg mt-5">BOOK APPOINTMENT</button></Link>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* offer products */}
            <OfferProduct></OfferProduct>
            <ShopHundreds></ShopHundreds>
        </div>
    );
};

export default Offers;