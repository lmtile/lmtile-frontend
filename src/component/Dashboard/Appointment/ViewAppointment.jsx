import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../config/axios";
import message from "../../../config/message";
import moment from "moment";
import { DATE_TIME_HELPER } from "../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";

const ViewAppointment = () => {
  const [loading, setLoading] = useState(false);
  const [product_id, setProductId] = useState("");
  const [appointment_details, setAppointmentDetails] = useState({});

  const id = useParams()?.id;

  if (id && product_id !== id) {
    setProductId(id);
  }

  useEffect(() => {
    getAppointmentDetails();
  }, []);

  const getAppointmentDetails = () => {
    setLoading(true);
    if (!product_id) return;
    axios
      .get(`/api/appointment/appointment/${product_id}`)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { appointment_details } = res.data;
          setAppointmentDetails(appointment_details);
        } else {
          message.error(res.data.message);
          setAppointmentDetails({});
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);

        message.error("Something went wrong!!!");
      });
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <div className="w-[700px] mx-auto">
        <div className="p-5 rounded-3xl shadow-2xl">
          <h1 className="text-5xl font-bold text-red-800">
            Appointment Information
          </h1>
        </div>
        <div>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">
              Customer Name:
            </span>
            {appointment_details.name}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">Phone:</span>
            {appointment_details.phone}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">Email:</span>
            {appointment_details.email}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">City:</span>
            {appointment_details.city}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">Street:</span>
            {appointment_details.address}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">
              Property Type:
            </span>
            {appointment_details.type}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">
              Office Name:
            </span>
            {appointment_details.office_name}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">
              Product Name:
            </span>
            {appointment_details.product_name}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">
              Coupon Code:
            </span>
            {appointment_details.cupon_code}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">Date:</span>

            {moment(appointment_details.date).format(
              DATE_TIME_HELPER.DATE_FORMAT
            )}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">Time:</span>

            {moment(appointment_details.time, "hh:mm").format("hh:mm a")}
          </h3>
          <h3 className="p-2 shadow-xl my-3">
            <span className="text-xl text-red-800 font-semibold">
              Text Messaging:
            </span>
            {appointment_details.send_message || "Yes"}
          </h3>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default ViewAppointment;
