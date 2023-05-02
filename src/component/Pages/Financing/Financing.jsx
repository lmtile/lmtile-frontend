import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BannerBg from "../../../assets/img/laminate-category/LaminateFlooringGuides.webp";
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
          className="hero mt-10"
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
                  <Link to="/schedule"><button>SCHEDULE A FREE ESTIMATE</button></Link>
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
        <div className="p-10 bg-base-300">
          <p className="my-5">
            The LM-Tile credit card is issued by Wells Fargo Bank, N.A., an
            Equal Housing Lender. Special terms apply to qualifying purchases
            charged with approved credit at participating merchants. Minimum
            monthly payments are required during the promotional (special terms)
            period. Interest will be charged to your account from the purchase
            date at the APR for Purchases if the purchase balance is not paid in
            full within the promotional period. Paying only the minimum monthly
            payment will not pay off the purchase balance before the end of the
            promotional period. For new accounts, the APR for Purchases is
            28.99%. If you are charged interest in any billing cycle, the
            minimum interest charge will be $1.00. This information is accurate
            as of 01/01/23 and is subject to change. For current information,
            call us at 1-800-431-5921. Offer expires 04/09/23.
          </p>
          <p className="mb-5">
            The LM-Tile credit card is issued by Wells Fargo Bank, N.A., an
            Equal Housing Lender. Special terms apply to qualifying purchases
            charged with approved credit. The special terms APR of 11.99% will
            apply to the qualifying purchase, and 48 monthly payments equal to
            2.6540% of the original special terms balance are required. The
            advertised terms are an estimate assuming required monthly payments
            are made on the payment due date; no other balances are currently
            carried or will be carried on the account; and no additional charges
            are or will be added to the account. Because your actual account
            activity may be different than the assumptions used, or because of
            rounding, the number of payments or the final payment amount could
            be different than the advertised terms. The special terms APR will
            continue to apply until all qualifying purchases are paid in full.
            The APR for Purchases will apply to certain fees such as a late
            payment fee or if you use the card for other transactions. For new
            accounts, the APR for Purchases is 28.99%. If you are charged
            interest in any billing cycle, the minimum interest charge will be
            $1.00. This information is accurate as of 01/01/23 and is subject to
            change. For current information, call us at 1-800-431-5921. Offer
            expires 04/09/23.
          </p>
          <p>
            Monthly payment is based on purchase price alone excluding taxes.
            Credit purchases subject to credit approval. Other transactions may
            affect the monthly payment.
          </p>
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
