import React, { Component } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import LoadingOverlay from "react-loading-overlay";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import _ from "lodash";
import { DATE_TIME_HELPER, getFileExtension } from "../../../helper/Helper";

export default class AddOfferProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      allCatergory: [],

      formData: {
        title: "",
        banner: "",
        product_category: "",
        cupon_code: "",
        offer_amount: "",
        offer_type: "",
        expire_date: "",
      },
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
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  handleChange = (e) => {
    let { name, value } = e.target;

    let { formData } = this.state;

    formData[name] = value;

    this.setState({ formData });
  };

  handleImages = (e) => {
    e.persist();

    let { formData } = this.state;

    let file = e.target.files[0];
    let validExtension = ["png", "jpg", "jpeg"];
    if (file !== undefined) {
      let extension = getFileExtension(file);
      if (
        extension !== undefined &&
        _.findIndex(validExtension, (exe) => {
          return exe === extension;
        }) !== -1
      ) {
        formData.banner = file;
      } else {
        message.error("The file format is not supported");
      }
    }

    this.setState({ formData });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let { formData } = this.state;

    let data = new FormData();
    data.append("title", formData.title);
    data.append("banner", formData.banner);
    data.append("product_category", formData.product_category);
    data.append("cupon_code", formData.cupon_code);
    data.append("offer_amount", formData.offer_amount);
    data.append("offer_type", formData.offer_type);
    data.append("expire_date", formData.expire_date);

    this.setState({ isLoading: true });

    axios
      .post("/api/offer/add-offer-product", data)
      .then((res) => {
        this.setState({ isLoading: false });
        if (res.data.success) {
          message.success(res.data.message);
          this.setState({
            formData: {
              title: "",
              banner: "",
              product_category: "",
              cupon_code: "",
              offer_amount: "",
              offer_type: "",
              expire_date: "",
            },
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
    let { formData, error, allCatergory } = this.state;
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div className=" w-[800px] p-7 mx-auto">
          <h2 className="text-4xl">Add Offer Product </h2>

          <form
            onSubmit={this.handleSubmit}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <p className="font-bold ml-2">Offer Title *</p>
            <input
              name="title"
              type="text"
              required
              placeholder="Offer title"
              className="input w-[700px] input-bordered "
              value={formData.title}
              onChange={this.handleChange}
            />
            <p className="text-red-800">{error.title}</p>

            <div className="flex">
              <div>
                <p className="font-bold ml-2">Product Name</p>
                <select
                  name="product_category"
                  required
                  placeholder="Product name"
                  className="input w-80 input-bordered"
                  value={formData.product_category}
                  onChange={this.handleChange}
                >
                  <option value="">Select Product *</option>

                  {allCatergory.map((category, key) => {
                    return (
                      <option key={key} value={category.value}>
                        {category.label}
                      </option>
                    );
                  })}
                </select>
                <p className="text-red-800">{error.product_category}</p>
              </div>
              <div className="ml-5">
                <p className="font-bold ml-2">Offer Amount *</p>
                <input
                  name="offer_amount"
                  type="text"
                  required
                  placeholder="offer amount/percent"
                  className="input w-80 input-bordered"
                  value={formData.offer_amount}
                  onChange={this.handleChange}
                />
                <p className="text-red-800">{error.offer_amount}</p>
              </div>
            </div>

            <div className="flex">
              <div>
                <p className="font-bold ml-2">Coupon Code *</p>
                <input
                  name="cupon_code"
                  type="text"
                  required
                  placeholder="Coupon Code"
                  className="input w-80 input-bordered"
                  value={formData.cupon_code}
                  onChange={this.handleChange}
                />
                <p className="text-red-800">{error.cupon_code}</p>
              </div>
              <div className="ml-5">
                <p className="font-bold ml-2">Expires *</p>

                <ReactDatePicker
                  placeholderText="Select Expire date"
                  className="input w-80 input-bordered"
                  selected={
                    formData.expire_date !== "" &&
                    new Date(formData.expire_date)
                  }
                  required
                  minDate={new Date()}
                  onChange={(date) => {
                    formData.expire_date = moment(date).format(
                      DATE_TIME_HELPER.DATE_FORMAT
                    );
                    this.setState({
                      formData,
                    });
                  }}
                />

                <p className="text-red-800">{error.expire_date}</p>
              </div>
            </div>

            <div>
              <label className="block font-medium text-sm text-gray-700">
                Upload Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {formData.banner && (
                    <div>
                      <img
                        className="w-full h-64 object-cover rounded-md"
                        src={URL.createObjectURL(formData.banner)}
                        alt="Lmtile"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-center">
                    <label
                      htmlFor="image-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="image_upload"
                        name="image_upload"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        className="sr-only"
                        onChange={this.handleImages}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <button className="btn btn-primary w-full" type="submit">
              ADD OFFER PRODUCT
            </button>
          </form>
        </div>
      </LoadingOverlay>
    );
  }
}
