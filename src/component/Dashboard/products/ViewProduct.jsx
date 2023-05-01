import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../config/axios";
import {
  BUCKET_DOMAIN,
  getColorDetails,
  getSubCategoryDetails,
} from "../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";

const ViewProduct = () => {
  const [loading, setLoading] = useState(false);
  const [product_id, setProductId] = useState("");
  const [productDetails, setProductDetails] = useState({});
  const id = useParams()?.id;

  if (id && product_id !== id) {
    setProductId(id);
  }

  useEffect(() => {
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
          let { productDetails } = res.data;
          productDetails.color_details = getColorDetails(productDetails.color);
          productDetails.sub_cat_details = getSubCategoryDetails(
            productDetails.category.sub_cat,
            productDetails.type
          );
          setProductDetails(productDetails);

          console.log("productDetails", productDetails);
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
      <div>
        <div className="m-10 ">
          <h4 className="text-2xl font-bold text-red-800 mb-3">
            {productDetails.name}
          </h4>
          <h4 className="text-2xl font-bold text-red-800 mb-3">
            {productDetails.category?.category}
          </h4>
          <h4 className="text-2xl font-bold text-red-800 mb-3">
            {productDetails.type &&
              productDetails.sub_cat_details &&
              productDetails.sub_cat_details.label}
          </h4>
          <h4 className="text-2xl font-bold text-red-800 mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "35px",
                  height: "35px",
                  marginRight: "10px",
                  backgroundColor: productDetails?.color_details?.color,
                }}
              />
              {productDetails?.color_details?.label}
            </div>
          </h4>
        </div>
        <div className="grid grid-cols-5 gap-3 gap-x-3 mx-10">
          {productDetails.images?.map((image, key) => (
            <img
              key={key}
              src={`${BUCKET_DOMAIN}${image}`}
              alt="Product Image"
              className="shadow-2xl w-80 mb-3 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </LoadingOverlay>
  );

};

export default ViewProduct;
