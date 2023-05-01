import React, { useState } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import config from "../../../config/config";
import LoadingOverlay from "react-loading-overlay";

const AddOfferModal = () => {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    let { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const submitdata = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post("/api/offer/add-offer-modal", inputData, config)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          message.success(res.data.message);

          setInputData({
            title: "",
            description: "",
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
      <div>
        <div className="w-[700px] mx-auto">
          <form onSubmit={submitdata}>
            <h1 className="text-4xl text-center my-10">Add offer modal</h1>
            <div>
              <p className="text-lg font-bold">Modal title*</p>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="modal title"
                name="title"
                value={inputData.title}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <p className="text-lg font-bold">Description*</p>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Description"
                onChange={onChange}
                name="description"
                required
                value={inputData.description}
              />
            </div>
            <button className="btn btn-primary w-full mt-5" type="submit">
              ADD OFFER MODAL
            </button>
          </form>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default AddOfferModal;
