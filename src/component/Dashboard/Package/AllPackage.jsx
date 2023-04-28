import { message } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../../config/axios';

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

    return (
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
                                    // TODO:ADD custom Style
                                    dangerouslySetInnerHTML={{
                                        __html: pack.details,
                                    }}
                                    id="todo"
                                ></div>
                                <div className='mt-10'>
                                    <button className='btn btn-outline mr-5 rounded-none'>Edit</button>
                                    <button className='btn btn-outline rounded-none'>Delete</button>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/*           
          <div className="p-5 bg-base-100">
            <div className="">
              <div className="text-center p-10 bg-base-300">
                <h1 className="text-5xl text-blue-800 font-bold pb-5">
                  24 MONTHS
                </h1>
                <p className="text-lg font-bold pb-36">
                  48 monthly payments with a special rate of 11.99% APR2
                </p>
              </div>
              <div className="">
                <ul className="ml-10 my-5 list-disc ">
                  <li className="text-xl font-bold">Amount Financed: $2,000</li>
                  <li className="text-xl font-bold">
                    Months to Repay: 48 Months2
                  </li>
                  <li className="text-xl font-bold">
                    Months to Repay: 48 Months2
                  </li>
                  <li className="text-xl font-bold">Total to pay: $2,520</li>
                </ul>
                <div className="text-center">
                  <Link>
                    <button className="btn btn-outline text-lg rounded-none w-full font-bold">
                      SCHEDULE A FREE HOME ESTIMATE
                    </button>
                  </Link>
                  <p className="text-sm text-center mt-3">
                    To learn about pricing and financing options
                  </p>
                </div>
              </div>
            </div>
          </div> */}
            </div>
        </div>
    );
};

export default AllPackage;