import React, { useEffect } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import LoadingOverlay from "react-loading-overlay";
import OffersModal from "../Offers/OffersModal";
import {
  BUCKET_DOMAIN,
  getColorDetails,
  getSubCategoryDetails,
} from "../../../helper/Helper";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import ReactImageMagnify from "react-image-magnify";

export default function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [product_id, setProductId] = useState("");
  const [preview, setPreview] = useState(null);
  const [productDetails, setProductDetails] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [sameColorProduct, setSameColorProduct] = useState([]);

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
          let { relatedProduct, productDetails, sameColorProduct } = res.data;
          productDetails.color_details = getColorDetails(productDetails.color);
          productDetails.sub_cat_details = getSubCategoryDetails(
            productDetails.category.sub_cat,
            productDetails.type
          );
          setProductDetails(productDetails);
          setPreview(productDetails.images[0]);

          let relatedData = relatedProduct.map((product) => {
            product.color_details = getColorDetails(product.color);
            return product;
          });

          setRelatedProduct(relatedData);
          setSameColorProduct(sameColorProduct);
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
                className="shadow-2xl w-10 mb-3 cursor-pointer"
              />
            ))}
          </div>
          <div className="mt-5 w-[500px]">
            {preview && (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "",
                    isFluidWidth: true,
                    src: `${BUCKET_DOMAIN}${preview}`,
                    width: 400,
                  },
                  largeImage: {
                    src: `${BUCKET_DOMAIN}${preview}`,
                    width: 800,
                    height: 1200,
                  },
                  
                  isHintEnabled: true,
                  // cursorOffset: { x: 50, y: 40 },

                }}
              />
            )}
          </div>
        </div>
        <div className="lg:w-[450px] md:w-[250px]  lg:ml-20 mt-10 p-5">
          <h4 className="text-2xl text-red-800">
            {productDetails.type &&
              productDetails.sub_cat_details &&
              productDetails.sub_cat_details.label}
          </h4>
          <h2 className="text-3xl font-bold mb-3">{productDetails.name}</h2>

          <h3 className="text-2xl mb-3">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "35px",
                  height: "35px",
                  marginRight: "10px",
                  backgroundColor: productDetails?.color_details?.color,
                }}
              ></div>
              {productDetails?.color_details?.label}
            </div>
          </h3>

          <Link>
            <button id="roomvoAssistanta" className="btn btn-outline hover:btn-dark text-lg font-bold rounded-none my-5">
              <FaCamera className="text-xl mr-2" />
              View in my Room
            </button>
          </Link>
          <div className="grid gap-3 gap-x-3 grid-cols-5">
            {sameColorProduct.map((same_color, key) => {
              return (
                <Link to={`/product-details/${same_color._id}`} key={key}>
                  <img
                    src={`${BUCKET_DOMAIN}${same_color.images[0]}`}
                    alt=""
                    className="w-20 shadow-black shadow-2xl hover:shadow-xl"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* RELATED PRODUCT */}

      <div className="">
        <h2 className="text-4xl font-bold text-center my-10">
          Related Products
        </h2>
        <div className="grid gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
          {relatedProduct.map((product, key) => {
            return (
              <Link key={key} to={`/product-details/${product._id}`}>
                <div className="hover:shadow-2xl p-5 bg-base-300 w-64 mb-10">
                  <div>
                    <img
                      src={`${BUCKET_DOMAIN}${product.images[0]}`}
                      alt={product.name}
                    />
                    <p>{product.name}</p>
                    <p>{product?.categoryDetails[0]?.category}</p>
                    <p>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "10px",
                            backgroundColor: product?.color_details?.color,
                          }}
                        ></div>
                        {product?.color_details?.label}
                      </div>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </LoadingOverlay>
  );
}
