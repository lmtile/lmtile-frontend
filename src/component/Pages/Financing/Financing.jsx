import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BannerBg from "../../../assets/img/home page/WhatsApp.jpg";
import OffersModal from "../Offers/OffersModal";
import axios from "../../../config/axios";
import message from "../../../config/message";
import LoadingOverlay from "react-loading-overlay";
import './Financing.css'


const Financing = () => {
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getAllPackage();
  }, []);

  const getAllPackage = () => {
    setLoading(true);

    axios
      .get("/api/package/get-all-packages")
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          setPackages(res.data.packages);
        } else {
          setPackages([]);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <div>
        <OffersModal />
        <div
          className="hero "
          style={{ backgroundImage: `url(${BannerBg})` }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content lg:p-40">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">FINANCING</h1>
              <p className="mb-5 text-3xl">
                Buy Now, pay over time. Choose from two great financing options.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 bg-base-300 p-10">
          {packages.map((pack, key) => {
            return (
              <div className="p-5 bg-base-100 mx-auto" key={key}>
                <div className="">
                  <div className="text-center p-10 bg-base-300">
                    <h1 className="text-5xl text-red-800 font-bold pb-5">
                      {pack.title}
                    </h1>
                    <p className="text-lg font-bold pb-5">{pack.sub_title}</p>
                    <p className="pb-3">{pack.description}</p>
                  </div>
                  <div
                    // TODO:ADD custom Style
                    dangerouslySetInnerHTML={{
                      __html: pack.details,
                    }}
                    id="todo"
                  ></div>
                  <div className="text-center my-5">
                    <Link to="https://www.mysynchrony.com/mmc/MI155115400"><button className="btn btn-outline hover:bg-red-800 rounded-none w-full">APPLY NOW</button></Link>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
        
        <div className="my-20 text-center">
          <h1 className="text-4xl font-bold">READY TO GET STARTED?</h1>
          <p className="text-xl">Schedule a FREE IN-HOME ESTIMATE</p>
          <Link to={"/schedule"}>
            <button className="btn btn-primary text-bold rounded-none mt-5">
              SCHEDULE NOW
            </button>
          </Link>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default Financing;
