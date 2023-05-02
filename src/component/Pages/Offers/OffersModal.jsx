import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../config/axios";

const OffersModal = () => {
  const [offer_modal, setOffer_modal] = useState([]);

  useEffect(() => {
    getAllOffermodal();
  }, []);

  const getAllOffermodal = () => {
    axios
      .get("/api/offer/get-offer-modal")
      .then((res) => {
        if (res.data.success) {
          let { offer_modal } = res.data;

          setOffer_modal(offer_modal);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div className="bg-blue-800 py-3 lg:px-40 text-white">
        {offer_modal.map((modal, key) => {
          return (
            <p className="text-center" key={key}>
              <span className="text-3xl font-bold text-white pr-5 ">
                {modal.title}
              </span>
              {modal.description}
            </p>
          );
        })}
        <p className="text-center">
          Select styles.
          <label htmlFor="my-modal-5" className="btn-ghost">
            <u>DETAILS</u>
          </label>
        </p>
      </div>

      {/* modal */}
      <div>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal ">
          {offer_modal.map((modal, key) => {
            return (
          <div className="modal-box w-11/12 max-w-7xl rounded-none">
            <h3 className="font-bold text-3xl px-10 text-center mt-10">
              {modal.description}
            </h3>
            <p className="py-4 text-2xl text-center">
              It's Easy! Here's How it Works:
            </p>
            <div className="grid gap-x-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="text-center p-5">
                <span className="bg-blue-800 font-bold text-center text-white px-3 py-2 rounded-full">
                  1
                </span>
                <h1 className="text-2xl mt-5 mb-3 font-bold">
                  Schedule a FREE In-Home Estimate
                </h1>
                <p>
                  <Link to="/schedule">
                    <u className="text-blue-600">Schedule online</u>
                  </Link>{" "}
                  or call 281861-6970.
                </p>
              </div>
              <div className="text-center p-5">
                <span className="bg-blue-800 font-bold text-center text-white px-3 py-2 rounded-full">
                  2
                </span>
                <h1 className="text-2xl mt-5 mb-3 font-bold">Shop-at-Home</h1>
                <p>
                  See hundreds of samples and get a price estimate on the spot.
                </p>
              </div>
              <div className="text-center p-5">
                <span className="bg-blue-800 font-bold text-center text-white px-3 py-2 rounded-full">
                  3
                </span>
                    <h1 className="text-2xl mt-5 mb-3 font-bold">{modal.title}</h1>
                <p>
                      {modal.description}

                </p>
              </div>
              <div className="text-center p-5">
                <span className="bg-blue-800 font-bold text-center text-white px-3 py-2 rounded-full">
                  3
                </span>
                <h1 className="text-2xl mt-5 mb-3 font-bold">
                  Get Professional Installation
                </h1>
                <p>
                  Professional installers will transform your floors, as soon as
                  Next Day.**
                </p>
              </div>
            </div>
            <div className="mt-10 text-center bg-base-300 p-10">
              <h1 className="text-4xl font-bold">READY TO GET STARTED?</h1>
              <p className="text-xl">Schedule a FREE IN-HOME ESTIMATE</p>
              <Link to="/offer-schedule">
                <button className="btn btn-outline text-bold mt-5 rounded-none">
                  BOOK A FREE APPOINTMENT
                </button>
              </Link>
            </div>
            <div className="modal-action">
              <label
                htmlFor="my-modal-5"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
            </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OffersModal;
