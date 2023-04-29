import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../../config/config";
import axios from "../../../config/axios";
import message from "../../../config/message";
import LoadingOverlay from "react-loading-overlay";

export default class DashboardHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      dashboard_data: {},
    };
  }

  componentDidMount = () => {
    this.getdashboardContent();
  };

  getdashboardContent = () => {
    this.setState({ isLoading: true });

    axios
      .get(`/api/admin/dashboard-content`, config)
      .then((res) => {
        this.setState({ isLoading: false });

        if (res.data.success) {
          let { data } = res.data;
          this.setState({ dashboard_data: data });
        } else {
          if (res.data.invalid_token) {
            localStorage.clear();
          }
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
    let { dashboard_data } = this.state;
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-10">
          <Link to="/dashboard/all-products">
            <div className="font-bold bg-green-700 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
              <h1 className="text-[60px] mb-5">
                {dashboard_data.total_product || 0}
              </h1>
              <h3 className="text-2xl">Products</h3>
            </div>
          </Link>
          <Link to="/dashboard/appointments">
            <div className="font-bold bg-red-700 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
              <h1 className="text-[60px] mb-5">
                {dashboard_data.total_appointment || 0}
              </h1>
              <h3 className="text-2xl">Appointments</h3>
            </div>
          </Link>
          <Link to="/dashboard/all-offer-product">
            <div className="font-bold bg-blue-800 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
              <h1 className="text-[60px] mb-5">
                {dashboard_data.total_offer_product || 0}
              </h1>
              <h3 className="text-2xl">Offer Products</h3>
            </div>
          </Link>
          <Link to="/dashboard/offer-poster">
            <div className="font-bold bg-pink-700 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
              <h1 className="text-[60px] mb-5">
                {dashboard_data.total_offer_poster || 0}
              </h1>
              <h3 className="text-2xl">Offer Poster</h3>
            </div>
          </Link>
          <Link to="/dashboard/all-package">
            <div className="font-bold bg-violet-500 text-white py-20 px-10 text-center rounded-2xl shadow-2xl shadow-black hover:shadow-xl">
              <h1 className="text-[60px] mb-5">
                {dashboard_data.total_packages || 0}
              </h1>
              <h3 className="text-2xl">Packages</h3>
            </div>
          </Link>
        </div>
      </LoadingOverlay>
    );
  }
}
