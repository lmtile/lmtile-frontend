import React from 'react';
import { Link } from 'react-router-dom';
import carpet from '../../../assets/img/top-items/20210203_BEDROOM_CARPET_SQUARE_5E290_00101.jpg'
import Laminate from '../../../assets/img/top-items/2W778_01124_ROOM.jpg'
import Hardwood from '../../../assets/img/top-items/GT607-Deerwood-Copy.jpg'
import SPC from '../../../assets/img/top-items/SP802-191-01.jpg'
import Tile from '../../../assets/img/top-items/rain-forest-marble.jpg'
import Cabinet from '../../../assets/img/top-items/Satin-Dusk-1.jpg'
import Sink from '../../../assets/img/top-items/black-quartz-double-bowl-b.jpg'


const products = [
    {
        id: '1',
        'img': carpet,
        title: 'Carpet',
        category: '/carpetCategory'
    },
    {
        id: '2',
        img: Laminate,
        title: 'Laminate',
        category: '/laminateCategory'
    },
    {
        id: '3',
        img: Hardwood,
        title: 'Hardwood',
        category: '/hardwoodCategory'
    },
    {
        id: '4',
        img: SPC,
        title: 'SPC',
        category: '/spcCategory'
    },
    {
        id: '5',
        img: Tile,
        title: 'Tile',
        category: '/tileCategory'
    },
    {
        id: '6',
        img: Cabinet,
        title: 'Cabinet',
        category: '/cabinetCategory'
    },
    {
        id: '7',
        img: Sink,
        title: 'Sink',
        category: '/sinkCategory'
    }
]

const TopItems = () => {
    return (
        <div className='bg-base-300 p-10'>
            <h1 className='text-3xl my-10 text-center'><span className='font-bold'>WIDE RANGE OF LOOKS</span> to Match Your Style</h1>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map((product) => <Link to={product.category}>
                        <div className="card bg-base-100 shadow-black hover:shadow-xl shadow-2xl rounded-none">
                            <figure><img src={product.img} alt="car!" className='w-full h-80'/></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl text-red-800">{product.title}</h2>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default TopItems;