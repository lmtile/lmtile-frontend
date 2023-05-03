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


