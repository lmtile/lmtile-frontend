import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { upload_img_icon } from "../../../assets/img";
import axios from "../../../config/axios";
import message from "../../../config/message";
import { getFileExtension, ProductColor } from "../../../helper/Helper";
import validation from "../../../helper/validator";
import _ from "lodash";
import LoadingOverlay from "react-loading-overlay";
import ReactSelectWithColorBox from "../../../helper/ColorSelect";
import config from "../../../config/config";

const IMAGE_LENGTH = 30;

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      allCatergory: [],
      allSubCatergory: [],

      formData: {
        name: "",
        color: "",
        category: "",
        selected_category: "",
        type: "",
        images: [],
      },
      color: "",

      error: {},
    };
  }

  componentDidMount = () => {
    this.getAllcategory();
  };

  getAllcategory = () => {
    this.setState({ isLoading: true });

    axios
      .get("/api/category/get-all-category")
      .then((res) => {
        this.setState({ isLoading: false });
        if (res.data.success) {
          let { category } = res.data;
          let allCatergory = category.map((cat) => {
            return {
              label: cat.category,
              value: cat._id,
              sub_cat: cat.sub_cat,
            };
          });
          this.setState({ allCatergory });
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  handleOnChange = (e) => {
    let { name, value } = e.target;

    let { formData, error, allCatergory, allSubCatergory } = this.state;

    if (name === "selected_category") {
      let category = allCatergory[value];

      allSubCatergory = category.sub_cat;

      formData.category = category.value;
      formData.type = "";

      this.setState({ formData, allSubCatergory });
    }

    formData[name] = value;

    this.setState({ formData });

    const valid_obj = {
      value,
      rules: e.target.getAttribute("validaterule"),
      message: e.target.getAttribute("validatemsg"),
    };

    validation(valid_obj).then((err) => {
      error[name] = err;
      this.setState({ error });
    });
  };

  handleImages = (e) => {
    e.persist();

    let { formData } = this.state;

    let len = Math.min(
      IMAGE_LENGTH - formData.images.length,
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
          formData.images.push(file);
        } else {
          message.error("The file format is not supported");
        }
      }
    }

    this.setState({ formData });
  };

  deleteImage = (pos) => {
    let { formData } = this.state;
    formData.images.splice(pos, 1);
    this.setState({ formData });
  };

  addNewProduct = (e) => {
    e.preventDefault();
    let { formData } = this.state;

    let data = new FormData();
    data.append("name", formData.name);
    data.append("color", formData.color);
    data.append("category", formData.category);
    data.append("type", formData.type);

    formData.images.forEach((file) => {
      data.append(`images`, file);
    });

    this.setState({ isLoading: true });

    axios
      .post("/api/product/add-product", data, config)
      .then((res) => {
        this.setState({ isLoading: false });

        if (res.data.success) {
          message.success(res.data.message);
          this.setState({
            formData: {
              name: "",
              color: "",
              category: "",
              selected_category: "",
              type: "",
              images: [],
            },
            color: "",
          });
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  render() {
    let { formData, error, allCatergory, allSubCatergory } = this.state;
    if (!localStorage.getItem("token")) {
      return <Navigate to="/login" replace={true} />;
    }
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div className=" p-7 mx-auto">
          <h2 className="text-4xl">Add Product </h2>

          <form
            onSubmit={this.addNewProduct}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <p className="font-bold ml-2">Product Name *</p>
            <input
              name="name"
              type="text"
              required
              placeholder="Product name"
              className="input w-full input-bordered"
              onChange={this.handleOnChange}
              value={formData.name}
              validaterule={["required", "isName"]}
              validatemsg={["Enter Product name"]}
            />
            <p className="text-red-600">{error.name}</p>

            <p className="font-bold ml-2">Color </p>

            <ReactSelectWithColorBox
              option={ProductColor}
              handleOnChange={(e) => {
                formData.color = e.value;
                this.setState({ formData, color: e });
              }}
              value={this.state.color}
            />

            <p className="font-bold ml-2">Category *</p>
            <select
              name="selected_category"
              className="select select-bordered w-full"
              required
              placeholder="Select Category"
              onChange={this.handleOnChange}
              value={formData.selected_category}
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

            {allSubCatergory.length > 0 && (
              <>
                <p className="font-bold ml-2">Type *</p>
                <select
                  name="type"
                  className="select select-bordered w-full"
                  required
                  placeholder="Select Type"
                  onChange={this.handleOnChange}
                  value={formData.type}
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

            <p className="font-bold ml-2">Add Product images *</p>
            <p className="mt-1">
              First image is your product cover image that will be highlighted
              everywhere
            </p>
            <div className="flex flex-wrap">
              {formData.images &&
                formData.images.map((preview, index) => {
                  return (
                    <div
                      className="w-40 bg-gray-100 rounded overflow-hidden mr-2 relative mb-5"
                      key={index}
                    >
                      <img src={URL.createObjectURL(preview)} alt="HMC" />
                      <button
                        type="button"
                        className="absolute top-0 right-0 ml-5  text-white bg-red-500 rounded-full p-2 hover:bg-red-600 focus:outline-none focus:bg-red-600"
                        onClick={() => this.deleteImage(index)}
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
              {formData.images.length < IMAGE_LENGTH && (
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
                      onChange={this.handleImages}
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
              Add Product
            </button>
          </form>
        </div>
      </LoadingOverlay>
    );
  }
}
