import React, { Component } from "react";
import axios from "../../../config/axios";
import config from "../../../config/config";
import message from "../../../config/message";
import DataTable from "react-data-table-component";
import LoadingOverlay from "react-loading-overlay";
import moment from "moment";
import { DATE_TIME_HELPER } from "../../../helper/Helper";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";

const COLUMNS = [
  {
    name: "Customer",
    selector: (row) => (
      <Link to={`/dashboard/view-appointment/${row._id}`}>{row.name}</Link>
    ),
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

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      total: 0,
      per_page: 10,
      page: 1,
      search: "",
      type: "",
      start_date: "",
      end_date: "",

      appointments: [],

      selected_rows: [],

      filteringData: {
        start_date: "",
        end_date: "",
        search: "",
        type: "",
      },
      isApplyFilter: false,
    };
  }

  componentDidMount = () => {
    this.getAllAppointments();
  };

  getAllAppointments = () => {
    this.setState({ isLoading: true });
    let { per_page, page, search, type, start_date, end_date } = this.state;

    axios
      .get(
        `/api/appointment/get-all-appointments?per_page=${per_page}&page=${page}&search=${search}&type=${type}&start_date=${start_date}&end_date=${end_date}`,
        config
      )
      .then((res) => {
        this.setState({ isLoading: false });

        let { appointments, total } = res.data;
        this.setState({ appointments, total });

        if (!res.data.success) {
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

  applyFilter = () => {
    let { isApplyFilter, filteringData } = this.state;

    if (isApplyFilter) {
      // CLEAR FILTER
      this.setState(
        {
          filteringData: {
            start_date: "",
            end_date: "",
            search: "",
            type: "",
          },
          isApplyFilter: false,
          search: "",
          type: "",
          start_date: "",
          end_date: "",
        },
        () => {
          this.getAllAppointments();
        }
      );
    } else {
      let { start_date, end_date, search, type } = filteringData;

      this.setState(
        {
          start_date,
          end_date,
          search,
          type,
          isApplyFilter: true,
        },
        () => {
          this.getAllAppointments();
        }
      );
    }
  };

  generateExcelFile = async () => {
    let { appointments } = this.state;

    const data = [
      [
        "ID",
        "Name",
        "Phone",
        "Email",
        "Office Name",
        "Product",
        "Coupon",
        "Date",
        "Time",
        "City",
        "Address",
      ],
    ];

    appointments.forEach((appoint) => {
      data.push([
        appoint._id,
        appoint.name,
        appoint.phone,
        appoint.email,
        appoint.office_name,
        appoint.product_name,
        appoint.cupon_code,
        moment(appoint.date).format(DATE_TIME_HELPER.DATE_FORMAT),
        moment(appoint.time, "hh:mm").format("hh:mm a"),
        appoint.city,
        appoint.address,
      ]);
    });

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Add a new worksheet to the workbook
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Appointment");

    // Generate an Excel file buffer
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Save the Excel file using FileSaver.js
    const currentTimestamp = Date.now();
    const excelFileName = `${currentTimestamp}.xlsx`;
    const excelFile = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });
    FileSaver.saveAs(excelFile, excelFileName);
  };

  render() {
    let {
      appointments,
      total,
      per_page,
      page,
      selected_rows,
      filteringData,
      isApplyFilter,
    } = this.state;
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div className="w-full">
          <div className="flex flex-row justify-between my-10 mx-10">
            <input
              className="mr-4 input input-bordered rounded-none w-full max-w-xs mt-5"
              placeholder="Search..."
              value={filteringData.search}
              onChange={(e) => {
                let { value } = e.target;
                filteringData.search = value;
                this.setState({ filteringData, isApplyFilter: false });
              }}
            />

            <div>
              <p>Product Type</p>

              <select
                name="type"
                className="select input-bordered"
                value={filteringData.type}
                onChange={(e) => {
                  let { value } = e.target;
                  filteringData.type = value;
                  this.setState({ filteringData, isApplyFilter: false });
                }}
                required
              >
                <option value="">Select an option</option>
                <option value="home">Home</option>
                <option value="office">Office</option>
              </select>
            </div>

            <div>
              <p>Start date</p>

              <ReactDatePicker
                placeholderText="Select Start date"
                className="input w-28 input-bordered rounded-none"
                selected={
                  filteringData.start_date !== "" &&
                  new Date(filteringData.start_date)
                }
                maxDate={
                  filteringData.end_date !== "" &&
                  new Date(filteringData.end_date)
                }
                onChange={(date) => {
                  filteringData.start_date = moment(date).format(
                    DATE_TIME_HELPER.DATE_FORMAT
                  );
                  this.setState({
                    filteringData,
                    isApplyFilter: false,
                  });
                }}
              />
            </div>

            <div className="ml-3">
              <p>End date</p>

              <ReactDatePicker
                placeholderText="Select End date"
                className="input w-28 input-bordered rounded-none"
                selected={
                  filteringData.end_date !== "" &&
                  new Date(filteringData.end_date)
                }
                minDate={
                  filteringData.start_date !== "" &&
                  new Date(filteringData.start_date)
                }
                onChange={(date) => {
                  filteringData.end_date = moment(date).format(
                    DATE_TIME_HELPER.DATE_FORMAT
                  );
                  this.setState({
                    filteringData,
                    isApplyFilter: false,
                  });
                }}
              />
            </div>

            <button
              className="btn btn-outline rounded-none mt-5 ml-5"
              onClick={this.applyFilter}
            >
              {isApplyFilter ? "Clear" : "Apply"}
            </button>

            <button
              type="button"
              className={`btn btn-outline rounded-none mt-5 mx-5  ${
                selected_rows.length === 0
              } rounded`}
              disabled={selected_rows.length === 0}
              onClick={this.deleteAppointment}
            >
              DELETE
            </button>
            <button
              onClick={this.generateExcelFile}
              className="btn btn-outline rounded-none mt-5"
            >
              Export Excel
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
