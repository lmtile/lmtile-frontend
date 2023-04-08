import React from 'react';

const ViewAppointment = () => {
    return (
        <div className='w-[700px] mx-auto'>
            <div className='p-5 rounded-3xl shadow-2xl'>
                <h1 className='text-5xl font-bold text-red-800'>Appointment Information</h1>
            </div>
            <div>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>Customer Name:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>Phone:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'> <span className='text-xl text-red-800 font-semibold'>Email:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>City:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>Street:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>Property Type:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>Office Name:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>Product Name:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>Coupon Code:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>Date:</span>{}</h3>
                <h3 className='p-2 shadow-xl my-3'><span className='text-xl text-red-800 font-semibold'>Time:</span>{}</h3>
            </div>
        </div>
    );
};

export default ViewAppointment;