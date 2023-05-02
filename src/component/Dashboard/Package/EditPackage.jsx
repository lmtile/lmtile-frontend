import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "../../../config/axios";
import message from "../../../config/message";
import config from "../../../config/config";
import LoadingOverlay from "react-loading-overlay";
import { useParams } from "react-router-dom";

export default function EditPackage() {
  const [inputData, setInputData] = useState({});

  const [loading, setLoading] = useState(false);
  const [package_id, setPackageId] = useState("");

  const id = useParams()?.id;

  useEffect(() => {
    setPackageId(id);
    getPackageDetails();
  }, [package_id]);

  const getPackageDetails = () => {
    setLoading(true);
    if (!package_id) return;
    axios
      .get(`/api/package/package/${package_id}`)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          let data = res.data.packageDetails;
          // setInterval(() => {
          setInputData(data);
          // }, 100);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputData.details) {
      message.error("Enter Package Details");
      return;
    }

    setLoading(true);

    axios
      .post(`/api/package/edit-package/${package_id}`, inputData, config)
      .then((res) => {
        setLoading(false);

        if (res.data.success) {
          message.success(res.data.message);
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

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      <div className=" w-[800px] p-7 mx-auto">
        <h2 className="text-4xl">Edit Package </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-10">
          <p className="font-bold ml-2">Package Title *</p>
          <input
            name="title"
            type="text"
            placeholder="Package Title"
            className="input w-full input-bordered "
            value={inputData.title}
            onChange={handleChange}
            required
          />

          <p className="font-bold ml-2">Package Sub Title *</p>
          <input
            name="sub_title"
            type="text"
            placeholder="Package Sub Title"
            className="input w-full input-bordered"
            value={inputData.sub_title}
            onChange={handleChange}
            required
          />

          <p className="font-bold ml-2">Description</p>
          <textarea
            name="description"
            type="text"
            placeholder="Description"
            className="input w-full input-bordered"
            value={inputData.description}
            onChange={handleChange}
          />

          <div>
            <p className="font-bold ml-2 mb-2">Enter Package Details *</p>

            <CKEditor
              editor={ClassicEditor}
              data={inputData.details}
              onChange={(event, editor) => {
                const data = editor.getData();

                setInputData({
                  ...inputData,
                  details: data,
                });
              }}
              name="details"
            />
          </div>

          <br />
          <input
            className="btn btn-primary w-full"
            type="submit"
            value="UPDATE PACKAGE"
          />
        </form>
      </div>
    </LoadingOverlay>
  );
}
