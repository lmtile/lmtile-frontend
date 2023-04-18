import React, { Component } from "react";
import axios from "../../config/axios";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCatergory: [],
    };
  }

  componentDidMount = () => {
    this.getAllcategory();
  };

  getAllcategory = () => {
    axios
      .get("/api/category/get-all-category")
      .then((res) => {
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
        console.error(err);
      });
  };

  render() {
    return (
      <div
        class="fixed inset-x-0 top-0 z-50
            bg-blue-500"
      >
        <div className="bg-base-300 hidden lg:block top-0 scroll-hidden ">
          <ul className="flex lg:gap-5 px-5 text-sm justify-between">
            <a href="https://www.google.com/maps/place/LM+Tile/@29.878491,-95.6747,13z/data=!4m18!1m9!3m8!1s0x8640d7125719bb09:0xc6b6e57cc0a6021f!2sLM+Tile!8m2!3d29.8784909!4d-95.6747003!9m1!1b1!16s%2Fg%2F1thlzv25!3m7!1s0x8640d7125719bb09:0xc6b6e57cc0a6021f!8m2!3d29.8784909!4d-95.6747003!9m1!1b1!16s%2Fg%2F1thlzv25?hl=en">
              <li className="flex">
                4.4 <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
                REVIEWS
              </li>
            </a>
            <li>|</li>
            <Link to="/offers">
              <li>OFFERS</li>
            </Link>
            <Link to="/financing">
              <li>FINANCING </li>
            </Link>
            <Link to="/photoGAllery">
              <li>GET INSPIRED </li>
            </Link>
            <Link to="/lmtileWorks">
              <li>HOW LM-TILE WORKS </li>
            </Link>
            <Link to="/faqs">
              <li>FAQs</li>
            </Link>
            <Link to="/customerService">
              <li>Customer Service</li>
            </Link>
            <Link to="/productCare">
              <li>Product Care</li>
            </Link>
            <li>|</li>
            <li className="flex">
              <FaHeart />
              FAVORITES (0)
            </li>
          </ul>
        </div>

        <div
          class="flex justify-around bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed left-0 right-0 z-10"
        >
          <div className="navbar bg-base-100 font-bold text-lg  ">
            <div className="navbar-start ">
              <div
                className="dropdown focus:opacity-0 "
                data-dropdown-toggle="dropdown"
              >
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>

                <ul
                  tabIndex={2}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                ></ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
