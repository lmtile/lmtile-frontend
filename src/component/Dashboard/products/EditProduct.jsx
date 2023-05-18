import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { upload_img_icon } from "../../../assets/img";
import axios from "../../../config/axios";
import message from "../../../config/message";
import {
  BUCKET_DOMAIN,
  getFileExtension,
  ProductColor,
} from "../../../helper/Helper";
import validation from "../../../helper/validator";
import _ from "lodash";
import LoadingOverlay from "react-loading-overlay";
import ReactSelectWithColorBox from "../../../helper/ColorSelect";
import config from "../../../config/config";
import { getColorDetails } from "../../../helper/Helper";

const IMAGE_LENGTH = 30;

export default function EditProduct() {
  const [loading, setLoading] = useState(false);
  const [product_id, setProductId] = useState("");
  const [productDetails, setProductDetails] = useState({});
  const [error, setError] = useState({});
  const [allCatergory, setAllCatergory] = useState([]);
  const [allSubCatergory, setAllSubCatergory] = useState([]);

  // DELETE IMAGES
  const [del_image, setDelImage] = useState([]);

  // NEW IMAGES
  const [new_image, setNewImage] = useState([]);

  // SELECTED VALUE
  const [color, setColor] = useState("");
  const [selected_category, setSelectedCategory] = useState("");

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
        if (res.data.success) {
          let data = res.data.productDetails;
          data.category = data.category._id;

          getAllcategory(data);

          setProductDetails(data);
          setColor(getColorDetails(data.color));
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
  };

  const getAllcategory = (data) => {
    axios
      .get("/api/category/get-all-category")
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          let { category } = res.data;
          let allCatergory = category.map((cat) => {
            return {
              label: cat.category,
              value: cat._id,
              sub_cat: cat.sub_cat,
            };
          });

          let selected_category = _.findIndex(allCatergory, ({ value }) => {
            return value === data.category;
          });

          setAllCatergory(allCatergory);
          setSelectedCategory(selected_category);

          setAllSubCatergory(allCatergory[selected_category]?.sub_cat);
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

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    if (name === "selected_category") {
      let category = allCatergory[value];

      setAllSubCatergory(category.sub_cat);
      setSelectedCategory(value);

      setProductDetails({
        ...productDetails,
        category: category.value,
        type: "",
      });

      return;
    }

    setProductDetails({ ...productDetails, [name]: value });

    const valid_obj = {
      value,
      rules: e.target.getAttribute("validaterule"),
      message: e.target.getAttribute("validatemsg"),
    };

    validation(valid_obj).then((err) => {
      setError({ ...error, [name]: err });
    });
  };

  const deleteOldImage = (pos, image) => {
    let temp = [...del_image];
    temp.push(image);

    setDelImage(temp);

    let { images } = productDetails;
    images.splice(pos, 1);

    setProductDetails({
      ...productDetails,
      images,
    });
  };

  const deleteImage = (pos) => {
    // let { formData } = this.state;
    // formData.images.splice(pos, 1);
    // this.setState({ formData });
  };

  const handleImages = (e) => {
    let temp = [...new_image];

    let len = Math.min(
      IMAGE_LENGTH - (productDetails?.images?.length + new_image.length),
      e.target.files.length
    );

    for (let i = 0; i < len; i++) {
      let file = e.target.files[i];
      let validExtension = ["png", "jpg", "jpeg"];
      if (file !== undefined) {
        let extension = getFileExtension(file);
        if (
          extension !== undefined &&
          _.findIndex(validExtension, (exe) => {
            return exe === extension;
          }) !== -1
        ) {
          temp.push(file);
        } else {
          message.error("The file format is not supported");
        }
      }
    }

    setNewImage(temp);
  };

  const editProduct = (e) => {
    e.preventDefault();
    let { name, color, category, type, images } = productDetails;

    if (images.length === 0 && new_image.length === 0) {
      message.error("Please upload image");
      return;
    }

    let formdata = new FormData();

    formdata.append("name", name);
    formdata.append("color", color);
    formdata.append("category", category);
    formdata.append("type", type);

    formdata.append("del_image", del_image);

    formdata.append("old_image", images);

    new_image.forEach((file) => {
      formdata.append("new_image", file);
    });

    setLoading(true);

    axios
      .post(`/api/product/update-product/${product_id}`, formdata, config)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          message.success(res.data.message);
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
      <div className=" p-7 mx-auto">
        <h2 className="text-4xl">Edit Product </h2>

        <form onSubmit={editProduct} className="grid grid-cols-1 gap-3 mt-10">
          <p className="font-bold ml-2">Product Name *</p>
          <input
            name="name"
            type="text"
            required
            placeholder="Product name"
            className="input w-full input-bordered"
            onChange={handleOnChange}
            value={productDetails.name}
            validaterule={["required", "isName"]}
            validatemsg={["Enter Product name"]}
          />
          <p className="text-red-600">{error.name}</p>

          <p className="font-bold ml-2">Color </p>

          <ReactSelectWithColorBox
            option={ProductColor}
            handleOnChange={(e) => {
              setProductDetails({ ...productDetails, color: e.value });
              setColor(e);
            }}
            value={color}
          />

          <p className="font-bold ml-2">Category *</p>
          <select
            name="selected_category"
            className="select select-bordered w-full"
            required
            placeholder="Select Category"
            onChange={handleOnChange}
            value={selected_category}
          >
            <option value="">Select Category</option>
            {allCatergory.map((category, key) => {
              return (
                <option key={key} value={key}>
                  {category.label}
                </option>
              );
            })}
          </select>

          {allSubCatergory?.length > 0 && (
            <>
              <p className="font-bold ml-2">Type *</p>
              <select
                name="type"
                className="select select-bordered w-full"
                required
                placeholder="Select Type"
                onChange={handleOnChange}
                value={productDetails.type}
              >
                <option value="">Select Type</option>
                {allSubCatergory.map((category, key) => {
                  return (
                    <option key={key} value={category.value}>
                      {category.label}
                    </option>
                  );
                })}
              </select>
            </>
          )}

          <p className="font-bold ml-2">Product images *</p>
          <p className="mt-1">
            First image is your product cover image that will be highlighted
            everywhere
          </p>

          <div className="flex flex-wrap">
            {/* OLD IMAGE */}

            {productDetails?.images?.map((image, key) => {
              return (
                <div
                  className="w-40 bg-gray-100 rounded overflow-hidden mr-2 relative mb-5"
                  key={key}
                >
                  <img src={`${BUCKET_DOMAIN}${image}`} alt="Lmtile" />
                  <button
                    type="button"
                    className="absolute top-0 right-0 ml-5  text-white bg-red-500 rounded-full p-2 hover:bg-red-600 focus:outline-none focus:bg-red-600"
                    onClick={() => {
                      deleteOldImage(key, image);
                    }}
                  >
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              );
            })}

            {/* NEW IMAGES */}

            {new_image.map((preview, index) => {
              return (
                <div
                  className="w-40 bg-gray-100 rounded overflow-hidden mr-2 relative mb-5"
                  key={index}
                >
                  <img src={URL.createObjectURL(preview)} alt="HMC" />
                  <button
                    className="absolute top-0 right-0 ml-5  text-white bg-red-500 rounded-full p-2 hover:bg-red-600 focus:outline-none focus:bg-red-600"
                    onClick={() => deleteImage(index)}
                  >
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              );
            })}
            {productDetails?.images?.length + new_image.length <
              IMAGE_LENGTH && (
              <div className="flex items-center justify-center px-3">
                <label
                  htmlFor="image-upload"
                  className="relative  p-10 cursor-pointer bg-white rounded-md font-medium text-indigo-600 
                    border border-dotted border-indigo-600"
                >
                  <span>
                    <img src={upload_img_icon} alt="Lm tile" />
                  </span>
                  <input
                    id="image-upload"
                    name="image-upload"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    multiple
                    className="sr-only"
                    onChange={handleImages}
                  />
                </label>
              </div>
            )}
          </div>
          <button
            className="btn btn-primary w-full"
            type="submit"
            value="Submit"
          >
            Update product
          </button>
        </form>
      </div>
    </LoadingOverlay>
  );
}
