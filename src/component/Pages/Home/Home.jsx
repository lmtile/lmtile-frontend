import React from 'react';
import Discover from '../Discover/Discover';
import ExclusiveProduct from '../ExclusiveProduct/ExclusiveProduct';
import Flooring from '../Flooring/Flooring';
import FlooringForBusiness from '../FlooringForBusiness/FlooringForBusiness';
import GoogleMap from '../GoogleMap/GoogleMap';
import OfferAndAppointment from '../OfferAndAppointment/OfferAndAppointment';
import SeeFloor from '../SeeFloor/SeeFloor';
import ShopHundreds from '../ShopHundreds/ShopHundreds';
import Banner from '../Slider/Banner';
import TopItems from '../TopItems/TopItems';

const Home = () => {
    return (
        <div className='bg-base-300'>
            <OfferAndAppointment></OfferAndAppointment>
            <Discover></Discover>
            <TopItems></TopItems>
            <SeeFloor></SeeFloor>
            <ExclusiveProduct></ExclusiveProduct>
            <ShopHundreds></ShopHundreds>
            <Flooring></Flooring>
            <FlooringForBusiness></FlooringForBusiness>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Home;