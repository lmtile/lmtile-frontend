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
import {
  SideBySideMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";

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
        <div className=" lg:ml-60 md:ml-10 mt-10 flex p-5">
          <div className="gap-y-10 mt-5 mr-5">
            {productDetails.images?.map((image, key) => (
              <img
                key={key}
                src={`${BUCKET_DOMAIN}${image}`}
                onClick={() => {
                  setPreview(image);
                }}
                className="shadow-2xl w-10 mb-3 cursor-pointer"
                alt="Product im"
              />
            ))}
          </div>
          <div className="mt-5 overflow-hidden">
            {preview && (
              <img class="scale-100 hover:scale-150 ease-in duration-500"
                src={`${BUCKET_DOMAIN}${preview}`}  alt=""/>
              // <ReactImageMagnify
              //   {...{
              //     smallImage: {
              //       alt: "",
              //       isFluidWidth: true,
              //       src: `${BUCKET_DOMAIN}${preview}`,
              //       width: 400,
              //     },
              //     largeImage: {
              //       src: `${BUCKET_DOMAIN}${preview}`,
              //       width: 600,
              //       height: 600,
              //     },

              //     isHintEnabled: true,
              //     cursorOffset: { x: 50, y: 40 },

              //   }}
              // />
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
          <div>
            <Link to={'/schedule'}><div className="text-xl text-red-800 font-semibold">REQUEST A QUOTE</div></Link>
            Schedule an in home consultation and get a custom, all inclusive price estimateOpens in a pop up for your next project.
          </div>

          <a href="https://www.roomvo.com/my/mellifluousraindrop34e39fnetlifyapp/rooms?visitor_id=888b218b66774ac0bfacec16bbed1a36&tracking_code=&locale=en-us&prefilter=%7B%22brands%22%3A%5B%5D%7D&is_dealer=1&iframe_id=ffPopup&originator=&use_host_navigation=1&vendor_code=&product_type=1&domain=mellifluous-raindrop-34e39f.netlify.app&is_in_top_window=0&use_history_padding=0">
            <button className="btn btn-outline hover:btn-dark text-lg font-bold rounded-none my-5 flex">
              <FaCamera className="text-xl mr-2" />
              <span>View in my Room</span>
            </button>
          </a>
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
                <div className="hover:shadow-2xl p-5 bg-base-300 w-80  mb-10 mx-auto">
                  <div>
                    <img
                      src={`${BUCKET_DOMAIN}${product.images[0]}`}
                      alt={product.name}
                      className="h-72 mx-auto"
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
