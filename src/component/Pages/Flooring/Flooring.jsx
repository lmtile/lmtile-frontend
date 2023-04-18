import React from 'react';
import { Link } from 'react-router-dom'
import image1 from '../../../assets/img/flooring-by-need/0090164_southwind-timeless-plank-heartwood-6-w11kd-1005 (1).jpeg'
import image2 from '../../../assets/img/flooring-by-need/wooden-flooring-500x500.webp'
import image3 from '../../../assets/img/flooring-by-need/inspiration-gallery.jpg'


const Flooring = () => {
    return (
        <div className='lg:p-20 md:p-10 p-5 bg-red-800'>
            <h1 className='text-4xl text-white font-bold mb-20 mt-10 text-center'>FLOORING INSPIRATION MADE EASY</h1>
            <div className='grid gap-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto'>
                <Link to={'/flooringByNeed'}>
                    <div className="card bg-base-100 shadow-black hover:shadow-xl shadow-2xl rounded-none">
                        <figure><img src={image1} alt="car!" className='w-full ' /></figure>
                        <div className="card-body">
                            <h1 className='text-3xl text-red-800 font-bold'>FLOORING BY NEED</h1>
                            <h4 className='text-lg'>Find out what floors work best for your lifestyle (pets, kids, durable, eco-friendly).</h4>
                            <Link to={'/flooringByNeed'}><p className='text-red-800 font-bold mt-3 text-xl' ><u>EXPLORE FLOORING OPTION BY NEED</u></p></Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/flooringByRoom'}>
                    <div className="card bg-base-100 shadow-black hover:shadow-xl shadow-2xl rounded-none">
                        <figure><img src={image2} alt="car!" className='w-full ' /></figure>
                        <div className="card-body">
                            <h1 className='text-3xl text-red-800 font-bold'>FLOORING BY ROOM</h1>
                            <h4 className='text-lg'>Choose the right options for your kitchen, bathrooms, dining room, and more.</h4>
                            <Link to={'/flooringByRoom'}><p className='text-red-800 font-bold mt-3 text-xl'><u>Explore Flooring Options by Room</u></p></Link>
                        </div>
                    </div>
                </Link>
                <Link to={'/photoGallery'}>
                    <div className="card bg-base-100 shadow-black hover:shadow-xl shadow-2xl rounded-none">
                        <figure><img src={image3} alt="car!" className='w-full' /></figure>
                        <div className="card-body">
                            <h1 className='text-3xl text-red-800 font-bold'>PHOTO GALLERIES</h1>
                            <h4 className='text-lg'>Get inspired for a right options for your kitchen, bathrooms, dining room, and more.</h4>
                            <Link to={'/photoGallery'}><p className='text-red-800 font-bold mt-3 text-xl'><u>Explore Photo Galleries</u></p></Link>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Flooring;