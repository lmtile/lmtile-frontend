import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import FlooringForBusiness from '../FlooringForBusiness/FlooringForBusiness';
import SeeFloor from '../SeeFloor/SeeFloor';

const AppointmentConfirmation = () => {
    return (
        <div>
            <div className='mt-40'>
                <FaCheckCircle className='mx-auto text-5xl'></FaCheckCircle>
                <div>
                    <h1 className='text-4xl my-5 text-center'>SUCCESS!</h1>
                    <p className='text-center mb-10'>You have successfully booked your appointment.</p>
                    <p className='text-center'>An email will be sent to your mail address
                        within the next few minutes.</p>
                </div>
            </div>
            <div className='my-10 border border-red-800 text-center p-20'>
                <p className='mb-3'>Thank you again for scheduling an appointment with LM-Tile®. We look forward to helping you with updating your home!</p>
                <p className='mb-3'>If you need to reschedule your appointment or have questions, call 281-861-6970</p>
                <p className='mb-3'>We’re not able to reschedule appointments online.</p>
                <p>Please have all decision makers at your consultation.</p>
            </div>
            <SeeFloor/>
            <FlooringForBusiness/>
        </div>
    );
};

export default AppointmentConfirmation;