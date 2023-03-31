import React from 'react';
import OffersModal from '../../Offers/OffersModal';
import Banner from '../../../../assets/img/SPC-category/2beaec03fcb98eb14e31382b6d78471c.jpg'
import { Link } from 'react-router-dom';

const SpcCare = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">SPC CARE</h1>
                        <p className="mb-5">Proper care can help keep your flooring investment looking great for years to come. Find cleaning and maintenance tips for your SPC flooring.</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[1024px] lg:mx-auto shadow-2xl shadow-red-800 p-10 mx-5 mt-10'>
                <h1 className='text-4xl font-bold text-red-800 mb-10'> SPC CARE</h1>
                <div>
                    <h2 className='text-3xl mb-10'>General SPC Flooring Cleaning</h2>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Remove loose dirt with a soft bristle broom.</li>
                        <li>Clean with a damp mop for everyday care.</li>
                        <li>Wash the floor occasionally with a gentle (non-abrasive) floor cleaner - always follow cleaning product instructions and adhere to cautions before use.</li>
                        <li>Do not use detergents, abrasive cleaners or “mop and shine” products. These may leave a dull film on your Flooring.</li>
                        <li>When using a vacuum cleaner, disengage the beater bar or use the “bare floor” setting to avoid damaging your Flooring.</li>
                        <li>Highly abrasive scrubbing tools are not recommended as they can damage your Flooring.</li>
                        <li>Never use ammonia or bleach to clean your vinyl flooring.</li>
                        <li>Due to the high temperatures, steam mops may cause damage to vinyl flooring. Review the manufacturer guidelines for your flooring before using a steam mop. Read more about steam mops and vinyl flooring on our blog.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-3xl my-10'>Prevent Scuffs When Moving Furniture</h2>
                    <ul className='list-disc mb-5 ml-5 '>
                        <li>Make sure furniture legs are smooth and won’t mar your spc floors.</li>
                        <li>Replace any small, narrow, metal, or dome-shaped glides with smooth protectors that are in flat contact with the floor.</li>
                        <li>Place heavy-duty furniture casters or cups at the contact points of furniture or appliances you don’t often move.</li>
                        <li>Never push, pull, or drag furniture, appliances or other items across the floor. Always lift and carry.</li>
                        <li>If you have to slide furniture or appliances, lay a plywood panel on your floor and “walk” the item across the panel.</li>
                    </ul>
                    <h4 className='text-2xl font-semibold mb-5'>SPC Flooring Stain and Spot Removal</h4>
                    <p className='text-lg text-gray-500 mb-5'>Unless stated otherwise, use a clean, white cloth or towel when cleaning SPC flooring products. Always rinse the area with clean water as your final step. No matter how hard you try to avoid them, spills and stains happen. Common causes include blood, catsup, mustard, cleaners, dyes, food, candy, juices, grass, rust and pet accidents. To remove these and more, follow these steps:</p>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Clean the area with vinyl flooring cleaner.</li>
                        <li>Scrub with a nonabrasive white scrubbing pad.</li>
                        <li>Rub with isopropyl alcohol. (Only for pen ink, permanent marker, nail polish, hair dye).</li>
                        <li>For rust stains, treat with lemon juice or cream of tartar.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-3xl my-10'>Removing Paint or Varnish from SPC Flooring</h2>
                    <p className='text-lg text-gray-500 mb-5'>Harsh fluids can stain your vinyl flooring. Some examples include dry cleaning fluids, lacquer, paint, nail polish, wood stains and varnish. Follow these steps to remove the spill:</p>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Gently rub the area with your finger or an eraser (avoid using sharp items, which can scratch your Flooring).</li>
                        <li>Rub lightly with isopropyl alcohol on a clean, white cloth.</li>
                        <li>If the stain still shows, use odorless mineral spirits or turpentine on a clean, white cloth.</li>
                        <li>If the stain still shows, use a clean, white cloth to very carefully wipe the area with fingernail polish remover containing acetone.</li>
                        <li>Scrub the area with a floor cleaner and a nonabrasive white scrubbing pad, following instructions on the label.</li>
                    </ul>
                    <h2 className='text-3xl my-10'>Removing Things that Won’t Wipe Up from SPC Flooring</h2>
                    <p className='text-lg text-gray-500 mb-5'>SPC flooring has a protective film. But there’s some stuff that just won’t come off easily. Glue, asphalt, chewing gum, oil, grease, candle wax and tar are hard to remove. Follow these simple steps to get stubborn stains off your SPC flooring.</p>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Carefully remove excess residue with your fingernail.</li>
                        <li>Clean with vinyl flooring cleaner using a nonabrasive white scrubbing pad.</li>
                        <li>Rub lightly with odorless mineral spirits or isopropyl alcohol.</li>
                    </ul>
                    <h2 className='text-3xl my-10'>Removing Scuffs and Smudges from SPC Flooring</h2>
                    <p className='text-lg text-gray-500 mb-5'>Rubber heel marks, shoe polish, and other scuffs and smudges are unsightly. Follow these steps to remove them from your SPC flooring.</p>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Rub the scuff with your fingertip or an eraser.</li>
                        <li>Scrub the area with a floor cleaner and a nonabrasive white scrubbing pad, following instructions on the label.</li>
                        <p>Caution: Isopropyl alcohol, odorless mineral spirits and paint thinner are flammable solvents.</p>
                    </ul>
                </div>
            </div>
            <div className='my-20 text-center'>
                <h1 className='text-4xl font-bold'>READY TO GET STARTED?</h1>
                <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                <Link to={'/schedule'}><button className="btn bg-red-800 rounded-none text-bold mt-5">SCHEDULE NOW</button></Link>
            </div>
        </div>
    );
};

export default SpcCare;