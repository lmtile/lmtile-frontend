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
import BannerBg from '../../../../assets/img/laminate-category/LaminateFlooringGuides.webp'
import laminate from '../../../../assets/img/laminate-category/How-to-Clean-Laminate-Floors-1-1024x675.png'
import SeeFloor from '../../SeeFloor/SeeFloor';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';
import OffersModal from '../../Offers/OffersModal';
import Banner from './Banner';



const Laminate = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <Banner/>
            <div className="hero" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">WOOD LOOK FLOORING</h1>
                        <p className="mb-5">Laminated wood is usually built by the parallel gluing of lumber boards in a variety of sizes and shapes according to intended use. The main products are load-carrying members, such as beams and arches. Parallel-glued veneers are sometimes used to produce specialized items…</p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={laminate} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Wood Laminate</h1>
                            <p className="py-6 text-lg">Wood laminate flooring is a budget-friendly way to get the look of natural hardwood. It is amazing how close wood laminate looks to the real thing! Choose from a variety of wood species, stain colors (from natural to dark, even gray), textured finishes, and plank widths.</p>
                            <Link to="/products/laminate"><button className='btn btn-outline rounded-none'>SHOP WOOD LAMINATE</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <SeeFloor></SeeFloor>
            <ShopHundreds></ShopHundreds>
        </div>
    );
};

export default Laminate;