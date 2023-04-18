import React, { useEffect } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import LoadingOverlay from "react-loading-overlay";
import OffersModal from "../Offers/OffersModal";
import { BUCKET_DOMAIN } from "../../../helper/Helper";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";

export default function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [product_id, setProductId] = useState("");
  const [preview, setPreview] = useState(null);
  const [productDetails, setProductDetails] = useState({});

  const id = useParams()?.id;

  useEffect(() => {
    setProductId(id);
    getProductDetails();
  }, [product_id]);

  const getProductDetails = () => {
    setLoading(true);
    if (!product_id) return;
    axios
      .get(`/api/product/product/${product_id}`)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let data = res.data.productDetails;
          setProductDetails(data);
          setPreview(data.images[0]);
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

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <OffersModal />
      <div className="lg:flex md:flex ">
        <div className="w-96 md:w-[400px] lg:w-[600px] lg:ml-60 md:ml-10 mt-10 flex p-5">
          <div className="gap-y-10 mt-5 mr-5">
            {productDetails.images?.map((image, key) => (
              <img
                key={key}
                src={`${BUCKET_DOMAIN}${image}`}
                alt="Product Image"
                onClick={() => {
                  setPreview(image);
                }}
                className="shadow-2xl w-10 mb-3"
              />
            ))}
          </div>
          <div className="mt-5">
            <img
              src={`${BUCKET_DOMAIN}${preview}`}
              alt="Main Product Image"
              className="shadow-2xl w-80 md:w-[300px] lg:w-[400px] justify-center"
            />
          </div>
        </div>
        <div className="lg:w-[350px] md:w-[250px]  lg:ml-20 mt-10 p-5">
          <h2 className="text-3xl font-bold mb-3">{productDetails.name}</h2>
          <h3 className="text-2xl mb-3">{productDetails.color}</h3>
          <Link>
            <button className="btn btn-outline hover:btn-dark text-lg font-bold rounded-none my-5">
              <FaCamera className="text-xl mr-2" />
              View in my Room
            </button>
          </Link>
        </div>
      </div>
    </LoadingOverlay>
  );
}
