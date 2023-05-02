import React from "react";

const ScheduleOption = ({ slots, setAppointment }) => {
  return (
    <div className="card w-72 h-72 rounded-none shadow-xl mx-auto bg-base-300">
      <div className="card-body text-center ">
        <h2 className="text-xl text-red-800 font-bold text-center">
          APPOINTMENT FOR YOUR PROPERTY
        </h2>
        <div className="card-actions justify-center ">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn bg-red-800 rounded-none text-white"
            onClick={() => setAppointment(true)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default ScheduleOption;
