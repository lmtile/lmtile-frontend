import React from 'react';
import { Link } from 'react-router-dom'
import calculator from '../../../assets/img/home page/calculator.webp'

const ShopHundreds = () => {
    return (
        <div className='bg-base-200 p-10'>
            
            <div className='lg:flex md:flex my-20 border border-red-800 mx-auto'>
                <div className='flex ml-20 mt-10 mx-20 py-10 mr-5'>
                    <div className='mr-5'>
                        <img src={calculator} alt="" />
                    </div>
                    <div>
                        <h1 className='text-4xl text-red-800 font-bold'>FLOORS NOW, PAY OVER TIME</h1><br />
                        <p>Convenient monthly payments to fit your budget1</p>
                    </div>
                </div>
                <div className='lg:mt-20 mx-20 lg:ml-80 mb-10 md:mt-20'>
                    <Link to={'/financing'}><button className='btn bg-red-800 rounded-none px-10 font-bold'>VIEW FINANCING OPTIONS</button></Link>
                    <p>1With approved credit. <Link to={'/financing'}><u className='text-red-800'>Details</u></Link></p>
                </div>
            </div>
        </div>
    );
};

export default ShopHundreds;


{/* <h1 className='text-3xl my-10 text-center'><span className='font-bold'>SHOP HUNDREDS OF QUALITY</span>, Name-Brand Carpet & Flooring Options</h1>
            <div className='grid gap-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-10 sm:mx-auto'>
                <Link>
                    <div className="card w-72 glass mt-5 mx-auto">
                        <figure><img src={img1} alt="car!" /></figure>
                        <div className="card-body">
                            <Link><h6 className="text-xl text-blue-600 font-bold"><u>Tile Flooring</u></h6></Link>
                            <p>Ceramic & Porcelain</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="card w-72 glass mt-5 mx-auto">
                        <figure><img src={img2} alt="car!" /></figure>
                        <div className="card-body">
                            <Link><h6 className="text-xl text-blue-600 font-bold"><u>Hardwood Flooring</u></h6></Link>
                            <p>Engineered Hardwood, Solid Hardwood</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="card w-72 glass mt-5 mx-auto">
                        <figure><img src={img3} alt="car!" /></figure>
                        <div className="card-body">
                            <Link><h6 className="text-xl text-blue-600 font-bold"><u>Laminate Flooring</u></h6></Link>
                            <p>Wood Laminate</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="card w-96 glass mt-5 bg-blue-600 py-40">
                        <div className="card-body text-center">
                            <h1 className='text-4xl font-bold text-black'>VIEW ALL</h1>
                            <h1 className='text-4xl text-black'> CARPET & FLOORING</h1>
                        </div>
                    </div>
                </Link>
            </div>
           <Link>
           <div className='glass mt-5 bg-blue-600 py-20 text-center'>
                <h1 className='text-4xl font-bold text-black'>VIEW ALL</h1>
                <h1 className='text-4xl text-black'> CARPET & FLOORING</h1>
            </div>
           </Link> */}