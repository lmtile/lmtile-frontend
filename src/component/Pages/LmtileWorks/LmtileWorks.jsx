import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/img/discover/01_woman-using-laptop.jpg'
import img2 from '../../../assets/img/discover/how_consult.jpg'
import img3 from '../../../assets/img/discover/how_pros.jpg'
import img4 from '../../../assets/img/discover/how_next_day2.jpg'
import img5 from '../../../assets/img/discover/how_pricing2.jpg'
import img6 from '../../../assets/img/discover/how_quality2.jpg'
import img7 from '../../../assets/img/discover/how_samples2.jpg'
import OffersModal from '../Offers/OffersModal';

const LmtileWorks = () => {
    return (
        <div className=''>
            <OffersModal></OffersModal>
            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold '>HOW LM-TILE® WORKS</h1>
                <p className='text-gray-600'>Get new floors without the hassle. We make it easy.</p>
            </div>
            <div className='grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto mx-auto gap-10 px-20'>
                <div className=''>
                    <img src={img1} alt="" />
                    <h3 className='text-2xl font-bold'>Schedule a Free In-Home Estimate</h3>
                    <p className='text-gray-600'>pick a convenient time. Same-day appointments are available.</p>
                </div>
                <div className=''>
                    <img src={img2} alt="" />
                    <h3 className='text-2xl font-bold'>In-Home Consultation</h3>
                    <p className='text-gray-600'>A flooring professional will bring samples to your home, help you pick the right floors, measure your rooms, and give you an <Link><u className='text-blue-600'>all-inclusive price estimate.</u></Link></p>
                </div>
                <div className=''>
                    <img src={img3} alt="" />
                    <h3 className='text-2xl font-bold'>Professional Installation - Even Next Day</h3>
                    <p className='text-gray-600'>Professional installers will ensure your project is done right. They’ll move your furniture, remove and haul away your old floor, install your new flooring, and clean up when they’re finished.</p>
                </div>
            </div>
            <div className='text-center'>
                <Link to={'/schedule'}><p className='btn btn-primary my-10'>BOOK A FREE APPOINTMENT</p></Link>
            </div>

            <div className='text-center bg-red-800 px-10 py-5 lg:mx-40 lg:mb-20'>
                <h1 className='text-4xl font-bold text-white'>WHAT'S DIFFERENT ABOUT LM-TILE?</h1>
                <div className="hero bg-base-100 my-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img7} className=" shadow-2xl w-full md:w-3/4 lg:w-2/4" alt=''/>
                        <div>
                            <h1 className=" text-2xl font-bold text-blue-600">Shop-at-Home Convenience</h1>
                            <h1 className=" text-3xl font-bold">SEE FLOORING SAMPLES In Your Home</h1>
                            <p className="py-6 text-gray-600">Empire brings the store to you, so don’t have to spend time driving all over town shopping. A knowledgeable flooring professional will bring hundreds of samples right to your home and help you pick the best floor for your needs and budget.</p>
                            <Link><p className='font-bold text-lg text-blue-600'><u>LEARN MORE</u></p></Link>
                        </div>
                    </div>
                </div>
                <div className="hero  bg-base-100 my-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img6} className=" shadow-2xl w-full md:w-3/4 lg:w-2/4" alt=''/>
                        <div>
                            <h1 className=" text-2xl font-bold text-blue-600">Quality, Name-Brand Products</h1>
                            <h1 className=" text-3xl font-bold">QUALITY You Can Count On</h1>
                            <p className="py-6 text-gray-600">Everything Lm-Tile offers is handpicked to be durable and long-lasting – from brands you know and trust, the same ones you’ll find in stores. Plus, have peace of mind because everything we offer is backed by some of the best warranties in the industry.</p>
                            <Link><p className='font-bold text-lg text-blue-600'><u>LEARN MORE</u></p></Link>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-100 my-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img4} className=" shadow-2xl w-full md:w-3/4 lg:w-2/4" alt='' />
                        <div>
                            <h1 className=" text-2xl font-bold text-blue-600">Professional Installation</h1>
                            <h1 className=" text-3xl font-bold">GET NEW FLOORS as soon as Next Day</h1>
                            <p className="py-6 text-gray-600">You don’t have to wait weeks for new floors. Because we stock hundreds of floors, you can get installation as soon as next day. We utilize the best crews and are here to make sure you are happy with every detail of your custom installation.</p>
                            <Link><p className='font-bold text-lg text-blue-600'><u>LEARN MORE</u></p></Link>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-100 my-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img5} className=" shadow-2xl w-full md:w-3/4 lg:w-2/4" alt='' />
                        <div>
                            <h1 className=" text-2xl font-bold text-blue-600">All-Inclusive Price Estimate</h1>
                            <h1 className=" text-3xl font-bold">UPFRONT PRICING, No Hidden Fees</h1>
                            <p className="py-6 text-gray-600">Empire takes the guesswork out of knowing how much new floors will cost. During your in-home consultation, you will get an all-inclusive price estimate, so you know what your project will cost.</p>
                            <Link><p className='font-bold text-lg text-blue-600'><u>LEARN MORE</u></p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LmtileWorks;