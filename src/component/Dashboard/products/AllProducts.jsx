import React, { Component } from "react";
import axios from "../../../config/axios";
import ProductsCard from "./ProductsCard";

export default class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      allCatergory: [],
      allSubCatergory: [],

      products: [],
    };
  }

  componentDidMount = () => {
    this.getAllProduct();
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
  render() {
    let { products } = this.state;
    return (
      <div className="lg:flex  bg-base-100">
        <div className="px-10 gap-x-5 mt-20">
          <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
            <input type="checkbox" />
            <div className="collapse-title font-bold">Categories</div>
            <div className="collapse-content">
              {/* {category.map((cat) => (
                <div key={cat.id}>
                  <button className=" font-bold text-sm">{cat.category}</button>
                </div>
              ))} */}
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
            <input type="checkbox" />
            <div className="collapse-title font-bold">Type</div>
            <div className="collapse-content">
              {/* {type.map((cat) => (
                <div key={cat.id}>
                  <button className=" font-bold text-sm top-0">
                    {cat.category}
                  </button>
                </div>
              ))} */}
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 shadow-black shadow-2xl mb-5">
            <input type="checkbox" />
            <div className="collapse-title font-bold">Color</div>
            <div className="collapse-content">
              {/* {color.map((cat) => (
                <div key={cat.id}>
                  <button className=" font-bold text-sm">{cat.color}</button>
                </div>
              ))} */}
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
