import { message } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../../config/axios";
import LoadingOverlay from "react-loading-overlay";
import config from "../../../config/config";
import { Link } from "react-router-dom";

const AllPackage = () => {
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

  const deletePackage = (id) => {
    if (window.confirm("Are you sure, you want to delete this package")) {
      setLoading(true);
      axios
        .delete(`/api/package/package/${id}`, config)
        .then((res) => {
          if (res.data.success) {
            message.success(res.data.message);
            getAllPackage();
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
    }
  };

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <div>
        <div className="grid  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 bg-base-300 p-10">
          {packages.map((pack, key) => {
            return (
              <div className="p-5 bg-base-100" key={key}>
                <div className="">
                  <div className="text-center p-10 bg-base-300">
                    <h1 className="text-5xl text-blue-800 font-bold pb-5">
                      {pack.title}
                    </h1>
                    <p className="text-lg font-bold pb-5">{pack.sub_title}</p>
                    <p className="pb-3">{pack.description}</p>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pack.details,
                    }}
                    id="todo"
                  />
                  <div className="mt-10">
                    <Link
                      to={`/dashboard/edit-package/${pack._id}`}
                      className="btn btn-outline mr-5 rounded-none"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={deletePackage}
                      className="btn btn-outline rounded-none"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default AllPackage;
