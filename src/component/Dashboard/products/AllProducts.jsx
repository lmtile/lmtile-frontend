import React, { Component } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import ProductsCard from "./ProductsCard";
import { ProductColor } from "../../../helper/Helper";

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
    axios
      .get("/api/product/get-all-products")
      .then((res) => {
        if (res.data.success) {
          // toast.success(res.data.message);

          let { products } = res.data;
          this.setState({ products });
        } else {
          // toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
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
          {products.map((product, key) => (
            <ProductsCard key={key} products={product} />
          ))}
        </div>
      </div>
    );
  }
}
