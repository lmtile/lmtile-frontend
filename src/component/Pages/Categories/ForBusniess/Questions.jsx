import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../../assets/img/home page/B1GR50-081522-091122_1920x540.jpg'
import img1 from '../../../../assets/img/Questions/5-Questions-to-Ask-411x411_q1_foot-traffic.png'
import img2 from '../../../../assets/img/Questions/5-Questions-to-Ask-411x411_q2_food-300x300.png'
import img3 from '../../../../assets/img/Questions/5-Questions-to-Ask-411x411_q3_moisture-300x300.png'
import img4 from '../../../../assets/img/Questions/5-Questions-to-Ask-411x411_q4_entryway-300x300.png'
import img5 from '../../../../assets/img/Questions/5-Questions-to-Ask-411x411_q5_clean-300x300.png'


const Questions = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${Banner})`, width: '100%' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content lg:p-40">
                    <div className="max-w-lg">
                        <Link><button className='text-2xl font-bold btn bg-red-800 px-10 rounded-none'>GET A FREE APPOINTMENT</button></Link>
                    </div>
                </div>
            </div>

            <div className='lg:mx-auto lg:w-[1024px] mx-16'>
                <div className='mt-10'>
                    <h1 className='text-5xl font-bold text-red-800 mb-10'>5 Questions to Ask Yourself Before Choosing New Floors for Your Business</h1>
                    <p className='text-lg text-gray-500 mb-10'>Commercial spaces have unique and often complex flooring needs. An uninformed choice could lead to costly repairs or worse – a complete flooring replacement. Here at LM-Tile for Business, we don’t expect you to be flooring experts on top of your daily business responsibilities. That’s our job. To help you along in the process of choosing new floors for your business, here’s a list of questions you should ask yourself first. Five to be exact. Let’s take a look:</p>
                    <div>
                        <h1 className='text-3xl font-bold text-red-800 mb-10'>1. How Much Foot Traffic Does My Business Have?</h1>
                        <img src={img1} alt="" />
                        <p className='text-lg text-gray-500 mb-10'>Not every area within the same building will have the same amount of foot traffic. For example, an entryway in a busy hotel will have higher durability needs than the conference rooms and administrative offices within the same building. Take note of the volume of foot traffic in your business on a daily basis. Then think about where the majority of that traffic is. This will help give you a rough idea of what sort of durability rating you’ll need.</p>
                        <p className='text-lg text-gray-500 mb-10'>How is durability measured in commercial floors? Commercial carpet and carpet tile durability is measured on the Texture Appearance Retention Rating (TARR). TARR ratings are broken down into three main classifications; Moderate, Heavy, and Severe. The more foot traffic you have, the higher the TARR rating should be on your new flooring.</p>                     
                        <p className='text-lg text-gray-500 mb-10'>For commercial grade vinyl plank or commercial vinyl tile the wear layer is a really helpful indicator of how durable the flooring will be. A product with a thick wear layer will tend to be more resilient in the long run.</p>                     
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-red-800 mb-10'>2. Which Areas of My Business Are Prone to Daily Spills from Food & Drink?</h1>
                        <img src={img2} alt="" />
                        <p className='text-lg text-gray-500 mb-10'>Similar to foot traffic, certain areas of your business can be prone to daily spills from food and drink. For example, an office building cafeteria where employees eat their lunches on a daily basis calls for commercial vinyl tile or plank, which wipe up easily with regular mopping.</p>
                        <p className='text-lg text-gray-500 mb-10'>On the other side, the main area of a library that has restrictions of food and beverages in the building may not need a flooring that can withstand daily spills. Therefore, a commercial carpet tile may be a better option for that space.</p>                     
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-red-800 mb-10'>3. Which Areas of My Business Are Exposed to Moisture?</h1>
                        <img src={img3} alt="" />
                        <p className='text-lg text-gray-500 mb-10'>You might be surprised to realize all the various spaces within your business that can be exposed to water. Beyond the obvious areas such as bathrooms, areas with water coolers, sinks, and coffee stations all necessitate flooring with built-in moisture and stain resistance.</p>
                        <p className='text-lg text-gray-500 mb-10'>Exposure to moisture and spills can play a big part in determining the best flooring solution for your business. We certainly don’t expect you to identify every potential source of moisture. That’s where the expertise of a flooring professional can be a huge help.</p>                     
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-red-800 mb-10'>4. What Kind of Entryway Does My Business Have?</h1>
                        <img src={img4} alt="" />
                        <p className='text-lg text-gray-500 mb-10'>Did you know that around 90% of soil found in carpet may come from the bottoms of shoes? Additionally, it takes at least six steps to get the bottom of shoes “clean”. Knowing this information, it’s important to have the right flooring in your entrance ways beyond your walk-off system.</p>
                        <p className='text-lg text-gray-500 mb-10'>A reception area in a doctor’s office may require two separate flooring types – a durable, vinyl tile for the entryway is a great start. The actual seating area could have carpet tiles installed. This way, any liquid, mud, or snow could be tracked in on the tile and have less impact on the carpet. That’s just one example of many – your space will be the deciding factor in what solution is best for your entryway.</p>                     
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-red-800 mb-10'>5. How Often Will the Commercial Flooring Area Be Cleaned?</h1>
                        <img src={img5} alt="" />
                        <p className='text-lg text-gray-500 mb-10'>Do you have a nightly cleaning crew or do you clean the space yourself? Answering this question will help play a key role in determining the kind of floors you’re going to need. Some floors have special treatments for specific applications, such as waterproof, mold resistance, frost resistance, and slip resistance that can help reduce maintenance time and costs.</p>
                        <p className='text-lg text-gray-500 mb-10'>A high traffic employee lunchroom calls for a floor with excellent moisture resistance and daily mopping. Bathroom and conference room floors can also get messy fast, and there’s a good chance you’re not responsible for cleaning those.</p>                     
                        <p className='text-lg text-gray-500 mb-10'>On the other hand, a space you clean yourself has very different flooring requirements. Commercial carpet and carpet tiles in an office setting can be easily vacuumed every couple of days. Even the worst stain could be easily replaced with a carpet tile setup. It’s easy to replace an individual carpet tile.</p>
                        <p className='text-lg text-gray-500 mb-10'>It’s crucial to know what sort of maintenance is required to keep your new floors looking great and avoid costly cleanings and replacements down the line.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-red-800 mb-10'>Bonus Question: Why Haven’t I Called LM-Tile for Business?</h1>
                        <p className='text-lg text-gray-500 mb-10'>When deciding how to choose the right flooring for your business, it’s important to know the answers to these questions. And that’s where LM-Tile for Business comes in.</p>
                        <p className='text-lg text-gray-500 mb-10'>Schedule a FREE one-on-one consultation at your business with an experienced Flooring Professional. They will help answer your questions, take accurate measurements of each area, and walk through your business with you to find the right flooring solutions for your spaces. We’re not just selling flooring – we’re selling the best solution possible for your space. That way, every possible angle is covered and you can feel confident you’re picking out flooring that will last a long time.</p>                     
                    </div>
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

export default Questions;