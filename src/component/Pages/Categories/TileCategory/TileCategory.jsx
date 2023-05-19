import React from 'react';
import { Link } from 'react-router-dom';
import BannerBg from '../../../../assets/img/tile-category/Prestigio_Calacatta_Lucido_75x150.jpg'
import marble from '../../../../assets/img/tile-category/Marquina-premium-marble-porcelain-tile.jpg'
import travertine from '../../../../assets/img/tile-category/travertine-floor-large-modern-kitchen-800-min.webp'
import SeeFloor from '../../SeeFloor/SeeFloor';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';
import OffersModal from '../../Offers/OffersModal';
import Banner from './Banner';




const TileCategory = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <Banner/>
            <div className="hero" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">Marble Tile Flooring</h1>
                        <p className="mb-5">Marble Tiles are known for its quality, normal sparkle and nature of stone. These Tiles are truly magnificent to look at, they are beautiful and always unique and highly durable. They are also very versatile. It doesn't require of any kind of chemical treatment.</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={marble} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Marble Tile Flooring</h1>
                            <p className="py-6 text-lg">Marble, quarried in mountainous regions around the world, has been a very popular building material for millennia. Prized for its beauty, style, and elegance, this material has graced the palaces of kings and queens for centuries, making it an upscale, luxurious option for interiors. But marble flooring requires more maintenance and is more susceptible to damage than ceramic tile and other forms of natural stone.</p>
                            <Link><button className='btn btn-outline rounded-none'>SHOP MARBLE TILE FLOORING</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row bg-base-300 ">
                        <img src={travertine} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Travertine Tile Flooring</h1>
                            <p className="py-6 text-lg">Travertine is an especially attractive form of limestone. Its fibrous, marble-like texture and attractive earth-tone colors make it one of the most popular stones used for building materials. Historically, much of the travertine used in architecture and artwork came from the mountains of Italy, but today, most of the travertine sold is from Turkey, Iran, Mexico, and Peru.</p>
                            <Link to="/products/tile"><button className='btn btn-outline rounded-none'>SHOP TRAVERTINE TILE FLOORING</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <SeeFloor></SeeFloor>
            <ShopHundreds></ShopHundreds>
        </div>
    );
};

export default TileCategory;