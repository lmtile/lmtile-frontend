import React, { Component } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import { BUCKET_DOMAIN, ProductColor } from "../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";

export default class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      allCatergory: [],
      allSubCatergory: [],

      products: [],

      select_category: "",
      select_sub_category: "",
      sub_cat: [],
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

  deleteProduct = (id) => {
    if (window.confirm("Are you sure, you want to delete this product")) {
      this.setState({ isLoading: true });
      axios
        .delete(`/api/product/product/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.success) {
            message.success(res.data.message);
            this.getAllProduct();
          } else {
            message.error(res.data.message);

            this.setState({ isLoading: false });
          }
        })
        .catch((err) => {
          console.error(err);
          this.setState({ isLoading: false });
          message.error("Something went wrong!!!");
        });
    }
  };

  render() {
    let { products, allCatergory, sub_cat } = this.state;
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div className="lg:flex  bg-base-100">
          <div className="px-10 gap-x-5 mt-20">
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
                      className="font-bold text-sm top-0"
                    >
                      {cat.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
              <input type="checkbox" />
              <div className="collapse-title font-bold">Color</div>
              <div className="collapse-content">
                {ProductColor.map((cat, key) => (
                  <div key={key}>
                    <button className="font-bold text-sm">{cat.label}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" px-20 mb-10 mt-20 w-full">
            {products.map((product, key) => {
              return (
                <div
                  key={key}
                  className="hover:shadow-xl shadow-2xl shadow-black bg-base-100"
                >
                  <div className="flex justify-between mb-5 p-2">
                    <img
                      src={`${BUCKET_DOMAIN}${product.images[0]} `}
                      alt=""
                      className="w-[50px]"
                    />
                    <p className="text-xl- font-bold">{product.name}</p>
                    <p className="text-xl- font-bold">{product.color}</p>
                    <div>
                      <button
                        onClick={() => this.deleteProduct(product._id)}
                        className="btn btn-outline mr-5"
                      >
                        Delete
                      </button>
                      <Link>
                        <button className="btn btn-outline ">Edit</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </LoadingOverlay>
    );
  }
}
