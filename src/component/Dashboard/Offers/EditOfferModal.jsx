import React, { useState } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import config from "../../../config/config";
import LoadingOverlay from "react-loading-overlay";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditOfferModal = () => {
  const [inputData, setInputData] = useState({});
  const [loading, setLoading] = useState(false);

  const [package_id, setPackageId] = useState("");

  const id = useParams()?.id;

  useEffect(() => {
    setPackageId(id);
    getOfferModalDetails();
  }, [package_id]);

  const getOfferModalDetails = () => {
    setLoading(true);
    if (!package_id) return;
    axios
      .get(`/api/offer/get-offer-modal/${package_id}`)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let data = res.data.offer_modal;
          setInterval(() => {
            setInputData(data);
          }, 100);
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);

        message.error("Something went wrong!!!");
      });
  };

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
      .post(`/api/offer/offer-modal/${package_id}`, inputData, config)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          message.success(res.data.message);
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
            <h1 className="text-4xl text-center my-10">Edit offer modal</h1>
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
              UPDATE OFFER MODAL
            </button>
          </form>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default EditOfferModal;
