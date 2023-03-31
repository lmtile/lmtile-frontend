import React, { useState } from 'react';
import AvailableSchedule from './AvailableSchedule';
import ScheduleCalender from './ScheduleCalender';
import offerImg from '../../../../assets/img/home page/MicrosoftTeams-image-(4).png'

import img1 from '../../../../assets/img/schedule/image+1.jpg'
import img2 from '../../../../assets/img/schedule/image+2.jpg'
import img3 from '../../../../assets/img/schedule/image+3.jpg'
import OffersModal from '../OffersModal';
import Discover from '../../Discover/Discover';
import TopItems from '../../TopItems/TopItems';
import ShopHundreds from '../../ShopHundreds/ShopHundreds';
import FlooringForBusiness from '../../FlooringForBusiness/FlooringForBusiness';




const OfferSchedule = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <OffersModal></OffersModal>
            <div className='lg:flex md:flex justify-center'>
                <ScheduleCalender
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                ></ScheduleCalender>
                <AvailableSchedule
                    selectedDate={selectedDate}
                ></AvailableSchedule>
            </div>

            {/* offer section */}
            <div className="hero lg:py-20" style={{ background: `url(https://s7d4.scene7.com/is/image/MohawkResidential/alc_oldquarter_banner_5000x2083_300dpi?scl=2&hei=800&wid=2000&op_sharpen=1&op_brightness=-30)`, backgroundRepeat: "no-repeat", backgroundSize: '100%,25%' }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={offerImg} alt=""/>
                    </div>
                </div>
            </div>

            {/* discover section */}
            <Discover></Discover>

            {/* top item */}
            <TopItems></TopItems>

            {/* branding section */}
            <div className='text-center'>
                <div className="hero bg-base-300 lg:py-20">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img1} className=" shadow-black shadow-2xl w-2/4" alt=''/>
                        <div>
                            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">TOP QUALITY,NAME-BRAND FLOORING</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
                <div className="hero  bg-base-300 lg:py-20">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img2} className="shadow-black shadow-2xl w-2/4" alt=''/>
                        <div>
                            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">LATEST STYLES AND COLORS</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-300 lg:py-20">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img3} className=" shadow-black shadow-2xl w-2/4" alt='' />
                        <div>
                            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">DURABLE AND LONG LASTING</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* financing section */}
            <ShopHundreds></ShopHundreds>
            {/* low price guarantee */}
            <FlooringForBusiness></FlooringForBusiness>
        </div>
        
    );
};

export default OfferSchedule;