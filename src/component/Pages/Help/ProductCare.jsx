import React from 'react';
import OffersModal from '../Offers/OffersModal';
import Banner from '../../../assets/img/laminate-category/LaminateFlooringGuides.webp'
import carpet from '../../../assets/img/productCare/carpet.png'
import laminate from '../../../assets/img/productCare/hardwood.png'
import hardwood from '../../../assets/img/productCare/laminate.png'
import spc from '../../../assets/img/productCare/SPC.png'
import tile from '../../../assets/img/productCare/tile.png'
import { Link } from 'react-router-dom';

const ProductCare = () => {

    const products = [
        {
            id: '1',
            'img': carpet,
            title: 'Carpet',
            about: 'Learn easy cleaning and maintenance tips and when to consider professional carpet cleaning.',
            category: '/carpetCare'
        },
        {
            id: '2',
            img: laminate,
            title: 'Laminate',
            about: 'Durable laminate is easy to clean and maintain with these simple steps.',
            category: '/laminateCare'
        },
        {
            id: '3',
            img: hardwood,
            title: 'Hardwood',
            about: 'Protect your hardwood flooring investment with tips for easy maintenance and removing spots and stains.',
            category: '/hardwoodCare'
        },
        {
            id: '4',
            img: spc,
            title: 'SPC',
            about: 'SPC flooring is known for its toughness from everyday living, find out how to keep them looking newer, longer.',
            category: '/spcCare'
        },
        {
            id: '5',
            img: tile,
            title: 'Tile',
            about: 'Maintaining tile flooring is easy when you follow these simple tips.',
            category: '/tileCare'
        }
    ]
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">PRODUCT CARE</h1>
                        <p className="mb-5">Proper care can help keep your flooring investment looking great for years to come. Find cleaning and maintenance tips for your carpet & flooring.</p>
                    </div>
                </div>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 lg:mx-20 mx-10'>
                {
                    products.map((product) => <Link to={product.category}>
                        <div className="card bg-base-100 shadow-black hover:shadow-xl shadow-2xl rounded-none">
                            <figure><img src={product.img} alt="car!" className='w-full h-80' /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-red-800">{product.title}</h2>
                                <p className='text-gray-500 text-lg mt-5'>
                                {product.about}
                                </p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
            <div className='my-20 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link to={'/schedule'}><button className="btn bg-red-800 rounded-none text-bold mt-5">SCHEDULE NOW</button></Link>
            </div>
        </div>
    );
};

export default ProductCare;