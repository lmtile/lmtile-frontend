import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/img/discover/shop-in-home-allInclusive.jpg'
import img2 from '../../../assets/img/discover/shop-in-home-wideSelection.jpg'
import img3 from '../../../assets/img/discover/shop-in-home_schedule.jpg'
import img4 from '../../../assets/img/discover/shop-in-home-whatsDifferent.jpg'
import img5 from '../../../assets/img/discover/649-03775266en_Masterfile.jpg'
import img6 from '../../../assets/img/discover/03bbb743-8424-480c-a686-dafbaa439b2f.png'
import OffersModal from '../Offers/OffersModal';


const Convenience = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/xHcnvhQ/shop-in-home-heading-2.jpg")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg lg:py-40 md:py-32">
                        <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">SHOP-AT-HOME CONVENIENCE</h1>
                        <p className="mb-5 text-xl">We Bring the Store to You</p>
                    </div>
                </div>
            </div>

            <div className='grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:mx-auto mx-auto gap-10 px-20 mt-20'>
                <div>
                    <h2 className='text-4xl font-bold'>LM-Tile® Makes Shopping for Floors Easy</h2>
                    <p className='text-gray-600 text-lg'>With our signature shop-at-home service, you get new floors without the hassle of shopping in stores. We’ll help you find out what you need, what you don’t, and how to get the most value for your budget.</p>
                    <Link to={'/schedule'}><p className='btn btn-primary'>MAKE AN APPOINTMENT</p></Link>
                </div>
                <div>
                    <img src={img1} alt="" className='w-96' />
                    <h3 className='text-3xl font-bold'>PERSONALIZED</h3>
                    <p className='text-xl text-gray-600'>Consultation</p>
                    <p className='pt-2 text-gray-600'>We’re here to help you pick the right floor for your needs and budget, and that starts by listening to your needs and answering your questions.</p>
                </div>
                <div>
                    <img src={img2} alt="" className='w-96' />
                    <h3 className='text-3xl font-bold'>WIDE SELECTION</h3>
                    <p className='text-xl text-gray-600'>of Quality, Name-Brand Styles</p>
                    <p className='pt-2 text-gray-600'>Shop from brands you trust, with the quality you’d expect. A flooring professional will bring hundreds of samples to your home.</p>
                </div>
                <div>
                    <img src={img3} alt="" className='w-96' />
                    <h3 className='text-3xl font-bold'>ALL-INCLUSIVE PRICE</h3>
                    <p className='text-xl text-gray-600'>Estimate</p>
                    <p className='pt-2 text-gray-600'>A flooring professional will measure your rooms and provide an easy-to-understand All-Inclusive Price Estimate – with no hidden fees.</p>
                </div>
            </div>

            <div className='m-10 border border-black'>
                <h1 className='text-4xl font-bold text-center my-10'>WHAT`S DIFFERENT About Shop-at-Home?</h1>
                <img src={img4} alt="" className='mx-auto' />
                <div className='grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:mx-auto mx-auto gap-10 px-20 mt-20'>
                    <div>
                        <h2 className='text-3xl font-bold'>No Need to Travel Back and Forth to Stores</h2>
                        <p className='text-gray-600 text-lg'>LM-Tile brings hundreds of quality samples to your home.</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>Match Samples to Your Home’s Décor</h2>
                        <p className='text-gray-600 text-lg'>See exactly what the floors look like in your lighting and with your paint colors, furniture, and cabinets.</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>Honest and Professional Guidance</h2>
                        <p className='text-gray-600 text-lg'>An experienced flooring professional will help you find the right products for your needs, style and budget.</p>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>Same-Day Price Estimate</h2>
                        <p className='text-gray-600 text-lg'>LM-Tile gives you an All-Inclusive Price Estimate on the spot, so you know your project’s cost upfront.</p>
                    </div>
                </div>
                <div className='text-center my-5'>
                    <Link to={'/schedule'}><p className='btn btn-primary font-bold'>GET A FREE ESTIMATE</p></Link>
                </div>
            </div>

            <div className='bg-blue-800 p-20 text-white mb-5'>
                <h1 className='text-3xl text-white text-center mb-5'><span className='font-bold'>ROOM MEASUREMENTS,</span>Getting it just right</h1>
                <p className='text-white text-lg mb-3'>A flooring professional will take accurate room measurements, for free, during your in-home appointment so you don’t have to schedule follow-up visits like retail stores may require.</p>
                <hr />
                <div className="hero bg-blue-800" >
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img5} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-3xl font-bold mb-5">Why Is It Important</h1>
                            <p className='text-xl'>Unlike simple cost-per-square-foot estimates you might find online or in home improvement stores, LM-Tile considers your project’s specific details when we provide your </p>
                            <ul className='py-5 text-lg'>
                                <li>How much product you’ll need, with the least amount of waste.</li>
                                <li>Correct pattern matching to keep the pattern running in the same direction between rooms.</li>
                                <li>The best seam positioning for carpet.</li>
                                <li>Special needs of closets, stairs, hallways, alcoves, angled walls, and unique spaces. </li>
                                <li>Materials such as padding, thresholds, transitions, underlayment, and base moldings.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className='p-10'>
                <div className="hero  bg-base-200 border border-black mb-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img6} className="shadow-2xl lg:ml-5" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold pb-3">CHOOSE YOUR FLOOR </h1>
                            <h1 className="text-4xl pb-3">Where You Use Your Floor</h1>
                            <h2 className="text-2xl pb-3">How not to regret the color of your new floors</h2>
                            <p className="text-lg">The type of light bulbs in your home and how sunlight fills your rooms throughout the day have a huge effect on the actual color of your floors. That’s why Empire brings hundreds of quality samples to your home and saves you the hassle of guessing if a color will look right in your home when you view it under harsh florescent store lighting.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-10 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link><button className="btn btn-primary text-bold mt-5">SCHEDULE NOW</button></Link>
            </div>
        </div>
    );
};

export default Convenience;