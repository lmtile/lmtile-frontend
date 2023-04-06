import React, { Component } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import LoadingOverlay from "react-loading-overlay";
import OffersModal from "../Offers/OffersModal";
import { BUCKET_DOMAIN, ProductColor } from "../../../helper/Helper";
import { Link } from "react-router-dom";

export default class UserAllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      allCatergory: [],
      sub_cat: [],
      products: [],

      select_category: "",
      select_sub_category: "",
    };
  }

  componentDidMount = () => {
    this.getAllProduct();
    this.getAllcategory();
  };

  getAllProduct = () => {
    this.setState({ isLoading: true });

    axios
      .get("/api/product/get-all-products")
      .then((res) => {
        this.setState({ isLoading: false });
        if (res.data.success) {
          let { products } = res.data;
          this.setState({ products });
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ isLoading: false });
        message.error("Something went wrong!!!");
      });
  };

  getAllcategory = () => {
    this.setState({ isLoading: true });

    axios
      .get("/api/category/get-all-category")
      .then((res) => {
        this.setState({ isLoading: false });
        if (res.data.success) {
          let { category } = res.data;
          let allCatergory = category.map((cat) => {
            return {
              label: cat.category,
              value: cat._id,
              sub_cat: cat.sub_cat,
            };
          });
          this.setState({ allCatergory });
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };
  render() {
    let { products, allCatergory, sub_cat } = this.state;
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <OffersModal />

        <div className="lg:flex  bg-base-100">
          <div className="px-10 gap-x-5 mt-20">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-black shadow-2xl my-5"
            />

            <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
              <input type="checkbox" />

              <div className="collapse-title font-bold">Categories</div>
              <div className="collapse-content">
                {allCatergory.map((cat, key) => (
                  <div key={key}>
                    <button
                      onClick={() => {
                        this.setState({
                          select_category: cat.value,
                          sub_cat: cat.sub_cat,
                        });
                      }}
                      className="font-bold text-sm"
                    >
                      {cat.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {sub_cat.length > 0 && (
              <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
                <input type="checkbox" />
                <div className="collapse-title font-bold">Type</div>
                <div className="collapse-content">
                  {sub_cat.map((cat, key) => (
                    <div key={key}>
                      <button
                        onClick={() => {
                          this.setState({ select_sub_category: cat.value });
                        }}
                        className=" font-bold text-sm top-0"
                      >
                        {cat.label}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
              <input type="checkbox" />
              <div className="collapse-title font-bold">Color</div>
              <div className="collapse-content">
                {ProductColor.map((cat, key) => (
                  <div key={key}>
                    <button className=" font-bold text-sm">{cat.label}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 mb-10 mt-20">
            {products.map((product, key) => {
              return (
                <Link to={`/product-details/${product._id}`}>
                  <div className="hover:shadow-xl shadow-2xl shadow-black  p-5 bg-base-100">
                    <div>
                      <img
                        src={`${BUCKET_DOMAIN}${product.images[0]} `}
                        alt={product.name}
                      />
                      <p className="text-xl font-bold">{product.name}</p>
                      <p>{product.color}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </LoadingOverlay>
    );
  }
}
