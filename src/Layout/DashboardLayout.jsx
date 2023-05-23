import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import Logout from "../component/Login/Logout";
import logo from "../assets/img/home page/logo.jpg";

const DashboardLayout = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button lg:hidden "
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 gap-5 w-80 bg-base-200 text-base-content font-bold">
            <Link to="/">
              <img
                className="w-[120px] md:w-[200px] lg:w-[200px]"
                src={logo}
                alt=""
              />
            </Link>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
            <li>
              <Link to="/dashboard/appointments">APPOINTMENTS</Link>
            </li>
            <div className="collapse collapse-plus ">
              <input type="checkbox" />
              <div className="collapse-title ">PRODUCT SECTION</div>
              <div className="collapse-content">
                <li className="text-red-800">
                  <Link to="/dashboard/all-products">All PRODUCT</Link>
                </li>
                <li className="text-red-800">
                  <Link to="/dashboard/add-product">ADD PRODUCT</Link>
                </li>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="checkbox" />
              <div className="collapse-title ">OFFER PRODUCT SECTION</div>
              <div className="collapse-content">
                <li className="text-red-800">
                  <Link to="/dashboard/add-offer-product">
                    ADD OFFER PRODUCT
                  </Link>
                </li>
                <li className="text-red-800">
                  <Link to="/dashboard/all-offer-product">
                    ALL OFFER PRODUCT
                  </Link>
                </li>
                
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="checkbox" />
              <div className="collapse-title ">OFFER MODAL SECTION</div>
              <div className="collapse-content">
                <li className="text-red-800">
                  <Link to="/dashboard/add-offer-modal">
                    ADD OFFER MODAL
                  </Link>
                </li>
                <li className="text-red-800">
                  <Link to="/dashboard/view-offer-modal">
                    VIEW OFFER MODAL
                  </Link>
                </li>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="checkbox" />
              <div className="collapse-title ">OFFER POSTER SECTION</div>
              <div className="collapse-content">
                <li className="text-red-800">
                  <Link to="/dashboard/add-offer-poster">ADD POSTER</Link>
                </li>
                <li className="text-red-800">
                  <Link to="/dashboard/offer-poster">VIEW POSTER</Link>
                </li>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="checkbox" />
              <div className="collapse-title ">PACKAGE SECTION</div>
              <div className="collapse-content">
                <li className="text-red-800">
                  <Link to="/dashboard/add-package">ADD PACKAGE</Link>
                </li>
                <li className="text-red-800">
                  <Link to="/dashboard/all-package">ALL PACKAGE</Link>
                </li>
              </div>
            </div>
            <Logout />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
