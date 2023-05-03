import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/img/slider/image0.png";
import axios from "../../../config/axios";
import message from "../../../config/message";

const OfferAndAppointment = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    getAllOfferPoster();
  }, []);

  const getAllOfferPoster = () => {
    axios
      .get("/api/offer/get-all-offer-poster")
      .then((res) => {
        if (res.data.success) {
          let { posters } = res.data;

          setPosters(posters);
        }
      })
      .catch((err) => {
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };
  return (
    <div
      className="hero "
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%,50%",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse lg:py-20 lg:mt-52">
        <div className="text-center lg:text-left lg:ml-5 shadow-2xl shadow-red-800">
          {posters?.map((poster, key) => (
            <div key={key} className="bg-base-100 p-10">
              <h1 className="text-white text-3xl font-bold p-5 bg-blue-800  text-center rounded-tl-3xl rounded-br-3xl mx-10">
                {poster.title}
              </h1>
              <div className="grid grid-cols-3 gap-x-5">
                {poster.offers.map((data, key) => {
                  return (
                    <div
                      key={key}
                      className="bg-red-800 font-bold text-white p-5 mt-10 rounded-2xl"
                    >
                      <h1 className="text-2xl md:text-4xl lg:text-4xl">{data.offer}% OFF</h1>
                      <p>{data.title}</p>
                    </div>
                  );
                })}
              </div>
              <div className="text-center">
                <Link to="/offers">
                  <button className="btn btn-outline rounded-bl-2xl rounded-tr-2xl rounded-none w-2/4 lg:text-lg mt-5">
                    SEE ALL OFFERS
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="card rounded-none py-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 shadow-red-800">
          <div className="card-body text-center">
            <h1 className="text-4xl font-bold text-red-800">
              READY TO GET STARTED?
            </h1>
            <p className="text-xl">Schedule a FREE IN-HOME ESTIMATE</p>
            <div className="form-control mt-6">
              <Link to="/offer-schedule">
                <button className="btn btn-outline rounded-none">
                  See Available Appointments
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferAndAppointment;
