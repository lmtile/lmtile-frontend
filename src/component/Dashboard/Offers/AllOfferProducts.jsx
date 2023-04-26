import React, { Component } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import { BUCKET_DOMAIN, DATE_TIME_HELPER, getColorDetails } from "../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { FaPen, FaPenAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import config from "../../../config/config";
import _ from "lodash";
import moment from "moment";

export default class AllOfferProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,

            allCatergory: [],
            allSubCatergory: [],

            total: 0,
            per_page: 10,
            page: 1,
            search: "",

            products: [],
            selected_rows: [],

            select_category: "",
            select_sub_category: "",
            sub_cat: [],

            filterData: {
                search: "",
            },
            isApplyFilter: false,
        };
    }

    componentDidMount = async () => {
        this.getAllcategory();
        this.getAllProduct();
    };

    getAllProduct = () => {
        this.setState({ isLoading: true });

        let { per_page, page, search } = this.state;

        axios
            .get(
                `/api/offer/get-all-offer-product`
            )
            .then((res) => {
                this.setState({ isLoading: false });
                if (res.data.success) {
                    let { total } = res.data;

                    let products = res.data?.products.map((product) => {
                        product.color_details = getColorDetails(product.color);
                        product.sub_cat_details = this.getSubCategoryDetails(
                            product.category.sub_cat,
                            product.type
                        );
                        return product;
                    });

                    this.setState({ products, total });
                } else {
                    message.error(res.data.message);
                    this.setState({ products: [] });
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

    getSubCategoryDetails = (subcat, id) => {
        return _.find(subcat, ({ value }) => {
            return value === id;
        });
    };

    deleteProduct = (id) => {
        if (window.confirm("Are you sure, you want to delete this product")) {
            this.setState({ isLoading: true });
            axios
                .delete(`/api/product/product/${id}`, config)
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

    onChangePage = (page) => {
        this.setState({ page }, () => {
            this.getAllProduct();
        });
    };

    onChangeRowsPerPage = (per_page) => {
        this.setState({ per_page, page: 1 }, () => {
            this.getAllProduct();
        });
    };

    applyFilter = () => {
        let { isApplyFilter, filterData } = this.state;

        if (isApplyFilter) {
            // clear filter

            this.setState(
                {
                    filterData: {
                        search: "",
                    },
                    isApplyFilter: false,
                    page: 1,
                    search: "",
                },
                () => {
                    this.getAllProduct();
                }
            );
        } else {
            let { search } = filterData;

            this.setState(
                {
                    page: 1,
                    search,
                    isApplyFilter: true,
                },
                () => {
                    this.getAllProduct();
                }
            );
        }
    };

    render() {
        let { products, total, per_page, page, filterData, isApplyFilter } =
            this.state;

        const COLUMNS = [
            {
                name: "Product image",
                selector: (row) => (
                    <img
                        className="w-[80px] py-3"
                        src={`${BUCKET_DOMAIN}${row.banner}`}
                        alt={row.name}
                    />
                ),
                width: "200px",
            },

            {
                name: "Product Name",
                selector: (row) => row.title,
                sortable: true,
                width: "200px",
            },
            {
                name: "Coupon code",
                selector: (row) => (row.cupon_code),
                width: "200px",
            },

            {
                name: "Category",
                selector: (row) => row.product_category.category,
                width: "200px",
            },
            {
                name: "Offer amount",
                selector: (row) => ( row.offer_amount),
                width: "200px",
            },
            {
                name: "Expire date",
                selector: (row) =><>(row.{
                    moment(this.state.expire_date).format(
                        DATE_TIME_HELPER.DATE_FORMAT
                    )
                })</>,
                width: "200px",
            },

            {
                name: "Action",
                selector: (row) => (
                    <div className="">
                        <button
                            className="mr-5"
                            onClick={() => {
                                this.deleteProduct(row._id);
                            }}
                        >
                            <FaTrashAlt className="text-xl" />
                        </button>

                        <Link
                            to={`/dashboard/edit-product/${row._id}`}

                        // className="btn btn-outline "
                        >
                            <button>
                                <FaPen className="text-xl" />
                            </button>
                        </Link>
                    </div>
                ),
                width: "150px",
            },
        ];

        return (
            <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
                <div className=" bg-base-100">
                    {/* <div className="px-10 gap-x-5 mt-20">
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
          </div> */}
                    {/* <div className=" px-20 mb-10 mt-20 w-full">
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
          </div> */}
                    <div className="flex flex-row justify-between my-10 mx-10">
                        <input
                            className="mr-4 input input-bordered w-full max-w-xs"
                            placeholder="Search..."
                            value={filterData.search}
                            onChange={(e) => {
                                let { value } = e.target;
                                filterData.search = value;

                                this.setState({
                                    filterData,
                                    isApplyFilter: false,
                                });
                            }}
                        />

                        <button onClick={this.applyFilter}>
                            {isApplyFilter ? "Clear" : "Apply"}
                        </button>
                    </div>
                    <DataTable
                        columns={COLUMNS}
                        data={products}
                        pagination
                        striped
                        responsive
                        subHeaderAlign="right"
                        subHeaderWrap
                        theme="solarized"
                        paginationDefaultPage={page}
                        paginationServer
                        paginationPerPage={per_page}
                        paginationTotalRows={total}
                        paginationRowsPerPageOptions={[10, 20, 40, 100]}
                        onChangePage={this.onChangePage}
                        onChangeRowsPerPage={this.onChangeRowsPerPage}
                    />
                </div>
            </LoadingOverlay>
        );
    }
}
