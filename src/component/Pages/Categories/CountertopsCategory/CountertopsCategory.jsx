import React from 'react';
import { Link } from 'react-router-dom';
import OffersModal from '../../Offers/OffersModal';
import SeeFloor from '../../SeeFloor/SeeFloor';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';
import BannerBg from '../../../../assets/img/countertops-category/countertops-slabs-banner.jpg'
import granite from '../../../../assets/img/countertops-category/Granite-Countertops-1.jpg'
import MARBLE from '../../../../assets/img/countertops-category/c-marble34-1-1200x845.jpg'
import QUARTZITE from '../../../../assets/img/countertops-category/wichita-quartzite-countertops-800x533.jpg'
import TRAVERTINE from '../../../../assets/img/countertops-category/d4bba0e0b8b6fa62d39d1851bfe67958.jpg'
import SOAPSTONE from '../../../../assets/img/countertops-category/soapstone-counters.jpg'
import Banner from '../../Slider/Banner';

const CountertopsCategory = () => {
    
    return (
        <div>
            <OffersModal></OffersModal>
            <Banner/>
            <div className="hero mt-10" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-overlay bg-opacity-24"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">Countertops to Change Your Lifestyle</h1>
                        <p className="mb-5">Countertop space is vital for any functioning kitchen. No matter what size you're working with, a kitchen counter provides stability and a little elbow room for even the simplest meals.</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={granite} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">GRANITE COUNTERTOPS</h1>
                            <p className="py-6 text-lg">What is the benefit of granite countertop?
                                Resists Chips and Scratches One of the best reasons to choose granite countertops for your kitchen is that the material is so durable that it resists chips and scratches under normal use. Granite is the second hardest material in the world, just behind diamonds.</p>
                            <Link to="/products/countertops?type=GRANITE"><button className='btn btn-outline rounded-none'>SHOP GRANITE COUNTERTOPS</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row bg-base-300">
                        <img src={MARBLE} className=" lg:w-2/4 md:w-3/4 " alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">MARBLE COUNTERTOPS</h1>
                            <p className="py-6 text-lg ">The spectacular beauty of a marble countertop is rivaled only by its resistance to heat, making it a perfect choice for the kitchen. Not only that, but marble remains remarkably cool to the touch and is easy to clean and maintain — making it a favorite among professional and home chefs around the globe.</p>
                            <Link to="/products/countertops?type=MARBLE"><button className='btn btn-outline rounded-none text-end'>SHOP MARBLE COUNTERTOPS</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={QUARTZITE} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">QUARTZITE COUNTERTOPS</h1>
                            <p className="py-6 text-lg">Quartzite countertops are produced using natural, porous stone that is cut to exact dimensions. Quartz countertops are engineered stone that is molded into custom shapes. Quality examples contain more than 90% loose quartz, with the remaining 7% being resins and other materials.</p>
                            <Link to="/products/countertops?type=QUARTZITE"><button className='btn btn-outline rounded-none'>SHOP QUARTZITE COUNTERTOPS</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row bg-base-300">
                        <img src={TRAVERTINE} className=" lg:w-2/4 md:w-3/4 " alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">TRAVERTINE COUNTERTOPS</h1>
                            <p className="py-6 text-lg ">Travertine is uniquely combined with cement before it is smoothed and polished to provide a more uniform surface much like its granite and marble counterparts. Its honed natural finish is ideal for both commercial and residential countertop use.</p>
                            <Link to="/products/countertops?type=SOAPSTONE"><button className='btn btn-outline rounded-none text-end'>SHOP TRAVERTINE COUNTERTOPS</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={SOAPSTONE} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">SOAPSTONE COUNTERTOPS</h1>
                            <p className="py-6 text-lg">Soapstone is used because it's heat resistant and needs little maintenance. Soapstone is made of steatite and is called soapstone because it has at least 50% talc, which feels like soap. Soapstone with lower amounts of talc are harder and get used for countertops, sinks and other materials.</p>
                            <Link to="/products/countertops?type=SOAPSTONE"><button className='btn btn-outline rounded-none'>SHOP SOAPSTONE COUNTERTOPS</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <SeeFloor></SeeFloor>
            <ShopHundreds></ShopHundreds>
        </div>
    );
};

export default CountertopsCategory;