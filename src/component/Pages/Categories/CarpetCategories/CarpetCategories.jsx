import React from 'react';
import NylonBg from '../../../../assets/img/carpet-caterogy/poly2-1.jpg'
import PolyesterBg from '../../../../assets/img/carpet-caterogy/hero_pg1-1920w.webp'
import AnsoBg from '../../../../assets/img/carpet-caterogy/VineyardGrove-E9608-Fog-00500.jpg'
import BannerBg from '../../../../assets/img/carpet-caterogy/Nylon-Carpet-Pros-And-Cons-FI-scaled.jpg'
import { Link } from 'react-router-dom';
import SeeFloor from '../../SeeFloor/SeeFloor';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';
import OffersModal from '../../Offers/OffersModal';
import Banner from '../../Slider/Banner';



const CarpetCategories = () => {

    const products = [
        {
            id: '1',
            bg: NylonBg,
            title: 'Nylon Carpet',
            about: 'Nylon is very soft, durable, and resistant to stains and abrasion. It is the most popular of carpet fibers by a large measure—by some estimates, about two-thirds of all synthetic carpets are made of nylon. 1 It has good resistance to wear, mold, mildew, and rot, and it is easy to dye and holds its color well.',
            route: '/carpetCategory'
        },
        {
            id: '2',
            bg: PolyesterBg,
            title: 'Polyester Carpet',
            about: 'The design of its fibres allows a polyester carpet to stay vibrant-looking for longer—more so than a nylon equivalent, which will dull over time. And because they hold their colour so well, there’s less room within polyester fibres for liquids and other spillages to get into, which is why the carpets have a reputation for being excellent at resisting stains',
            route: '/carpetCategory'
        },
        {
            id: '3',
            bg: AnsoBg,
            title: ' ANSO High-Performance',
            about: 'The Anso® High-Performance fiber promise ensures these carpets will stand up to all life worries regardless of construction type.From solution- dyed nylons to newly redesigned polyesters, Shaw Floors & Anderson Tuftex create the most durable carpets ever featuring the newest technology.',
            route: '/carpetCategory'
        }
    ]

    return (
        <div>
            <OffersModal></OffersModal>
            <Banner/>
            <div className="hero mt-10" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">CARPET to Fit Your Lifestyle</h1>
                        <p className="mb-5">LM-TILE® offers quality, durable carpet from some of the best brands in the world. Our carpet options are stylish and affordable, so you never have to settle. Let the carpet professionals at Empire help you find the perfect style of carpet to fit your home's needs.</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={NylonBg} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Nylon Carpet</h1>
                            <p className="py-6 text-lg">Nylon is very soft, durable, and resistant to stains and abrasion. It is the most popular of carpet fibers by a large measure—by some estimates, about two-thirds of all synthetic carpets are made of nylon. 1 It has good resistance to wear, mold, mildew, and rot, and it is easy to dye and holds its color well.</p>
                            <Link to="/products/carpet?type=Nylon"><button className='btn btn-outline rounded-none'>SHOP NYLON CARPET</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row bg-base-300">
                        <img src={PolyesterBg} className=" lg:w-2/4 md:w-3/4 " alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Polyester Carpet</h1>
                            <p className="py-6 text-lg ">The design of its fibres allows a polyester carpet to stay vibrant-looking for longer—more so than a nylon equivalent, which will dull over time. And because they hold their colour so well, there’s less room within polyester fibres for liquids and other spillages to get into, which is why the carpets have a reputation for being excellent at resisting stains</p>
                            <Link to="/products/carpet?type=Polyester"><button className='btn btn-outline rounded-none text-end'>SHOP Polyester CARPET</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300">
                        <img src={AnsoBg} className=" lg:w-2/4 md:w-3/4 " alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">ANSO High-Performance Carpet</h1>
                            <p className="py-6 text-lg ">The Anso® High-Performance fiber promise ensures these carpets will stand up to all life worries regardless of construction type.From solution- dyed nylons to newly redesigned polyesters, Shaw Floors & Anderson Tuftex create the most durable carpets ever featuring the newest technology.</p>
                            <Link to="/products/carpet?type=ANSO%20High%20-%20Performance"><button className='btn btn-outline rounded-none text-end'>SHOP Anso® CARPET</button></Link>
                        </div>
                    </div>
                </div>
            </div>
                  
            <SeeFloor></SeeFloor>
            <ShopHundreds></ShopHundreds>
        </div>
    );
}; 

export default CarpetCategories;