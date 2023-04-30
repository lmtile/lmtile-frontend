import { message } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../../config/axios";
import config from "../../../config/config";
import LoadingOverlay from "react-loading-overlay";

const OfferPoster = () => {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllOfferPoster();
  }, []);

  const getAllOfferPoster = () => {
    setLoading(true);
    axios
      .get("/api/offer/get-all-offer-poster")
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let { posters } = res.data;

          setPosters(posters);
        } else {
          setPosters([]);
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        message.error("Something went wrong!!!");
      });
  };

  const deletePoster = (id) => {
    if (window.confirm("Are you sure, you want to delete this Poster")) {
      setLoading(true);
      axios
        .delete(`/api/offer/offer-poster/${id}`, config)
        .then((res) => {
          if (res.data.success) {
            message.success(res.data.message);
            getAllOfferPoster();
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
        <div className="text-center  shadow-2xl shadow-red-800 w-[700px] mx-auto mt-20">
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
                      <h1 className="text-4xl">{data.offer}% OFF</h1>
                      <p>{data.title}</p>
                    </div>
                  );
                })}
              </div>
              <div className="text-center m-10">
                <button
                  onClick={() => {
                    deletePoster(poster._id);
                  }}
                  className="btn btn-outline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default OfferPoster;
