import React, { useState } from "react";
import BookingModal from "./BookingModal/BookingModal";
import ScheduleOption from "./ScheduleOption";
import moment from "moment";

const AvailableSchedule = ({ selectedDate, slots }) => {
  const [appointment, setAppointment] = useState(false);

  return (
    <section className="mt-5">
      <p className="text-center text-primary font-bold">
        Available Appointments on {moment(selectedDate).format("LL")}
      </p>
      <div className="grid gap-6 grid-cols-1 mt-6 ">
        <ScheduleOption slots={slots} setAppointment={setAppointment} />
      </div>
      {appointment && (
        <BookingModal
          selectedDate={selectedDate}
          slots={slots}
          setAppointment={setAppointment}
        />
      )}
    </section>
  );
};

export default AvailableSchedule;
