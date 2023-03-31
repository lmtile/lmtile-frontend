import React from 'react';
import NylonBg from '../../../../assets/img/carpet-caterogy/poly2-1.jpg'
import PolyesterBg from '../../../../assets/img/carpet-caterogy/hero_pg1-1920w.webp'
import AnsoBg from '../../../../assets/img/carpet-caterogy/VineyardGrove-E9608-Fog-00500.jpg'
import BannerBg from '../../../../assets/img/carpet-caterogy/Nylon-Carpet-Pros-And-Cons-FI-scaled.jpg'
import { Link } from 'react-router-dom';
import Beige from '../../../../assets/img/berber carpet/Beige.jpg'
import Black from '../../../../assets/img/berber carpet/Black.jpg'
import Blue from '../../../../assets/img/berber carpet/Blue.jpg'
import Brown from '../../../../assets/img/berber carpet/Brown.jpg'
import Gray from '../../../../assets/img/berber carpet/Gray.jpg'
import Green from '../../../../assets/img/berber carpet/Green.jpg'
import Multi from '../../../../assets/img/berber carpet/Multi.jpg'
import RedOrange from '../../../../assets/img/berber carpet/Red-Orange.jpg'
import SeeFloor from '../../SeeFloor/SeeFloor';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';
import OffersModal from '../../Offers/OffersModal';



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
                            <Link><button className='btn btn-outline rounded-none'>SHOP NYLON CARPET</button></Link>
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
                            <Link><button className='btn btn-outline rounded-none text-end'>SHOP Polyester CARPET</button></Link>
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
                            <Link><button className='btn btn-outline rounded-none text-end'>SHOP Anso® CARPET</button></Link>
                        </div>
                    </div>
                </div>
            </div>
                  
            <div className='my-20'>
                <h3 className='text-2xl mb-10 text-center'><span className='font-bold'>BROWSE</span> By Color</h3>
                <div className='grid gap-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:ml-10'>
                    <div className="flex mx-auto">
                        <div className='mr-5 '>
                            <img src={Beige} alt="" />
                            <Link><p className='text-blue-600 font-bold text-xl'><u>Beige</u></p></Link>
                        </div>
                        <div >
                            <img src={Black} alt="" />
                            <Link><p className='text-blue-600 font-bold text-xl'><u>Black</u></p></Link>
                        </div>
                    </div>
                    <div className="flex mx-auto">
                        <div className='mr-5'>
                            <img src={Blue} alt="" />
                            <Link><p className='text-blue-600 font-bold text-xl'><u>Blue</u></p></Link>
                        </div>
                        <div>
                            <img src={Brown} alt="" />
                            <Link><p className='text-blue-600 font-bold text-xl'><u>Brown</u></p></Link>
                        </div>
                    </div>
                    <div className="flex mx-auto">
                        <div className='mr-5'>
                            <img src={Gray} alt="" />
                            <Link><p className='text-blue-600 font-bold text-xl'><u>Gray</u></p></Link>
                        </div>
                        <div>
                            <img src={Green} alt="" />
                            <Link><p className='text-blue-600 font-bold text-xl'><u>Green</u></p></Link>
                        </div>
                    </div>
                    <div className="flex mx-auto">
                        <div className='mr-5'>
                            <img src={Multi} alt="" />
                            <Link><p className='text-blue-600 font-bold text-xl'><u>Multi</u></p></Link>
                        </div>
                        <div>
                            <img src={RedOrange} alt="" />
                            <Link><p className='text-blue-600 font-bold text-xl'><u>Red/Orange</u></p></Link>
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