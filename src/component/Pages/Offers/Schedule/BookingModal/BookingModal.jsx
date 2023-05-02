import React, { Component } from "react";
import axios from "../../../../../config/axios";
import message from "../../../../../config/message";
import validation from "../../../../../helper/validator";
import moment from "moment";


export default class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,

      allCatergory: [],

      formData: {
        type: "",
        date: this.props.selectedDate,
        office_name: "",
        name: "",
        time: "",
        product_name: "",
        cupon_code: this.props.coupon_code || "",
        email: "",
        phone: "",
        city: "",
        address: "",
      },

      error: {},
      coupon_details: {},
    };
  }

  componentDidMount = () => {
    if (this.props.coupon_code) {
      this.getCouponDetails(this.props.coupon_code);
    }
  };

  getCouponDetails = (code) => {
    axios
      .get(`/api/offer/coupon-details/${code}`)
      .then((res) => {
        let { formData } = this.state;
        if (res.data.success) {
          let { coupon_product } = res.data;

          formData.product_name = coupon_product.product_category;
          this.setState({ coupon_details: coupon_product, formData });
        } else {
          message.error(res.data.message);
          formData.product_name = "";
          this.setState({ coupon_details: {}, formData });
        }
      })
      .catch((err) => {
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  handleChange = (e) => {
    let { name, value } = e.target;

    let { formData, error } = this.state;

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

  isValidForm = (errors) => {
    let isValid = true;
    for (const [, value] of Object.entries(errors)) {
      if (value.length > 0) {
        isValid = false;
      }
    }
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { formData, error } = this.state;

    if (this.isValidForm(error)) {
      formData.date = this.props.selectedDate;

      this.props.setLoading(true);

      axios
        .post("/api/appointment/book-appointment", formData)
        .then((res) => {
          this.props.setLoading(false);
          if (res.data.success) {
            message.success(res.data.message);
            this.setState({
              formData: {
                type: "",
                date: this.props.selectedDate,
                office_name: "",
                name: "",
                time: "",
                product_name: "",
                cupon_code: this.props.coupon_code || "",
                email: "",
                phone: "",
                city: "",
                address: "",
              },
            });
          } else {
            message.error(res.data.message);
          }
        })
        .catch((err) => {
          this.props.setLoading(false);
          console.error(err);
          message.error("Something went wrong!!");
        });
    }
  };

  render() {
    let { formData, error } = this.state;
    return (
      <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {/* <h3 className="text-lg font-bold"></h3> */}
            <form
              onSubmit={this.handleSubmit}
              className="grid grid-cols-1 gap-3 mt-10"
            >
              <p className="font-bold ml-2">Property type</p>
              <select
                name="type"
                className="select w-full input-bordered"
                value={formData.type}
                onChange={this.handleChange}
                validaterule={["required"]}
                required
              >
                <option value="">Select an option</option>
                <option value="home">Home</option>
                <option value="office">Office</option>
              </select>
              <p className="text-red-800">{error.type}</p>

              {formData.type === "office" && (
                <>
                  <p className="font-bold ml-2">Office Name</p>
                  <input
                    name="office_name"
                    placeholder="Office Name"
                    type="text"
                    className="input w-full input-bordered"
                    required
                    onChange={this.handleChange}
                    validaterule={["required"]}
                  />
                  <p className="text-red-800">{error.office_name}</p>
                </>
              )}

              <p className="font-bold ml-2">Date</p>
              <p name="date" className="input pt-2" disabled>
                {this.props.selectedDate}
              </p>

              <p className="font-bold ml-2">Time</p>
              <select
                name="time"
                className="select select-bordered w-full"
                value={formData.time}
                required
                onChange={this.handleChange}
                validaterule={["required"]}
              >
                <option value="">Select an option</option>
                {this.props.slots.map((slot, i) => {
                  return (
                    <option value={slot.to} key={i}>
                      {moment(slot.to, "hh:mm").format("hh:mm a")} -{" "}
                      {moment(slot.from, "hh:mm").format("hh:mm a")}
                    </option>
                  );
                })}
              </select>
              <p className="text-red-800">{error.time}</p>

              <p className="font-bold ml-2">Coupon Code</p>
              <input
                name="cupon_code"
                type="text"
                placeholder="coupon code"
                className="input w-full input-bordered"
                value={formData.cupon_code}
                required
                onChange={this.handleChange}
                validaterule={["required", "isCupon_code"]}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    this.getCouponDetails(formData.cupon_code);
                  }
                }}
              />
              <p className="text-red-800">{error.cupon_code}</p>

              <p className="font-bold ml-2">Product</p>
              <input
                name="product_name"
                className="input w-full input-bordered"
                value={formData.product_name}
                required
                // validaterule={["required"]}
                // onChange={this.handleChange}
              />

              <p className="font-bold ml-2">Name</p>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input w-full input-bordered"
                value={formData.name}
                required
                onChange={this.handleChange}
                validaterule={["required", "isName"]}
              />
              <p className="text-red-800">{error.name}</p>

              <p className="font-bold ml-2">Email</p>
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="input w-full input-bordered"
                value={formData.email}
                onChange={this.handleChange}
                validaterule={["required", "isEmail"]}
              />
              <p className="text-red-800">{error.email}</p>

              <p className="font-bold ml-2">Phone</p>
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input w-full input-bordered"
                value={formData.phone}
                onChange={this.handleChange}
                required
                validaterule={["required"]}
              />
              <p className="text-red-800">{error.phone}</p>

              <p className="font-bold ml-2"> Text Messaging</p>
              <p>Can we text/call you about appointment updates or offers?</p>
              <div>
                <p>Yes</p>
                <input type="radio" name="radio-1" className="radio" checked />
                <p>no</p>
                <input type="radio" name="radio-1" className="radio" />
              </div>

              <p className="font-bold ml-2">City</p>
              <input
                name="city"
                type="text"
                placeholder="City"
                className="input w-full input-bordered"
                value={formData.city}
                onChange={this.handleChange}
                required
                validaterule={["required"]}
              />
              <p className="text-red-800">{error.city}</p>

              <p className="font-bold ml-2">Street Address</p>
              <input
                name="address"
                type="text"
                placeholder="Street Address"
                className="input w-full input-bordered"
                value={formData.address}
                onChange={this.handleChange}
                required
                validaterule={["required"]}
              />
              <p className="text-red-800">{error.address}</p>

              <br />
              <input
                className="btn btn-primary w-full"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}
