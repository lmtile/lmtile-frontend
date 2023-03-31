import React from 'react';
import Banner from '../../../assets/img/flooring-by-need/LVT_Galena_Frivolous-1024x1024.jpg'
import img1 from '../../../assets/img/flooring-by-need/e6ced404-20a9-4739-a195-d37935e096eb.png'
import img2 from '../../../assets/img/flooring-by-need/a20fcdce-5662-45b6-92e8-0bd6f51505e1.png'
import img3 from '../../../assets/img/flooring-by-need/55c164e8-1d68-4701-8d47-6e7a4953c16d.png'
import img4 from '../../../assets/img/flooring-by-need/1fbccd5e-b8d4-4634-939e-3207c10945c7.png'
import img5 from '../../../assets/img/flooring-by-need/5e896620-db02-4a0d-acd4-327cf6d97731.png'
import img6 from '../../../assets/img/flooring-by-need/366a4f13-51a8-4f3c-8ceb-fe8d84ae2529.png'
import { Link } from 'react-router-dom';
import OffersModal from '../Offers/OffersModal';



const FlooringByNeed = () => {
    const products = [
        {
            id: '1',
            img: img1,
            title: 'Faux Wood Flooring',
            about: "Get information about affordable faux wood flooring options that provide alternatives to hardwood and ...",
            path: '/laminateCategory'
        },
        {
            id: '2',
            img: img2,
            title: 'Pet-Friendly Flooring',
            about: "Find ideas for pet friendly flooring to keep your home looking great while reducing stress for pet owners ...",
            path: '/petFriendly'
        },
        {
            id: '3',
            img: img3,
            title: 'Eco-Friendly Flooring',
            about: "Whether you’re looking for carpet made from recycled plastic bottles or other eco-friendly flooring ...",
            path: '/ecoFriendly'
        },
        {
            id: '4',
            img: img4,
            title: 'Kid-Friendly Flooring',
            about: "Families or busy households need carpet, flooring and window treatments that are hard-wearing ...",
            path: '/kidFriendly'
        },
        {
            id: '5',
            img: img5,
            title: 'Durable Flooring',
            about: "Durable flooring comes in many styles and options – whether you’re choosing carpet, hardwood, laminate ...",
            path: '/durableFlooring'
        },
        {
            id: '6',
            img: img6,
            title: 'Soft Flooring',
            about: "For soft flooring, Empire Today offers a wide range of carpet and vinyl options to assist in your search for ...",
            path: '/softFlooring'
        },
    ]
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">FLOORING OPTIONS BY NEED</h1>
                        <p className="mb-5">It's not always the room that influences the flooring. Empire Today® has hundreds of flooring options. Functionality plays a major role, as well. Find flooring for a specific need below.</p>
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

export default FlooringByNeed;