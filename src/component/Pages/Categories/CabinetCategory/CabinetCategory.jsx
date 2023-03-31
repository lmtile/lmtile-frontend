import React from 'react';
import { Link } from 'react-router-dom';
import Beige from '../../../../assets/img/berber carpet/Beige.jpg'
import Black from '../../../../assets/img/berber carpet/Black.jpg'
import Blue from '../../../../assets/img/berber carpet/Blue.jpg'
import Brown from '../../../../assets/img/berber carpet/Brown.jpg'
import Gray from '../../../../assets/img/berber carpet/Gray.jpg'
import Green from '../../../../assets/img/berber carpet/Green.jpg'
import Multi from '../../../../assets/img/berber carpet/Multi.jpg'
import RedOrange from '../../../../assets/img/berber carpet/Red-Orange.jpg'
import BannerBg from '../../../../assets/img/cabinet-category/euro-slider.jpg'
import Traditional from '../../../../assets/img/cabinet-category/banner-traditional-0095_16_V02_TREVI_01.jpg'
import European from '../../../../assets/img/cabinet-category/European-Modern-Kitchen-Cabinets-2-1024x675.jpg'
import Custom from '../../../../assets/img/cabinet-category/custom-cabinets-kitchen.jpg'
import Closet from '../../../../assets/img/cabinet-category/Custom-Walk-In-Closet-4.jpg'
import Cclass from '../../../../assets/img/cabinet-category/Alustil-C-Class-Series-Kitchen.jpg'
import SeeFloor from '../../SeeFloor/SeeFloor';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';
import OffersModal from '../../Offers/OffersModal';




const CabinetCategory = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero mt-10" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">CABINETS</h1>
                        <p className="mb-5">The modern word “cabinet” is French in origin, and originally meant “room.” This referred to rooms where certain collections were kept, such as books or artwork, so a cabinet was actually a small “room” for such items. Until around 1650, cabinets weren't common in most homes.</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={Traditional} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Traditional Cabinet</h1>
                            <p className="py-6 text-lg">Cabinets that are traditional often make use of rich, deep wood tones like mahogany or cherry, and tend to incorporate slopes, curves, and easy edges as opposed to a modern design's sharper edges.</p>
                            <Link><button className='btn btn-outline rounded-none'>SHOP TRADITIONAL CABINET</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row bg-base-300 ">
                        <img src={European} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">European Cabinet</h1>
                            <p className="py-6 text-lg">The main advantage of a European cabinet is their sleek, stylish, and high-end appearance. In addition, these cabinets use thicker materials in construction which allows for more storage space. Finally, the designs of Europe-style cabinets tend to be modular which allows for seamless design customization options.</p>
                            <Link><button className='btn btn-outline rounded-none'>SHOP EUROPEAN CABINET</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={Custom} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Custom Cabinet</h1>
                            <p className="py-6 text-lg">Custom cabinets are cabinets that are specially designed with your tastes and preferences in mind and then meticulously handcrafted in a shop to be later delivered and installed inside your home. Custom cabinets are quality-built with real wood and can be as modern or traditional as desired.</p>
                            <Link><button className='btn btn-outline rounded-none'>SHOP CUSTOM CABINET</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row bg-base-300 ">
                        <img src={Closet} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Closet Cabinet</h1>
                            <p className="py-6 text-lg">A closet (especially in North American English usage) is an enclosed space, with a door, used for storage, particularly that of clothes. Fitted closets are built into the walls of the house so that they take up no apparent space in the room.</p>
                            <Link><button className='btn btn-outline rounded-none'>SHOP CLOSET CABINET</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={Cclass} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">C Series (NEW) Cabinet</h1>
                            <p className="py-6 text-lg">The C series optical distribution cabinet(ODC) is a traditional type ODC. It combines the functions of splicing, distribution, storage, environment-proof and management of optical cables. Both high quality Stainless Steel and stainless steel are available.</p>
                            <Link><button className='btn btn-outline rounded-none'>SHOP C-SERIES CABINET</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-20 mx-10'>
                <h3 className='text-2xl mb-10 text-center'><span className='font-bold'>BROWSE</span> By Color</h3>
                <div className='grid gap-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
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

export default CabinetCategory;