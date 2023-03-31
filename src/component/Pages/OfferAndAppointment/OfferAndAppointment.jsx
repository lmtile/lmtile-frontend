import React from 'react';
import { Link } from 'react-router-dom';
import offerImg from '../../../assets/img/home page/MicrosoftTeams-image-(4).png'
import bg from '../../../assets/img/slider/image0.png'


const OfferAndAppointment = () => {
    const offerPoster = [
        {
            id: '1',
            title: 'OUR BIGGEST SALE',
            offer1: '50% OFF',
            offer1_about: 'Carpet &Laminate',
            offer2: '50% OFF',
            offer2_about: 'Carpet &Laminate',
            offer3: '50% OFF',
            offer3_about: 'Carpet &Laminate',
        }
    ]
    return (
        <div className="hero " style={{ background: `url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:'100%,50%'  }}>
            <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse lg:py-20 lg:mt-52">
                <div className="text-center lg:text-left lg:ml-5 shadow-2xl shadow-red-800">
                    {
                        offerPoster.map((poster) => <div className='bg-base-100 p-10'>
                            <h1 className='text-white text-3xl font-bold p-5 bg-blue-800  text-center rounded-tl-3xl rounded-br-3xl mx-10'>{poster.title}</h1>
                            <div className='grid grid-cols-3 gap-x-5'>
                                <div className='bg-red-800 font-bold text-white p-5 mt-10 rounded-2xl'>
                                    <h1 className='text-4xl'>{poster.offer1}</h1>
                                    <p>{poster.offer1_about}</p>
                                </div>
                                <div className='bg-red-800 font-bold text-white p-5 mt-10 rounded-2xl'>
                                    <h1 className='text-4xl'>{poster.offer2}</h1>
                                    <p>{poster.offer2_about}</p>
                                </div>
                                <div className='bg-red-800 font-bold text-white p-5 mt-10 rounded-2xl'>
                                    <h1 className='text-4xl'>{poster.offer3}</h1>
                                    <p >{poster.offer3_about}</p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <Link to={'/offers'}><button className="btn btn-outline rounded-bl-2xl rounded-tr-2xl rounded-none w-2/4 text-lg mt-5">SEE ALL OFFERS</button></Link>
                            </div>
                        </div>)
                    }
                </div>
                <div className="card rounded-none py-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 shadow-red-800">
                    <div className="card-body text-center">
                        <h1 className='text-4xl font-bold text-red-800'>READY TO GET STARTED?</h1>
                        <p className='text-xl'>Schedule a FREE IN-HOME ESTIMATE</p>
                        <div className="form-control mt-6">
                            <Link to={'/offerSchedule'}><button className="btn btn-outline rounded-none">See Available Appointments</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferAndAppointment;

