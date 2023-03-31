import React from 'react';
import OffersModal from '../../Offers/OffersModal';
import Banner from '../../../../assets/img/carpet-caterogy/SoftSurfaces-copy.jpg'
import { Link } from 'react-router-dom';

const CarpetCare = () => {
    return (
        <div>
            <OffersModal></OffersModal>
            <div className="hero" style={{ backgroundImage: `url(${Banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">CARPET CARE</h1>
                        <p className="mb-5">Proper care can help keep your flooring investment looking great for years to come. Find cleaning and maintenance tips for your carpet & flooring.</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[1024px] lg:mx-auto shadow-2xl shadow-red-800 p-10 mx-5 mt-10'>
                <h1 className='text-4xl font-bold text-red-800 mb-10'> CARPET CARE</h1>
                <div>
                    <h2 className='text-3xl mb-10'>General Carpet Cleaning</h2>
                    <p className='text-lg text-gray-500 mb-5'>No carpet is stain proof, although many are stain-resistant. Prompt attention to spots and spills is essential. It’s important to test any cleaning method in an inconspicuous area first.</p>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Absorb the stain as much as possible with white towels. Blot the area with white towels dampened with cool water until there is no more transfer of the stain onto the towels.</li>
                        <li>Never rub or scrub abrasively. A fuzzy area may result. Avoid spreading the spill -- start at the spot’s outer edge and work inward.</li>
                        <li>Remember to thoroughly remove any residue after you’ve finished cleaning. Otherwise, the residue may become sticky, causing further soiling.</li>
                        <li>Draw out remaining moisture. Place several layers of white towels over the spot. Then, weigh them down with a heavy object that will not transfer color, such as a plastic jug of water.</li>
                    </ul>
                    <p className='text-lg text-gray-500'>NOTE: Wool fibers absorb more water than synthetic fibers without feeling damp, so, it’s important to remove all excess moisture. Also, always use manufacturer's recommendations and consult a professional.</p>
                </div>
                <div>
                    <h2 className='text-3xl my-10'>Preventative Carpet Maintenance</h2>
                    <p className='text-lg text-gray-500 mb-5'>Follow these preventative maintenance steps to keep your Empire Today® carpet looking newer, longer. Regular vacuuming is the most important step in caring for your new carpet. Change the direction you vacuum occasionally. This helps stand the pile upright and reduces matting.</p>
                    <h4 className='text-2xl font-semibold mb-5'>High-Traffic Areas</h4>
                    <p className='text-lg text-gray-500 mb-5'>Pay special attention to high-traffic areas. Foot traffic can push soil particles deeper into the pile. This makes them more difficult to remove. It can also damage fibers.</p>
                    <ul className='list-disc mb-5 ml-5 '>
                        <li>Vacuum twice a week.</li>
                        <li>Vacuum traffic lanes daily.</li>
                    </ul>
                    <h4 className='text-2xl font-semibold mb-5'>Lower Traffic Areas</h4>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Vacuum twice a week.</li>
                        <li>Vacuum traffic lanes twice a week.</li>
                    </ul>
                    <h4 className='text-2xl font-semibold mb-5'>Take the following steps to help prevent excess wear on your carpet:</h4>
                    <ul className='list-disc mb-5 ml-5'>
                        <li>Place mats at the entrances of your home’s carpeted areas -- this can help absorb moisture and help prevent soiling.</li>
                        <li>Relocate heavy furniture periodically to help prevent permanent pile crushing.</li>
                        <li>Place floor protectors under any heavy pieces of furniture to help reduce pile crushing.</li>
                        <li>Use blinds & shades to help protect your carpet against direct sunlight and fading.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-3xl my-10'>Professional Carpet Cleaning</h2>
                    <p className='text-lg text-gray-500 mb-5'>LM-Tile recommends that customers have their carpet professionally cleaned every six to 12 months. We recommend a hot water extraction method or “steam cleaning.” The manufacturer warranty that comes with your carpet requires that it be cleaned by a certified professional.</p>
                    <h4 className='text-2xl font-semibold mb-5'>Professional Cleaning vs. Do-it-Yourself (DIY)</h4>
                    <p className='text-lg text-gray-500 mb-5'>Hiring a professional offers several advantages over cleaning your own carpet. Professional carpet cleaners:</p>
                    <ul>
                        <li>Have the right equipment. Their tools have more extraction power to remove excessive moisture that could cause damage to your carpet.</li>
                        <li>Understand carpet. They recognize differences in fibers and carpet construction, which helps them determine the proper approach for cleaning.</li>
                        <li>Know the right approach. They are trained to know the proper cleaning agents that can help address specific stains or soils.</li>
                        <li>Apply stain and soil protectants. Professional carpet cleaners may be able to re-apply a topical treatment to your carpet that could help protect against future stains and soiling.</li>
                    </ul>
                    <p className='text-xl text-gray-500 mb-10'>If you do decide to rent a steam-cleaning machine, shop around before making a selection. Most rental units available might not adequately clean your carpet. They may even damage it. One way to locate a professional cleaner is to contact the Institute of Inspection, Cleaning and Restoration Certification (IICRC) at 281-861-6970 (non-affiliation). It maintains a national directory of independent professional cleaners who are trained and certified in a variety of specialties. Ask for a cleaner who uses a hot water extraction system.</p>
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

export default CarpetCare;