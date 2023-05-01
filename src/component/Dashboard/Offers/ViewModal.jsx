import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../config/axios";
import message from "../../../config/message";
import LoadingOverlay from "react-loading-overlay";
import config from "../../../config/config";

const ViewModal = () => {
  const [loading, setLoading] = useState(false);
  const [offer_modal, setOffer_modal] = useState([]);

  useEffect(() => {
    getAllOffermodal();
  }, []);

  const getAllOffermodal = () => {
    setLoading(true);

    axios
      .get("/api/offer/get-offer-modal")
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { offer_modal } = res.data;

          setOffer_modal(offer_modal);
        } else {
          setOffer_modal([]);
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  const deletePoster = (id) => {
    if (window.confirm("Are you sure, you want to delete this Modal")) {
      setLoading(true);
      axios
        .delete(`/api/offer/offer-modal/${id}`, config)
        .then((res) => {
          if (res.data.success) {
            message.success(res.data.message);
            getAllOffermodal();
          } else {
            setLoading(false);
            message.error(res.data.message);
          }
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);

          message.error("Something went wrong!!!");
        });
    }
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <div>
        {offer_modal.map((modal, key) => {
          return (
            <div key={key} className="mx-auto mt-10 w-96">
              <h1 className="text-3xl font-bold my-5">{modal.title}</h1>
              <p className="mb-10"> {modal.description} </p>
              <div className="mt-10">
                <Link
                  to={`/dashboard/edit-offer-modal/${modal._id}`}
                  className="btn btn-outline mr-5 rounded-none"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    deletePoster(modal._id);
                  }}
                  className="btn btn-outline rounded-none"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </LoadingOverlay>
  );
};

export default ViewModal;
