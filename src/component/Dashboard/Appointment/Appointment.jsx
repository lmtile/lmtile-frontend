import React, { Component } from "react";

import axios from "../../../config/axios";
import config from "../../../config/config";
import message from "../../../config/message";
import DataTable from "react-data-table-component";
import LoadingOverlay from "react-loading-overlay";
import moment from "moment";
import { DATE_TIME_HELPER } from "../../../helper/Helper";

const COLUMNS = [
  {
    name: "Customer",
    selector: (row) => row.name,
    sortable: true,
    width: "150px",
  },

  {
    name: "Date",
    selector: (row) => moment(row.date).format(DATE_TIME_HELPER.DATE_FORMAT),
    sortable: true,
    width: "100px",
  },

  {
    name: "Time",
    selector: (row) => moment(row.time, "hh:mm").format("hh:mm a"),
    sortable: true,
    width: "100px",
  },

  {
    name: "Property",
    selector: (row) => row.type,
    width: "100px",
  },
  {
    name: "Office",
    selector: (row) => row.office_name,
    width: "150px",
  },

  {
    name: "Email",
    selector: (row) => row.email,
    //   sortable: true,
    width: "200px",
  },

  {
    name: "Phone",
    selector: (row) => row.phone,
    //   sortable: true,
    width: "150px",
  },

  {
    name: "Product",
    selector: (row) => row.product_name,
    // sortable: true,
    width: "100px",
  },
  {
    name: "Coupon Code",
    selector: (row) => row.cupon_code,
    // sortable: true,
    width: "150px",
  },
  {
    name: "City",
    selector: (row) => row.city,
    // sortable: true,
    width: "100px",
  },
  {
    name: "Street",
    selector: (row) => row.address,
    // sortable: true,
    width: "100px",
  },
];

{
  /* 
            

  
            <th className="px-4 py-2">Coupon Code</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Street</th> */
}

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      total: 0,
      per_page: 10,
      page: 1,
      search: "",

      appointments: [],

      selected_rows: [],
    };
  }

  componentDidMount = () => {
    this.getAllAppointments();
  };

  getAllAppointments = () => {
    this.setState({ isLoading: true });
    let { per_page, page, search } = this.state;

    axios
      .get(
        `/api/appointment/get-all-appointments?per_page=${per_page}&page=${page}&search=${search}`,
        config
      )
      .then((res) => {
        this.setState({ isLoading: false });

        if (res.data.success) {
          let { appointments, total } = res.data;
          this.setState({ appointments, total });
        } else {
          message.error(res.data.message);
        }
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.error(err);
        message.error("Something went wrong!!!");
      });
  };

  onChangePage = (page) => {
    this.setState({ page }, () => {
      this.getAllAppointments();
    });
  };

  onChangeRowsPerPage = (per_page) => {
    this.setState({ per_page }, () => {
      this.getAllAppointments();
    });
  };

  deleteAppointment = () => {
    if (window.confirm("Are you sure, you want to delete Appointment?")) {
      this.setState({ isLoading: true });

      axios
        .post(
          "/api/appointment/delete-appointments",
          { ids: this.state.selected_rows },
          config
        )
        .then((res) => {
          this.setState({ isLoading: false });
          if (res.data.success) {
            message.success(res.data.message);
            this.getAllAppointments();
          } else {
            message.error(res.data.message);
          }
        })
        .catch((err) => {
          this.setState({ isLoading: false });
          console.error(err);
          message.error("Something went wrong!!!");
        });
    }
  };

  render() {
    let { appointments, total, per_page, page, selected_rows } = this.state;
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div className="w-full">
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
              className={`px-8 py-3 btn btn-outline bg-red-${
                selected_rows.length === 0 ? "300" : "600"
              } rounded`}
              disabled={selected_rows.length === 0}
              onClick={this.deleteAppointment}
            >
              DELETE
            </button>
          </div>

          <DataTable
            columns={COLUMNS}
            data={appointments}
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
