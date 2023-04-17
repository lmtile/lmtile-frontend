import React, { Component } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import { BUCKET_DOMAIN, ProductColor } from "../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import config from "../../../config/config";


const COLUMNS = [
  {
    name: "Product image",
    selector: (row) =><img src={`${BUCKET_DOMAIN}${row.images[0]}`} alt="" />,
    sortable: true,
    width: "100px",
  },

  {
    name: "Product name",
    selector: (row) => row.name,
    sortable: true,
    width: "200px",
  },
  {
    name: "Color",
    selector: (row) => row.color,
    sortable: true,
    width: "100px",
  },

  {
    name: "Category",
    // selector: (row) =>row.category,
    sortable: true,
    width: "200px",
  },
  {
    name: "Type",
    // selector: (row) =>row.type,
    sortable: true,
    width: "200px",
  },

  {
    name: "Action",
    cell: (row) => (
      <button onClick={()=>this.deleteProduct(row._id)}><FaTrashAlt className="text-xl"/></button>
    ),
    width: "100px",
  },
  
];

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
      search: "",

      products: [],
      selected_rows: [],

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
    let { per_page, page, search } = this.state;

    axios
      .get(`/api/product/get-all-products?per_page=${per_page}&page=${page}&search=${search}`,
        config)
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
    let { products, allCatergory, sub_cat, total, per_page, page, selected_rows } = this.state;
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
            // value={this.state.search}
            // onChange={(e)=>{
            //   let {value}=e.target

            //   this.setState({})
            // }}
            />

            <button
              type="button"
              className={`px-8 py-3 btn btn-outline bg-red-${selected_rows.length === 0 ? "300" : "600"
                } rounded`}
              disabled={selected_rows.length === 0}
              onClick={() => this.deleteProduct()}
            >
              DELETE
            </button>
          </div>
          <DataTable
            columns={COLUMNS}
            data={products}
            // pagination
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
            // onRowClicked={(e) => {
            //   // console.log(e);
            // }}
            onRowDoubleClicked={(e) => {
              // TODO: SHOW APPOINMENT DETAILS IN DIALOG BOX
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
