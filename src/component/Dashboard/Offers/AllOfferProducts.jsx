import React, { Component } from "react";
import axios from "../../../config/axios";
import message from "../../../config/message";
import { BUCKET_DOMAIN, DATE_TIME_HELPER } from "../../../helper/Helper";
import LoadingOverlay from "react-loading-overlay";
import DataTable from "react-data-table-component";
import { FaTrashAlt } from "react-icons/fa";
import config from "../../../config/config";
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
          this.setState({ products: [] });
        }
      })
      .catch((err) => {
        console.error(err);
        this.setState({ isLoading: false });
        message.error("Something went wrong!!!");
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
        name: "Coupon",
        selector: (row) => row.cupon_code,
        width: "100px",
      },

      {
        name: "Category",
        selector: (row) => row.product_category,
        width: "200px",
      },
      {
        name: "Offer amount",
        selector: (row) => row.offer_amount,
        width: "150px",
      },
      {
        name: "Expire date",
        selector: (row) =>
          // moment(row.expire_date).format(DATE_TIME_HELPER.DATE_FORMAT),
          row.expire_date,
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

            {/* <Link to={`/dashboard/edit-product/${row._id}`}>
              <button>
                <FaPen className="text-xl" />
              </button>
            </Link> */}
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
