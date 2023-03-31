import React from 'react';
import Banner from '../../../assets/img/flooring-by-need/LVT_Galena_Frivolous-1024x1024.jpg'
import img1 from '../../../assets/img/Flooring-by-room/kitchen.png'
import img2 from '../../../assets/img/Flooring-by-room/bithroom.png'
import img3 from '../../../assets/img/Flooring-by-room/basement.png'
import img4 from '../../../assets/img/Flooring-by-room/bedroom.png'
import img5 from '../../../assets/img/Flooring-by-room/londry.png'
import img6 from '../../../assets/img/Flooring-by-room/diningroom.png'
import img7 from '../../../assets/img/Flooring-by-room/familyroom.png'
import img8 from '../../../assets/img/Flooring-by-room/officeroom.png'

import { Link } from 'react-router-dom';
import OffersModal from '../Offers/OffersModal';



const FlooringByRoom = () => {
    const products = [
        {
            id: '1',
            img: img1,
            title: 'Kitchen Flooring',
            about: "Kitchen flooring requires more than a good eye. As one of the busiest rooms in the home, kitchens need...",
            path: '/laminateCategory'
        },
        {
            id: '2',
            img: img2,
            title: 'Bathroom Flooring',
            about: "Looking for ideas on what type of new flooring to use in your bathroom? Bathrooms require durable ...",
            path: '/tileCategory'
        },
        {
            id: '3',
            img: img3,
            title: 'Basement Flooring',
            about: "Basements present unique challenges and requirements when it comes to the type of carpet and flooring ...",
            path: '/spcCategory'
        },
        {
            id: '4',
            img: img4,
            title: 'Bedroom Flooring',
            about: "Bedrooms are personal areas where comfort is the highest priority, so the best bedroom flooring ...",
            path: '/carpetCategory'
        },
        {
            id: '5',
            img: img5,
            title: 'Laundry Room Flooring',
            about: "What are the best flooring options for a laundry room or mudroom? Laundry room flooring should",
            path: '/hardwoodCategory'
        },
        {
            id: '6',
            img: img6,
            title: 'Dining Room Flooring',
            about: "Dining room flooring should not only endure most food and drink spills – it should look great doing so ...",
            path: '/laminateCategory'
        },
        {
            id: '7',
            img: img7,
            title: 'Family Room Flooring',
            about: "The family room is one of the more important spaces in your home, so make sure you have family ...",
            path: '/carpetCategory'
        },
        {
            id: '8',
            img: img8,
            title: 'Office Flooring',
            about: "Searching for office flooring that works as hard as you do? We have carpet, hardwood, laminate, vinyl, and ...",
            path: '/spcCategory'
        },
    ]
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">FLOORING OPTIONS BY ROOM</h1>
                        <p className="mb-5">Every room in your home has a different use, so it’s no surprise that the best floor for every room is also going to depend on many factors. Empire Today® has hundreds of flooring options. Find flooring for a specific room below.</p>
                    </div>
                </div>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-10 lg:px-20'>
                {
                    products.map((product) => <Link to={product.path}>
                        <div className="card bg-base-100 shadow-black hover:shadow-xl shadow-2xl rounded-none">
                            <figure><img src={product.img} alt="car!" className='w-full h-80' /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{product.title}</h2>
                                <p>{product.about}</p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
            <div className='my-20 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link to={'/schedule'}><button className="btn btn-primary rounded-none text-bold mt-5">SCHEDULE NOW</button></Link>
            </div>
        </div>
    );
};

export default FlooringByRoom;