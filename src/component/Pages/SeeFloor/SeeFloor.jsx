import React from 'react';
import img from '../../../assets/img/home page/room-banner.webp'
import { Link } from 'react-router-dom';



const SeeFloor = () => {
    return (
        <div className='bg-red-800 lg:px-5 lg:py-5 mx-10'>
            <div className='lg:bg-base-100 lg:flex'>
                <div >
                    <img src={img} alt="" className='mx-auto min-h-fit' />
                </div>
                <div className='px-10 mx-auto my-auto text-center'>
                    <h1 className='text-3xl lg:text-red-800 text-white font-bold'>SEE A FLOOR IN YOUR ROOM</h1>
                    <h4 className='text-xl lg:text-black text-white'>Wondering how new floors will look in your home?<br />
                        Try on floors in your exact room.</h4>
                    <a href='https://www.roomvo.com/my/mellifluousraindrop34e39fnetlifyapp/rooms?visitor_id=888b218b66774ac0bfacec16bbed1a36&tracking_code=&locale=en-us&prefilter=%7B%22brands%22%3A%5B%5D%7D&is_dealer=1&iframe_id=ffPopup&originator=&use_host_navigation=1&vendor_code=&product_type=1&domain=mellifluous-raindrop-34e39f.netlify.app&is_in_top_window=0&use_history_padding=0'><h6 className='text-lg lg:text-red-800 text-white font-bold mt-5'><u>SEE HOW IT WORKS</u></h6></a>
                </div>
            </div>
        </div>
    );
};

export default SeeFloor;
