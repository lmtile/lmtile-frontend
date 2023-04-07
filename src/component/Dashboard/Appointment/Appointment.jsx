import React, { useState, useEffect, Component } from "react";
import { format } from "date-fns";
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
    width: "150px",
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

  render() {
    let { appointments, total, per_page, page } = this.state;
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
            onSelectedRowsChange={(e) => {
              console.log(e);
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

function Appointmentert6e() {
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDateFilter, setStartDateFilter] = useState(null);
  const [endDateFilter, setEndDateFilter] = useState(null);

  useEffect(() => {
    fetchData();
  }, [searchQuery, startDateFilter, endDateFilter]);

  async function fetchData() {
    // const apiUrl = `/api/appointment/get-all-appointments?search=${searchQuery}&start_date=${startDateFilter}&end_date=${endDateFilter}`;
    // const response = await axios.get(apiUrl);
    // setTableData(response.data);
  }

  function handleSearchQueryChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleStartDateFilterChange(date) {
    const formattedDate = date ? format(date, "mm-DD-yyyy") : null;
    setStartDateFilter(formattedDate);
  }

  function handleEndDateFilterChange(date) {
    const formattedDate = date ? format(date, "mm-DD-yyyy") : null;
    setEndDateFilter(formattedDate);
  }

  const filteredTableData = tableData.filter((item) => {
    const matchesSearchQuery = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStartDateFilter =
      !startDateFilter || item.date >= startDateFilter;
    const matchesEndDateFilter = !endDateFilter || item.date <= endDateFilter;
    return matchesSearchQuery && matchesStartDateFilter && matchesEndDateFilter;
  });

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between my-10 mx-10">
        <input
          className="mr-4 input input-bordered w-full max-w-xs"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <div className="flex flex-row">
          <input
            className="mr-2 input input-bordered w-full max-w-xs"
            type="date"
            value={startDateFilter}
            onChange={(event) =>
              handleStartDateFilterChange(event.target.value)
            }
          />
          <input
            type="date"
            value={endDateFilter}
            onChange={(event) => handleEndDateFilterChange(event.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Property Type</th>
            <th className="px-4 py-2">Office Name</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">product</th>
            <th className="px-4 py-2">Coupon Code</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Street</th>
          </tr>
        </thead>
        <tbody>
          {filteredTableData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.property_type}</td>
              <td className="border px-4 py-2">{item.office_name}</td>
              <td className="border px-4 py-2">{item.slot}</td>
              <td className="border px-4 py-2">{item.customer}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.phone}</td>
              <td className="border px-4 py-2">{item.product}</td>
              <td className="border px-4 py-2">{item.coupon_code}</td>
              <td className="border px-4 py-2">{item.city}</td>
              <td className="border px-4 py-2">{item.street_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
