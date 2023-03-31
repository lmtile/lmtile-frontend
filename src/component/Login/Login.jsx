import React, { Component } from "react";
import LoadingOverlay from "react-loading-overlay";
import { Navigate } from "react-router-dom";
import axios from "../../config/axios";
import message from "../../config/message";

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: "",
      password: "",
      error: {},
    };
  }

  handleOnChange = (e) => {
    let { name, value } = e.target;
    let { error } = this.state;
    this.setState({ [name]: value });
    if (name === "email") {
      if (value.match(mailformat)) {
        error[name] = "";
      } else {
        error[name] = "Enter valid mail";
      }
    }

    if (name === "password") {
      if (value.length < 6) {
        error[name] = "Password must be 6 characters";
      } else {
        error[name] = "";
      }
    }

    this.setState({ error });
  };

  login = (e) => {
    e.preventDefault();
    let { email, password } = this.state;

    const formData = {
      email,
      password,
    };
    this.setState({ isLoading: true });

    axios
      .post("/api/admin/login", formData)
      .then((res) => {
        this.setState({ isLoading: false });

        if (res.data.success) {
          message.success(res.data.message);
          localStorage.setItem("token", res.data.token);
          window.location.reload();
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

  render() {
    let { error } = this.state;

    if (localStorage.getItem("token")) {
      return <Navigate to="/dashboard" replace={true} />;
    }
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div className="h-[800px] flex justify-center items-center px-5">
          <div className="w-96 p-7 border border-black">
            <h2 className="text-3xl font-bold text-center">Login</h2>
            <form onSubmit={this.login}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email *</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.handleOnChange}
                />

                <p className="text-red-600">{error.email}</p>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password *</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full max-w-xs"
                  required
                  value={this.state.password}
                  onChange={this.handleOnChange}
                />
                <p className="text-red-600">{error.password}</p>
              </div>
              <button className="btn btn-primary w-full mt-5" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </LoadingOverlay>
    );
  }
}
