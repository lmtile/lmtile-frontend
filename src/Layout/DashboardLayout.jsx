import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Logout from '../component/Login/Logout';

import Footer from '../component/Shared/Footer/Footer';
import Navbar from '../component/Shared/Navbar/Navbar';



const DashboardLayout = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <div>
      <Navbar/>
      <div className="drawer drawer-mobile lg:mt-32 mt-32">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
          <Outlet/>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content font-bold">

            <li><Link to="/dashboard">DASHBOARD</Link></li>
            <li><Link to="/dashboard/appointments">APPOINTMENTS</Link></li>
            <div className="collapse collapse-plus ">
              <input type="checkbox" />
              <div className="collapse-title ">
                PRODUCT SECTION
              </div>
              <div className="collapse-content">
                <li><Link to="/dashboard/all-products">All PRODUCT</Link></li>
                <li><Link to="/dashboard/add-product">ADD PRODUCT</Link></li>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="checkbox" />
              <div className="collapse-title ">
                OFFER SECTION
              </div>
              <div className="collapse-content">
                <li><Link to="/dashboard/add-offer-poster">ADD POSTER</Link></li>
                <li><Link to="/dashboard/add-offer-product">ADD OFFER PRODUCT</Link></li>
              </div>
            </div>
            <div className="collapse collapse-plus ">
              <input type="checkbox" />
              <div className="collapse-title ">
                PACKAGE SECTION
              </div>
              <div className="collapse-content">
                <li><Link to="/dashboard/add-package">ADD PACKAGE</Link></li>
                <li><Link to="/dashboard">ALL PACKAGE</Link></li>
              </div>
            </div>
            <Logout/>
          </ul>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DashboardLayout;