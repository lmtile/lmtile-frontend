import React from 'react';
import { FaArrowAltCircleRight, FaCamera } from 'react-icons/fa';
import snap from '../assets/img/Gallery/How-to-video.gif'


const BottomDrawer = () => {
    return (
        <div>
            <div className="collapse collapse-arrow lg:w-[800px] mx-auto fixed inset-x-0 bottom-0 z-50 bg-white">
                <input type="checkbox" />
                <div className="collapse-title flex text-white bg-blue-800 shadow-2xl pl-20 border border-white"><FaCamera className=' mr-3 text-2xl' /><span className='text-xl font-bold'> SEE A FLOOR IN YOUR ROOM</span></div>
                <div className="collapse-content">
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 '>
                        <div className='mt-10 ml-8'>
                            <h3 className=' text-gray-500'>Wondering how new floors will look in your home? Try on floors in your exact room.</h3>
                            <div className='mt-16'>
                                <span className='text-lg text-white font-bold bg-red-800 px-6 py-4 rounded-full'>1</span>
                                <span className='text-lg font-bold ml-5'>Snap a Pic</span>
                                
                            </div>
                            <div className='mt-10'>
                                <span className='text-lg text-white font-bold bg-red-800 px-6 py-4 rounded-full'>2</span>
                                <span className='text-lg font-bold ml-5'>Choose a Floor</span>
                                
                            </div>
                            <div className='mt-10'>
                                <span className='text-lg text-white font-bold bg-red-800 px-6 py-4 rounded-full'>3</span>
                                <span className='text-lg font-bold ml-5'>See it in Your Room</span>
                                
                            </div>
                            <div>
                                <a href=""><button className='btn rounded-none bg-red-800 mt-10 lg:ml-20 md:ml-20 font-bold'>FIND A FLOOR<FaArrowAltCircleRight className='text-xl ml-3' /></button></a>
                            </div>
                        </div>
                        <div className='md:mt-10 lg:mt-10'>
                            <img src={snap} alt="" className='w-80 lg:w-full md:w-full'/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BottomDrawer;