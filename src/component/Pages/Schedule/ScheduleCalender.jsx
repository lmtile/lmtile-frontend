import React from 'react';
import { DayPicker } from 'react-day-picker';





function isWeekend(day) {
    return day.getDay() === 0 || day.getDay() === 6;
}


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className='mr-6 sm:w-full'>
                        <DayPicker
                            disabled={isWeekend}
                            className='text-red-800'
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;