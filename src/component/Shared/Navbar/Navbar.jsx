import React, { useState } from "react";
import { FaStar, FaStarHalf, FaHeart, FaClock, FaBars } from "react-icons/fa";
import logo from "../../../assets/img/home page/web-logo.png";
import { Link } from "react-router-dom";
import megaMenu1 from "../../../assets/img/home page/HOMEFresh-megamenu.png";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div
      className="fixed inset-x-0 top-0 z-50
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
          <Link to={"/offers"}>
            <li>OFFERS</li>
          </Link>
          <Link to={"/financing"}>
            <li>FINANCING </li>
          </Link>
          <Link to={"/photoGAllery"}>
            <li>GET INSPIRED </li>
          </Link>
          <Link to={"/lmtileWorks"}>
            <li>HOW LM-TILE WORKS </li>
          </Link>
          <Link to={"/faqs"}>
            {" "}
            <li>FAQs</li>
          </Link>
          <Link to={"/productCare"}>
            <li>Product Care</li>
          </Link>
          <li>|</li>
          <Link to={"/customerService"}>
            <li>Customer Service</li>
          </Link>
        </ul>
      </div>
      <div
        className="flex justify-around bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed left-0 right-0 z-10"
      >
        <div className="navbar bg-base-100 font-bold text-lg  ">
          <div className="navbar-start ">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute left-2 top-6 bottom-4 cursor-pointer md:hidden lg:hidden"
            >
              <FaBars name={open ? "close" : "menu"}></FaBars>
            </div>
            <div
              className={`lg:hidden  md:hidden  pb-12 absolute z-[-1] left-0 w-full  transition-all duration-500 ease-in ${
                open ? "top-full" : "top-[-700px]"
              }`}
            >
              <ul
                tabIndex={2}
                className="menu menu-compact dropdown-content shadow bg-base-100 w-52"
              >
                <li tabIndex={2}>
                  <a className="justify-between">
                    CARPET
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="bg-base-300 p-2">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                        Shop by Brand
                      </p>
                      <ul className="mt-3 text-[15px] ">
                        <li className="pb-2">
                          <Link>Mohawkflooring</Link>
                        </li>
                        <li className="pb-2">
                          <Link>Shawfloors</Link>
                        </li>
                        <li>
                          <Link>Engineeredfloors</Link>
                        </li>
                      </ul>
                      <Link to="/products/carpet">
                        <button className="btn btn-dark mt-5">
                          SEE ALL CARPET
                        </button>
                      </Link>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                        Shop by Type
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li className="pb-2">
                          <Link to="/products/carpet?type=Nylon">Nylon</Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/carpet?type=Polyester">
                            Polyester
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/carpet?type=ANSO%20High%20-%20Performance">
                            ANSO High Performance
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                        Shop by Color
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li className="pb-2">
                          <Link to="/products/carpet?color=beige">
                            Beiges Carpet
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/carpet?color=blue">
                            Blue Carpet
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/carpet?color=brown">
                            Brown Carpet
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/carpet?color=gold">
                            Gold Carpet
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/carpet?color=gray">
                            Grays Carpet
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/carpet?color=orange">
                            Orange Carpet
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/carpet?color=green">
                            Green Carpet
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/carpet?color=violet">
                            Violet Carpet
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/carpet?color=red">
                            Red Carpet
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    LAMINATE
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="bg-base-300 p-2">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                        Shop by Type
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <Link>Wood Laminate</Link>
                        </li>
                      </ul>
                      <Link to="/products/laminate">
                        <button className="btn btn-dark mt-5">
                          SEE ALL LAMINATE
                        </button>
                      </Link>
                    </div>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    HARDWOOD
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="bg-base-300 p-2">
                    <div className="">
                      <Link to="/products/hardwood">
                        <button className="btn btn-dark mt-5">
                          SEE ALL HARDWOOD
                        </button>
                      </Link>
                    </div>
                    <div className="ml-2">
                      <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                        Shop by Color
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=beige">
                            Beige Hardwood
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=black">
                            Black Hardwood
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=blue">
                            Blue Hardwood
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=brown">
                            Brown Hardwood
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=gold">
                            Gold Hardwood
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=green">
                            Green Hardwood
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=grey">
                            Grey Hardwood
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=natural">
                            Natural Hardwood
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=red">
                            Red Hardwood
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/hardwood?color=white">
                            White Hardwood
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <Link to="/products/spc" className="justify-between">
                    SPC
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </Link>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    TILE
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="bg-base-300 p-2">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                        Shop by Collection
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li className="pb-2">
                          <Link to="/products/tile?type=Marble">Marble</Link>
                        </li>
                        <li>
                          <Link to="/products/tile?type=Travertine">
                            Travertine
                          </Link>
                        </li>
                      </ul>
                      <Link to="/products/tile">
                        <button className="btn btn-dark mt-5">
                          SEE ALL TILE
                        </button>
                      </Link>
                    </div>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Cabinet
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="bg-base-300 p-2">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                        Shop by Collection
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li className="pb-2">
                          <Link to="/products/cabinet?type=Traditional">
                            Traditional
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/cabinet?type=European">
                            European
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/cabinet?type=Custom">Custom</Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/cabinet?type=Closets">
                            Closets
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/cabinet?type=C%20Series%20%28NEW%29">
                            C Series (NEW)
                          </Link>
                        </li>
                      </ul>
                      <Link to="/products/cabinet">
                        <button className="btn btn-dark mt-5">
                          SEE ALL CABINET
                        </button>
                      </Link>
                    </div>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Visualizer
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="bg-base-300 p-2"></ul>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Sink
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="bg-base-300 p-2">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                        Shop by Type
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li className="pb-2">
                          <Link to="/products/sink?type=Double%20Bowl%20Kitchen%20Sinks%20-%20Undermount%2C%20Handcrafted">
                            Double Bowl Kitchen Sinks
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/sink?type=Single%20Bowl%20Kitchen%20Sinks%20-%20Undermount%2C%20Handcrafted">
                            Single Bowl Kitchen Sinks
                          </Link>
                        </li>
                        <li className="pb-2">
                          <Link to="/products/sink?type=Quartz%20Composite%20Sinks%20-%20Undermount">
                            Quartz Composite Sinks
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/sink?type=Farmhouse%20Apron%20Kitchen%20Sinks">
                            Farmhouse Apron Kitchen Sinks
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/sink?type=Vanity%20Sinks%20-%20Undermount%2C%20Overmount">
                            Vanity Sinks - Undermount, Overmount
                          </Link>
                        </li>
                      </ul>
                      <Link to="/products/sink">
                        <button className="btn btn-dark mt-5">
                          SEE ALL SINK
                        </button>
                      </Link>
                    </div>
                  </ul>
                </li>
                {/* <li tabIndex={0}>
                  <a className="justify-between">
                    FOR BUSINESS
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="bg-base-300 p-2">
                    <ul className="text-start">
                      <li className="px-40"></li>
                      <li className="font-bold">LM-Tile for Your Business</li>
                      <li>
                        <Link>
                          Commercial (Commercial Carpet and Carpet Tile)
                        </Link>
                      </li>
                      <li>
                        <Link>Commercial Vinyl Tile</Link>
                      </li>
                      <li>
                        <Link>Commercial Vinyl Plank</Link>
                      </li>
                      <li>
                        <Link>Property Management Online Services</Link>
                      </li>
                    </ul>
                  </ul>
                </li> */}
                <li>
                  <div className="bg-base-300">
                    <ul className="text-sm justify-between gap-3">
                      <a href="https://www.google.com/maps/place/LM+Tile/@29.878491,-95.6747,13z/data=!4m18!1m9!3m8!1s0x8640d7125719bb09:0xc6b6e57cc0a6021f!2sLM+Tile!8m2!3d29.8784909!4d-95.6747003!9m1!1b1!16s%2Fg%2F1thlzv25!3m7!1s0x8640d7125719bb09:0xc6b6e57cc0a6021f!8m2!3d29.8784909!4d-95.6747003!9m1!1b1!16s%2Fg%2F1thlzv25?hl=en">
                        <li className="">4.4 REVIEWS</li>
                      </a>
                      <Link to={"/offers"}>
                        <li>OFFERS</li>
                      </Link>
                      <Link to={"/financing"}>
                        <li>FINANCING </li>
                      </Link>
                      <Link to={"/photoGAllery"}>
                        <li>GET INSPIRED </li>
                      </Link>
                      <Link to={"/lmtileWorks"}>
                        <li>HOW LM-TILE WORKS </li>
                      </Link>
                      <Link to={"/faqs"}>
                        <li>FAQs</li>
                      </Link>
                      <Link to={"/customerService"}>
                        <li>Customer Service</li>
                      </Link>
                      <Link to={"/productCare"}>
                        <li>Product Care</li>
                      </Link>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <Link to={"/"}>
              <img
                className="w-[120px] md:w-[200px] lg:w-[200px] ml-10"
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center justify-center font-semibold">
              <li className="relative group px-3 py-8">
                <Link to="/products/carpet">
                  <button className="group-hover:border-b-4  border-black cursor-default">
                    Carpet
                  </button>
                </Link>

                <div className="absolute top-8 -left-20 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[900px] transform ">
                  <div className="relative top-10 p-6  shadow-xl w-full bg-base-300">
                    <div className="relative z-40">
                      <div className="grid grid-cols-4 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            Shop by Brand
                          </p>
                          <ul className="mt-3 text-[15px] ">
                            <li className="pb-2">
                              <Link>Mohawkflooring</Link>
                            </li>
                            <li className="pb-2">
                              <Link>Shawfloors</Link>
                            </li>
                            <li>
                              <Link>Engineeredfloors</Link>
                            </li>
                          </ul>
                          <Link to="/products/carpet">
                            <button className="btn btn-dark mt-40">
                              SEE ALL CARPET
                            </button>
                          </Link>
                        </div>
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            Shop by Type
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li className="pb-2">
                              <Link to="/products/carpet?type=Nylon">
                                Nylon
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/carpet?type=Polyester">
                                Polyester
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/carpet?type=ANSO%20High%20-%20Performance">
                                ANSO High Performance
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            Shop by Color
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li className="pb-2">
                              <Link to="/products/carpet?color=beige">
                                Beiges Carpet
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/carpet?color=blue">
                                Blue Carpet
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/carpet?color=brown">
                                Brown Carpet
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/carpet?color=gold">
                                Gold Carpet
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/carpet?color=gray">
                                Grays Carpet
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/carpet?color=orange">
                                Orange Carpet
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/carpet?color=green">
                                Green Carpet
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/carpet?color=violet">
                                Violet Carpet
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/carpet?color=red">
                                Red Carpet
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <Link to="/carpetCategory">
                          <div className="card w-40 glass mt-5 rounded-none">
                            <figure>
                              <img src={megaMenu1} alt="car!" />
                            </figure>
                            <div className="card-body">
                              <Link to="/carpetCategory">
                                <h6 className="">LM-TILE EXCLUSIVE - CARPET</h6>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-8">
                <Link to="/products/laminate">
                  <button className="group-hover:border-b-4 border-black cursor-default">
                    Laminate
                  </button>
                </Link>
                <div className="absolute top-8 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[600px] transform ">
                  <div className="relative top-10 p-6  shadow-xl w-full bg-base-300">
                    <div className="relative z-40">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            Shop by Type
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li>
                              <Link>Wood Laminate</Link>
                            </li>
                          </ul>
                          <Link to="/products/laminate">
                            <button className="btn btn-dark mt-40">
                              SEE ALL LAMINATE
                            </button>
                          </Link>
                        </div>

                        <Link to="/laminateCategory">
                          <div className="card w-40 glass mt-5 rounded-none">
                            <figure>
                              <img src={megaMenu1} alt="car!" />
                            </figure>
                            <div className="card-body">
                              <Link to="/laminateCategory">
                                <h6 className="">
                                  LM-TILE EXCLUSIVE - LAMINATE
                                </h6>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-8">
                <Link to="/products/hardwood">
                  <button className="group-hover:border-b-4 border-black cursor-default">
                    Hardwood
                  </button>
                </Link>
                <div className="absolute top-8 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[800px] transform ">
                  <div className="relative top-10 p-6  shadow-xl w-full bg-base-300">
                    <div className="relative z-40">
                      <div className="grid grid-cols-3 gap-6">
                        <div className="ml-10">
                          <Link to="/products/hardwood">
                            <button className="btn btn-dark mt-40">
                              SEE ALL HARDWOOD
                            </button>
                          </Link>
                        </div>
                        <div className="ml-10">
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            Shop by Color
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=beige">
                                Beige Hardwood
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=black">
                                Black Hardwood
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=blue">
                                Blue Hardwood
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=brown">
                                Brown Hardwood
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=gold">
                                Gold Hardwood
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=green">
                                Green Hardwood
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=grey">
                                Grey Hardwood
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=natural">
                                Natural Hardwood
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=red">
                                Red Hardwood
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/hardwood?color=white">
                                White Hardwood
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <Link to="/hardwoodCategory">
                          <div className="card w-40 glass mt-5 rounded-none">
                            <figure>
                              <img src={megaMenu1} alt="car!" />
                            </figure>
                            <div className="card-body">
                              <Link to="/hardwoodCategory">
                                <h6 className="">
                                  LM-TILE EXCLUSIVE - HARDWOOD
                                </h6>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-8">
                <Link to="/products/spc">
                  <button className="group-hover:border-b-4 border-black cursor-default hover:cursor-pointer">
                    SPC
                  </button>
                </Link>
              </li>
              <li className="relative group px-3 py-8">
                <Link to="/products/tile">
                  <button className="group-hover:border-b-4 border-black cursor-default">
                    Tile
                  </button>
                </Link>
                <div className="absolute top-8 -right-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform ">
                  <div className="relative top-10 p-6  shadow-xl w-full bg-base-300">
                    <div className="relative z-40">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            Shop by Collection
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li className="pb-2">
                              <Link to="/products/tile?type=Marble">
                                Marble
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/tile?type=Travertine">
                                Travertine
                              </Link>
                            </li>
                          </ul>
                          <Link to="/products/tile">
                            <button className="btn btn-dark mt-40">
                              SEE ALL TILE
                            </button>
                          </Link>
                        </div>
                        <Link to="/tileCategory">
                          <div className="card w-40 glass mt-5 rounded-none">
                            <figure>
                              <img src={megaMenu1} alt="car!" />
                            </figure>
                            <div className="card-body">
                              <Link to="/tileCategory">
                                <h6 className="">LM-TILE EXCLUSIVE - TILE</h6>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-8">
                <Link to="/products/cabinet">
                  <button className="group-hover:border-b-4 border-black cursor-default">
                    Cabinet
                  </button>
                </Link>
                <div className="absolute top-8 -right-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[600px]  ">
                  <div className="relative top-10 p-6  shadow-xl w-full bg-base-300">
                    <div className="relative z-40">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            Shop by Collection
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li className="pb-2">
                              <Link to="/products/cabinet?type=Traditional">
                                Traditional
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/cabinet?type=European">
                                European
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/cabinet?type=Custom">
                                Custom
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/cabinet?type=Closets">
                                Closets
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/cabinet?type=C%20Series%20%28NEW%29">
                                C Series (NEW)
                              </Link>
                            </li>
                          </ul>
                          <Link to="/products/cabinet">
                            <button className="btn btn-dark mt-40">
                              SEE ALL CABINET
                            </button>
                          </Link>
                        </div>
                        <Link to="/cabinetCategory">
                          <div className="card w-40 glass mt-5 rounded-none">
                            <figure>
                              <img src={megaMenu1} alt="car!" />
                            </figure>
                            <div className="card-body">
                              <Link to="/cabinetCategory">
                                <h6 className="">
                                  LM-TILE EXCLUSIVE - CABINET
                                </h6>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-8">
                <button className="group-hover:border-b-4 border-black cursor-default">
                  Visualizer
                </button>
              </li>
              <li className="relative group px-3 py-8">
                <Link to="/products/sink">
                  <button className="group-hover:border-b-4 border-black cursor-default">
                    Sink
                  </button>
                </Link>
                <div className="absolute top-8 -right-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform ">
                  <div className="relative top-10 p-6  shadow-xl w-full bg-base-300">
                    <div className="relative z-40">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            Shop by Type
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li className="pb-2">
                              <Link to="/products/sink?type=Double%20Bowl%20Kitchen%20Sinks%20-%20Undermount%2C%20Handcrafted">
                                Double Bowl Kitchen Sinks
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/sink?type=Single%20Bowl%20Kitchen%20Sinks%20-%20Undermount%2C%20Handcrafted">
                                Single Bowl Kitchen Sinks
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/sink?type=Quartz%20Composite%20Sinks%20-%20Undermount">
                                Quartz Composite Sinks
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/sink?type=Farmhouse%20Apron%20Kitchen%20Sinks">
                                Farmhouse Apron Kitchen Sinks
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/sink?type=Vanity%20Sinks%20-%20Undermount%2C%20Overmount">
                                Vanity Sinks - Undermount, Overmount
                              </Link>
                            </li>
                          </ul>
                          <Link to="/products/sink">
                            <button className="btn btn-dark mt-40">
                              SEE ALL SINK
                            </button>
                          </Link>
                        </div>
                        <Link to="/sinkCategory">
                          <div className="card w-40 glass mt-5 rounded-none">
                            <figure>
                              <img src={megaMenu1} alt="car!" />
                            </figure>
                            <div className="card-body">
                              <Link to="/sinkCategory">
                                <h6 className="">LM-TILE EXCLUSIVE - SINK</h6>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-8">
                <Link to="/products/countertops">
                  <button className="group-hover:border-b-4 border-black cursor-default">
                    Countertops
                  </button>
                </Link>
                <div className="absolute top-8 -right-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform ">
                  <div className="relative top-10 p-6  shadow-xl w-full bg-base-300">
                    <div className="relative z-40">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            Shop by Type
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li className="pb-2">
                              <Link to="/products/countertops?type=GRANITE">
                                GRANITE
                                
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/countertops?type=MARBLE">
                                MARBLE
                                
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link to="/products/countertops?type=QUARTZITE">
                                QUARTZITE
                               
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/countertops?type=TRAVERTINE">
                                TRAVERTINE
                               
                              </Link>
                            </li>
                            <li>
                              <Link to="/products/countertops?type=SOAPSTONE">
                                SOAPSTONE
                              </Link>
                            </li>
                          </ul>
                          <Link to="/products/countertops">
                            <button className="btn btn-dark mt-40">
                              SEE ALL COUNTERTOPS
                            </button>
                          </Link>
                        </div>
                        <Link to="/sinkCategory">
                          <div className="card w-40 glass mt-5 rounded-none">
                            <figure>
                              <img src={megaMenu1} alt="car!" />
                            </figure>
                            <div className="card-body">
                              <Link to="/sinkCategory">
                                <h6 className="">LM-TILE EXCLUSIVE - COUNTERTOPS</h6>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li className="relative group px-3 py-8">
                <Link to={"/forBusiness"}>
                  <button className="group-hover:border-b-4 border-black cursor-default">
                    Business
                  </button>
                </Link>
                <div className="absolute top-8 -right-32 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[700px] transform ">
                  <div className="relative top-10 p-6  shadow-xl w-full bg-base-300">
                    <div className="relative z-40">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-bold text-[13px]">
                            LM-Tile for Your Business
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li className="pb-2">
                              <Link>
                                Commercial (Commercial Carpet and Carpet Tile)
                              </Link>
                            </li>
                            <li className="pb-2">
                              <Link>Commercial Vinyl Tile</Link>
                            </li>
                            <li className="pb-2">
                              <Link>Commercial Vinyl Plank</Link>
                            </li>
                            <li>
                              <Link>Property Management Online Services</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </nav>
          <div className="navbar-end">
            <Link
              to={"/schedule"}
            ><button className="btn font-bold rounded-none btn-warning hidden md:block lg:block">SCHEDULE NOW</button>
            </Link>
            <Link
              to={"/schedule"}
              className="btn font-bold rounded-none btn-warning md:hidden lg:hidden"
            >
              <FaClock className="lg:text2xl lg:mr-5 mr-1" /> SCHEDULE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
