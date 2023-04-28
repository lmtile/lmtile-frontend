import React, { useEffect } from "react";
import Navbar from "../component/Shared/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/Shared/Footer/Footer";
import WhatsApp from "../WhatsApp/WhatsApp";


const Main = () => {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <WhatsApp></WhatsApp>
      <Navbar />
      <div className="lg:mt-32 mt-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
