import React, { Component } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import {
  BUCKET_DOMAIN,
  ProductColor,
  getColorDetails,
  getSubCategoryDetails,
} from "../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { FaEye, FaPen } from "react-icons/fa";
import config from "../../../config/config";
import ReactSelectWithColorBox from "../../../helper/ColorSelect";

export default class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      allCatergory: [],
      allSubCatergory: [],

      total: 0,
      per_page: 10,
      page: 1,

      // FILTER
      search: "",
      admin_catergory: "",
      type: "",
      color: "",

      products: [],
      selected_rows: [],

      filterData: {
        search: "",
        admin_catergory: "",
        type: "",
        color: "",
        catergory: "",
        selected_color: "",
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

    let { per_page, page, search, admin_catergory, type, color } = this.state;

    axios
      .get(
        `/api/product/get-all-products?per_page=${per_page}&page=${page}&search=${search}&admin_catergory=${admin_catergory}&type=${type}&color=${color}`
      )
      .then((res) => {
        this.setState({ isLoading: false });
        if (res.data.success) {
          let { total } = res.data;

          let products = res.data?.products.map((product) => {
            product.color_details = getColorDetails(product.color);
            product.sub_cat_details = getSubCategoryDetails(
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

  deleteProduct = () => {
    if (window.confirm("Are you sure, you want to delete this products")) {
      this.setState({ isLoading: true });
      axios
        .post(
          "/api/product/delete-products",
          { ids: this.state.selected_rows },
          config
        )
        .then((res) => {
          if (res.data.success) {
            this.setState({ selected_rows: [] });
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
            admin_catergory: "",
            type: "",
            color: "",
            catergory: "",
            selected_color: "",
          },
          isApplyFilter: false,
          page: 1,
          search: "",
          admin_catergory: "",
          type: "",
          color: "",
        },
        () => {
          this.getAllProduct();
        }
      );
    } else {
      let { search, admin_catergory, type, color } = filterData;

      this.setState(
        {
          page: 1,
          search,
          admin_catergory,
          type,
          color,
          isApplyFilter: true,
        },
        () => {
          this.getAllProduct();
        }
      );
    }
  };

  handleOnChange = (e) => {
    let { name, value } = e.target;

    let { filterData, allCatergory, allSubCatergory } = this.state;

    if (name === "catergory") {
      let category = allCatergory[value];

      allSubCatergory = category.sub_cat;

      filterData.admin_catergory = category.value;
      filterData.type = "";
      this.setState({ allSubCatergory });
    }

    filterData[name] = value;

    this.setState({
      filterData,
      isApplyFilter: false,
    });
  };

  render() {
    let {
      products,
      total,
      per_page,
      page,
      filterData,
      isApplyFilter,
      allCatergory,
      allSubCatergory,
      selected_rows,
    } = this.state;

    const COLUMNS = [
      {
        name: "Product image",
        selector: (row) => (
          <img
            className="w-[80px] py-3"
            src={`${BUCKET_DOMAIN}${row.images[0]}`}
            alt={row.name}
          />
        ),
        width: "200px",
      },

      {
        name: "Product Name",
        selector: (row) => row.name,
        sortable: true,
        width: "200px",
      },
      {
        name: "Color",
        selector: (row) => (
          <>
            {row.color && row.color_details && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    marginRight: "10px",
                    backgroundColor: row.color_details.color,
                  }}
                ></div>
                {row.color_details.label}
              </div>
            )}
          </>
        ),
        width: "100px",
      },

      {
        name: "Category",
        selector: (row) => row.category.category,
        width: "150px",
      },
      {
        name: "Type",
        selector: (row) => (
          <>{row.type && row.sub_cat_details && row.sub_cat_details.label}</>
        ),
        width: "150px",
      },

      {
        name: "Action",
        selector: (row) => (
          <div className="">
            <Link to={`/dashboard/view-products/${row._id}`}>
              <button>
                <FaEye className="text-xl mr-5" />
              </button>
            </Link>
            {/* <button className="mr-5" onClick={this.deleteProduct}>
              <FaTrashAlt className="text-xl" />
            </button> */}

            <Link to={`/dashboard/edit-product/${row._id}`}>
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
          <div className="flex flex-row justify-between my-10 mx-10">
            <input
              className="mr-4 input input-bordered rounded-none max-w-xs"
              placeholder="Search..."
              value={filterData.search}
              onChange={this.handleOnChange}
              name="search"
            />

            <select
              className="mr-4 input input-bordered rounded-none max-w-xs"
              name="catergory"
              value={filterData.catergory}
              onChange={this.handleOnChange}
            >
              <option value="">Select Category</option>
              {allCatergory.map((category, key) => {
                return (
                  <option key={key} value={key}>
                    {category.label}
                  </option>
                );
              })}
            </select>

            {allSubCatergory.length > 0 && (
              <select
                className="mr-4 input input-bordered rounded-none max-w-xs"
                name="type"
                value={filterData.type}
                onChange={this.handleOnChange}
              >
                <option value="">Select Type</option>
                {allSubCatergory.map((category, key) => {
                  return (
                    <option key={key} value={category.value}>
                      {category.label}
                    </option>
                  );
                })}
              </select>
            )}

            <ReactSelectWithColorBox
              option={ProductColor}
              handleOnChange={(e) => {
                filterData.color = e.value;
                filterData.selected_color = e;
                this.setState({ filterData, isApplyFilter: false });
              }}
              value={filterData.selected_color}
            />

            <button
              onClick={this.applyFilter}
              className="btn btn-outline rounded-none"
            >
              {isApplyFilter ? "Clear" : "Apply"}
            </button>

            <button
              type="button"
              className={`btn btn-outline rounded-none mt-5 mx-5  ${
                selected_rows.length === 0
              } rounded`}
              disabled={selected_rows.length === 0}
              onClick={this.deleteProduct}
            >
              DELETE
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
            selectableRows
            onSelectedRowsChange={({ selectedRows }) => {
              selected_rows = selectedRows.map((row) => {
                return row._id;
              });
              this.setState({ selected_rows });
            }}
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
