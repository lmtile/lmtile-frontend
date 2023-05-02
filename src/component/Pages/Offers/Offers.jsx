import React, { Component } from "react";
import OffersModal from "./OffersModal";
import BannerBg from "../../../assets/img/SPC-category/2beaec03fcb98eb14e31382b6d78471c.jpg";
import ShopHundreds from "../ShopHundreds/ShopHundreds";
import { Link } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import axios from "../../../config/axios";
import message from "../../../config/message";
import { BUCKET_DOMAIN, DATE_TIME_HELPER } from "../../../helper/Helper";
import moment from "moment";

export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      offer_product: [],
      posters: [],
    };
  }

  componentDidMount = () => {
    this.getAllProductOffer();
    this.getAllOfferPoster();
  };

  getAllProductOffer = () => {
    this.setState({ isLoading: true });

    axios
      .get("/api/offer/get-all-offer-product")
      .then((res) => {
        this.setState({ isLoading: false });

        if (res.data.success) {
          let { offer_product } = res.data;
          this.setState({ offer_product });
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  getAllOfferPoster = () => {
    axios
      .get("/api/offer/get-all-offer-poster")
      .then((res) => {
        this.setState({ isLoading: false });

        if (res.data.success) {
          let { posters } = res.data;

          this.setState({ posters });
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  render() {
    let { offer_product, posters } = this.state;
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <OffersModal />

        {/* banner */}
        <div>
          <div className="text-center p-20 bg-base-300">
            <h1 className="text-4xl font-bold mb-5">OFFERS</h1>
            <p className="text-lg">
              Coupons and the Latest Deals on Carpet, Laminate,
              Hardwood, SPC, Tile, Cabinet, Sink & Countertops. These offers won't last long, so
              Schedule a FREE In-Home Estimate now!
            </p>
          </div>
          <div className="hero" style={{ backgroundImage: `url(${BannerBg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content lg:p-32">
              <div className="shadow-red-800 shadow-2xl">
                {posters.map((poster, key) => (
                  <div key={key} className="bg-base-100 p-10">
                    <h1 className="text-white text-3xl font-bold p-5 bg-blue-800  text-center rounded-tl-3xl rounded-br-3xl mx-10">
                      {poster.title}
                    </h1>
                    <div className="grid grid-cols-3 gap-x-5">
                      {poster.offers.map((data, key) => {
                        return (
                          <div
                            key={key}
                            className="bg-red-800 font-bold text-white p-5 mt-10 rounded-2xl"
                          >
                            <h1 className="text-4xl">{data.offer}% OFF</h1>
                            <p>{data.title}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-center">
                      <Link to="/offer-schedule">
                        <button className="btn btn-outline rounded-bl-2xl rounded-tr-2xl rounded-none w-2/4 text-lg mt-5">
                          BOOK APPOINTMENT
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* offer products */}

        <div className="bg-base-300 lg:p-20 p-10">
          <h1 className="text-3xl my-10 text-center">
            <span className="font-bold">
              OTHER COUPONS & DEALS
            </span>
          </h1>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {offer_product.map((product, key) => {
              return (
                <div
                  key={key}
                  className="card bg-base-100 shadow-black hover:shadow-xl shadow-2xl rounded-none"
                >
                  <figure>
                    <img
                      src={`${BUCKET_DOMAIN}${product.banner}`}
                      alt="car!"
                      className="w-full h-96"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-3xl text-warning font-bold">
                      {product.title}
                    </h2>
                    <h2 className="card-title text-2xl font-bold">
                      {product.product_category}
                    </h2>

                    <h2 className="card-title text-2xl font-bold text-red-800">
                      {product.offer_amount} off
                    </h2>
                    <h2 className="card-title text-xl uppercase">
                      Coupon Code: {product.cupon_code}
                    </h2>
                    <h2 className="card-title text-2xl">
                      Expires:
                      {/* {moment(product.expire_date).format(
                        DATE_TIME_HELPER.DATE_FORMAT
                      )} */}
                      {product.expire_date}
                    </h2>
                    <div className="text-center">
                      <Link to={`/offer-schedule/${product.cupon_code}`}>
                        <button className="btn btn-outline hover:bg-red-800 rounded-none text-lg">
                          APPLY
                        </button>
                      </Link>
                   </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <ShopHundreds />
      </LoadingOverlay>
    );
  }
}
