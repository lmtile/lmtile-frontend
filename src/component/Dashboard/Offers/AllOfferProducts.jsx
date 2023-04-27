import React, { Component } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import {
  BUCKET_DOMAIN,
  DATE_TIME_HELPER,
  getColorDetails,
} from "../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import config from "../../../config/config";
import _ from "lodash";
import moment from "moment";

export default class AllOfferProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      products: [],
    };
  }

  componentDidMount = async () => {
    this.getAllOfferProduct();
  };

  getAllOfferProduct = () => {
    this.setState({ isLoading: true });

    axios
      .get("/api/offer/get-all-offer-product")
      .then((res) => {
        this.setState({ isLoading: false });
        if (res.data.success) {
          let { offer_product } = res.data;

          this.setState({ products: offer_product });
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

  getSubCategoryDetails = (subcat, id) => {
    return _.find(subcat, ({ value }) => {
      return value === id;
    });
  };

  deleteProduct = (id) => {
    if (window.confirm("Are you sure, you want to delete this product")) {
      this.setState({ isLoading: true });
      axios
        .delete(`/api/offer/offer-product/${id}`, config)
        .then((res) => {
          if (res.data.success) {
            message.success(res.data.message);
            this.getAllOfferProduct();
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

  onChangeRowsPerPage = (per_page) => {
    this.setState({ per_page, page: 1 }, () => {
      this.getAllProduct();
    });
  };

  render() {
    let { products } = this.state;

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
        name: "Offer Title",
        selector: (row) => row.title,
        sortable: true,
        width: "200px",
      },
      {
        name: "Coupon code",
        selector: (row) => row.cupon_code,
        width: "150px",
      },

      {
        name: "Category",
        selector: (row) => row.product_category.category,
        width: "100px",
      },
      {
        name: "Offer amount",
        selector: (row) => row.offer_amount,
        width: "150px",
      },
      {
        name: "Expire date",
        selector: (row) =>
          moment(row.expire_date).format(DATE_TIME_HELPER.DATE_FORMAT),
        width: "100px",
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
          <DataTable
            columns={COLUMNS}
            data={products}
            // pagination
            striped
            responsive
            subHeaderAlign="right"
            subHeaderWrap
            theme="solarized"
            // paginationDefaultPage={page}
            // paginationServer
            // paginationPerPage={per_page}
            // paginationTotalRows={total}
            // paginationRowsPerPageOptions={[10, 20, 40, 100]}
            // onChangePage={this.onChangePage}
            // onChangeRowsPerPage={this.onChangeRowsPerPage}
          />
        </div>
      </LoadingOverlay>
    );
  }
}
