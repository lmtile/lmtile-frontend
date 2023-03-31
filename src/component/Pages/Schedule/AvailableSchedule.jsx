import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal/BookingModal';
import ScheduleOption from './ScheduleOption';


const AvailableSchedule = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='mt-5'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 mt-6 '>
                {
                    appointmentOptions.map(option => <ScheduleOption
                        key={option._id}
                        appointmentOption={option}
                        setAppointment={setAppointment}
                    ></ScheduleOption>)
                }
            </div>
            {
                appointment &&
                <BookingModal
                    selectedDate={selectedDate}
                    appointment={appointment}
                        setAppointment={setAppointment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableSchedule;