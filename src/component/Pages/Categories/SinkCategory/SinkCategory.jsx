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
import BannerBg from '../../../../assets/img/sink-category/featured-image-farmhouse-sink.jpeg.jpg'
import Traditional from '../../../../assets/img/sink-category/wells-sinkware-craftsmen-series-2063-w-double-bowl-stainless-steel-undermount-kitchen-sink.webp'
import European from '../../../../assets/img/sink-category/single_bowl_Kitchen.jpg'
import Custom from '../../../../assets/img/sink-category/Quartz-Classic-33″-Single-Bowl-Kitchen-Sink.jpeg'
import Closet from '../../../../assets/img/sink-category/farmhouse-kitchen-sink-2000-df9b917dba344f61a835dc313bf82a49.jpg'
import Cclass from '../../../../assets/img/sink-category/1405459635207.jpeg'
import SeeFloor from '../../SeeFloor/SeeFloor';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';
import OffersModal from '../../Offers/OffersModal';

const SinkCategory = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero mt-10" style={{ backgroundImage: `url(${BannerBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">SINKS</h1>
                        <p className="mb-5">A sink is a bowl-shaped plumbing fixture for washing hands, dishwashing, and other purposes. Sinks have a tap that supply hot and cold water and may include a spray feature to be used for faster rinsing. </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={Traditional} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Double Bowl Kitchen Sinks</h1>
                            <p className="py-6 text-lg">Double-bowl kitchen sinks are optimal for handwashing dishes. The multifunctionality of a double-bowl configuration is ideal if you do a lot of cooking and washing up as it gives you the support to do both. With two sink basins, it gives you the opportunity to wash dishes in one sink and air dry them in the other.</p>
                            <Link to="/products/sink?type=Double%20Bowl%20Kitchen%20Sinks%20-%20Undermount%2C%20Handcrafted"><button className='btn btn-outline rounded-none'>Shop Double Bowl Kitchen Sinks</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row bg-base-300 ">
                        <img src={European} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Single Bowl Kitchen Sinks</h1>
                            <p className="py-6 text-lg">Single Bowl Kitchen Sinks are the perfect solution for smaller kitchens or limited counterspace. These sinks save space by not only providing more sink space, but also more under-counter storage. The deep single bowl helps you wash large dishes while keeping mess and splatter inside the sink.</p>
                            <Link to="/products/sink?type=Single%20Bowl%20Kitchen%20Sinks%20-%20Undermount%2C%20Handcrafted"><button className='btn btn-outline rounded-none'>Shop Single Bowl Kitchen Sinks</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={Custom} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Quartz composite sinks</h1>
                            <p className="py-6 text-lg">Quartz composite sinks are made from up to 70-percent crushed quartz mixed with an acrylic resin. The mixture of quartz and resin creates a nonporous, solid sink that is lighter than cast iron and more durable than stainless steel. A quartz composite sink is extremely heat- and stain-resistant.</p>
                            <Link to="/products/sink?type=Quartz%20Composite%20Sinks%20-%20Undermount"><button className='btn btn-outline rounded-none'>Shop Quartz Composite Sinks</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row bg-base-300 ">
                        <img src={Closet} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Farmhouse Apron Kitchen Sinks</h1>
                            <p className="py-6 text-lg">A farmhouse sink makes it easy to wash larger items like pots, pans, and baking sheets. You can easily soak your cookware in a farmhouse style sink as opposed to a standard-sized sink. It's also a great option if you prefer to soak a lot of dishes at once before you wash them or pop them in the dishwasher.</p>
                            <Link to="/products/sink?type=Farmhouse%20Apron%20Kitchen%20Sinks"><button className='btn btn-outline rounded-none'>SHOP Farmhouse Apron Kitchen Sinks</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 p-5" >
                <div className='p-3 bg-base-100 shadow-2xl shadow-black'>
                    <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 ">
                        <img src={Cclass} className=" lg:w-2/4 md:w-3/4 hover:shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Vanity sink</h1>
                            <p className="py-6 text-lg">Vanity sink - With a vanity sink, the sink and countertop are one seamless piece that fits over the cabinet base, which can be chosen and purchased separately. Make sure that you know the dimensions of the required cabinet when selecting the sink.</p>
                            <Link to="/products/sink?type=Vanity%20Sinks%20-%20Undermount%2C%20Overmount"><button className='btn btn-outline rounded-none'>SHOP Vanity Sink</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <SeeFloor></SeeFloor>
            <ShopHundreds></ShopHundreds>
        </div>
    );
};

export default SinkCategory;