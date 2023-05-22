import React, { useState } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import LoadingOverlay from "react-loading-overlay";
import config from "../../../config/config";
import { FaPlus, FaWindowClose } from "react-icons/fa";

const AddPosterOffer = () => {
  const [inputData, setInputData] = useState({
    title: "",
    offers: [],
  });

  const [offerLabel, setOfferLabel] = useState({
    title: "",
    offer: "",
  });

  const [isAnotherOffer, setIsAnotherOffer] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (offerLabel.offer && offerLabel.title) {
      let { offers } = inputData;
      offers.push(offerLabel);
      setInputData({
        ...inputData,
        offers,
      });
      setOfferLabel({
        title: "",
        offer: "",
      });
    }

    setLoading(true);

    axios
      .post("/api/offer/add-offer-poster", inputData, config)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          message.success(res.data.message);

          setInputData({
            title: "",
            offers: [],
          });
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <div className=" w-[1000px] p-7 mx-auto">
        <h2 className="text-4xl">Add Poster </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-10">
          <p className="font-bold ml-2">Poster Title</p>
          <input
            name="title"
            type="text"
            placeholder="Poster Title"
            className="input w-[660px] input-bordered "
            value={inputData.title}
            onChange={handleChange}
            // required
          />

          <div className="grid grid-cols-3 gap-x-5">
            {inputData.offers.map((data, key) => {
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

          {/* FOR FIRST TIME */}

          {inputData.offers.length === 0 && (
            <>
              <div className="flex">
                <div>
                  <p className="font-bold ml-2">Offer Percentag (%)</p>
                  <input
                    name="offer"
                    type="text"
                    placeholder="Offer Percentag (%)"
                    className="input w-64 input-bordered"
                    value={offerLabel.offer}
                    onChange={(e) => {
                      setOfferLabel({
                        ...offerLabel,
                        offer: e.target.value,
                      });
                    }}
                    // required
                  />
                </div>
                <div className="ml-5">
                  <p className="font-bold ml-2">Offer Title</p>
                  <input
                    name="title"
                    type="text"
                    placeholder="Offer Title"
                    className="input w-64 input-bordered"
                    value={offerLabel.title}
                    onChange={(e) => {
                      setOfferLabel({
                        ...offerLabel,
                        title: e.target.value,
                      });
                    }}
                    // required
                  />
                </div>
                <button
                  className="btn btn-outline mt-6 ml-5"
                  type="button"
                  onClick={() => {
                    if (offerLabel.offer && offerLabel.title) {
                      let { offers } = inputData;
                      offers.push(offerLabel);
                      setInputData({
                        ...inputData,
                        offers,
                      });
                      setOfferLabel({
                        title: "",
                        offer: "",
                      });
                      setIsAnotherOffer(true);
                    }
                  }}
                >
                  <FaPlus />
                  Add Another offer
                </button>
              </div>
            </>
          )}

          {isAnotherOffer && (
            <>
              <div className="flex">
                <div>
                  <p className="font-bold ml-2">Offer Percentag (%)</p>
                  <input
                    name="offer"
                    type="text"
                    placeholder="Offer Percentag (%)"
                    className="input w-64 input-bordered"
                    value={offerLabel.offer}
                    onChange={(e) => {
                      setOfferLabel({
                        ...offerLabel,
                        offer: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="ml-5">
                  <p className="font-bold ml-2">Offer Title</p>
                  <input
                    name="title"
                    type="text"
                    placeholder="Offer Title"
                    className="input w-64 input-bordered"
                    value={offerLabel.title}
                    onChange={(e) => {
                      setOfferLabel({
                        ...offerLabel,
                        title: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="mt-6">
                  <button
                    className="btn btn-outline mx-5"
                    type="button"
                    onClick={() => {
                      if (offerLabel.offer && offerLabel.title) {
                        let { offers } = inputData;
                        offers.push(offerLabel);
                        setInputData({
                          ...inputData,
                          offers,
                        });
                        setOfferLabel({
                          title: "",
                          offer: "",
                        });
                        setIsAnotherOffer(true);
                      }
                    }}
                  >
                    <FaPlus />
                    Add Another offer
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-outline mt-6"
                    type="button"
                    onClick={() => {
                      setOfferLabel({
                        title: "",
                        offer: "",
                      });
                      setIsAnotherOffer(false);
                    }}
                  >
                    <FaWindowClose />
                    Cancel
                  </button>
                </div>
              </div>
            </>
          )}

          <br />
          <input
            className="btn btn-primary w-[660px]"
            type="submit"
            value="ADD POSTER"
          />
        </form>
      </div>
    </LoadingOverlay>
  );
};

export default AddPosterOffer;
