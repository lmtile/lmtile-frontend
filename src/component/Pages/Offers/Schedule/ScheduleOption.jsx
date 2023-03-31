import React from 'react';

const ScheduleOption = ({ appointmentOption, setAppointment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card h-80 w-80 rounded-none shadow-xl mb-5 mx-auto bg-base-300">
            <div className="card-body text-center ">
                <h2 className="text-xl text-red-800 font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center ">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn bg-red-800 rounded-none text-white"
                        onClick={() => setAppointment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ScheduleOption;