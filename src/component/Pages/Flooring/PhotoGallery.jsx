import React from 'react';
import OffersModal from '../Offers/OffersModal';
import Banner from '../../../assets/img/Gallery/roomvo-banner-hero-2.jpg'
import snap from '../../../assets/img/Gallery/How-to-video.gif'
import { Link } from 'react-router-dom';
import living from '../../../assets/img/Gallery/living.png'
import kitchen from '../../../assets/img/Gallery/kitchen.png'
import bedroom from '../../../assets/img/Gallery/bedroom.png'
import dinning from '../../../assets/img/Gallery/dinning.png'
import bathroom from '../../../assets/img/Gallery/bathroom.png'
import basement from '../../../assets/img/Gallery/basement.png'
import loundry from '../../../assets/img/Gallery/loundry.png'
import office from '../../../assets/img/Gallery/office.png'


const PhotoGallery = () => {
    const products = [
        {
            id: '1',
            'img': living,
            title: 'Living/Family Room Flooring',
            category: '/livingRoom'
        },
        {
            id: '2',
            img: kitchen,
            title: 'Kitchen Flooring',
            category: '/kitchenRoom'
        },
        {
            id: '3',
            img: bedroom,
            title: 'Bedroom Flooring',
            category: '/bedRoom'
        },
        {
            id: '4',
            img: dinning,
            title: 'Dining Room Flooring',
            category: '/diningRoom'
        },
        {
            id: '5',
            img: bathroom,
            title: 'Bathroom Flooring',
            category: '/bathRoom'
        },
        {
            id: '6',
            img: basement,
            title: 'Basement Flooring',
            category: '/baseMent'
        },
        {
            id: '7',
            img: loundry,
            title: 'Laundry/Mudroom Flooring',
            category: '/laundryRoom'
        },
        {
            id: '8',
            img: office,
            title: 'Office Flooring',
            category: '/officeRoom'
        }
    ]

    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})`,width:'100%' }}>
                <div className="hero-overlay bg-opacity-24"></div>
                <div className="hero-content text-center text-neutral-content md:pl-40 lg:pl-96 lg:py-40">
                    <div className="max-w-lg md:ml-96 lg:ml-96">
                        <h1 className="mb-5 text-4xl font-bold">SEE A FLOOR</h1>
                        <h1 className="mb-5 text-4xl ">IN YOUR ROOM</h1>
                        <p className="mb-5">Wondering how new floors will look in your home? <br /> Try on floors in your exact room.</p>
                        <Link><button className='text-lg font-bold btn btn-primary rounded-none'>FIND A FLOOR</button></Link>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-4xl font-bold text-center my-10'>BEAUTIFUL FLOORS MADE EASY with a Snap of a Pic</h1>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-10 px-10 lg:px-40'>
                    <div className='lg:ml-24 lg:mt-10'>
                        <h3 className='text-2xl text-gray-500'>We showcase the floors you like in your rooms in seconds so you can be confident that they will match and look great in your home.</h3>
                        <div className='mt-16'>
                            <span className='text-2xl text-white font-bold bg-red-800 px-6 py-4 rounded-full'>1</span>
                            <span className='text-2xl font-bold ml-5'>Snap a Pic</span>
                            <p className='text-lg text-gray-500 ml-20'>Upload a photo of your room, or find one of our pictures you like.</p>
                        </div>
                        <div className='mt-10'>
                            <span className='text-2xl text-white font-bold bg-red-800 px-6 py-4 rounded-full'>2</span>
                            <span className='text-2xl font-bold ml-5'>Choose a Floor</span>
                            <p className='text-lg text-gray-500 ml-20'>Browse and sort by color, type, and more to find a floor that fits your style.</p>
                        </div>
                        <div className='mt-10'>
                            <span className='text-2xl text-white font-bold bg-red-800 px-6 py-4 rounded-full'>3</span>
                            <span className='text-2xl font-bold ml-5'>See it in Your Room</span>
                            <p className='text-lg text-gray-500 ml-20'>See how the floor looks in your space. You can even save it or share it.</p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <img src={snap} alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-base-300 p-10'>
                <div className='bg-base-100 lg:mx-52 py-10'>
                    <h1 className='text-4xl font-bold text-center my-10'>PHOTO GALLERIES</h1>
                    <h3 className='text-xl text-gray-500 text-center'>We showcase the floors you like in your rooms in seconds so you can be confident that they will match and look great in your home.</h3>
                </div>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-10 lg:px-20'>
                    {
                        products.map((product) => <Link to={product.category}>
                            <div className="card bg-base-100 shadow-black hover:shadow-xl shadow-2xl rounded-none">
                                <figure><img src={product.img} alt="car!" className='w-full h-80' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-red-800 font-bold text-2xl">{product.title}</h2>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;